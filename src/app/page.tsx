"use client"
import SwipperProduct from "@/components/SwipperProduct";
import Unique2 from "@/components/Unique02";
import { Hero } from "@/view/Hero";
import { ProductList } from "@/view/ProductList";
import Promotion from "@/view/Promotion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
<Promotion />
      {/* <ProductList /> */}
      <SwipperProduct />
      <Unique2 />
    </>
  );
}
