import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import P11 from "/public/11.png";
import P12 from "/public/22.png";
export const ProductDetailCard = (props: {
  title: string;
  price: number;
  category: string;
  img: string;
  id: string;
  tag: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex gap-3">
        <div className="flex flex-col w-[] gap-y-3">
          <div className=" ">
            <Image
              className=" w-[100%]"
              src={props.img}
              alt={props.title}
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="pr-10 ">
          <Image src={props.img} alt={props.title} width={700} height={700} />
        </div>
      </div>

      <div className="">
        <div className="text-4xl text-bold pt-14 ">{props.title}</div>
        <div className="font-bold text-gray-400 text-xl pb-9 ">{props.tag}</div>
        <div className="font-bold text-xl">Select Sizes</div>
        <div className="flex">
          <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm hover:scale-105 hover:cursor-pointer">
            XS
          </div>
          <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm hover:scale-105 hover:cursor-pointer">
            S
          </div>
          <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm hover:scale-105 hover:cursor-pointer">
            M
          </div>
          <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm hover:scale-105 hover:cursor-pointer">
            L
          </div>
          <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm hover:scale-105 hover:cursor-pointer">
            XL
          </div>
        </div>

        <div className="flex justify-start items-center mb-2 font-bold text-xl">
          <div className="">Quantity:</div>
          <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2  border border-black border-r-2">
            -
          </div>
          <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">
            1
          </div>
          <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2  border border-black border-r-2">
            +
          </div>
        </div>
        <div className="flex justify-start items-center">
          <Button>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Card
          </Button>
          <div className="py-8 font-bold text-2xl px-5">${props.price}</div>
        </div>
      </div>
    </div>
  );
};
