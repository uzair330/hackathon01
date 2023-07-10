import React from "react";
import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
import Wrapper from "@/components/Wrapper";
const AllProducts = () => {
  return (
    
    <Wrapper>

    <section className="py-12 flex justify-start flex-wrap gap-8">
      {Products.map((product) => (
        <ProductCard
        key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.catagory}
          tag={product.tag}
          id={product.id}
        />
      ))}
    </section>
        </Wrapper>
  );
};

export default AllProducts;
