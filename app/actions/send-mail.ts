"use server";

import { contactMeta } from "@/lib/data/contact";
import { contactSchema } from "@/lib/schema/contact";
import nodemailer from "nodemailer";
import {z} from "zod";

export async function sendMail(formData: FormData) {
    const rawData = {
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const parsed = contactSchema.safeParse(rawData);
    if(!parsed.success) {
        const errorTree = z.treeifyError(parsed.error);
        return {
            success: false,
            errors: "Invalid input",
        }
    }

    const {email, message} = parsed.data;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: contactMeta.emailTo,
        subject: `${contactMeta.emailSubjectPrefix} Message from ${email}`,
        text: message,
    });

    return {success:true};
}