"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { officeCardData } from "@/data/contactData";

export default function OfficeCard() {
  const { heading, address, buttonText, buttonLink } = officeCardData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-[#fff5f5] rounded-[28px] p-8 border border-[#ffe2e2] relative overflow-hidden isolate shadow-sm"
    >
      <h3 className="font-heading text-[#0f172a] text-[32px] font-semibold">
        {heading}
      </h3>
      
      <div className="font-sans text-slate-600 leading-relaxed mt-5">
        <p className="font-semibold text-slate-800">{address.name}</p>
        <p>{address.line1}</p>
        <p>{address.line2}</p>
        <p>{address.line3}</p>
      </div>

      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#0f172a] rounded-xl px-6 py-3 inline-flex items-center gap-2 mt-6 border border-slate-200 transition-all duration-300 hover:bg-[#DC241C] hover:text-white hover:border-[#DC241C] group font-sans font-medium shadow-sm"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Building Illustration */}
      <Image
        src="/buildingiconimage.png"
        alt="Office Building"
        width={220}
        height={220}
        className="opacity-40 absolute bottom-4 right-4 w-[220px] h-auto object-contain pointer-events-none -z-10"
      />
      
      {/* Background Subtle Effects */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white rounded-full opacity-40 blur-3xl -z-20 pointer-events-none" />
    </motion.div>
  );
}
