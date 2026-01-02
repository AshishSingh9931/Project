export default function QuantitySelector({ value, onChange }) {
  const decrease = () => value > 1 && onChange(value - 1);
  const increase = () => onChange(value + 1);

  return (
    <div
      className="
      flex items-center
      bg-white
      border border-gray-300
      rounded-2xl
      shadow-[0_6px_18px_rgba(0,0,0,0.08)]
    "
    >
      <button
        onClick={decrease}
        className="
        px-4 py-1 text-lg font-bold
        hover:bg-gray-100
        active:scale-95
        transition
      "
      >
        −
      </button>

      <span className="px-5 py-1 font-semibold text-gray-900">
        {value}
      </span>

      <button
        onClick={increase}
        className="
        px-4 py-1 text-lg font-bold
        hover:bg-gray-100
        active:scale-95
        transition
      "
      >
        +
      </button>
    </div>
  );
}
