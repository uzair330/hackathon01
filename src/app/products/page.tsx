import React from "react";
import { ProductCard } from "@/components/productCard";
//import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
import Wrapper from "@/components/Wrapper";
import { Products } from "../utils/datafronsanity";
import { client } from "@/lib/sanityclient";
import { SanityProducts } from "../Products";
import { urlForImage } from "../../../sanity/lib/image";

const AllProducts = async () => {
  const data: SanityProducts[] = await Products();

  return (
    <Wrapper>
      <section className="py-12 flex justify-start flex-wrap gap-8">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            title={product.title}
            price={product.price}
            img={urlForImage(product.image).url()}
            category={product.category}
            tag={product.tag}
            _id={product._id}
            current={product.slug.current}
          />
        ))}
      </section>
    </Wrapper>
  );
};

export default AllProducts;
