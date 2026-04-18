"use server";

import { contactMeta } from "@/lib/data/contact";
import { contactSchema } from "@/lib/schema/contact";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function sendMail(formData: FormData) {
  // ========== extract raw values from FormData obj ==========
  const rawData = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(rawData);
  if (!parsed.success) {
    const errorTree = z.treeifyError(parsed.error);
    return {
      success: false,
      errors: "Invalid input",
    };
  }

  // ========== destructure validated data ==========
  const { email, message } = parsed.data;

  // ========== initialize nodemailer transporter ==========
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ========== attempt to send email ==========
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: contactMeta.emailTo,
      subject: `${contactMeta.emailSubjectPrefix} Message from ${email}`,
      text: message,
    });
  } catch (error) {
    console.error("Email delivery failed:", error);
    return {
      success: false,
      errors: "Failed to send message. Please try again later.",
    };
  }

  return { success: true };
}
