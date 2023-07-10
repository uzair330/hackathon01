import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import Image, { StaticImageData } from "next/image";
import { ChevronsRight } from "lucide-react";
import P1 from "/public/p1.webp";
import { ProductDetailCard } from "@/components/productDetailCard";
const itemdetails = (id: number | string) => {
  return Products.filter((products) => products.id == id);
};

export default function ProductId({ params }: { params: { id: string } }) {
  const result = itemdetails(params.id);
  //console.log(result);
  return (
    <section className="">
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
      <div className="">1</div>
    </section>
  );
}



