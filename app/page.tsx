import type { Metadata } from "next";
import HeroComponent from "@/_components/home/hero-component";
import AboutComponent from "@/_components/home/about-component";
import OurClientsComponent from "@/_components/home/our-clients-component";
import ServicesComponent from "@/_components/home/services-component";
import ContactComponent from "@/_components/home/contact-component";
import FaqsComponent from "@/_components/home/faqs-component";
import GoogleRatingComponent from "@/_components/reviews/google-rating-component";

export const metadata: Metadata = {
  title:
    "The Wright Designs - A web design & development team | Plettenberg Bay",
};

export default function Home() {
  return (
    <>
      <HeroComponent />
      <OurClientsComponent cssClasses="desktopSmall:hidden" />
      <div id="about" className="scroll-mt-20" />
      <AboutComponent />
      <div id="services" className="scroll-mt-32" />
      <ServicesComponent />
      <div id="faqs" className="scroll-mt-32" />
      <FaqsComponent />
      <div id="contact" className="scroll-mt-32" />
      <ContactComponent />
    </>
  );
}
