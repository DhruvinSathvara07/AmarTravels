"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { whyChooseUsData } from "@/data/homeData";

export default function StatsSection() {
  const displayFeatures = whyChooseUsData.slice(0, 4);

  return (
    <section className="bg-white py-10 lg:py-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {displayFeatures.map((feature, index) => {
            const Icon = LucideIcons[feature.iconName] || LucideIcons.CheckCircle;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center sm:justify-start text-center sm:text-left"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full border border-[#DC241C] flex items-center justify-center text-[#DC241C] bg-red-50/30">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#DC241C] font-poppins leading-none mb-1">
                    {feature.title}
                  </span>
                  <span className="text-[12px] sm:text-[14px] lg:text-[15px] font-bold text-[#0f172a] font-inter leading-tight">
                    {feature.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
