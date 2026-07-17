"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import classNames from "classnames";

import MobileMenuToggle from "./mobile/mobile-menu-toggle";
import MenuButton from "./mobile/menu-button";
import DesktopMenu from "./desktop/desktop-menu";
import useScrollPosition from "@/_utils/scroll-position";

const Header = () => {
  const [showMenuToggle, setShowMenuToggle] = useState(false);
  const isScrolled = useScrollPosition(100);

  useEffect(() => {
    if (showMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenuToggle]);

  return (
    <header
      className={classNames(
        "sticky h-[104px] w-full bg-blue border-b-4 border-b-beige shadow-md z-20 ease-in-out duration-300 tablet:px-10 flex items-center",
        {
          "-top-4": isScrolled,
          "top-0": !isScrolled,
        },
      )}
    >
      <div className="w-full desktop:max-w-[1280px] desktop:m-auto tablet:flex tablet:justify-between tablet:items-end">
        <div>
          <div
            className={classNames(
              "flex justify-between items-center px-5 tablet:px-0 ease-in-out duration-300",
              {
                "translate-y-2": isScrolled,
              },
            )}
          >
            <Link href="/" className="desktopSmall:hover:opacity-95">
              <Image
                src="/assets/the-wright-designs-logo.png"
                alt="The Wright Designs logo"
                className={classNames(
                  "h-auto w-[200px] translate-y-1 tablet:block rotate-1 desktopSmall:w-[240px] ease-in-out duration-300",
                  {
                    "scale-[0.8] -translate-x-5": isScrolled,
                  },
                )}
                width={240}
                height={75}
                sizes="240px"
                priority
              />
            </Link>
            <MenuButton
              onClick={() => setShowMenuToggle(!showMenuToggle)}
              showMenuToggle={showMenuToggle}
              cssClasses="tablet:hidden"
            />
          </div>
          <MobileMenuToggle
            onClick={() => setShowMenuToggle(false)}
            cssClasses={classNames(
              "fixed z-50 w-full h-screen px-5 bg-blue ease-in-out duration-500 tablet:hidden",
              {
                "translate-x-0": showMenuToggle,
                "translate-x-full": !showMenuToggle,
                "top-25": !isScrolled,
                "top-21": isScrolled,
              },
            )}
          />
        </div>
        <DesktopMenu cssClasses={isScrolled ? "translate-y-2" : ""} />
      </div>
    </header>
  );
};

export default Header;
