"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";
import ReviewNavigation from "./ReviewNavigation";
import { reviewData } from "@/data/aboutData";

export default function ReviewSection() {
  const { label, heading, reviews: initialReviews } = reviewData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [reviews, setReviews] = useState(initialReviews);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data.reviews && data.reviews.length > 0) {
            // Prepend Google reviews to existing ones to keep the slider full
            // Filter out exact duplicates by name just in case
            const existingNames = new Set(data.reviews.map(r => r.name.toLowerCase()));
            const filteredInitial = initialReviews.filter(r => !existingNames.has(r.name.toLowerCase()));

            setReviews([...data.reviews, ...filteredInitial]);
          }
        }
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGoogleReviews();
  }, [initialReviews]);

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
    <section className="relative w-full pt-4 pb-16 lg:pt-8 lg:pb-20 overflow-hidden z-10"
      style={{ backgroundImage: "url('/reviewsectionbackgroundimage.webp')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Dark or light overlay for readability if needed, though we can start with just the image. The user just said "use this image as background". Let's add a white/transparent overlay if text needs it, or just a simple overlay. Actually, let's keep it simple first. */}
      <div className="absolute inset-0 bg-white/80 -z-10" />

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

            {/* QR Code Section for Google Reviews */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-center justify-center border-t border-slate-200/60 pt-12"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2 font-heading">
                  Enjoyed your journey?
                </h3>
                <p className="text-[#475569]">
                  Scan the QR code below or click the button to leave us a review on Google!
                </p>
              </div>

              <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 bg-white hover:-translate-y-2 transition-transform duration-300">
                <Image
                  src="/googlereview.jpeg"
                  alt="Scan to Rate Us on Google - Amar Travels"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <a
                href="https://share.google/p6xGTkZ9ouc5sKKEc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-[#DC241C] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#b01c15] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Write a Review
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
