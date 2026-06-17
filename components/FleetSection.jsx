"use client";

import FleetGrid from "./FleetGrid";
import FleetFeatures from "./FleetFeatures";
import { bookingVehicles } from "@/data/bookingData";

export default function FleetSection() {
  return (
    <section className="relative bg-[#FAFAFA] pt-16 lg:pt-20 pb-16 lg:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[#DC241C] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            OUR FLEET
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Choose Your <span className="text-[#DC241C]">Perfect</span> Ride
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            A wide range of vehicles to suit every journey and group size.
          </p>
        </div>

        {/* Grid Section */}
        <FleetGrid fleet={bookingVehicles} />

        {/* Features Section */}
        <FleetFeatures />
      </div>
    </section>
  );
}
