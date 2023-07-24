import { ProductCard } from "@/components/productCard";
// import { Products } from "@/app/utils/mock";
import { Products } from "@/app/utils/datafronsanity";
import { StaticImageData } from "next/image";
import { ChevronsRight } from "lucide-react";
import { client } from "@/lib/sanityclient";
import { SanityProducts } from "@/app/Products";
import { urlForImage } from "../../../../sanity/lib/image";

const itemSelection = async (cat: string) => {
  const data: SanityProducts[] = await Products();

  return data.filter((products) => products.category === cat);
};

// const itemSelection = () => {
//   const query = ``
// }

export default async function Category({
  params,
}: {
  params: { items: string };
}) {
  const result = await itemSelection(params.items);
  //console.log(result);

  return (
    <section className="py-12 flex justify-center flex-wrap gap-8">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product._id}
            title={product.title}
            price={product.price}
            img={urlForImage(product.image).url()}
            category={product.category}
            _id={product._id}
            tag={product.tag}
            current={product.slug.current}
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
