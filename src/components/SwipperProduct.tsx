"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwipperCard } from "@/components/SwipperCard";
import { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";

import { urlForImage } from "../../sanity/lib/image";
import { Products } from "@/app/utils/datafronsanity";
import Wrapper from "./Wrapper";
import { SanityProducts } from "@/app/Products";

const SwipperProduct = async () => {
  const SwipperData: SanityProducts[] = await Products();
  console.log(SwipperData);
  return (
    
      <section className="">
        
          <div className="pb-10">
            <div className="flex justify-center font-bold text-blue-600 md:text-sm text-[10px] pt-28 ">
              PRODUCTS
            </div>
            <div className="flex justify-center font-bold md:text-3xl text-[20px]  pt-3 pb-10 truncate ">
              Check What We Have
            </div>
            <div className="flex justify-center ">
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
                    slidesPerView: 4,
                  },
                }}
                spaceBetween={10}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {SwipperData.map((product) => (
                  <SwiperSlide key={product._id}>
                    <div className="hover:scale-105 ">
                      <SwipperCard
                        key={product._id}
                        title={product.title}
                        price={product.price}
                        img={urlForImage(product.image).url()}
                        category={product.category}
                        id={product._id}
                        tag={product.tag}
                        current={product.slug.current}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
       
      </section>
    
  );
};

export default SwipperProduct;
