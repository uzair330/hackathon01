import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const ProductCard = (props: {
  title: string;
  price: number;
  tag: string;
  category?: string;
  img: string;
  _id?: string;
  current: string;
}) => {
  return (
    <div className="p-5">
      <Link href={`/products/${props.current}`}>
        <Image
          className=""
          src={props.img}
          alt="product"
          width={200}
          height={200}
        />
        <h3 className="font-bold text-lg mt-4">{props.title}</h3>
        <div className="font-bold text-sm text-gray-400">{props.tag}</div>
        <p className="font-bold text-xl">${props.price}</p>
      </Link>
    </div>
  );
};
