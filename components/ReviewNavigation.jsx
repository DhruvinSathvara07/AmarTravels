"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewNavigation({ onPrev, onNext }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrev}
        aria-label="Previous reviews"
        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-105 hover:bg-[#DC241C] hover:text-white hover:border-[#DC241C] hover:shadow-[0_0_20px_rgba(220,36,28,0.3)] active:scale-95 shrink-0"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={2} />
      </button>
      <button
        onClick={onNext}
        aria-label="Next reviews"
        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-105 hover:bg-[#DC241C] hover:text-white hover:border-[#DC241C] hover:shadow-[0_0_20px_rgba(220,36,28,0.3)] active:scale-95 shrink-0"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={2} />
      </button>
    </div>
  );
}
