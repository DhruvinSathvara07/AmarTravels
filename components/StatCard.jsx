"use client";

import { motion } from "framer-motion";

export default function StatCard({ Icon, value, label, index }) {
  const cardVariants = {
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
      variants={cardVariants}
      whileHover={{ 
        y: -6,
        borderColor: "rgba(220, 36, 28, 0.2)",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.08)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        y: { duration: 0.25 }
      }}
      className="flex items-center gap-5 md:gap-6 rounded-2xl p-6 md:p-7 border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer"
    >
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full bg-[#DC241C]/[0.08] flex items-center justify-center text-[#DC241C] shrink-0">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>

      {/* Text Group */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-3xl md:text-[38px] font-bold text-[#0f172a] leading-none font-heading tracking-tight">
          {value}
        </span>
        <span className="text-[#64748b] text-[14px] md:text-[15px] leading-normal mt-1.5 font-sans font-medium whitespace-pre-line">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
