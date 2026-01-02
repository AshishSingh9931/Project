import { useEffect, useState } from "react";
import QuantitySelector from "./QuantitySelector";

export default function ProductCard({
  images,
  title,
  price,
  description,
  qty,
  setQty,
}) {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="
      bg-white rounded-3xl border border-gray-200/70
      shadow-[0_10px_28px_rgba(0,0,0,0.08)]
      hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
      transition-all duration-300 hover:-translate-y-[2px]
      p-6 md:p-8
    ">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">

        {/* IMAGE SLIDER */}
        <div className="w-full md:w-1/2 relative">

          <div className="overflow-hidden rounded-2xl h-[260px] md:h-[340px]">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="cake"
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-all duration-700

                  ${i === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"}
                `}
              />
            ))}
          </div>

          {/* SLIDER INDICATORS */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  h-2.5 w-2.5 rounded-full transition
                  ${i === index
                    ? "bg-gray-900 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"}
                `}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2">

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] tracking-tight">
            {title}
          </h2>

          <p className="text-[#15803d] font-bold text-xl mt-1">₹{price}</p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {description}
          </p>

          {/* Quantity */}
          <div className="mt-6 flex items-center gap-4">
            <span className="font-semibold text-gray-800">Quantity</span>
            <QuantitySelector value={qty} onChange={setQty} />
          </div>

          {/* CTA */}
          <button
            className="
              mt-6 w-full py-3 rounded-xl
              bg-[#0b132b] text-white font-semibold tracking-wide
              shadow-[0_8px_22px_rgba(11,19,43,0.35)]
              hover:bg-[#111c3d]
              hover:shadow-[0_12px_32px_rgba(11,19,43,0.45)]
              hover:scale-[1.02]
              active:scale-95
              transition-all duration-300
            "
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}
