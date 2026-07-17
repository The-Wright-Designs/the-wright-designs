import Link from "next/link";
import Image from "next/image";

import data from "@/_data/general-data.json";
import SocialIcons from "@/_lib/social-icons";
import { normalizeNavUrl } from "@/_utils/normalize-nav-url";

const { navigation } = data;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-8 tablet:pb-5 tablet:bg-blue">
      <div className="max-w-[1280px] mx-auto flex gap-7 flex-col px-5 items-center tablet:px-10 tablet:grid grid-cols-2 tablet:gap-5 desktopSmall:px-0">
        <div>
          <nav className="hidden tablet:block">
            <ul className="flex flex-col font-light text-[14px] gap-1">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  className="text-beige desktopSmall:hover:text-pink mr-auto"
                >
                  <Link href={normalizeNavUrl(item.url)}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialIcons cssClasses="tablet:hidden" />
          <SocialIcons cssClasses="mt-2 hidden tablet:flex" beige />
        </div>
        <Link
          href="/"
          className="hidden place-self-end tablet:block desktopSmall:hover:opacity-90"
        >
          <Image
            src="/assets/the-wright-designs-logo.png"
            alt="The Wright Designs logo"
            className="w-[200px] h-auto tablet:self-end rotate-1"
            width={1050}
            height={203}
          />
        </Link>
        <h4 className="text-center font-light text-paragraph tablet:text-[14px] tablet:text-beige col-span-2 place-self-center normal-case">
          © {currentYear} The Wright Designs |{" "}
          <Link href="/" className="desktopSmall:hover:text-pink">
            www.thewrightdesigns.co.za
          </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
