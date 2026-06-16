"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full rounded-2xl bg-[#DC241C] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-[0_10px_30px_rgba(220,36,28,0.2)] gap-6">
          
          <div className="text-white text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-white/90 text-sm md:text-[15px]">
              From short trips to long journeys, we make every ride memorable. Book your premium travel experience today.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              href="/booking"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#DC241C] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book Your Ride
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
