import dotenv from "dotenv";
dotenv.config({ path: '../../.env' });

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendEmail(to: string, subject: string, body: string) {
    await transporter.sendMail({
        from: "dutt.sajal2001@gmail.com",
        sender: "dutt.sajal2001@gmail.com",
        to,
        subject,
        text: body
    })
}
