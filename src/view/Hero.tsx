import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroimage from "/public/heroimage.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-y-10 lg:flex-row py-10">
      {/* left div */}
      <div className="flex-1">
        <Badge className="bg-blue-200 text-blue-700 rounded-lg h-12 text-lg ">
          Sale 70%
        </Badge>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-7">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="my-7 text-lg p-8">
          <ShoppingCart className="mr-2 h-6 w-6 " /> Start Shopping
        </Button>
      </div>
      {/* Right div */}
      <div className="flex-1">
        <div className="h-[600px] w-[600px] bg-slate-300 rounded-full relative flex justify-center items-center">
          <Image className="h-[650px] w-[650]" src={heroimage} alt="hero" />
        </div>
      </div>
    </section>
  );
};
