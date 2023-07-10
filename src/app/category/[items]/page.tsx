import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
import { ChevronsRight } from "lucide-react";
const itemSelection = (cat: string) => {
  return Products.filter((products) => products.catagory === cat);
};

export default function Category({ params }: { params: { items: string } }) {
  const result = itemSelection(params.items);
  //console.log(result);
  return (
    <section className="py-12 flex justify-center flex-wrap gap-8">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.catagory}
            id={product.id}
            tag={product.tag} 
          />
        ))
      ) : (
        <p className="font-bold text-5xl flex items-center justify-center">
          No product found for {params.items}
        </p>
      )}
    </section>
  );
}
