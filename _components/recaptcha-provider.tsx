"use client";

import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface Props {
  children: ReactNode;
}

const RecaptchaProvider = ({ children }: Props) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      useRecaptchaNet
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaProvider;
