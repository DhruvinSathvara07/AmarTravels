"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/aboutData";

export default function HeroImage({ isAbsolute = false, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full ${
        isAbsolute ? "h-full" : "h-[320px] sm:h-[400px] md:h-[480px]"
      } select-none`}
    >
      {/* Custom SVG ClipPath Definition */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="heroClipPath" clipPathUnits="objectBoundingBox">
            <path d="M 0.21,0 C 0.08,0 0.03,0.08 0.03,0.2 C 0.03,0.5 0.15,0.85 0.28,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Clipped Background Image Wrapper */}
      <div 
        className="w-full h-full overflow-hidden bg-slate-100"
        style={{ 
          clipPath: "url(#heroClipPath)",
          backgroundImage: `url('${data.image.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* 6px Red Curved Border Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path
          d="M 21,0 C 8,0 3,8 3,20 C 3,50 15,85 28,100"
          fill="none"
          stroke="#DC241C"
          strokeWidth="6px"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </motion.div>
  );
}

