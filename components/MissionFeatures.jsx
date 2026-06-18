"use client";

import { motion } from "framer-motion";
import MissionFeatureItem from "./MissionFeatureItem";
import { missionData } from "@/data/aboutData";

export default function MissionFeatures() {
  const { features } = missionData;

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
      className="grid grid-cols-2 lg:grid-cols-4 gap-y-0 w-full"
    >
      {features.map((feature, idx) => (
        <div key={idx} className={`${feature.borderClass} w-full`}>
          <MissionFeatureItem
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </motion.div>
  );
}
