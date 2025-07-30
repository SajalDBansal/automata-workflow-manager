import { z } from "zod";

export const SignupSchema = z.object({
    name: z.string().min(3).refine((val) => !val.includes(" "), "Name cannot contain spaces"),
    email: z.email(),
    password: z.string().min(6),
});

export const SigninSchema = z.object({
    name: z.string().min(3).refine((val) => !val.includes(" "), "Name cannot contain spaces"),
    password: z.string().min(6),
})

export const ZapCreateSchema = z.object({
    availabeTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        avalaibleActionId: z.string(),
        actionMetadata: z.any().optional(),
    })),
});