"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/homeData";

function TestimonialCard({ review }) {
  return (
    <div className="flex flex-col p-6 md:p-8 rounded-[20px] bg-white shadow-[0_4px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow h-full">
      <div className="flex items-start gap-3 mb-8">
        <Quote className="text-[#DC241C]/40 shrink-0 rotate-180 mt-1" size={18} fill="currentColor" strokeWidth={0} />
        <p className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-medium">
          {review.text}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
            <Image src={review.image} alt={review.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[14px] font-bold text-gray-900 leading-tight">{review.name}</h4>
            <span className="text-[12px] text-gray-500 leading-tight">{review.location}</span>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#DC241C]" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const totalItems = testimonialsData.length;
  // Start at the middle set so we can scroll left seamlessly immediately
  const [currentIndex, setCurrentIndex] = useState(totalItems); 
  const [isAnimating, setIsAnimating] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  // Duplicate 3 times to create the seamless illusion: [Set 1] [Set 2] [Set 3]
  const displayItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Find the corresponding index in the current middle set
    setCurrentIndex(totalItems + index);
  };

  // Seamless jump logic
  useEffect(() => {
    // Determine if we've scrolled out of the safe middle bounds
    let jumpToIndex = null;
    
    // If we scrolled into the 3rd set
    if (currentIndex >= 2 * totalItems) {
      jumpToIndex = currentIndex - totalItems;
    } 
    // If we scrolled into the 1st set (or if we show 3 items, we might need a buffer, but simple condition works)
    else if (currentIndex <= totalItems - 1) {
      jumpToIndex = currentIndex + totalItems;
    }

    if (jumpToIndex !== null) {
      // Wait for the slide transition (500ms) to complete before jumping
      const transitionTimer = setTimeout(() => {
        setIsJumping(true);
        setCurrentIndex(jumpToIndex);
        
        // Disable jumping mode shortly after rendering the new index
        const resetTimer = setTimeout(() => {
          setIsJumping(false);
          setIsAnimating(false);
        }, 50); // 50ms ensures the browser commits the transition-none frame
        
        return () => clearTimeout(resetTimer);
      }, 500);

      return () => clearTimeout(transitionTimer);
    } else {
      // Standard slide complete reset
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalItems]);

  return (
    <section className="w-full bg-[#FAFAFA] py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-[28px] font-bold text-gray-900">
            What Our <span className="text-[#DC241C]">Customers</span> Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <style dangerouslySetInnerHTML={{__html: `
            .carousel-track {
              --card-width: 100%;
              --gap: 1.5rem;
            }
            @media (min-width: 768px) {
              .carousel-track {
                --card-width: calc((100% - 1.5rem) / 2);
              }
            }
            @media (min-width: 1024px) {
              .carousel-track {
                --card-width: calc((100% - 4rem) / 3);
                --gap: 2rem;
              }
            }
          `}} />
          <div className="overflow-hidden carousel-track w-full">
            <div 
              className={`flex ${isJumping ? 'transition-none' : 'transition-transform duration-500 ease-in-out'}`}
              style={{ 
                gap: "var(--gap)",
                transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--gap))))`
              }}
            >
              {displayItems.map((review, idx) => (
                <div 
                  key={`${review.id}-${idx}`} 
                  style={{ width: "var(--card-width)", flexShrink: 0 }}
                >
                  <TestimonialCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators and Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#DC241C] hover:border-[#DC241C] transition-all cursor-pointer shrink-0"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalItems)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  (currentIndex % totalItems) === idx ? "w-6 bg-[#DC241C]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#DC241C] hover:border-[#DC241C] transition-all cursor-pointer shrink-0"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
