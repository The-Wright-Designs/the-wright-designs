"use client";

import Link from "next/link";
import { useState, Suspense, lazy } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import ContactForm from "@/_components/contact-form";
import RecaptchaProvider from "@/_components/recaptcha-provider";
import SocialIcons from "@/_lib/social-icons";
import { showEmailAddress, showPhoneNumber } from "@/_actions/actions";

import data from "@/_data/general-data.json";

const LazyContactMap = lazy(() => import("./contact/contact-map"));

const {
  contact: { address },
} = data;

const ContactInnerComponent = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showSpinnerPhone, setShowSpinnerPhone] = useState(false);
  const [showSpinnerEmail, setShowSpinnerEmail] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleShowPhoneNumber = async () => {
    setShowSpinnerPhone(true);
    setPhoneError(false);
    const token = await executeRecaptcha("show_phone");
    const phoneNumber = await showPhoneNumber(token);
    if (phoneNumber) {
      setShowPhone(phoneNumber);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Contact");
      }
    } else {
      setPhoneError(true);
    }
    setShowSpinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowSpinnerEmail(true);
    setEmailError(false);
    const token = await executeRecaptcha("show_email");
    const emailAddress = await showEmailAddress(token);
    if (emailAddress) {
      setShowEmail(emailAddress);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Contact");
      }
    } else {
      setEmailError(true);
    }
    setShowSpinnerEmail(false);
  };

  return (
    <section className="tablet:mb-10">
      <h2 className="text-subheading mb-10 pb-1 border-b-4 border-pink tablet:col-span-2 desktopSmall:col-span-1">
        Contact
      </h2>
      <div className="grid desktopSmall:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div className="grid gap-3 tablet:grid-cols-[100px_1fr]">
            <h3 className="text-paragraph font-bold">Email:</h3>
            {showEmail === "Show email address" ? (
              <button
                onClick={handleShowEmailAddress}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 desktopSmall:hover:text-pink desktopSmall:hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
                aria-label="Show email address"
              >
                {showSpinnerEmail ? (
                  <div className="small-spinner"></div>
                ) : (
                  showEmail
                )}
              </button>
            ) : (
              <Link
                href={`mailto:${showEmail}`}
                className="text-paragraph self-center desktopSmall:hover:text-pink place-self-start text-linkBlue"
              >
                {showEmail}
              </Link>
            )}
            {emailError && (
              <p className="text-pink text-[14px] tablet:col-start-2">
                reCAPTCHA verification failed. Please try again.
              </p>
            )}
          </div>
          <div className="grid gap-3 tablet:grid-cols-[100px_1fr]">
            <h3 className="text-paragraph font-bold">Phone:</h3>
            {showPhone === "Show phone number" ? (
              <button
                onClick={handleShowPhoneNumber}
                className="text-paragraph self-center py-3 px-2 -my-3 -mx-2 desktopSmall:hover:text-pink desktopSmall:hover:cursor-pointer tablet:p-0 tablet:m-0 italic text-linkBlue place-self-start"
                aria-label="Show phone number"
              >
                {showSpinnerPhone ? (
                  <div className="small-spinner"></div>
                ) : (
                  showPhone
                )}
              </button>
            ) : (
              <Link
                href={`tel:${showPhone}`}
                className="text-paragraph self-center desktopSmall:hover:text-pink place-self-start text-linkBlue"
              >
                {showPhone}
              </Link>
            )}
            {phoneError && (
              <p className="text-pink text-[14px] tablet:col-start-2">
                reCAPTCHA verification failed. Please try again.
              </p>
            )}
          </div>
          <div className="grid gap-3 tablet:grid-cols-[100px_1fr]">
            <h3 className="text-paragraph font-bold">Address:</h3>
            <address className="text-paragraph self-center">{address}</address>
          </div>
          <SocialIcons cssClasses="mt-2" />
        </div>
        <Suspense
          fallback={
            <div className="border-2 bg-white text-black border-black text-[30px] grid place-items-center py-16 w-full h-full min-[800px]:order-2">
              Map loading...
            </div>
          }
        >
          <LazyContactMap cssClasses="h-[400px] w-full desktopSmall:row-span-2 desktopSmall:h-full" />
        </Suspense>
        <ContactForm cssClasses="-mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:p-6" />
      </div>
    </section>
  );
};

const ContactComponent = () => {
  return (
    <RecaptchaProvider>
      <ContactInnerComponent />
    </RecaptchaProvider>
  );
};

export default ContactComponent;
