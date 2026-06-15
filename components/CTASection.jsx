"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#DC241C] flex flex-col md:flex-row shadow-lg">
          
          {/* Left Content Area (Red) */}
          <div className="relative z-10 w-full md:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Ready for Your <br className="hidden lg:block" />
              Next Adventure?
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-8 max-w-md">
              From short trips to long journeys, <br className="hidden lg:block" />
              we make every ride memorable.
            </p>
            
            <Link 
              href="/booking"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#DC241C] px-6 py-3 rounded-md font-bold text-sm w-fit hover:bg-gray-50 transition-colors"
            >
              Book Your Ride
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image Area */}
          <div className="relative w-full md:w-[50%] h-64 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0">
            {/* The torn/brush edge effect using an inline SVG */}
            <div className="hidden md:block absolute left-[-1px] top-0 bottom-0 w-16 md:w-24 z-10 text-[#DC241C]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
                <path d="M0,0 L100,0 C80,20 90,40 60,60 C40,75 70,90 0,100 Z" />
              </svg>
            </div>
            
            <Image
              src="/ctabackgroundimage.png"
              alt="Mercedes Van on mountain road"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
