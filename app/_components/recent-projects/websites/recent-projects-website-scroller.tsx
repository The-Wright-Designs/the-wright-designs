"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  loading?: string;
  autoScroll?: boolean;
}

const RecentProjectsWebsiteScroller = ({
  src,
  alt,
  loading,
  autoScroll,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let startTime: number | null = null;
      const scrollDistance = 200;
      const scrollDuration = 1000;

      const scrollStep = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPosition = Math.min(
          (progress / scrollDuration) * scrollDistance,
          scrollDistance
        );
        scrollContainer.scrollTop = scrollPosition;

        if (progress < scrollDuration && scrollPosition < scrollDistance) {
          requestAnimationFrame(scrollStep);
        } else {
          scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      requestAnimationFrame(scrollStep);
    }
  };

  useEffect(() => {
    if (!autoScroll) return;

    const currentImageRef = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleImageLoad();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [autoScroll]);

  return (
    <div
      ref={scrollRef}
      className="bg-white absolute w-[244px] h-[431.5px] z-10 translate-x-[18px] translate-y-[68.25px] overflow-y-auto scrollbar-hide"
    >
      <Image
        ref={imageRef}
        src={src}
        width={244}
        height={1000}
        alt={alt}
        quality={35}
        loading={loading ? "eager" : "lazy"}
        sizes="244px"
        className="h-auto"
      />
    </div>
  );
};

export default RecentProjectsWebsiteScroller;
