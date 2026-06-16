"use client";

import Image from "next/image";
import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseGrid from "./WhyChooseGrid";
import { whyChooseUsData } from "@/data/homeData";

export default function WhyChooseSection() {
  return (
    <section className="relative bg-white py-10 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Top Row: Header (Left) and Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Header Left */}
          <div>
            <WhyChooseHeader />
          </div>
          
          {/* Image Right */}
          <div className="relative w-full h-[250px] sm:h-[280px] lg:h-[300px] rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="/serviceimage6.png" 
              alt="Amar Travels Fleet" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Row: Stats Grid */}
        <WhyChooseGrid features={whyChooseUsData} />
      </div>
    </section>
  );
}
