"use client";

import { Plane, Briefcase, Heart, Users, MapPin, CalendarHeart } from "lucide-react";
import { premiumServicesData } from "@/data/homeData";

const iconMap = {
  Plane,
  Briefcase,
  Heart,
  Users,
  MapPin,
  CalendarHeart
};

function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || MapPin;

  return (
    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-gray-100 bg-white hover:border-[#DC241C] hover:shadow-[0_4px_20px_rgb(220,36,28,0.06)] transition-all duration-300 cursor-pointer group">
      {/* Icon Container */}
      <div className="w-[38px] h-[38px] shrink-0 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#DC241C] transition-colors duration-300">
        <IconComponent size={18} className="text-[#DC241C] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <div className="flex flex-col min-w-0">
        <h3 className="text-[11px] lg:text-[12px] font-bold text-gray-900 leading-[1.2] mb-0.5 truncate">{service.title}</h3>
        <p className="text-[9px] lg:text-[10px] text-gray-500 leading-[1.3] line-clamp-2">{service.description}</p>
      </div>
    </div>
  );
}

export default function PremiumServicesSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Premium <span className="text-[#DC241C]">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {premiumServicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
