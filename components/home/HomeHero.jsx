"use client";

import { ShieldCheck, Clock, Tag, PhoneCall, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
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
          className="w-full lg:w-[50%] xl:w-[45%] flex flex-col gap-5 pt-10 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Red Label */}
          <motion.p variants={itemVariants} className="text-[#DC241C] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase">
            PREMIUM TRAVEL EXPERIENCE
          </motion.p>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-dark-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Explore Gujarat,<br />
            Create <span className="text-[#DC241C] font-caveat font-normal text-[1.1em]">Memories</span><br />
            for a Lifetime
          </motion.h1>

          {/* Features Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-6 mt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#DC241C] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-semibold text-dark-heading">100% Safe & Secure</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="text-[#DC241C] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-semibold text-dark-heading">On Time Service</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Tag className="text-[#DC241C] w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-semibold text-dark-heading">Best Price Guarantee</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link 
              href="tel:+919876543210" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#DC241C] border border-[#DC241C] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-transparent hover:text-[#DC241C] hover:shadow-none shadow-[0_8px_20px_rgba(220,36,28,0.3)] transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </Link>
            
            <Link 
              href="/fleet" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white/20 backdrop-blur-sm border border-transparent text-dark-heading rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white hover:border-[#DC241C] hover:text-[#DC241C] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
