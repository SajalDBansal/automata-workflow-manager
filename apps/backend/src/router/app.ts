import { Router } from "express";
import { prisma } from "@zapier/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { authMiddleware } from "../middleware";
import { AppCategoryCreateSchema, SigninSchema, SignupSchema } from "../types";


const JWT_PASSWORD = process.env.JWT_SECRET || "secret123";

const router = Router();

// create a user

router.get("/all", async (req, res) => {
    try {
        const appCategories = await prisma.appCategory.findMany({
            include: {
                AvailableAction: true,
                AvailableTrigger: true,
            }
        });
        res.json({
            message: "All App Categories",
            appCategories,
        });

    } catch (error) {
        res.status(404).json({
            message: "App Categories not found",
        })
    }

});

router.get("/available/triggers", async (req, res) => {
    try {
        const triggers = await prisma.availableTrigger.findMany({
            include: {
                appCategory: true,
            }
        });
        res.json({
            message: "All Available Triggers",
            triggers,
        });
    } catch (error) {
        res.status(404).json({
            message: "Triggers not found",
        })
    }
});

router.get("/available/actions", async (req, res) => {
    try {
        const actions = await prisma.availableAction.findMany({
            include: {
                appCategory: true,
            }
        });
        res.json({
            message: "All Available Actions",
            actions,
        });

    } catch (error) {
        res.status(404).json({
            message: "Actions not found",
        })
    }
});

router.post("/category/create", async (req, res) => {
    const body = req.body;
    const parsedData = AppCategoryCreateSchema.safeParse(body);

    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid Inputs",
            error: parsedData.error,
        });
        return;
    }

    try {
        const appCategory = await prisma.appCategory.create({
            data: {
                name: parsedData.data.name,
                image: parsedData.data.image,
                AvailableAction: {
                    create: parsedData.data.availableActions.map(action => ({
                        name: action.name,
                        image: action.image,
                        description: action.description
                    })
                    )
                },
                AvailableTrigger: {
                    create: parsedData.data.availableTriggers.map(trigger => ({
                        name: trigger.name,
                        image: trigger.image,
                        description: trigger.description
                    }))
                },
            }
        })

        res.json({
            message: "App Category Created",
            appCategory
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

export const appRouter = router;