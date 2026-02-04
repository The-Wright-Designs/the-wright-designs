import Image from "next/image";

import Button from "../button";
import OurClientsSlideshow from "@/_lib/our-clients-slideshow";

const AboutComponent = () => {
  return (
    <section className="bg-blue px-5 -mx-5 py-10 grid gap-10 tablet:px-10 tablet:-mx-10 relative overflow-hidden mb-15  desktopSmall:border-y-8 border-blue desktop:mx-0">
      <div className="grid gap-y-5 gap-x-10 tablet:grid-cols-2 desktopSmall:gap-x-0 desktopSmall:grid-cols-[1fr_280px] desktopSmall:place-content-start">
        <h2 className="text-white text-subheading pb-1 border-b-4 border-white tablet:col-span-2 desktopSmall:col-span-1">
          About
        </h2>
        <div className="flex flex-col gap-5 desktopSmall:grid grid-cols-[1fr_225px] desktop:grid-cols-[1fr_188px] desktopSmall:gap-x-10 desktopSmall:col-start-1 place-items-start">
          <p className="text-white font-light desktopSmall:col-span-2">
            The Wright Designs is a passionate team based in Plettenberg Bay. We
            specialise in{" "}
            <span className="font-bold text-white">
              crafting unique and impactful online solutions
            </span>{" "}
            for small and medium businesses, and believe a strong online
            presence starts with a website/app that reflects your brand and
            resonates with your target audience.
          </p>
          <p className="text-white font-light">
            {" "}
            <span className="font-bold text-white">
              Our approach is collaborative and flexible
            </span>
            . We offer a multi-phased service that allows us to tailor solutions
            to your specific needs and budget. Whether you need a website
            refresh, a custom e-commerce platform, or an engaging app to excite
            your customers,{" "}
            <span className="font-bold text-white">
              we&apos;ll guide you through the entire process via open and clear
              communication.
            </span>
          </p>
          <figure className="tablet:hidden desktopSmall:block desktopSmall:row-span-2 desktopSmall:aspect-square desktop:max-h-[208px]">
            <Image
              src="/assets/images/chad-wright-the-wright-designs.jpg"
              alt="Chad Wright - The Wright Designs"
              width={780}
              height={780}
              className="rounded-lg desktopSmall:h-full object-cover"
              sizes="(max-width: 800px) 90vw, 25vw"
            />
            <figcaption className="text-white small-caps text-center text-paragraph pt-2">
              Chad Wright
            </figcaption>
          </figure>
          <p className="text-white font-light tablet:mb-5">
            Founded by Chad Wright in 2015, we have never wavered on our most
            fundamental philosophy,{" "}
            <span className="font-bold text-white">
              offering turnkey technology solutions to clients without
              compromising on quality
            </span>
            . In today&apos;s digital landscape, experience is the key to
            success. With years of experience working with a wide range of
            clients,{" "}
            <span className="font-bold text-white">
              we have a proven track record of delivering results that matter
            </span>{" "}
            - increased sales, improved brand awareness, and satisfied
            customers.
          </p>
          <Button
            url="/recent-projects/websites"
            buttonColor="pink"
            cssClasses="w-full desktopSmall:w-auto"
          >
            Recent Projects
          </Button>
        </div>
        <figure className="hidden tablet:block desktopSmall:hidden">
          <Image
            src="/assets/images/chad-wright-the-wright-designs.jpg"
            alt="Chad Wright - The Wright Designs"
            width={780}
            height={780}
            className="rounded-lg w-full h-full object-cover"
            sizes="(max-width:1100px) 75vw, 10vw"
          />
          <figcaption className="text-white small-caps text-center text-paragraph pt-2">
            Chad Wright
          </figcaption>
        </figure>
      </div>
      <div className="hidden desktopSmall:flex absolute right-0 h-full pr-5">
        <OurClientsSlideshow />
        <h2 className="hidden text-heading text-white font-normal desktopSmall:block text-center [writing-mode:vertical-lr] pl-4">
          Our Clients
        </h2>
      </div>
    </section>
  );
};

export default AboutComponent;
