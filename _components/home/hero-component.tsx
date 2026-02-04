import Image from "next/image";
import Button from "../button";
import HeroSlideshow from "@/_lib/hero-slideshow";

interface Props {
  cssClasses?: string;
}

const HeroComponent = ({ cssClasses }: Props) => {
  return (
    <main
      className={`pt-[200px] px-5 -mx-5 phone:pt-[250px] bg-gradient-to-t from-beige from-75% via-beige/85 via-85% to-90% to-transparent tablet:px-10 tablet:pt-10 tablet:-mx-10 tablet:bg-[url('/assets/images/hero-background-desktop.webp')] bg-cover bg-center desktop:mx-0 relative ${cssClasses}`}
    >
      <div className="flex flex-col pt-10 -mt-10 px-5 -mx-5 tablet:px-10 tablet:-mx-10 gap-10 desktopSmall:grid grid-cols-2 tablet:bg-beige/90 desktopSmall:bg-transparent desktopSmall:bg-gradient-to-r desktopSmall:from-40% desktopSmall:from-beige/90 desktopSmall:to-70% desktopSmall:to-beige/25 desktopSmall:py-10 desktopSmall:items-center">
        <div className="desktopSmall:w-[476px] desktopSmall:grid gap-5">
          <Image
            src={"/assets/images/hero-background-mobile.jpg"}
            alt="Decorative art image"
            width={800}
            height={1100}
            className="tablet:hidden absolute top-0 left-0 -z-10 h-[400px] min-[380px]:h-[450px] phone::h-[500px] phone:object-top object-cover"
            sizes="(max-width: 425px) 100vw, 100vw"
            priority
          />
          <h1 className="text-[24px] tracking-[0.48px] leading-[120%] font-extralight uppercase grid gap-y-1.5 pb-3 border-b-4 border-pink min-[320px]:grid-cols-[1fr_0px] phone:grid-cols-1 desktopSmall:grid-cols-[1fr_37px] desktopSmall:text-[21.75px] desktopSmall:gap-x-5 desktopSmall:font-normal desktopSmall:max-h-[231.52px]">
            <span className="min-[320px]:col-span-2 phone:col-span-1">
              Elevate your online presence with
            </span>
            <span className="hidden row-span-2 font-thin desktopSmall:block text-center text-[24px] [writing-mode:vertical-lr] pl-2 border-l-2 border-blue/25">
              Plettenberg Bay
            </span>
            <span className="grid min-[320px]:grid-cols-[1fr_32px] phone:grid-cols-1 ">
              <span className="text-[52px] font-medium tracking-[1.04px] leading-[120%] max-w-[315px] phone:max-w-none tablet:text-[66px]">
                The Wright Designs
              </span>
              <span className="font-thin text-paragraph min-[320px]:text-[20px] min-[320px]:[writing-mode:vertical-lr] min-[320px]:pl-2 min-[320px]:border-l border-blue/25 min-[320px]:text-center leading-[120%] phone:[writing-mode:horizontal-tb] phone:p-0 phone:border-l-0 phone:text-left phone:text-paragraph desktopSmall:hidden ">
                Plettenberg Bay
              </span>
            </span>
          </h1>
          <div className="hidden gap-5 desktopSmall:grid">
            <h2 className="text-[20px] tracking-[0.6px] font-extralight normal-case">
              A web design & web development team, based in Plettenberg Bay,
              dedicated to providing turnkey online solutions for small to
              medium sized businesses.
            </h2>
            <ul className="bg-pink p-5 rounded-lg grid gap-3 font-light text-[20px] small-caps">
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Web design
              </li>
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Web development (Frontend & backend)
              </li>
              <li className="text-white tracking-[0.15px]">
                Domain & hosting solutions
              </li>
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Ongoing maintenance
              </li>
              <li className="mt-2">
                <Button url="#contact" buttonColor="beige" cssClasses="w-full">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <HeroSlideshow cssClasses="w-full min-[1200px]:-translate-x-5 min-[1300px]:-translate-x-10" />
        <div className="grid gap-10 desktopSmall:hidden">
          <h2 className="text-[20px] tracking-[0.6px] font-extralight normal-case">
            A web design & web development team, based in Plettenberg Bay,
            dedicated to providing turnkey online solutions for small to medium
            sized businesses.
          </h2>
          <ul className="bg-pink -mx-5 px-5 tablet:px-10 tablet:-mx-10 py-10 grid gap-3 font-light text-[20px] small-caps">
            <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
              Web & app design
            </li>

            <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
              Frontend & backend development
            </li>

            <li className="text-white tracking-[0.15px]">
              Domain & hosting solutions
            </li>
            <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
              Ongoing maintenance
            </li>

            <li className="mt-2">
              <Button url="#contact" buttonColor="beige" cssClasses="w-full">
                Get in Touch
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeroComponent;
