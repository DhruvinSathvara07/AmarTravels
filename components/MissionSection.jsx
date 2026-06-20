"use client";

import Image from "next/image";
import MissionContent from "./MissionContent";
import MissionFeatures from "./MissionFeatures";

export default function MissionSection() {
  return (
    <section className="relative w-full bg-white pb-8 lg:pb-12">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        {/* Isolated Banner Box with background cover, overlay and shadows */}
        <div className="relative isolate rounded-[32px] overflow-hidden border border-white/10 bg-slate-950">
          
          {/* Background Image using Next.js Image Component */}
          <Image
            src="/ctabackgroundimage.webp"
            alt="Amar Travels Mission Background"
            fill
            sizes="(max-w-1440px) 100vw, 1440px"
            className="object-cover object-center -z-20 pointer-events-none"
            priority
          />

          {/* Premium Dark Overlay Gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#020817]/75 via-[#081120]/80 to-[#0f172a]/75 -z-10" 
          />

          {/* Inner Content Grid */}
          <div className="px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column - Mission Content (42% on Desktop) */}
              <div className="lg:col-span-5 w-full h-full lg:border-r lg:border-white/5 lg:pr-8 flex flex-col justify-center">
                <MissionContent />
              </div>

              {/* Right Column - Feature Items Row (58% on Desktop) */}
              <div className="lg:col-span-7 w-full lg:pl-4">
                <MissionFeatures />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
