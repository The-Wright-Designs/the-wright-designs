"use client";

import { usePathname } from "next/navigation";
import classNames from "classnames";
import ContactForm from "@/_components/contact-form";
import Link from "next/link";

export default function RecentProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentRoute = usePathname();
  return (
    <main className="tablet:mb-10 mt-[160px] tablet:mt-[150px]">
      <h1 className="text-heading text-center mt-10 mb-15">Recent Projects</h1>
      <div className="grid grid-cols-2 mb-15">
        <Link
          href="/recent-projects/websites"
          aria-label="Websites"
          className={classNames(
            "text-[20px] py-2 ease-in-out duration-300 border-2 border-blue text-center",
            {
              "bg-blue text-white":
                currentRoute === "/recent-projects/websites",
              "hover:bg-pink/60 hover:text-white":
                currentRoute !== "/recent-projects/websites",
            },
          )}
        >
          Websites
        </Link>
        <Link
          href="/recent-projects/apps"
          aria-label="Apps"
          className={classNames(
            "text-[20px] py-2 ease-in-out duration-300 border-2 border-blue text-center",
            {
              "bg-blue text-white": currentRoute === "/recent-projects/apps",
              "hover:bg-pink/60 hover:text-white":
                currentRoute !== "/recent-projects/apps",
            },
          )}
        >
          Apps
        </Link>
      </div>
      {children}
      <div id="contact" className="-translate-y-32"></div>
      <ContactForm cssClasses="-mx-7 px-7 py-10 tablet:-mx-10 tablet:px-10 desktopSmall:mx-0 desktopSmall:rounded-lg desktopSmall:p-6" />
    </main>
  );
}
