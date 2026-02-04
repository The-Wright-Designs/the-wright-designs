"use server";

import data from "@/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";
import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
});

app.use("/sendEmail", formLimiter);

export async function sendEmail(formData) {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const recaptchaToken = formData.get("recaptchaToken");
      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);

      if (!recaptchaResult.success) {
        console.error("reCAPTCHA verification failed:", recaptchaResult.error);
        return;
      }

      const name = formData.get("fullName");
      const email = formData.get("emailAddress");
      const message = formData.get("message");

      const emailHtmlContent = emailTemplate({
        name,
        email,
        message,
      });

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
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
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}

const {
  contact: { email, phone },
} = data;

export const showEmailAddress = async (token) => {
  const result = await verifyRecaptchaToken(token);
  if (!result.success) {
    console.error("reCAPTCHA verification failed:", result.error);
    return null;
  }
  return email;
};

export const showPhoneNumber = async (token) => {
  const result = await verifyRecaptchaToken(token);
  if (!result.success) {
    console.error("reCAPTCHA verification failed:", result.error);
    return null;
  }
  return phone;
};
