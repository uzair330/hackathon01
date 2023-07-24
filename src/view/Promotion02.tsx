import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

const Promotion02 = () => {
  return (
    <div className="grid lg:grid-cols-4 justify-items-center gap-2">
      <div className="md:col-span-2 gap-2 grid w-full">
        <div className="  bg-slate-200  w-full md:px-10 flex items-end ">
          <div className="flex flex-col md:flex-row w-full items-center bg-slate-200 md:justify-center ">
            <div className="px-2  h-full">
              <h1 className="text-2xl font-bold ">GET UPTO </h1>
              <span className="text-3xl font-bold">60%</span>
              <p>For the summer season</p>
            </div>
            <div className="lg:w-[280] lg:h-[300] md:w-[290] md:h-[270] w-[210] h-[220] ">
              <Image src={"/pro1.webp"} width={250} height={270} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#212121]  lg:h-full h-[180px]  text-white ">
          <div className="flex justify-center items-center text-center">
            <div className="col-span-2 ">
              <div className="text-4xl font-bold pt-6 pb-2">
                GET 30% <span className="text-5xl"> OFF</span>
              </div>
              <div className="p-3 uppercase">Use Promo code</div>
              <div className="">
                <span className="bg-[#474747] p-2 px-8 rounded-md font-semibold text-xl">
                  DINEWEKENDSALE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D6D6D8] h-full w-full ">
        <div className="px-8 py-5 ">
          <div className=" text-lg">Flex Push Button Bomber</div>
          <div className="flex">
            <div className="line-through">$100.00</div>
            <div className="px-1 font-bold">$75.00</div>
          </div>
        </div>
        <div className="flex justify-center pt-1  ">
          <Image src={"/pro2.webp"} width={220} height={362} alt="" />
        </div>
      </div>

      <div className="bg-[#EFE1C7] h-full w-full ">
        <div className="px-8 py-5 ">
          <div className="text-lg">Flex Push Button Bomber</div>
          <div className="flex">
            <div className="line-through">$100.00</div>
            <div className="px-1 font-bold">$75.00</div>
          </div>
        </div>
        <div className="flex justify-center  ">
          <Image src={"/pro3.webp"} width={220} height={362} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promotion02;
