"use client";

import { Award, Users, Car, Headset, ShieldCheck, Tag } from "lucide-react";
import { whyChooseUsData } from "@/data/homeData";

const iconMap = {
  Award,
  Users,
  Car,
  Headset,
  ShieldCheck,
  Tag
};

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#111317] relative py-6 md:py-8 overflow-hidden">
      
      {/* Background Image with Fade */}
      <div 
        className="absolute inset-y-0 right-0 w-1/2 md:w-1/3 z-0 bg-cover bg-right opacity-60"
        style={{ backgroundImage: "url('/ctabackgroundimage.png')", maskImage: "linear-gradient(to right, transparent, black 50%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 50%)" }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Title */}
          <div className="shrink-0 w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-xl md:text-[22px] font-bold text-white tracking-wide">
              Why Choose <span className="text-[#DC241C]">Amar Travels</span>?
            </h2>
          </div>

          {/* Stats Flex/Grid */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-6 xl:gap-10 w-full">
            {whyChooseUsData.map((item) => {
              const IconComponent = iconMap[item.iconName] || Tag;
              return (
                <div key={item.id} className="flex items-center gap-2.5">
                  {/* Icon with thin outline and soft fill */}
                  <div className="w-[38px] h-[38px] shrink-0 rounded-full border border-[#DC241C]/30 bg-[#DC241C]/10 flex items-center justify-center">
                    <IconComponent size={18} className="text-[#DC241C]" strokeWidth={1.5} />
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[13px] leading-none mb-1">{item.title}</span>
                    <span className="text-gray-400 text-[10px] leading-none whitespace-nowrap">{item.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
