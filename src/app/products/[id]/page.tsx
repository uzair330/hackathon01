import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import Image, { StaticImageData } from "next/image";
import { ChevronsRight } from "lucide-react";
import P1 from "/public/p1.webp";
import { ProductDetailCard } from "@/components/productDetailCard";
import Wrapper from "@/components/Wrapper";
const itemdetails = (id: number | string) => {
  return Products.filter((products) => products.id == id);
};

export default function ProductId({ params }: { params: { id: string } }) {
  const result = itemdetails(params.id);
  //console.log(result);
  return (
    <section className="bg-gray-50">
      <Wrapper>

      <div className="py-12 flex justify-center items-center flex-wrap gap-8">
      {result.map((product) => (
        <ProductDetailCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.catagory}
          id={product.id}
          tag={product.tag}
        />
      ))}

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white   lg:px-20 lg:py-20  px-2">
<div className="font-bold text-3xl py-5  md:col-span-3">Product Information
<hr className="border border-gray-300 my-4" />
</div>
<div className="font-bold text-xl text-gray-500 py-5 md:col-span-1">PRODUCT DETAILS</div>
<div className="md:col-span-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
<div className="font-bold text-xl text-gray-500 py-5">
PRODUCT CARE
</div>

<div className="">
<ul className="list-disc pl-6 py-5">
  <li>Hand wash using cold water</li>
  <li>Do not use bleach</li>
  <li>Hang it to dry</li>
  <li>Iron on low temperature</li>
</ul>
</div>
      </div>
      
      </Wrapper>
      <div className="h-10 p-5"></div>
    </section>
  );
}



