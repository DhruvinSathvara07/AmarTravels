"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";

export default function FleetCard({ vehicle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-red-100 transition-all duration-300 relative h-[220px] p-5 lg:p-6 flex flex-col justify-between"
    >
      {/* Top Left Badge */}
      <div className="absolute top-5 left-5 lg:top-6 lg:left-6 bg-[#DC241C] text-white rounded-[8px] w-10 h-10 flex items-center justify-center text-sm font-semibold z-20">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] md:w-[60%] h-[85%] z-0 pointer-events-none">
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-right pr-4 group-hover:scale-[1.05] transition-transform duration-500"
        />
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-10 mt-auto w-[55%] lg:w-[50%] pointer-events-none">
        <h3 className="text-[17px] lg:text-[19px] font-semibold text-[#0f172a] font-poppins leading-snug">
          {vehicle.title}
        </h3>
        <div className="flex items-center gap-2 text-[#DC241C] text-[13px] lg:text-sm font-medium mt-2">
          <Users className="w-4 h-4" />
          <span>{vehicle.seats}</span>
        </div>
      </div>
    </motion.div>
  );
}
