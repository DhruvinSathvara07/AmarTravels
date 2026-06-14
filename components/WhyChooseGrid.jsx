"use client";

import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseGrid({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-14">
      {features.map((feature, index) => (
        <WhyChooseCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}
