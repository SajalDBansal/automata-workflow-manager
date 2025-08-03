import { Router } from "express";
import { prisma } from "@zapier/database";
import { randomUUID } from 'crypto';

import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";

const router = Router();

// create a zap
router.post("/", authMiddleware, async (req, res) => {
    const body = req.body;
    // @ts-ignore
    const userId: string = req.userId;
    const parsedData = ZapCreateSchema.safeParse(body);

    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid Inputs",
            error: parsedData.error,
        });
        return;
    }

    try {
        const zapId = await prisma.$transaction(async (tx) => {
            const triggerId = randomUUID();
            const zap = await tx.zap.create({
                data: {
                    triggerId: triggerId,
                    userId: userId,
                    name: parsedData.data.name || "Untitled Zap",
                    description: parsedData.data.description,
                    actions: {
                        create: parsedData.data.actions.map((action, index) => ({
                            actionId: action.avalaibleActionId,
                            sortingOrder: index,
                            metadata: action.actionMetadata,
                        })),
                    }
                },
            });

            await tx.trigger.create({
                data: {
                    id: triggerId,
                    zapId: zap.id,
                    triggerId: parsedData.data.availabeTriggerId,
                    metadata: parsedData.data.triggerMetadata,
                },
            });

            return zap.id;
        });

        res.json({
            message: "Zap Created",
            zapId,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

// get all zaps
router.get("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    try {
        const zaps = await prisma.zap.findMany({
            where: {
                userId: userId,
            },
            include: {
                actions: {
                    include: {
                        type: true,
                    }
                },
                trigger: {
                    include: {
                        type: true,
                    }
                }
            }
        });

        res.json({
            message: "All Zaps",
            zaps,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

// get a zap by zapId
router.get("/:zapId", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const zapId = req.params.zapId;

    try {
        const zap = await prisma.zap.findFirst({
            where: {
                id: zapId,
                userId: userId,
            },
            include: {
                actions: {
                    include: {
                        type: true,
                    }
                },
                trigger: {
                    include: {
                        type: true,
                    }
                }
            },
        });

        if (!zap) {
            res.status(404).json({
                message: "Zap not found",
            });
            return;
        }

        res.json({
            message: "Zap Details",
            zap,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

export const zapRouter = router;