"use client";

import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";
import { faqData } from "@/data/contactData";

export default function FAQSection() {
  const { label, heading, description } = faqData;

  return (
    <section className="relative w-full bg-white pt-12 pb-24 overflow-hidden isolate">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial from-slate-50 to-transparent opacity-60 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Top Heading Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 w-full max-w-4xl mx-auto xl:max-w-full">
          
          {/* Left Side: Label & Heading */}
          <div className="lg:w-[60%] flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-sans font-medium text-[13px] text-[#DC241C] uppercase tracking-[0.2em]"
            >
              {label}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-heading font-bold text-[#0f172a] text-4xl md:text-5xl xl:text-[46px] leading-tight whitespace-pre-line"
            >
              {heading.plainText}
              <span className="text-[#DC241C]">{heading.highlightedText}</span>
            </motion.h2>
          </div>

          {/* Right Side: Description */}
          <div className="lg:w-[40%] flex lg:justify-end w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-sans text-slate-500 text-[17px] leading-relaxed max-w-md lg:text-right"
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Accordion List container */}
        <FAQAccordion />

      </div>
    </section>
  );
}
