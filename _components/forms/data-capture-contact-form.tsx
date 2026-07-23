"use client";

import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import classNames from "classnames";

import Button from "@/_components/button";
import { sendDataCaptureEmail } from "@/_actions/data-capture-actions";

interface Props {
  cssClasses?: string;
}

const DataCaptureContactForm = ({ cssClasses }: Props) => {
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
            Fill in your details below. We&apos;ll get back to you within 24
            hours to talk through your current setup and show you what a simple,
            digital loyalty or data capture system could look like for your
            business.
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
            const result = await sendDataCaptureEmail(formData);
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
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-paragraph font-bold text-beige">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="fullName"
              required
              minLength={3}
              autoComplete="name"
              placeholder="Type your full name here..."
            />
          </div>
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
              htmlFor="businessName"
              className="text-paragraph font-bold text-beige"
            >
              Business Name (optional):
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              autoComplete="organization"
              placeholder="Type your business name here..."
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-paragraph font-bold text-beige"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Type your message here..."
            />
          </div>

          <Button
            cssClasses="justify-center mt-2 tablet:w-[150px] tablet:justify-between"
            form
            buttonColor="pink"
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  );
};

export default DataCaptureContactForm;
