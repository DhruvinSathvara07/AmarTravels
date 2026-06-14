"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeatureItem from "./FeatureItem";

export default function HeroContent({ data }) {
  const { label, heading, description, cta, features } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col text-left justify-center h-full animate-none"
    >
      {/* Small Red Label */}
      <motion.span
        variants={itemVariants}
        className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#DC241C] mb-1.5 block font-heading"
      >
        {label}
      </motion.span>

      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        className={`font-heading font-bold text-dark-heading tracking-[-0.03em] leading-[1.05] mb-3 ${heading.className || "max-w-[500px] text-4xl sm:text-5xl md:text-6xl lg:text-[68px]"}`}
      >
        {heading.plainText}
        {heading.plainText && <br />}
        {heading.subText}<span className="text-[#DC241C]">{heading.highlightedText}</span>
      </motion.h1>

      {/* Description Text */}
      <motion.p
        variants={itemVariants}
        className={`font-normal leading-[1.7] text-body-text mb-5 font-sans ${data.descriptionClassName || "text-[14.5px] max-w-[480px]"}`}
      >
        {description}
      </motion.p>

      {/* CTA Button */}
      {cta && cta.text && (
        <motion.div variants={itemVariants} className="mb-6">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2.5 px-7 py-2.5 border-2 border-[#DC241C] bg-[#DC241C] text-white text-[14.5px] font-semibold rounded-full hover:bg-white hover:text-[#DC241C] transition-all duration-300 group"
          >
            {cta.text}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      )}

      {/* Feature Items Section */}
      {features && features.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100 pt-5"
        >
          {features.map((feature, idx) => (
            <FeatureItem
              key={idx}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}


