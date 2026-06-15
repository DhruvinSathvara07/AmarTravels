"use client";

import { CarFront, Users, Clock } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/home-hero-bg.png')" }}
      />

      {/* Smoke Effect (Gradient from left to right, covering ~45-50% for smooth fade) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 pt-12 md:pt-0">
        <div className="w-full md:w-[60%] lg:w-[45%] flex flex-col gap-6">
          
          {/* Small Red Label */}
          <p className="text-[#DC241C] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            PREMIUM TRAVEL EXPERIENCE
          </p>

          {/* Main Heading */}
          <h1 className="text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
            Explore Gujarat, <br />
            Create <span className="text-[#DC241C] italic font-serif">Memories</span> <br />
            for a Lifetime
          </h1>

          {/* Paragraph Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[400px]">
            Luxury vehicles, professional drivers and custom tour packages for comfortable and unforgettable journeys across Gujarat.
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-[#DC241C]">
                <CarFront size={16} />
              </div>
              <span className="text-xs font-semibold text-gray-800">Luxury Vehicles</span>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-[#DC241C]">
                <Users size={16} />
              </div>
              <span className="text-xs font-semibold text-gray-800">Professional Drivers</span>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="text-[#DC241C]">
                <Clock size={16} />
              </div>
              <span className="text-xs font-semibold text-gray-800">24/7 Assistance</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
