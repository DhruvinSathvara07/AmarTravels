"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as LucideIcons from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Car;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-red-100 transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[#DC241C]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0f172a] font-poppins leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-slate-500 text-[14px] leading-relaxed font-inter pl-1">
          {service.description}
        </p>
      </div>
      <div className="px-5 pb-5 mt-auto">
        <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
