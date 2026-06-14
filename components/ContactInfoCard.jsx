"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function ContactInfoCard({ item, index }) {
  const { iconName, heading, mainText, smallText } = item;
  
  // Dynamically resolve the Lucide icon
  const Icon = LucideIcons[iconName];

  // Framer Motion Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1 
      } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative overflow-hidden isolate bg-white rounded-[28px] border border-[#f1f5f9] shadow-[0_10px_40px_rgba(15,23,42,0.04)] p-10 h-full flex flex-col items-center text-center transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_20px_60px_rgba(220,36,28,0.08)] hover:border-[#fee2e2] group"
    >
      {/* Subtle Premium Background Glow Effect on Hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-radial from-[#DC241C]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Top Icon Area */}
      <div className="w-16 h-16 rounded-full bg-[#fff1f1] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        {Icon && <Icon className="w-[28px] h-[28px] text-[#DC241C]" />}
      </div>

      {/* Card Heading */}
      <h3 className="font-heading font-semibold text-[#0f172a] text-[28px] mt-8 tracking-wide">
        {heading}
      </h3>

      {/* Main Text */}
      <p className="font-sans text-slate-700 text-[17px] leading-relaxed mt-4">
        {mainText}
      </p>

      {/* Secondary Small Text */}
      <p className="font-sans text-slate-400 text-[15px] mt-2">
        {smallText}
      </p>
    </motion.div>
  );
}
