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
    <Wrapper>

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-10  pt-5 justify-items-center w-72 md:w-[600px]">

          
          <Image  className="w-96 " src={h1} alt=""  width={500} height={500}/>
          <Image  className="w-96 "src={h2} alt="" width={500} height={500} />
          

          
          <Image className="w-96 " src={h3} alt=""  width={500} height={500}/>
          <Image className="w-96 " src={h4} alt=""  width={500} height={500}/>
          
         
          
        </div>


      </div>
      {/* Right div */}
      <div className="flex-1 lg:items-center md:start-end pl-24">
        <div className="md:h-[560px] md:w-[560px]   hidden bg-[#EFE1C7] rounded-full relative lg:flex justify-center items-center">
          <Image
            className="lg:h-[580px] lg:w-[580px] "
            src={heroimage}
            alt="hero"
          />
        </div>
      </div>
    </section>
    </Wrapper>
  );
};
