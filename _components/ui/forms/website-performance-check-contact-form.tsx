"use client";

import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import classNames from "classnames";

import Button from "@/_components/ui/button";
import { sendPerformanceCheckEmail } from "@/_actions/website-performance-check-actions";
import {
  META_PIXEL_EVENTS,
  trackMetaEvent,
} from "@/_utils/meta-pixel-events";

interface Props {
  cssClasses?: string;
}

const WebsitePerformanceCheckContactForm = ({ cssClasses }: Props) => {
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
            hours with a free assessment of your current site and a brief
            bird&apos;s-eye-view plan of action to get your online presence back
            on track.
          </p>
          {submitError && (
            <p className="text-pink mb-6 text-[18px] font-bold">
              {submitError === "invalid"
                ? "Please check that your email address, phone number and website URL are filled in correctly and try again."
                : "Sorry, your message couldn't be sent — reCAPTCHA verification failed. Please try again."}
            </p>
          )}
        </>
      ) : (
        <>
          <div id="email-submitted"></div>
          <p className="text-beige mb-6 text-[18px]">
            Thank you for your website performance check enquiry! Our team lead,
            Chad, will be in touch with you within 24hrs.
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
            const result = await sendPerformanceCheckEmail(formData);
            if (!result?.success) {
              setSubmitError(result?.error ?? "send");
              return;
            }
            trackMetaEvent("Lead", META_PIXEL_EVENTS.performanceCheck);
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
              htmlFor="phone"
              className="text-paragraph font-bold text-beige"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="Type your phone number here..."
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="websiteUrl"
              className="text-paragraph font-bold text-beige"
            >
              Your Current Website URL:
            </label>
            <input
              type="text"
              id="websiteUrl"
              name="websiteUrl"
              required
              placeholder="e.g. www.yourbusiness.co.za"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-paragraph font-bold text-beige"
            >
              Message (optional):
            </label>
            <textarea
              id="message"
              rows={3}
              name="message"
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

export default WebsitePerformanceCheckContactForm;
