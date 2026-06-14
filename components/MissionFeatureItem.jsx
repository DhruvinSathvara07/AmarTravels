"use client";

import { motion } from "framer-motion";

export default function MissionFeatureItem({ Icon, title, description }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
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
      variants={itemVariants}
      className="flex flex-col items-center lg:items-start text-center lg:text-left px-6 py-4 transition-all duration-300"
    >
      {/* Icon Circle with Glow */}
      <div
        className="w-16 h-16 rounded-full bg-[#DC241C]/[0.12] border border-[#DC241C]/[0.25] backdrop-blur-md flex items-center justify-center text-[#DC241C] shadow-[0_0_15px_rgba(220,36,28,0.15)] shrink-0"
      >
        <Icon className="w-7 h-7" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mt-4 font-heading tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-[14px] leading-relaxed mt-2 font-sans font-normal max-w-[200px]">
        {description}
      </p>
    </motion.div>
  );
}
