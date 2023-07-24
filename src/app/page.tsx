"use client";
import ImageWithOverlay from "@/components/ImageWithOverlay";
import Newsletter from "@/components/Newsletter";
import SwipperProduct from "@/components/SwipperProduct";
// import SwipperSlidder from "@/components/SwipperSlidder";/
import Unique2 from "@/components/Unique02";
import Wrapper from "@/components/Wrapper";
import { Hero } from "@/view/Hero";

import Promo02 from "@/view/Promo02";
import Promotion from "@/view/Promotion";
import Promotion02 from "@/view/Promotion02";
import Image from "next/image";
import img from "/public/heroimage.webp";
export default function Home() {
  return (
    <>
      <Hero />
      <Wrapper>{/* <Promotion /> */}</Wrapper>
      <Promotion02 />
      <SwipperProduct />

      <Unique2 />

      <div className="flex justify-center w-full ">
        <div className="  relative w-full flex justify-center h-full">
          <div className="absolute ">
            <div className="text-8xl opacity-10 font-bold pt-24">
              NEWSLETTER
            </div>
          </div>
          <Newsletter />
        </div>
      </div>
    </>
  );
}
