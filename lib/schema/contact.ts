import {z} from "zod";

export const contactSchema = z.object({
    email: z.email("Please enter a valid email address"),
    message: z.string().min(10, "Message should be atleast 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;