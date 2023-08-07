"use client";

import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SanityProducts } from "@/app/Products";
import { SwipperCard } from "./SwipperCard";

interface Swip {
  data: SanityProducts[];
}

const SwipperSliderMain = async ({ data }: Swip) => {
  return (
    <div className="">
      <Swiper
        className=""
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <div className="flex justify-center flex-col">
                <Image
                  src={urlForImage(p.image).url()}
                  alt={p.title}
                  width={380}
                  height={405}
                />
                <p className="">{p.title}</p>
                <p className="">${p.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* {data.map((p, index) => (
        <div key={index}>
        <SwiperSlide>
        <div className="flex flex-col justify-center px-5 py-10 items-center">
        <div className="flex flex-col justify-center items-start h-[400px] mx-10 w-full hover:scale-110 ease-in duration-300 gap-3">
        <Image
                  src={urlForImage(p.image[index]).url()}
                  alt={"/"}
                  width={400}
                  height={400}
                />
                </div>
            </div>
          </SwiperSlide>
          </div>
      ))} */}
      </Swiper>
    </div>
  );
};

export default SwipperSliderMain;
