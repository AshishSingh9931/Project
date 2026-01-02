import { useState } from "react";
import ProductCard from "../components/ProductCard";

import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const images = [cake1, cake2, cake3, cake4];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f4f8] to-[#e6e9ef] flex justify-center px-4 py-14">
      <div className="max-w-6xl w-full">

        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] tracking-tight">
            Product Detail
          </h1>

          <p className="text-gray-500 mt-2">
            Premium handcrafted dessert — crafted with quality & care
          </p>
        </header>

        <ProductCard
          images={images}
          title="Plum Brownie Cake"
          price={99}
          qty={qty}
          setQty={setQty}
          description="A rich, fudgy brownie infused with plum flavors — soft, moist, and baked to perfection. Perfect for desserts and celebrations."
        />

      </div>
    </div>
  );
}
