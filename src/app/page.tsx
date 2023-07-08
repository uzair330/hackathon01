import { Hero } from "@/view/Hero";
import { ProductList } from "@/view/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <ProductList />
    </>
  );
}
