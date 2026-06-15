"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { premiumFleetData } from "@/data/homeData";

function PremiumFleetCard({ vehicle }) {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
      {/* Vehicle Image */}
      <div className="w-full h-32 md:h-36 relative mb-4 flex items-center justify-center">
        <Image 
          src={vehicle.image} 
          alt={vehicle.title} 
          fill 
          className="object-contain"
        />
      </div>

      {/* Vehicle Info */}
      <div className="mt-auto">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{vehicle.title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">
          {vehicle.seats} • {vehicle.ac ? "AC" : "Non-AC"}
        </p>

        {/* Price & Action */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-400 text-[11px] sm:text-xs mb-0.5">Starting from</p>
            <p className="font-bold text-gray-900 text-base sm:text-lg">
              ₹{vehicle.price} <span className="text-gray-500 text-xs sm:text-sm font-normal">/ km</span>
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
            <ArrowRight size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PremiumFleetSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Premium Fleet
          </h2>
          <Link href="/services" className="group flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#DC241C] transition-colors">
            View All Vehicles 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {premiumFleetData.map((vehicle) => (
            <PremiumFleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

      </div>
    </section>
  );
}
