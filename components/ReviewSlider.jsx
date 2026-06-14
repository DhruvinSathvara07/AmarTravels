"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

export default function ReviewSlider({
  reviews,
  currentIndex,
  setCurrentIndex,
  visibleCards,
  setVisibleCards,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setVisibleCards]);

  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isHovered, setCurrentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (diff > swipeThreshold) {
      // Swipe Left -> Next
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (diff < -swipeThreshold) {
      // Swipe Right -> Prev
      setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const N = reviews.length;
  const trackWidth = (N * 100) / visibleCards;
  const itemWidth = 100 / N;
  const translateX = -currentIndex * itemWidth;

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="flex py-4 select-none"
        style={{ width: `${trackWidth}%` }}
        animate={{ x: `${translateX}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{ width: `${itemWidth}%` }}
            className="px-1.5 md:px-2 shrink-0"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
