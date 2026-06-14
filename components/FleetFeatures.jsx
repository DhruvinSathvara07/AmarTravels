"use client";

import { motion } from "framer-motion";
import { Car, Clock, MapPin } from "lucide-react";

const features = [
  {
    id: 1,
    title: "All Type Buses & Luxury Cars Available",
    description: "All types of buses and luxury cars available for every kind of journey.",
    icon: Car,
  },
  {
    id: 2,
    title: "24×7 Service",
    description: "Round the clock service anywhere, anytime.",
    icon: Clock,
  },
  {
    id: 3,
    title: "All Over India",
    description: "We provide services all across India.",
    icon: MapPin,
  },
];

export default function FleetFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[24px] border border-slate-200 p-8 flex items-start gap-5 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-[#DC241C]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[#0f172a] font-semibold font-poppins text-[16px] leading-snug mb-2">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-[14px] leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
