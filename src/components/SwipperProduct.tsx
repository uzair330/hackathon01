import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwipperCard } from "@/components/SwipperCard";
import { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";
import { Products } from "@/app/utils/mock";
const SwipperProduct = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-center font-bold text-blue-600 md:text-sm text-[10px] pt-28 ">
        PRODUCTS
      </div>
      <div className="flex justify-center font-bold md:text-3xl text-[20px]  pt-3 pb-10 truncate ">
        Check What We Have
      </div>
      <div className="flex justify-center w-[95%]">
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
          {Products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="hover:scale-105 ">
                <SwipperCard
                  key={product.id}
                  title={product.name}
                  price={product.price}
                  img={product.image as StaticImageData}
                  id={product.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperProduct;
