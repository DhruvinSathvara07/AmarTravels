"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SearchBox from "@/components/SearchBox";
import FleetSection from "@/components/FleetSection";
import CTASection from "@/components/CTASection";

export default function BookingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="w-full">
      <section className="relative w-full min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/herosection.png"
            alt="Gujarat landscape background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side Content */}
          <motion.div 
            className="w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-5 pt-10 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small Red Label */}
            <motion.p variants={itemVariants} className="text-[#DC241C] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase">
              BOOK YOUR RIDE
            </motion.p>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-dark-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Comfortable Journeys,<br />
              Trusted <span className="text-[#DC241C] font-caveat font-normal">Every Time</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-dark-heading text-base sm:text-lg font-medium leading-relaxed mt-2">
              Amar Travels provides a wide range of well-maintained vehicles and professional drivers to make your journey safe, comfortable and memorable.
            </motion.p>
          </motion.div>

        </div>
      </section>
      
      <SearchBox />
      <FleetSection />
      <CTASection />
    </main>
  );
}
