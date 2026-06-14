"use client";

import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseGrid from "./WhyChooseGrid";

export const whyChooseData = [
  {
    id: 1,
    title: "Well Maintained Fleet",
    description: "All vehicles are regularly serviced and maintained.",
    icon: "Car",
  },
  {
    id: 2,
    title: "Professional Drivers",
    description: "Experienced, verified and polite drivers for your safety.",
    icon: "Users",
  },
  {
    id: 3,
    title: "Clean & Comfortable",
    description: "Hygienic and comfortable vehicles for every journey.",
    icon: "ShieldCheck",
  },
  {
    id: 4,
    title: "On-Time Service",
    description: "We value your time and ensure punctual service.",
    icon: "Clock3",
  },
  {
    id: 5,
    title: "Affordable Pricing",
    description: "Best rates with transparent and no hidden charges.",
    icon: "MapPin",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative bg-[#ffffff] pb-20 lg:pb-24 pt-8 lg:pt-10 overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <WhyChooseHeader />
        <WhyChooseGrid features={whyChooseData} />
      </div>
    </section>
  );
}
