import Image from "next/image";
import Hero from "@/components/Hero";
import Products from "@/components/Product";
import ShopBelowHero from '@/components/ShopBelowHero'
import Slides from "@/components/Slides";
import SubHero from "@/components/SubHero";
import Cart from "@/components/Cart";
export default function Home() {
  return (
    <main>

      <Hero />
      <Products />
      <ShopBelowHero />
      <Slides />
      <SubHero />
      <Cart />

      
    </main>
  );
}
