"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function WhyChooseCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50/80 rounded-2xl p-6 h-[230px] w-full flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
    >
      <h3 className="text-[#DC241C] text-3xl lg:text-4xl font-bold font-poppins mb-2">
        {feature.title}
      </h3>
      <p className="text-slate-600 text-[14.5px] lg:text-[15px] font-medium font-inter">
        {feature.subtitle}
      </p>
    </motion.div>
  );
}
