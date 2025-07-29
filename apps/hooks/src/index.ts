import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

import { prisma } from "@zapier/database";

const app = express();

app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const { userId, zapId } = req.params;
    const body = req.body;

    // store the data in a database
    try {
        await prisma.$transaction(async (tx) => {
            const run = await tx.zapRun.create({
                data: {
                    zapId,
                    metadata: body,
                },
            });

            await tx.zapRunOutbox.create({
                data: {
                    zapRunId: run.id,
                },
            });
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong!"
        });
        return;
    }

    res.json({
        message: "Webhook Received!"
    })
});

app.listen(3002, () => {
    console.log("Hooks server is listening on port 3002");
});
