"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import data from "@/_data/general-data.json";

import "swiper/css";
import "swiper/css/effect-fade";

const { heroSlider } = data;

interface Props {
  cssClasses?: string;
}

const HeroSlideshow = ({ cssClasses }: Props) => {
  return (
    <Swiper
      rewind={true}
      autoplay={{ delay: 3000 }}
      effect="fade"
      speed={1000}
      modules={[Autoplay, EffectFade]}
      className={cssClasses}
    >
      {heroSlider.map(({ src, alt }, index) => (
        <SwiperSlide key={index}>
          <Image
            key={index}
            src={src}
            alt={alt}
            width={800}
            height={637}
            sizes="(max-width: 900px) 95vw,(max-width: 1100px) 80vw, 50vw"
            className="mx-auto px-2 tablet:px-0"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlideshow;
