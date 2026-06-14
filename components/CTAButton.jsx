"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAButton({ text = "Book Your Journey", onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className="bg-white text-[#0f172a] rounded-xl px-7 py-4 inline-flex items-center justify-center gap-2 font-medium shadow-lg border border-white transition-colors duration-300 hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] hover:shadow-xl active:scale-95 shrink-0"
    >
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
}
