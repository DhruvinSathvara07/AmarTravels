"use client";

export default function ReviewDots({ total, current, onChange }) {
  if (total <= 1) return null;

  return (
    <div className="flex items-center gap-2.5">
      {[...Array(total)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className="relative focus:outline-none py-2"
        >
          <span
            className={`block h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-8 bg-[#DC241C]"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
