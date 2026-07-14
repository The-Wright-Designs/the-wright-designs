"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";

import RecentProjectsWebsiteScroller from "@/_components/recent-projects/websites/recent-projects-website-scroller";

import technicalList from "@/_data/technical-data.json";
import ProjectIcons from "@/_lib/project-icons";
import Button from "@/_components/button";

const blankPhones = [
  "/assets/images/phone-rose-gold.png",
  "/assets/images/phone-grey.png",
  "/assets/images/phone-silver.png",
];

const ViewMoreForm = ({
  cssClasses,
  showAll,
  onToggle,
}: {
  cssClasses: string;
  showAll: boolean;
  onToggle: () => void;
}) => (
  <form onSubmit={(e) => e.preventDefault()} className={cssClasses}>
    <Button form={true} onClick={onToggle} buttonColor="pink">
      {showAll ? "Show Less" : "View More"}
    </Button>
  </form>
);

const RecentProjectsWebsitesComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedWebsites = showAll
    ? technicalList.projectsList.websites
    : technicalList.projectsList.websites.slice(0, 10);

  return (
    <section className="grid gap-10 mb-14 justify-center place-items-center tablet:grid-cols-2 desktopSmall:grid-cols-1">
      {displayedWebsites.map(({ title, image, url }, index) => {
        const blankPhone = blankPhones[index % 3];

        return (
          <div
            key={index}
            className="grid gap-10 items-center max-w-[330px] place-items-center desktopSmall:hidden"
          >
            <Link href={url} target="_blank" aria-label={title}>
              <h2 className="text-[24px] font-light normal-case tracking-wide text-center">
                {title}
              </h2>
            </Link>

            <div>
              <RecentProjectsWebsiteScroller
                src={image.scrollImage}
                alt={`${title} full mobile`}
                loading={index === 0 ? "eager" : "lazy"}
                autoScroll={index <= 1}
              />
              <Image
                src={blankPhone}
                alt={`${title} mobile preview`}
                width={280}
                height={900}
                className="drop-shadow-md h-auto"
                loading={index === 0 ? "eager" : "lazy"}
                quality={60}
                sizes="(max-width:425px) 75vw, 50vw"
              />
            </div>
            <ProjectIcons websiteUrl={url} pink ariaLabel={title} />
            {index !== displayedWebsites.length - 1 && (
              <hr
                className={classNames("text-blue/25 w-full desktopSmall:hidden", {
                  "tablet:hidden": index === 4,
                })}
              />
            )}
          </div>
        );
      })}

      <ViewMoreForm
        cssClasses="desktopSmall:hidden justify-self-center"
        showAll={showAll}
        onToggle={() => setShowAll(!showAll)}
      />

      {displayedWebsites.map(({ title, image, url }, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <div key={index} className="hidden desktopSmall:flex flex-col gap-8">
            <div className="flex w-full justify-center items-center gap-5">
              <Link href={url} target="_blank" aria-label={title}>
                <h2 className="text-[24px] tracking-wide font-light normal-case text-center desktopSmall:hover:text-pink ease-in-out duration-300">
                  {title}
                </h2>
              </Link>
              <ProjectIcons websiteUrl={url} pink ariaLabel={title} />
            </div>

            <Link
              href={url}
              target="_blank"
              className={classNames("flex items-center", {
                "-translate-x-2": index % 2,
                "translate-x-2": !(index % 2),
              })}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.desktop}
                alt={`${title} desktop preview`}
                width={1100}
                height={580}
                className={classNames(
                  "object-contain drop-shadow-md max-w-[725px] desktop:max-w-[1000px] transform duration-[650ms] ease-in-out",
                  {
                    "scale-[1.02]": isHovered,
                    "order-2": index % 2,
                  },
                )}
                loading={index === 0 ? "eager" : "lazy"}
                quality={60}
                sizes="75vw"
              />
              <Image
                src={image.mobile}
                alt={title}
                width={300}
                height={600}
                className={classNames(
                  "z-10 my-auto object-contain drop-shadow-md w-[190px] desktop:w-[260px] transform duration-[550ms] ease-in-out",
                  {
                    "translate-x-4": index % 2,
                    "-translate-x-4": !(index % 2),
                    "scale-[1.05] desktop:scale-[1.05]": isHovered,
                  },
                )}
                loading={index === 0 ? "eager" : "lazy"}
                quality={60}
                sizes="35vw"
              />
            </Link>
            {index !== displayedWebsites.length - 1 && (
              <hr className="text-blue/25 mt-2 w-full desktopSmall:block" />
            )}
          </div>
        );
      })}

      <ViewMoreForm
        cssClasses="hidden desktopSmall:flex justify-center"
        showAll={showAll}
        onToggle={() => setShowAll(!showAll)}
      />
    </section>
  );
};

export default RecentProjectsWebsitesComponent;
