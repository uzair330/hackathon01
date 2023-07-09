import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "@/components/productCard";
import { StaticImageData } from "next/image";
// Import Swiper styles
import "swiper/css";
import { Products } from "@/app/utils/mock";
const SwipperProduct = () => {
  return (
    < div className="pb-10">
      <div className="flex justify-center font-bold text-blue-600 text-sm pt-28 ">PRODUCTS</div>
      <div className="flex justify-center font-bold text-4xl pt-3 pb-10">Check What We Have</div>
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
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        // slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="hover:scale-105 shadow-sm">
            <ProductCard
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
