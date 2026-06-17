"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero({ data }) {
  const { label, heading, description, cta, image } = data || {};

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
    <section className="relative w-full min-h-[60vh] lg:min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={image?.src || "/herosection.png"}
          alt={image?.alt || "Amar Travels landscape background"}
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
          {label && (
            <motion.p variants={itemVariants} className="text-[#DC241C] text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase">
              {label}
            </motion.p>
          )}

          {/* Main Heading */}
          {heading && (
            <motion.h1 variants={itemVariants} className="text-dark-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {heading.plainText && <>{heading.plainText}<br /></>}
              {heading.subText && <>{heading.subText}</>}
              {heading.highlightedText && <span className="text-[#DC241C] font-caveat font-normal">{heading.highlightedText}</span>}
              {heading.postText && <>{heading.postText}</>}
            </motion.h1>
          )}

          {/* Description */}
          {description && (
            <motion.p variants={itemVariants} className="text-dark-heading text-base sm:text-lg font-medium leading-relaxed max-w-[90%] mt-2">
              {description}
            </motion.p>
          )}

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link 
              href={cta?.href || "tel:+919876543210"} 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#DC241C] border border-[#DC241C] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-transparent hover:text-[#DC241C] hover:shadow-none shadow-[0_8px_20px_rgba(220,36,28,0.3)] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              {cta?.text || "Call Now"}
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
