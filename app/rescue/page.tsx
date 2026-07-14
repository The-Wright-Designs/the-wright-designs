import type { Metadata } from "next";

import RescueHero from "@/_components/rescue/rescue-hero";
import RescueReasons from "@/_components/rescue/rescue-reasons";
import OurClientsComponent from "@/_components/home/our-clients-component";
import ContactForm from "@/_components/contact-form";
import RecaptchaProvider from "@/_components/recaptcha-provider";

export const metadata: Metadata = {
  title:
    "Website Rescue & Redesign | The Wright Designs — Plettenberg Bay",
  description:
    "Slow, broken or abandoned website? We rebuild and rescue small-business websites from scratch — fast, secure, and built to last. Get a free quote.",
  alternates: { canonical: "/rescue" },
};

export default function Rescue() {
  return (
    <>
      <RescueHero cssClasses="mt-[104px]" />
      <OurClientsComponent cssClasses="mt-15" />
      <RescueReasons />
      <div id="contact" className="-translate-y-32"></div>
      <RecaptchaProvider>
        <ContactForm cssClasses="-mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:p-6" />
      </RecaptchaProvider>
    </>
  );
}
