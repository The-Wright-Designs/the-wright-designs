"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classNames from "classnames";

import data from "@/_data/general-data.json";
import SocialIcons from "@/_lib/social-icons";
import ArrowSvg from "@/_lib/arrow-svg";
import { scrollIntoView } from "../desktop/desktop-menu";

const { navigation } = data;

interface Props {
  onClick?: () => void;
  cssClasses?: string;
}

const MobileMenuToggle = ({ onClick, cssClasses }: Props) => {
  const currentRoute = usePathname();

  return (
    <nav className={cssClasses}>
      <ul className="flex flex-col gap-3 font-thin text-[20px]">
        {navigation.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (
                ["About", "Services", "Contact", "FAQ"].includes(item.title)
              ) {
                scrollIntoView(item.url);
                onClick();
              }
            }}
            className={classNames(
              "text-beige flex gap-3 items-center cursor-pointer",
              {
                "border-b border-beige pb-5": index !== navigation.length - 1,
              },
            )}
          >
            {(item.title === "About" && currentRoute === "/") ||
            (item.title === "Services" && currentRoute === "/") ||
            (item.title === "FAQ" && currentRoute === "/") ||
            item.title === "Contact" ? (
              item.title
            ) : (
              <Link
                href={
                  item.title === "About" ||
                  item.title === "Services" ||
                  item.title === "FAQ"
                    ? `/#${item.url}`
                    : item.url
                }
                className="py-2 px-3 -my-2 -mx-3"
                onClick={onClick}
              >
                {item.title}
              </Link>
            )}
            {(item.url === currentRoute ||
              (item.title === "Recent Projects" &&
                currentRoute === "/recent-projects/apps")) && (
              <ArrowSvg mobileMenu />
            )}
          </li>
        ))}
        <li>
          <SocialIcons cssClasses="mt-7" pink />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuToggle;
