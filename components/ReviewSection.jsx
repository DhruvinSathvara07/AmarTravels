"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReviewSlider from "./ReviewSlider";
import ReviewNavigation from "./ReviewNavigation";
import { reviewData } from "@/data/aboutData";

export default function ReviewSection() {
  const { label, heading, reviews } = reviewData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const maxIndex = Math.max(0, reviews.length - visibleCards);
  const totalDots = reviews.length - visibleCards + 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-20 overflow-hidden z-10">
      {/* Premium subtle radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-red-50/50 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[450px] h-[450px] bg-blue-50/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 lg:gap-12"
        >
          {/* Centered Header Row */}
          <motion.div
            variants={itemVariants}
            className="w-full text-center flex flex-col items-center justify-center"
          >
            <div>
              <span className="uppercase tracking-[0.2em] text-[13px] font-medium text-[#DC241C] mb-4 block font-heading text-center">
                {label}
              </span>
              <h2 className="text-[#0f172a] font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight font-heading tracking-tight text-center">
                {heading.plainText}<span className="text-[#DC241C]">{heading.highlightedText}</span>{heading.postText}
              </h2>
            </div>
          </motion.div>

          {/* Slider Row */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <ReviewSlider
              reviews={reviews}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              visibleCards={visibleCards}
              setVisibleCards={setVisibleCards}
            />

            {/* Centered Navigation Buttons below slider */}
            {maxIndex > 0 && (
              <div className="mt-8 flex justify-center">
                <ReviewNavigation onPrev={handlePrev} onNext={handleNext} />
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
