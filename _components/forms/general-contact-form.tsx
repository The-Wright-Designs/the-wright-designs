"use client";

import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import classNames from "classnames";

import Button from "@/_components/button";
import { sendEmail } from "@/_actions/send-general-email-actions";

interface Props {
  cssClasses?: string;
}

const GeneralContactForm = ({ cssClasses }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (formSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [formSubmitted]);

  return (
    <section className={classNames("bg-blue", cssClasses)}>
      {!formSubmitted ? (
        <>
          <p className="text-beige mb-6">
            Get in touch and let&apos;s discuss how we can enhance your online
            presence.
          </p>
          {submitError && (
            <p className="text-pink mb-6 text-[18px] font-bold">
              {submitError === "invalid"
                ? "Please check that your name, email address and message are filled in correctly and try again."
                : "Sorry, your message couldn't be sent — reCAPTCHA verification failed. Please try again."}
            </p>
          )}
        </>
      ) : (
        <>
          <div id="email-submitted"></div>
          <p className="text-beige mb-6 text-[18px]">
            Thanks for your message! We will get back to you ASAP...
          </p>
        </>
      )}

      {!formSubmitted && (
        <form
          action={async (formData) => {
            if (!executeRecaptcha) return;
            setSubmitError(null);
            const recaptchaToken = await executeRecaptcha("contact_form");
            formData.append("recaptchaToken", recaptchaToken);
            const result = await sendEmail(formData);
            if (!result?.success) {
              setSubmitError(result?.error ?? "send");
              return;
            }
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "Lead");
            }
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "conversion", {
                send_to: "AW-XXXXXXX/XXXX",
              });
            }
            setFormSubmitted(true);
          }}
          className="flex flex-col gap-6"
        >
          <input type="hidden" name="_honey" className="hidden" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-paragraph font-bold text-beige"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="emailAddress"
                required
                autoComplete="email"
                placeholder="Type your email address here..."
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-paragraph font-bold text-beige"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                autoComplete="name"
                required
                minLength={3}
                placeholder="Type your full name here..."
              />
            </div>
          </div>
          {!showMessage && (
            <Button
              onClick={() => {
                setShowMessage(true);
              }}
              cssClasses="mt-2 justify-center tablet:w-[135px] tablet:justify-between"
              form
              buttonColor="pink"
            >
              Next
            </Button>
          )}
          {showMessage && (
            <>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-paragraph font-bold text-beige"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  name="message"
                  placeholder="Type your message
                  here..."
                />
              </div>

              <Button
                cssClasses="mt-2 justify-center tablet:w-[150px] tablet:justify-between"
                form
                buttonColor="pink"
              >
                Submit
              </Button>
            </>
          )}
        </form>
      )}
    </section>
  );
};

export default GeneralContactForm;
