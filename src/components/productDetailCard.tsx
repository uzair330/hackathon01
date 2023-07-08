import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
export const ProductDetailCard = (props: {
  title: string;
  price: number;
  category: string;
  img: StaticImageData;
  id: number;
  tag:string
}) => {
  return (

    <div className="flex justify-center gap-3   ">
     

<div className="w-[10%]"><Image src={props.img} alt={props.title} /></div>
<div className="pr-10"><Image src={props.img} alt={props.title} width={600}/></div>
<div className="">
  <div className="text-4xl text-bold pt-14">{props.title}</div>
  <div className="font-bold text-gray-400 text-xl pb-9 ">{props.tag}</div>
  <div className="font-bold text-xl">Select Sizes</div>
  <div className="flex">
  <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">XS</div>
    <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">S</div>
    <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">M</div>
    <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">L</div>
    <div className="bg-gray-100 rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">XL</div>
  </div>
  
  <div className="flex justify-start items-center mb-2 font-bold text-xl"> 
  <div className="">Quantity:</div>
  <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2  border border-black border-r-2">-</div>
    <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2 drop-shadow-sm">1</div>
    <div className=" rounded-full w-8 h-8 flex justify-center items-center m-2  border border-black border-r-2">+</div>
  </div>
  <div className="flex justify-start items-center">
  <Button>
      <ShoppingCart  className="mr-2 h-5 w-5" /> Add to Card
    </Button>
    <div className="py-8 font-bold text-2xl px-5">${props.price}</div>
</div>
</div>

        
     
      
    </div>


  );
};
