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
import Link from "next/link";

interface Swip {
  data: SanityProducts[];
}

const SwipperSliderMain = async ({ data }: Swip) => {
  const t = data[0].slug.current;
  console.log(t);

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
        spaceBetween={25}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="hover:scale-105">
              <div className="bg-gray-50 p-2">
                <div className="flex justify-center flex-col p-3 font-bold ">
                  {/* product/brushed-raglan-sweatshirt */}
                  <Link href={`/products/${p.slug.current}`}>
                    <Image
                      src={urlForImage(p.image).url()}
                      alt={p.title}
                      width={380}
                      height={405}
                    />
                  </Link>
                  <div className="py-4">
                    <p className="font-bold">{p.title}</p>
                    <p className="">${p.slug.current}</p>
                  </div>
                </div>
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
