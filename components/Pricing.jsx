"use client";

import { Check, Car, Crown, Bus, BusFront, Info } from "lucide-react";
import { pricingPlanData } from "@/data/homeData";

const panelFeatures = [
  "Well Maintained Vehicles",
  "No Hidden Charges",
  "On Time Pick & Drop",
  "Best in Class Service",
  "Experienced Drivers",
  "24/7 Customer Support",
  "Fire Safety Vehicles"
];

// Helper to get the correct icon component based on string
const getIcon = (iconName) => {
  switch (iconName) {
    case "Car": return Car;
    case "Crown": return Crown;
    case "Bus": return Bus;
    case "BusFront": return BusFront;
    default: return Car;
  }
};

export default function Pricing() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-[#DC241C] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            OUR TARIFFS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
            Choose Your <span className="text-[#DC241C]">Perfect Plan</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Table Section */}
          <div className="w-full lg:w-[65%] xl:w-[70%] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            
            {/* Table Header (Desktop/Tablet) */}
            <div className="hidden md:grid grid-cols-4 gap-4 bg-[#0f172a] text-white p-5 text-[15px] font-semibold">
              <div className="col-span-1 pl-4">Vehicle Type</div>
              <div className="col-span-1">Seating Capacity</div>
              <div className="col-span-1">Minimum Duration</div>
              <div className="col-span-1">Toll Tax & Parking</div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col divide-y divide-slate-100">
              {pricingPlanData.map((plan, index) => {
                const IconComponent = getIcon(plan.iconName);
                return (
                  <div 
                    key={plan.id} 
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 md:p-6 items-center hover:bg-red-50/30 transition-colors duration-300"
                  >
                    {/* Vehicle Type */}
                    <div className="col-span-1 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-[#0f172a]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a] text-[16px]">{plan.name}</h4>
                        <p className="text-[12px] text-slate-500 mt-0.5 leading-tight">{plan.description}</p>
                      </div>
                    </div>
                    
                    {/* Seating Capacity */}
                    <div className="col-span-1 flex flex-col md:block">
                      <span className="md:hidden text-xs text-slate-400 font-medium uppercase mb-1">Seating Capacity</span>
                      <span className="text-slate-700 font-medium text-[15px]">{plan.capacity}</span>
                    </div>

                    {/* Duration */}
                    <div className="col-span-1 flex flex-col md:block">
                      <span className="md:hidden text-xs text-slate-400 font-medium uppercase mb-1">Minimum Duration</span>
                      <span className="text-slate-700 font-medium text-[15px]">{plan.duration}</span>
                    </div>

                    {/* Toll Tax */}
                    <div className="col-span-1 flex flex-col md:block">
                      <span className="md:hidden text-xs text-slate-400 font-medium uppercase mb-1">Toll Tax & Parking</span>
                      <span className="text-slate-700 font-medium text-[15px]">{plan.tollTax}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Table Footer Note */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center gap-2 mt-auto">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <p className="text-sm text-slate-500 italic">Driver Bata (if outstation) will be applicable.</p>
            </div>
          </div>

          {/* Right Features Panel */}
          <div className="w-full lg:w-[35%] xl:w-[30%] bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] flex flex-col justify-center">
            
            {/* Watermark Icon */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none transform -rotate-12">
              <Car className="w-64 h-64 text-white" />
            </div>

            <h3 className="text-white text-xl font-bold mb-8 relative z-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DC241C] rounded-full inline-block"></span>
              Why Choose Us?
            </h3>

            <ul className="flex flex-col gap-5 relative z-10">
              {panelFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#DC241C] transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/90 font-medium text-[15px] mt-0.5">{feature}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
