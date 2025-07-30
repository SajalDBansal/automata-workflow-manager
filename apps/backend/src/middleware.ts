import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_PASSWORD = process.env.JWT_SECRET || "secret123";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;

    try {
        const payload = jwt.verify(token, JWT_PASSWORD);

        if (!payload) {
            res.status(403).json({
                message: "Auth error",
            });
            return;
        }
        // @ts-ignore
        req.userId = payload.userId;

    } catch (error) {
        res.status(403).json({
            message: "You are not authorized to access this resource",
        });
        return;
    }

    next();
}