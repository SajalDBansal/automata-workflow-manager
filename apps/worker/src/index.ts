import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

import { prisma } from "@zapier/database";
import { Kafka } from 'kafkajs';
import { JsonObject } from "@prisma/client/runtime/library";
import { parse } from "./parser.js";
import { sendEmail } from "./email.js";
import { sendSolanaTransaction } from "./solana.js";

const TOPIC_NAME = 'zap-events';

const kafka = new Kafka({
    clientId: 'outbox-worker',
    brokers: ['localhost:9092']
})

async function main() {
    const consumer = kafka.consumer({ groupId: 'main-worker' });
    await consumer.connect();

    const producer = kafka.producer();
    await producer.connect();

    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topic,
                partition,
                offset: message.offset,
                message: message.value?.toString(),
            });

            if (!message.value) {
                return;
            };

            const parsedMessage = JSON.parse(message.value?.toString());
            const zapRunId = parsedMessage.zapRunId;
            const stage = parsedMessage.stage;

            const zapRunDetails = await prisma.zapRun.findFirst({
                where: {
                    id: zapRunId
                },
                include: {
                    zap: {
                        include: {
                            actions: {
                                include: {
                                    type: {
                                        include: { appCategory: true }
                                    }
                                }
                            }
                        }
                    }
                }
            })
            const currentAction = zapRunDetails?.zap.actions.find(x => x.sortingOrder === stage);

            if (!currentAction) {
                console.log("no action found");
                return;
            }

            const zapRunMetaData = zapRunDetails?.metadata;

            if (currentAction.type.appCategory?.name === "Gmail" && currentAction.type.name === "Send Email") {
                // send mail
                const body = parse((currentAction.metadata as JsonObject)?.body as string, zapRunMetaData);
                const to = parse((currentAction.metadata as JsonObject)?.to as string, zapRunMetaData);
                const subject = parse((currentAction.metadata as JsonObject)?.subject as string, zapRunMetaData);
                console.log("Sending out email to " + to + " with subject " + subject + " and body " + body);
                await sendEmail(to, subject, body);
            }

            if (currentAction.type.appCategory?.name === "Solana" && currentAction.type.name === "New Transaction") {
                // send transaction
                const address = parse((currentAction.metadata as JsonObject)?.to as string, zapRunMetaData);
                const amount = parse((currentAction.metadata as JsonObject)?.amount as string, zapRunMetaData);
                console.log("Sending out transaction to " + address + " with amount " + amount);
                await sendSolanaTransaction(address, amount);
            }

            // await new Promise(r => setTimeout(r, 500));

            const lastStage = (zapRunDetails?.zap?.actions?.length || 1) - 1;
            if (lastStage !== stage) {
                console.log("Pushing the next action to the queue");
                await producer.send({
                    topic: TOPIC_NAME,
                    messages: [{
                        value: JSON.stringify({ zapRunId, stage: stage + 1 })
                    }]
                })
            } else {
                console.log("processing message done");
            }

            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition,
                offset: (parseInt(message.offset) + 1).toString(),
            }])

        }
    })

}

main();