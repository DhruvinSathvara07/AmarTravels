"use client";

import { motion } from "framer-motion";
import { Bus, Headset, MapPin } from "lucide-react";

const features = [
  {
    id: 1,
    title: "All Type Bus and Luxury Car Available",
    description: "We provide all types of luxury cars, buses and tempo travellers for every journey.",
    icon: Bus,
  },
  {
    id: 2,
    title: "24×7 Service",
    description: "Our team is available 24×7 to assist you anytime.",
    icon: Headset,
  },
  {
    id: 3,
    title: "All Over India",
    description: "Travel services available all across India.",
    icon: MapPin,
  },
];

export default function FleetFeatures() {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-[#DC241C]" strokeWidth={1.5} />
              </div>
              <h4 className="text-slate-900 font-bold font-poppins text-lg leading-snug mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
