"use server";

import data from "@/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";
import { websitePerformanceCheckEmailTemplate } from "@/_lib/website-performance-check-email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

type SendEmailResult = {
  success: boolean;
  error?: "recaptcha" | "spam" | "send" | "invalid";
};

export async function sendEmail(formData: FormData): Promise<SendEmailResult> {
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

      const name = formData.get("fullName");
      const email = formData.get("emailAddress");
      const message = formData.get("message");

      if (
        typeof name !== "string" ||
        !name.trim() ||
        name.length > 200 ||
        typeof email !== "string" ||
        !/^\S+@\S+\.\S+$/.test(email) ||
        email.length > 254 ||
        typeof message !== "string" ||
        !message.trim() ||
        message.length > 5000
      ) {
        return { success: false, error: "invalid" };
      }

      const emailHtmlContent = emailTemplate({
        name,
        email,
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
        subject: "Website form submission - The Wright Designs",
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

export async function sendPerformanceCheckEmail(
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

      const email = formData.get("emailAddress");
      const phone = formData.get("phone");
      const websiteUrl = formData.get("websiteUrl");
      const message = formData.get("message");

      if (
        typeof email !== "string" ||
        !/^\S+@\S+\.\S+$/.test(email) ||
        email.length > 254 ||
        typeof phone !== "string" ||
        !phone.trim() ||
        phone.length > 50 ||
        typeof websiteUrl !== "string" ||
        !websiteUrl.trim() ||
        websiteUrl.length > 500 ||
        typeof message !== "string" ||
        message.length > 5000
      ) {
        return { success: false, error: "invalid" };
      }

      const emailHtmlContent = websitePerformanceCheckEmailTemplate({
        email,
        phone,
        websiteUrl,
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
        subject: "Website performance check submission - The Wright Designs",
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

const {
  contact: { email, phone },
} = data;

export const showEmailAddress = async (token: string): Promise<string | null> => {
  const result = await verifyRecaptchaToken(token);
  if (!result.success) {
    console.error("reCAPTCHA verification failed:", result.error);
    return null;
  }
  return email;
};

export const showPhoneNumber = async (token: string): Promise<string | null> => {
  const result = await verifyRecaptchaToken(token);
  if (!result.success) {
    console.error("reCAPTCHA verification failed:", result.error);
    return null;
  }
  return phone;
};
