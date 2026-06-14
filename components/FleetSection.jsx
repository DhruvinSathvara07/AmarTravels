"use client";

import FleetHeader from "./FleetHeader";
import FleetGrid from "./FleetGrid";
import FleetFeatures from "./FleetFeatures";

const fleetData = [
  { id: 1, title: "Swift Dzire with Carrier", seats: "4 + 1 Seater", image: "/vehicle1.png" },
  { id: 2, title: "Ertiga SUV", seats: "6 + 1 Seater", image: "/vehicle2.png" },
  { id: 3, title: "Innova Crysta", seats: "7 + 1 Seater", image: "/vehicle3.png" },
  { id: 4, title: "Kia Carens", seats: "6 + 1 Seater", image: "/vehicle4.png" },
  { id: 5, title: "Tufan Cruiser", seats: "13 Seater", image: "/vehicle5.png" },
  { id: 6, title: "Tempo Traveller", seats: "12 to 20 Seater (A/C)", image: "/vehicle6.png" },
  { id: 7, title: "Urbania Premium", seats: "16 Seater", image: "/vehicle7.png" },
  { id: 8, title: "30 Seater Bus", seats: "Available", image: "/vehicle8.png" },
];

export default function FleetSection() {
  return (
    <section className="relative bg-[#ffffff] pt-12 lg:pt-16 pb-12 lg:pb-16 overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <FleetHeader />
        <FleetGrid fleet={fleetData} />
        <FleetFeatures />
      </div>
    </section>
  );
}
