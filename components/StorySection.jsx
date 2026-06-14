"use client";

import StoryContent from "./StoryContent";
import StatsGrid from "./StatsGrid";

export default function StorySection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Decorative Ambient Background Glows */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-slate-50 to-transparent opacity-60 blur-[100px] pointer-events-none -z-10" 
      />
      <div 
        className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-radial from-[#DC241C]/[0.02] to-transparent opacity-40 blur-[120px] pointer-events-none -z-10" 
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-12 items-stretch">
          {/* Left Column - Story Content (40%) */}
          <div className="lg:col-span-4 w-full h-full flex flex-col justify-center">
            <StoryContent />
          </div>

          {/* Right Column - Stats Grid Container (60%) */}
          <div className="lg:col-span-6 w-full h-full flex items-center">
            <StatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
