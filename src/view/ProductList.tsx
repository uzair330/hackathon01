import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
export const ProductList = () => {
  const ProductChecks = Products.slice(0, 3);
  return (
    <section className="py-12 flex justify-evenly ">
     
      {ProductChecks.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.catagory}
          id={product.id}
        />
      ))}
    </section>
  );
};
