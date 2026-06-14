"use client";

import { ctaData } from "@/data/aboutData";

export default function CTAContent() {
  const { heading, description } = ctaData;

  return (
    <div className="flex flex-col text-left">
      <h2 className="text-white font-bold leading-tight font-heading tracking-tight text-4xl sm:text-5xl lg:text-[52px]">
        {heading}
      </h2>
      <p className="text-white/90 text-[15px] sm:text-base leading-relaxed font-sans font-normal mt-4 sm:mt-5 max-w-md">
        {description}
      </p>
    </div>
  );
}
