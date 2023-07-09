import { ProductCard } from "@/components/productCard";
import { Products } from "@/app/utils/mock";
import { StaticImageData } from "next/image";
export const ProductList = () => {
  const ProductLarge = Products.slice(0, 3);
  const ProductSmall = Products.slice(0, 1);
  return (
    <section className="py-12 flex justify-evenly ">
      <div className="hidden md:block">
        <div className="flex gap-3">
          {ProductLarge.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              img={product.image as StaticImageData}
              category={product.catagory}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <div className="md:hidden">
      {ProductSmall.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price}
              img={product.image as StaticImageData}
              category={product.catagory}
              id={product.id}
            />
          ))}
        
        {/* <ProductCard
          title={ProductLarge[0].name}
          price={ProductLarge[0].price}
          img={ProductLarge[0].image as StaticImageData}
          category={ProductLarge[0].catagory}
          id={ProductLarge[0].id}
        /> */}
      </div>
    </section>
  );
};
