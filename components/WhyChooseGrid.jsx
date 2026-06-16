"use client";

import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseGrid({ features }) {
  const displayFeatures = features.slice(0, 4);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {displayFeatures.map((feature, index) => (
        <WhyChooseCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}
