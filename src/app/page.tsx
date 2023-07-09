"use client"
import SwipperProduct from "@/components/SwipperProduct";
import Unique from "@/components/Unique";
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
      <Unique />
    </>
  );
}
