import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroimage from "/public/heroimage.webp";
import h1 from "/public/h1.webp";
import h2 from "/public/h2.webp";
import h3 from "/public/h3.webp";
import h4 from "/public/h4.webp";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export const Hero = () => {
  return (
    
      <section className="flex flex-col gap-y-10 lg:flex-row py-10">
        {/* left div */}
        <div className="flex-1 lg:w-[60%] md:w-[100%]">
          <Badge className="bg-blue-200 text-blue-700 rounded-lg h-12 text-lg ">
            Sale 70%
          </Badge>

          <h1 className="scroll-m-20  font-extrabold tracking-tight text-5xl my-7">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 px-3">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="my-7 text-lg p-8">
            <ShoppingCart className="mr-2 h-6 w-6 " /> Start Shopping
          </Button>

          <div className="grid grid-cols-2 md:grid-cols-4  gap-y-10  pt-5 justify-items-center ">
            <Image className="w-20 " src={h1} alt="" width={150} height={150} />
            <Image className="w-20 " src={h2} alt="" width={150} height={150} />

            <Image className="w-20 " src={h3} alt="" width={150} height={150} />
            <Image className="w-20 " src={h4} alt="" width={150} height={150} />
          </div>
        </div>
        {/* Right div */}
        <div className="flex-1 lg:items-center md:start-end pl- hidden lg:block">
          <div className="lg:h-[460px] lg:w-[450px] xl:h-[600px] xl:w-[610px]   hidden bg-[#EFE1C7] rounded-full relative lg:flex justify-center items-center">
            <Image
              className="lg:h-[520px] lg:w-[510px] xl:h-[610px] xl:w-[620px] "
              src={heroimage}
              width={600}
              height={620}
              alt="hero"
            />
          </div>
        </div>
      </section>
    
  );
};
