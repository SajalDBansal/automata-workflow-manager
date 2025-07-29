import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

import { prisma } from "@zapier/database";
import { Kafka } from 'kafkajs';

const TOPIC_NAME = 'zap-events';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

async function main() {
    const consumer = kafka.consumer({ groupId: 'main-worker' });
    await consumer.connect();

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

            await new Promise(r => setTimeout(r, 5000));

            console.log("processing message done");


            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition,
                offset: (parseInt(message.offset) + 1).toString(),
            }])

        }
    })

}

main();