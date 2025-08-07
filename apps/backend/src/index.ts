import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

import cors from "cors";
import { userRouter } from "./router/user";
import { zapRouter } from "./router/zap";
import { appRouter } from "./router/app";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/zap", zapRouter);
app.use("/api/v1/app", appRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

