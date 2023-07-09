import React from "react";
import { Button } from "./ui/button";
import { Products } from "@/app/utils/mock";
import Image from "next/image";
const Unique02 = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4">
        <div className="md:col-span-2 col-span-1 lg:col-span-1">
<div className="flex flex-col my-5 px-2">
    <div className=""><span className="font-bold text-xl py-3 ">Using Good Quality Materials</span> 
        <p className="pb-20">
        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p></div>
    <div className=""><span className="font-bold text-xl py-3">Modern Fashion Design</span> 
        <p>
        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p></div>
</div>

        </div>
        <div className="md:col-span-2 col-span-1 lg:col-span-1">
        <div className="flex flex-col my-5 px-2">
    <div className=""><span className="font-bold text-xl  ">100% Handmade Products</span> 
        <p className="pb-20">
        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p></div>
    <div className=""><span className="font-bold text-xl py-3">Discount for Bulk Orders</span> 
        <p>
        Lorem ipsum dolor sit amt, consectetur adipiscing elit.
        </p></div>
</div>

        </div>
        <div className="md:col-span-1 col-span-2 lg:col-span-1 flex justify-center p-2">
          
          <Image className="" src={Products[0].image} alt={Products[0].name} />
        </div>
        <div className="md:col-span-3 col-span-2 lg:col-span-1"><div className="py-9">
    <p className="py-5">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
    <div className=""><Button>See All Products</Button></div>
  </div></div>
      </div>
    </>
  );
};

export default Unique02;
