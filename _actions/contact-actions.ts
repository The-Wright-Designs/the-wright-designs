"use server";

import data from "@/_data/general-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

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
