"use client";

import { useState, useEffect, useRef } from "react";

const useScrollPosition = (threshold: number) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const crossed = window.scrollY > threshold;
      if (crossed !== isScrolledRef.current) {
        isScrolledRef.current = crossed;
        setIsScrolled(crossed);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updatePosition();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

export default useScrollPosition;
