import Image from "next/image"
import P1 from "/public/pro1.webp";
import P2 from "/public/pro2.webp";
import P3 from "/public/pro3.webp";



import React from 'react'

const Promotion = () => {
  return (
    <section className=" px-3 max-w-[1240px] mx-auto mt-10">
    <div className="">
      <div className="flex justify-center font-bold text-blue-600 md:text-sm text-[10px] pt-16 ">PROMOTIONS</div>
      <div className="flex justify-center font-bold md:text-3xl pt-3 pb-8 text-25px">Our Promotions Events</div>
  
    <div className="grid gap-4 lg:grid-cols-4 w-[90%]">
    <div className="md:col-span-2 grid gap-4 ">
      <div className="bg-[#D6D6D8] h-[180px]  pr-3 ">
        <div className="flex justify-between items-center  ">
        <div className="col-span-2 pl-16 ">
                  <div className="text-3xl font-bold ">
                        GET UP TO <span className="text-5xl"> 60%</span>
                  </div>
                  <div className="">For the summer season</div>
                </div>
                <div className="flex justify-center h-[180px] ">
                  <div className=""></div>
                  <Image src={"/pro1.webp"} width={200} height={210} alt=''  />
                </div>
      </div>
      </div>
      <div className="bg-[#212121]  h-[180px] text-white">
        <div className="flex justify-center items-center text-center">
        <div className="col-span-2 ">
                  <div className="text-4xl font-bold pt-6 pb-2">
                        GET 30% <span className="text-5xl"> OFF</span>
                  </div>
                  <div className="p-3 uppercase">Use Promo code</div>
                  <div className=""><span className="bg-[#474747] p-2 px-8 rounded-md font-semibold text-xl">DINEWEKENDSALE</span></div>
                </div>
                
      </div>
      </div>
  
  
  
    </div>
    <div className="bg-[#EFE1C7] h-[376px] ">
      <div className="px-8 py-5">
      <div className="nowrap">Flex Sweatshirt</div>
      <div className="flex">
        <div className="line-through">$100.00</div>
        <div className="px-1">$75.00</div>
      </div>
      </div>
      <div className="flex justify-center  ">
      <Image src={"/pro2.webp"} width={220} height={360} alt=''/>
      </div>
    </div>
    <div className="bg-[#D6D6D8] h-[376px] ">
      <div className="px-8 py-5 ">
      <div className="nowrap">Flex Push Button Bomber</div>
      <div className="flex">
        <div className="line-through">$100.00</div>
        <div className="px-1">$75.00</div>
      </div>
      </div>
      <div className="flex justify-center  ">
      <Image src={"/pro3.webp"} width={220} height={360} alt=''/>
      </div>
    </div>
    
  
  </div>
  </div>
  </section>
  
  )
}

export default Promotion