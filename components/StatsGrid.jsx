"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { storyData } from "@/data/aboutData";

export default function StatsGrid() {
  const { stats } = storyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full h-full flex items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            Icon={stat.Icon}
            value={stat.value}
            label={stat.label}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}
