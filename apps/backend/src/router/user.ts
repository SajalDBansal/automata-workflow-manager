import { Router } from "express";
import { prisma } from "@zapier/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { authMiddleware } from "../middleware";
import { SigninSchema, SignupSchema } from "../types";


const JWT_PASSWORD = process.env.JWT_SECRET || "secret123";

const router = Router();

// create a user
router.post("/signup", async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid Inputs",
        });
        return;
    }

    try {
        const isUserExists = await prisma.user.findFirst({
            where: {
                email: parsedData.data.email,
            },
        });

        if (isUserExists) {
            res.status(403).json({
                message: "User already exists",
                error: parsedData.error,
            });
            return;
        }

        const cryptedPassword = await bcrypt.hash(parsedData.data.password, 10);

        await prisma.user.create({
            data: {
                name: parsedData.data.name,
                email: parsedData.data.email,
                password: cryptedPassword,
            },
        });

        // send verification email

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }

    res.json({
        message: "Please check your email for verification link",
    });
})

// login a user
router.post("/signin", async (req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if (!parsedData.success) {
        res.status(411).json({
            message: "Invalid Inputs",
            error: parsedData.error,
        });
        return;
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                name: parsedData.data.name,
            },
        });

        if (!user) {
            res.status(401).json({
                message: "Invalid Credentials",
            });
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(parsedData.data.password, user.password);

        if (!isPasswordCorrect) {
            res.status(401).json({
                message: "Invalid Credentials",
            });
            return;
        }

        const token = jwt.sign({ userId: user.id }, JWT_PASSWORD);

        res.json({
            message: "Successfully Logged In",
            token: token,
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

// get user details
router.get("/", authMiddleware, async (req, res) => {
    const id = req.userId;

    try {
        const user = await prisma.user.findFirst({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            res.status(411).json({
                message: "Not able to find user",
            });
            return;
        }

        res.json({
            message: "User Details",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong!",
        });
        return;
    }
})

export const userRouter = router;
