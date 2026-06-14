"use client";

import { motion } from "framer-motion";

export default function ServiceHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-[#DC241C] text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">
          Our Services
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-tight mb-4 font-poppins">
          All Your Travel Needs, <span className="text-[#DC241C]">All in One Place</span>
        </h2>
        <p className="text-slate-500 text-[15px] leading-relaxed max-w-2xl mx-auto font-inter">
          From local travel to outstation tours, we offer a complete range of transport solutions with luxury vehicles and professional service.
        </p>
      </motion.div>
    </div>
  );
}
