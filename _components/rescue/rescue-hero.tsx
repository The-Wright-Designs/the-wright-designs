import Image from "next/image";
import Button from "../button";
import HeroSlideshow from "@/_lib/hero-slideshow";

interface Props {
  cssClasses?: string;
}

const RescueHero = ({ cssClasses }: Props) => {
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
            fetchPriority="high"
          />
          <h1 className="text-[28px] tracking-[0.56px] leading-[120%] font-medium uppercase pb-3 border-b-4 border-pink desktopSmall:text-[34px]">
            Slow, broken or abandoned website?{" "}
            <span className="text-pink">We&apos;ll rescue it.</span>
          </h1>
          <div className="grid gap-6">
            <h2 className="text-[20px] tracking-[0.6px] font-extralight normal-case">
              Redesigning and rebuilding poorly-managed sites is our specialty.
              A turnkey web design &amp; development team in Plettenberg Bay,
              helping small to medium sized businesses since 2015.
            </h2>
            <ul className="bg-pink -mx-5 px-5 tablet:mx-0 tablet:rounded-lg py-8 tablet:px-8 grid gap-3 font-light text-[20px] small-caps">
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Rebuilt from scratch — fast &amp; secure
              </li>
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Full domain, hosting &amp; email transfer
              </li>
              <li className="text-white tracking-[0.15px] border-b border-white/25 pb-3">
                Bespoke design — no themes or templates
              </li>
              <li className="text-white tracking-[0.15px]">
                Ongoing maintenance &amp; support
              </li>
              <li className="mt-2">
                <Button
                  url="#contact"
                  buttonColor="beige"
                  cssClasses="w-full desktopSmall:hover:cursor-pointer"
                >
                  Rescue My Website
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <HeroSlideshow cssClasses="w-full min-[1200px]:-translate-x-5 min-[1300px]:-translate-x-10" />
      </div>
    </main>
  );
};

export default RescueHero;
