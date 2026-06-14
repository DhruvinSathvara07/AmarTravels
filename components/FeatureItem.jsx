"use client";

import { motion } from "framer-motion";

export default function FeatureItem({ Icon, title }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.5, ease: "easeOut" } 
        },
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-start text-left group cursor-pointer"
    >
      <div className="w-11 h-11 rounded-full bg-[#DC241C]/[0.08] flex items-center justify-center text-[#DC241C] mb-3 transition-all duration-300 group-hover:bg-[#DC241C] group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-red/20">
        <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
      </div>
      <h3 className="font-heading font-semibold text-[15px] text-dark-heading tracking-wide">
        {title}
      </h3>
    </motion.div>
  );
}
