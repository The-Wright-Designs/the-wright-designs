"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";

import RecentProjectsWebsiteScroller from "@/_components/pages/recent-projects/websites/recent-projects-website-scroller";

import technicalList from "@/_data/technical-data.json";
import Button from "@/_components/ui/button";

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

const ProjectLinkIcon = ({ url, title }: { url: string; title: string }) => (
  <Link
    href={url}
    target="_blank"
    className="desktopSmall:hover:opacity-90"
    aria-label={title}
  >
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 desktopSmall:size-5"
    >
      <mask
        id="mask0_439_255"
        style={{ textDecoration: "none" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="21"
      >
        <rect y="0.511597" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_439_255)">
        <path
          d="M2.54638 20.5018C1.96073 20.5018 1.45938 20.2933 1.04233 19.8762C0.625274 19.4592 0.416748 18.9578 0.416748 18.3722V3.46479C0.416748 2.87914 0.625274 2.37779 1.04233 1.96074C1.45938 1.54369 1.96073 1.33516 2.54638 1.33516H10.0001V3.46479H2.54638V18.3722H17.4538V10.9185H19.5834V18.3722C19.5834 18.9578 19.3749 19.4592 18.9578 19.8762C18.5408 20.2933 18.0394 20.5018 17.4538 20.5018H2.54638ZM7.55101 14.8583L6.06027 13.3676L15.963 3.46479H12.1297V1.33516H19.5834V8.78886H17.4538V4.95553L7.55101 14.8583Z"
          fill="#C86B7B"
        />
      </g>
    </svg>
  </Link>
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
            <div className="flex flex-wrap w-full justify-center items-center gap-x-5 gap-y-3">
              <Link href={url} target="_blank" aria-label={title}>
                <h2 className="text-[24px] font-light normal-case tracking-wide text-center">
                  {title}
                </h2>
              </Link>
              <ProjectLinkIcon url={url} title={title} />
            </div>

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
                className="shadow-md h-auto"
                loading={index === 0 ? "eager" : "lazy"}
                quality={60}
                sizes="(max-width:425px) 75vw, 50vw"
              />
            </div>
            {index !== displayedWebsites.length - 1 && (
              <hr
                className={classNames(
                  "text-blue/25 w-full desktopSmall:hidden",
                  {
                    "tablet:hidden": index === 4,
                  },
                )}
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
              <ProjectLinkIcon url={url} title={title} />
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
                  "object-contain shadow-md max-w-[725px] desktop:max-w-[1000px] transform duration-[650ms] ease-in-out",
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
                  "z-10 my-auto object-contain shadow-md w-[190px] desktop:w-[260px] transform duration-[550ms] ease-in-out",
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
