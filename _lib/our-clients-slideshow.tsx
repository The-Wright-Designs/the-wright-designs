"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import data from "@/_data/general-data.json";

import "swiper/css";
import "swiper/css/pagination";

const { ourClients } = data;

interface Props {
  cssClasses?: string;
}

const OurClientsSlideshow = ({ cssClasses }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        360: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 6,
          direction: "vertical",
        },
      }}
      rewind={true}
      speed={1000}
      loop
      autoplay={{
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        verticalClass: "swiper-pagination-v",
      }}
      modules={[Autoplay, Pagination]}
      className={`desktopSmall:bg-beige desktopSmall:w-[110px] desktopSmall:h-full desktopSmall:our-clients-gradient ${cssClasses}`}
      style={
        {
          "--swiper-pagination-color": "#C86B7B",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-inactive-color": "#CD7988",
        } as React.CSSProperties
      }
    >
      {ourClients.map(({ src, alt, url }, index) => (
        <SwiperSlide
          key={`${src}-${index}`}
          className="grid place-items-center pb-12 desktopSmall:pb-0 desktopSmall:h-[90px]"
        >
          <Link
            href={url}
            target="_blank"
            className="hover:desktopSmall:opacity-90 ease-in-out duration-150 hover"
            aria-label="Our clients"
          >
            <Image
              src={src}
              alt={alt}
              width={200}
              height={80}
              className={`object-contain w-auto drop-shadow-md mx-auto h-[80px] max-w-[125px] phone:max-w-[200px] tablet:hover:opacity-90 tablet:w-[250px] tablet:h-[100px] desktopSmall:w-[70px] desktopSmall:h-[85px]`}
              sizes="(max-width: 425px) 50vw, (max-width:900px) 25vw, 10vw"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurClientsSlideshow;
