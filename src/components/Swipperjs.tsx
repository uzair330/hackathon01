import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwipperSliderMain from "./SwipperSliderMain";
import { Products } from "@/app/utils/datafronsanity";
import { SanityProducts } from "@/app/Products";

// import "@/style.css";
const SwipperSlidder = async () => {
  const Pro: SanityProducts[] = await Products();
  //console.log(products);

  return (
    <div className="pt-10 pb-16 ">
      <div className="flex flex-col justify-center items-center pb-10 pt-5">
        <div className="text-xs font-extrabold text-blue-800">Products</div>
        <div className="text-4xl font-bold">Check What We Have</div>
      </div>
      <SwipperSliderMain data={Pro} />
    </div>
  );
};

export default SwipperSlidder;
