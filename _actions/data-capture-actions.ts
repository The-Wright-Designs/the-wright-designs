"use server";

import nodemailer from "nodemailer";
import { dataCaptureEmailTemplate } from "@/_lib/email-templates/data-capture-email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

type SendEmailResult = {
  success: boolean;
  error?: "recaptcha" | "spam" | "send" | "invalid";
};

export async function sendDataCaptureEmail(
  formData: FormData,
): Promise<SendEmailResult> {
  const honey = formData.get("_honey");

  try {
    if (!honey) {
      const recaptchaToken = formData.get("recaptchaToken");
      if (typeof recaptchaToken !== "string") {
        return { success: false, error: "recaptcha" };
      }

      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);

      if (!recaptchaResult.success) {
        console.error("reCAPTCHA verification failed:", recaptchaResult.error);
        return { success: false, error: "recaptcha" };
      }

      const fullName = formData.get("fullName");
      const email = formData.get("emailAddress");
      const businessName = formData.get("businessName");
      const message = formData.get("message");

      if (
        typeof fullName !== "string" ||
        fullName.trim().length < 3 ||
        fullName.length > 100 ||
        typeof email !== "string" ||
        !/^\S+@\S+\.\S+$/.test(email) ||
        email.length > 254 ||
        typeof businessName !== "string" ||
        businessName.length > 200 ||
        typeof message !== "string" ||
        !message.trim() ||
        message.length > 5000
      ) {
        return { success: false, error: "invalid" };
      }

      const emailHtmlContent = dataCaptureEmailTemplate({
        fullName,
        email,
        businessName,
        message,
      });

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        requireTLS: true,
      });
      const mailOptions = {
        from: process.env.SMTP_SEND_TO,
        to: process.env.SMTP_SEND_TO,
        subject: "Data capture enquiry submission - The Wright Designs",
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
      return { success: true };
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
      return { success: false, error: "spam" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: "send" };
  }
}
