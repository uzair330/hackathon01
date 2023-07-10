import React from 'react'
import Image from "next/image"
import P1 from "/public/pro1.webp";
import P2 from "/public/pro2.webp";
import P3 from "/public/pro3.webp";
const Promo02 = () => {
  return (
    <section className="lg:px-10 px-1 max-w-[1240px] mx-auto mt-10">
      <p className="">Promotions</p>
      <h3 className="my-4  first:mt-0 text-center">Our Promotions Event</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
        <div className="sm:col-span-2 space-y-2">
          <div className=" bg-[#d6d6d8]  flex justify-center items-center px-5">
            <div>
              <h4>
                GET UP TO <span className="text-2xl">60%</span>
              </h4>
              <p>For the summer season</p>
            </div>
            <Image src={"/pro1.webp"} alt="" width={226} height={226} />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#212121] h-48 py-5 text-center text-white">
            <h3>GET 30% Off</h3>
            <p className="text-xs">USE PROMO CODE</p>
            <button className="bg-[#474747] px-8 py-3 tracking-widest text-white text-xs mt-1">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className=" bg-[#efe1c7]">
          <div className="p-5">
            <p>Flex Sweatshirt</p>
            <p className="text-base">
              <span className="line-through text-sm mr-1">$100.00</span> $75.00
            </p>
          </div>
          <Image
            alt=""
            src={"/pro2.webp"}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
        <div className=" bg-[#d7d7d9]">
          <div className="p-5">
            <p className="capitalize">Flex Push button bombar</p>
            <p className="text-base">
              <span className="text-sm line-through mr-1">$225.00</span>$190.00
            </p>
          </div>
          <Image
            alt=""
            src={"/pro3.webp"}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
      </div>
    </section> 
  )
}

export default Promo02