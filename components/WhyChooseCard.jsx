"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function WhyChooseCard({ feature, index }) {
  const Icon = LucideIcons[feature.icon] || LucideIcons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-slate-200 rounded-[22px] p-5 lg:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-[6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-red-100 hover:bg-[#fffdfd] transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#DC241C]" strokeWidth={1.5} />
      </div>
      <h3 className="text-[#0f172a] text-[15px] lg:text-[16px] font-semibold font-poppins leading-tight mb-1.5">
        {feature.title}
      </h3>
      <p className="text-slate-500 text-[13px] leading-relaxed font-inter">
        {feature.description}
      </p>
    </motion.div>
  );
}
