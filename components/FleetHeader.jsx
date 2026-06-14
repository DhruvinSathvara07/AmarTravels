"use client";

import { motion } from "framer-motion";

export default function FleetHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[#DC241C] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
          Our Fleet
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0f172a] leading-tight mb-5 font-poppins">
          Our Vehicles <span className="text-[#DC241C]">(Rental Fleet)</span>
        </h2>
        <p className="text-slate-500 text-[16px] leading-relaxed max-w-2xl mx-auto font-inter mt-4">
          A wide range of well-maintained vehicles to suit every travel need.
        </p>
      </motion.div>
    </div>
  );
}
