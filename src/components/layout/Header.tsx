import Image from "next/image";
import logo from "/public/Logo.webp";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { ShoppingCart } from "lucide-react"
export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-6 px-20">
      <Link href="/">
        <Image src={logo} alt="Logo" />
         </Link>
        <ul className="flex gap-x-10 text-lg">
          <li>
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li>
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li>
            <Link href={"/category/kids"}>Kids</Link>
          </li>
          <li>
            <Link href={"/products"}>All Products</Link>
          </li>
          
        </ul>
        <Input type="email" placeholder="What you are Looking for?" className="w-[30%] h-8"/>
        <div className="h-10 w-10 rounded-full bg-gray-300 relative flex justify-center items-center">
        <ShoppingCart className="w-5 h-5" />   
  <div className="w-4 h-4 bg-red-500 text-[11px] rounded-full flex justify-center items-start text-white absolute right-1 top-0.5 ">0</div>
  
</div>

      </div>
    </>
  );
};
