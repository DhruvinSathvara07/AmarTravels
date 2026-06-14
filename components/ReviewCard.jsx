"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-[6px] hover:border-[#DC241C]/30 flex flex-col justify-between aspect-square max-w-[380px] mx-auto select-none">
      <div className="flex-1 flex flex-col justify-center">
        <Quote className="text-[#DC241C] opacity-80 w-7 h-7 mb-2" />
        <p className="text-[#475569] leading-relaxed text-xs md:text-sm font-sans">
          "{review.review}"
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-md shrink-0">
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#0f172a] font-semibold text-[14px] md:text-base font-heading">
              {review.name}
            </h4>
            <span className="text-[#64748b] text-[11px] md:text-xs font-sans">
              {review.location}
            </span>
          </div>
        </div>
        
        {/* Star Ratings */}
        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < review.rating ? "text-[#DC241C] fill-[#DC241C]" : "text-slate-200 fill-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
