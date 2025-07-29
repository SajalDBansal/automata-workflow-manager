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
    const producer = kafka.producer();
    await producer.connect();

    console.log("main function");


    while (true) {
        const pendingRows = await prisma.zapRunOutbox.findMany({
            where: {},
            take: 10,
        })

        producer.send({
            topic: TOPIC_NAME,
            messages: pendingRows.map(row => ({
                key: row.id,
                value: JSON.stringify({ zapRunId: row.zapRunId, stage: 0 }),
            }))
        })

        await prisma.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(row => row.id)
                }
            }
        })

        await new Promise(r => setTimeout(r, 3000));
    }
}

main();