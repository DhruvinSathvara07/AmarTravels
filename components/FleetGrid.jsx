"use client";

import FleetCard from "./FleetCard";

export default function FleetGrid({ fleet }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-12 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((vehicle, index) => (
          <FleetCard key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </div>
    </div>
  );
}
