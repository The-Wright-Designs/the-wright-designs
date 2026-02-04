"use client";

import { useEffect, useRef } from "react";

import Button from "@/_components/button";
import RecentProjectsAppsTable from "@/_components/recent-projects/apps/recent-projects-apps-table";

const RecentProjectsApps = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const currentRef = scrollRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 960) {
            entry.target.classList.add("scroll-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="mb-14 overflow-x-scroll">
      <div ref={scrollRef} className="min-w-[1000px]">
        <RecentProjectsAppsTable />
      </div>
    </section>
  );
};

export default RecentProjectsApps;
