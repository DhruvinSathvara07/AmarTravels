"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Car, Snowflake, PhoneCall } from "lucide-react";

export default function FleetCard({ vehicle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-[6px] hover:scale-[1.02] transition-all duration-300 relative flex flex-col h-full"
    >
      {/* Top Left Badge */}
      <div className="absolute top-4 left-4 bg-[#DC241C] text-white rounded w-8 h-8 flex items-center justify-center text-sm font-medium z-10">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Area */}
      <div className="relative w-full h-[180px] flex items-center justify-center p-6 bg-slate-50/50">
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 line-clamp-2">
          {vehicle.title}
        </h3>

        {/* Info Row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 font-poppins flex-grow">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#DC241C]" />
            <span>{vehicle.seats === 'Any Size' ? vehicle.seats : `${vehicle.seats} Seater`}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-4 h-4 text-[#DC241C]" />
            <span>{vehicle.type}</span>
          </div>
          {vehicle.ac && (
            <div className="flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-[#DC241C]" />
              <span>AC</span>
            </div>
          )}
        </div>

        <Link 
          href="/booking"
          className="mt-auto mx-auto w-full inline-flex items-center justify-center gap-2.5 bg-transparent border border-[#DC241C] text-[#DC241C] rounded-lg px-6 py-3 text-[15px] font-bold hover:bg-[#DC241C] hover:text-white transition-all duration-300"
        >
          <PhoneCall className="w-5 h-5" />
          Book Now
        </Link>
      </div>
    </motion.div>
  );
}
