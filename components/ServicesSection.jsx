"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceHeader from "./ServiceHeader";
import ServiceGrid from "./ServiceGrid";

const servicesData = [
  {
    id: 1,
    title: "Transport Service",
    description: "Reliable and comfortable transport solutions for all your travel needs.",
    icon: "Bus",
    image: "/serviceimage1.png"
  },
  {
    id: 2,
    title: "Tour Packages",
    description: "Customized Gujarat and outstation tour packages for memorable journeys.",
    icon: "Briefcase",
    image: "/serviceimage2.png"
  },
  {
    id: 3,
    title: "Wedding Car",
    description: "Premium luxury cars available for weddings and special occasions.",
    icon: "Car",
    image: "/serviceimage3.png"
  },
  {
    id: 4,
    title: "Family Trips",
    description: "Comfortable and safe vehicles for family vacations and group travel.",
    icon: "Users",
    image: "/serviceimage4.png"
  },
  {
    id: 5,
    title: "All Type Vehicles Available",
    description: "Sedans, SUVs, Tempo Travellers, Urbania, Luxury Cars and Buses available.",
    icon: "CarFront",
    image: "/serviceimage5.png"
  },
  {
    id: 6,
    title: "Luxury Bus, Creta, Ertiga & Tours Service",
    description: "Luxury buses and premium travel vehicles available for tours and long trips.",
    icon: "BusFront",
    image: "/serviceimage6.png"
  }
];

export default function ServicesSection({ limit = 0, showExploreButton = false }) {
  const displayServices = limit > 0 ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="relative bg-[#ffffff] pt-16 lg:pt-20 pb-10 lg:pb-12 overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-50/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <ServiceHeader />
        <ServiceGrid services={displayServices} />
        
        {showExploreButton && (
          <div className="mt-12 md:mt-16 flex justify-center">
            <Link 
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-gray-200 text-dark-heading rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              Explore the Services
              <ArrowRight size={18} className="text-[#DC241C] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
