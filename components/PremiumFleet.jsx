"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FleetCard from "./FleetCard";
import { bookingVehicles } from "@/data/bookingData";

export default function PremiumFleet() {
  // Show 9 vehicles on the homepage
  const displayVehicles = bookingVehicles.slice(0, 9);

  return (
    <section className="w-full bg-[#FAFAFA] py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Premium Fleet
          </h2>
        </div>

        {/* Grid (3 Rows, 9 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVehicles.map((vehicle, index) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
