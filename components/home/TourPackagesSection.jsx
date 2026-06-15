"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tourPackagesData } from "@/data/homeData";

function TourCard({ pkg }) {
  return (
    <Link href="/packages" className="group block relative w-full aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Background Image */}
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 z-20 flex flex-col gap-1.5">
        <h3 className="text-white font-bold text-sm lg:text-[15px] leading-tight">
          {pkg.title}
        </h3>
        
        <p className="text-gray-300 text-[10px] lg:text-[11px]">
          {pkg.duration}
        </p>
        
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-gray-300 text-[10px] lg:text-[11px]">From</span>
          <span className="text-white font-bold text-sm lg:text-[15px]">
            ₹{pkg.price}
          </span>
        </div>
      </div>
      
    </Link>
  );
}

export default function TourPackagesSection() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Popular <span className="text-[#DC241C]">Tour</span> Packages
          </h2>
          <Link href="/packages" className="group flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#DC241C] transition-colors">
            View All Packages 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tourPackagesData.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

      </div>
    </section>
  );
}
