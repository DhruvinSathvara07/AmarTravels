"use client";

import { motion } from "framer-motion";

export default function WhyChooseHeader() {
  return (
    <div className="mb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[#DC241C] text-[13px] font-semibold tracking-[0.18em] uppercase mb-4">
          Why Choose Us
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0f172a] leading-tight mt-4 font-poppins">
          Reliable Tours & Travels <br className="hidden lg:block"/> Service in Gujarat
        </h2>
      </motion.div>
    </div>
  );
}
