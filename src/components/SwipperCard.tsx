import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const SwipperCard = (props: {
  title: string;
  price: number;
  category?: string;
  img: StaticImageData;
  id: number;
}) => {
  return (
    <div className="p-5">
      <Link href={`/products/${props.id}`}>
        <Image className="" src={props.img} alt="product" width={400} />
        <h3 className="font-bold text-lg mt-4">{props.title}</h3>
        
        <p className="font-bold text-lg">${props.price}</p>
        
      </Link>
     
    </div>
  );
};