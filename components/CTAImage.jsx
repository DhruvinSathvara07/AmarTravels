"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ctaData } from "@/data/aboutData";

export default function CTAImage() {
  const { image } = ctaData;

  return (
    <div className="relative w-full h-[240px] sm:h-[320px] lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:h-full lg:w-[42%] lg:overflow-visible shrink-0 select-none">
      {/* Subtle red glow behind vehicle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/25 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Slide in vehicle animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full lg:scale-105 xl:scale-110 lg:origin-bottom-right"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-w-1024px) 100vw, 42vw"
          className="object-cover object-center lg:object-right-bottom pointer-events-none"
          priority
        />
      </motion.div>

      {/* Desktop Artistic Brush Stroke Overlay (Left Edge) */}
      <svg
        viewBox="0 0 100 500"
        preserveAspectRatio="none"
        className="absolute top-0 bottom-0 -left-0.5 h-full w-16 md:w-20 fill-[#e52b22] pointer-events-none z-10 hidden lg:block"
      >
        <path d="M100,0 
                 C90,15 85,25 75,35 
                 C65,45 55,30 45,50 
                 C35,70 80,65 65,90 
                 C50,115 40,100 30,130 
                 C20,160 75,150 60,180 
                 C45,210 35,195 25,220 
                 C15,245 80,230 65,260 
                 C50,290 40,275 30,310 
                 C20,345 75,335 60,370 
                 C45,405 35,390 25,420 
                 C15,450 85,445 70,475 
                 C55,490 70,495 100,500 Z" />
      </svg>

      {/* Desktop Soft Edge Gradient Mask */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#e52b22] via-[#e52b22]/30 to-transparent pointer-events-none z-10 hidden lg:block" />

      {/* Mobile Artistic Brush Stroke Overlay (Top Edge) */}
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 right-0 -translate-y-[85%] w-full h-12 fill-[#e52b22] pointer-events-none z-10 lg:hidden"
      >
        <path d="M0,100 
                 C15,90 25,85 35,75 
                 C45,65 30,55 50,45 
                 C70,35 65,80 90,65 
                 C115,50 100,40 130,30 
                 C160,20 150,75 180,60 
                 C210,45 195,35 220,25 
                 C245,15 230,80 260,65 
                 C290,50 275,40 310,30 
                 C345,20 335,75 370,60 
                 C405,45 390,35 420,25 
                 C450,15 445,85 475,70 
                 C490,55 495,70 500,100 Z" />
      </svg>

      {/* Mobile Soft Edge Gradient Mask */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#e52b22] via-[#e52b22]/30 to-transparent pointer-events-none z-10 lg:hidden" />
    </div>
  );
}
