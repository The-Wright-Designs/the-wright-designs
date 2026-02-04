"use client";

import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import Button from "@/_components/button";
import { sendEmail } from "@/_actions/actions";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    <section className={`bg-blue ${cssClasses}`}>
      {!formSubmitted ? (
        <p className="text-beige mb-6">
          Get in touch and let&apos;s discuss how we can enhance your online
          presence.
        </p>
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
            const recaptchaToken = await executeRecaptcha("contact_form");
            formData.append("recaptchaToken", recaptchaToken);
            await sendEmail(formData);
            setFormSubmitted(true);
          }}
          className="flex flex-col gap-8"
        >
          <input type="hidden" name="_honey" className="hidden" />
          <div className="flex flex-col gap-8">
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
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
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
                className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
              />
            </div>
          </div>
          {!showMessage && (
            <Button
              onClick={() => {
                setShowMessage(true);
              }}
              cssClasses="justify-center tablet:w-[135px] tablet:justify-between"
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
                  className="bg-grey placeholder-blue px-2 py-1 font-light focus:bg-pink focus:placeholder-beige focus:text-beige"
                />
              </div>

              <Button
                cssClasses="justify-center tablet:w-[150px] tablet:justify-between"
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

export default ContactForm;
