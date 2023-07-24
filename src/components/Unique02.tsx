import React from "react";
import { Button } from "./ui/button";
import { Products } from "@/app/utils/mock";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
const Unique02 = () => {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 ">
        <div className=""></div>
        <div className=""></div>

        <div className="flex  text-4xl font-bold lg:col-span-2">
          Unique and Authentic Vintage Designer Jewellery
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 ">
        <div className="md:col-span-2 col-span-1 lg:col-span-1">
          <div className="flex flex-col mt-16 px-2">
            <div className="">
              <span className="font-bold text-xl py-3 ">
                Using Good Quality Materials
              </span>
              <p className="pb-20">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="">
              <span className="font-bold text-xl py-3">
                Modern Fashion Design
              </span>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 lg:col-span-1">
          <div className="flex flex-col mt-16 px-2 ">
            <div className="">
              <span className="font-bold text-xl  ">
                100% Handmade Products
              </span>
              <p className="xl:pb-28 lg:pb-20 md:pb-20 pb-20">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="">
              <span className="font-bold text-xl py-3">
                Discount for Bulk Orders
              </span>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 col-span-2 lg:col-span-1 flex justify-center ">
          <Link href={"/products"}>
            <Image
              className="scale-120 p-3"
              src={Products[0].image}
              alt={Products[0].name}
            />
          </Link>
        </div>
        <div className="md:col-span-3 col-span-2 lg:col-span-1">
          <div className="">
            <p className="lg:pt-24 pt-5">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="pt-4">
              <Link href={"/products"}>
                <Button>See All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique02;
