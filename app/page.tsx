import type { Metadata } from "next";
import HeroComponent from "@/_components/home/hero-component";
import AboutComponent from "@/_components/home/about-component";
import OurClientsComponent from "@/_components/home/our-clients-component";
import ServicesComponent from "@/_components/home/services-component";
import ContactComponent from "@/_components/home/contact-component";
import RightForYouComponent from "@/_components/home/right-for-you-component";

export const metadata: Metadata = {
  title:
    "The Wright Designs - A web design & development team | Plettenberg Bay",
};

export default function Home() {
  return (
    <>
      <HeroComponent cssClasses="mt-[100px] tablet:mt-[90px]" />
      <OurClientsComponent cssClasses="desktopSmall:hidden" />
      <div id="about" className="-translate-y-32"></div>
      <AboutComponent />
      <div id="services" className="-translate-y-32"></div>
      <ServicesComponent />
      <div id="faq" className="-translate-y-32"></div>
      <RightForYouComponent />
      <div id="contact" className="-translate-y-32"></div>
      <ContactComponent />
    </>
  );
}
