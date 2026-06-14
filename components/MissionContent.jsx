"use client";

import { motion } from "framer-motion";

import { missionData } from "@/data/aboutData";

export default function MissionContent() {
  const { label, heading, description } = missionData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col text-left justify-center h-full"
    >
      {/* Label Tag */}
      <motion.span
        variants={itemVariants}
        className="uppercase tracking-[0.2em] text-[13px] font-medium text-[#DC241C] mb-4 block font-heading"
      >
        {label}
      </motion.span>

      {/* Main Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-white font-bold leading-tight font-heading tracking-tight mb-4 text-2xl sm:text-3xl lg:text-[36px] whitespace-pre-line"
      >
        {heading}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-slate-300 text-sm md:text-[15px] leading-relaxed font-sans font-normal max-w-sm"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
