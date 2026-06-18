"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { storyData } from "@/data/aboutData";
import { handleContactAction } from "@/utils/contactUtils";

export default function StoryContent() {
  const { label, heading, description, cta } = storyData;

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
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
      {/* Small Red Label */}
      <motion.span
        variants={itemVariants}
        className="uppercase tracking-[0.2em] text-[13px] font-medium text-[#DC241C] mb-4 block font-heading"
      >
        {label}
      </motion.span>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-[#0f172a] font-bold leading-[1.2] tracking-tight font-heading mb-5 text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px]"
      >
        {heading.plainText}
        <br />
        {heading.subText}<span className="text-[#DC241C]">{heading.highlightedText}</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[#475569] leading-[1.7] max-w-md text-[16px] mb-8 font-sans font-normal"
      >
        {description}
      </motion.p>

      {/* CTA Button */}
      <motion.div variants={itemVariants}>
        <button
          onClick={handleContactAction}
          aria-label="Contact Amar Travels"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-[#DC241C] text-white rounded-xl font-medium border border-[#DC241C] transition-all duration-300 hover:bg-white hover:text-[#DC241C] hover:shadow-lg hover:-translate-y-[2px] cursor-pointer"
        >
          {cta.text}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </motion.div>
  );
}
