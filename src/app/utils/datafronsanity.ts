import { client } from "@/lib/sanityclient";


type Iproducts = {
  
}


export const Products = async () => {
  const result =
    await client.fetch(`*[_type == "products"] {
    _id,
    title,
    tag,
    price,
    image,
    category,
      slug {
        current
      }
  }`);
  return result;
};


