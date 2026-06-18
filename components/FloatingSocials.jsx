"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingSocials() {
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);

  // Tooltip auto-show logic with different timings
  useEffect(() => {
    const waInterval = setInterval(() => {
      setShowWaTooltip(true);
      setTimeout(() => setShowWaTooltip(false), 2500);
    }, 6000);

    const callTimeout = setTimeout(() => {
      setShowCallTooltip(true);
      setTimeout(() => setShowCallTooltip(false), 2500);
      
      const callInterval = setInterval(() => {
        setShowCallTooltip(true);
        setTimeout(() => setShowCallTooltip(false), 2500);
      }, 6000);
      
      return () => clearInterval(callInterval);
    }, 3000); // 3 seconds offset
    
    return () => {
      clearInterval(waInterval);
      clearTimeout(callTimeout);
    };
  }, []);

  const WHATSAPP_NUMBER = "919725409908";
  const PHONE_NUMBER = "+919725409908";
  
  const WHATSAPP_MESSAGE = `Hello Amar Travels,\n\nI am interested in your vehicle rental and tours & travels services.\n\nPlease share details.`;

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const callLink = `tel:${PHONE_NUMBER}`;

  const fastRingAnimation = {
    rotate: [
      0, 20, -20, 20, -20, 15, -15, 10, -10, 5, -5, 0, // Fast ringing
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 // Pause
    ],
    scale: [
      1, 1.1, 1.1, 1.1, 1.1, 1.05, 1.05, 1.02, 1.02, 1.01, 1.01, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <>
      {/* WhatsApp - Left */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Now"
        className="fixed left-6 bottom-6 z-[999] flex items-center justify-center bg-[#25D366] text-white rounded-full h-[60px] w-[60px] md:h-[72px] md:w-[72px] shadow-[0_8px_25px_rgba(37,211,102,0.4)] cursor-pointer"
      >
        <AnimatePresence>
          {showWaTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-[45px] bg-[#1a1a1a] text-white text-[13px] font-medium px-3 py-1.5 rounded shadow-lg whitespace-nowrap pointer-events-none"
            >
              WhatsApp Now
              {/* Tooltip Triangle */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1a1a1a]" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div animate={fastRingAnimation}>
          <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
      </a>

      {/* Call - Right */}
      <a
        href={callLink}
        aria-label="Call Now"
        className="fixed right-6 bottom-6 z-[999] flex items-center justify-center bg-[#ef2020] text-white rounded-full h-[60px] w-[60px] md:h-[72px] md:w-[72px] shadow-[0_8px_25px_rgba(239,32,32,0.4)] cursor-pointer"
      >
        <AnimatePresence>
          {showCallTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-[45px] bg-[#1a1a1a] text-white text-[13px] font-medium px-3 py-1.5 rounded shadow-lg whitespace-nowrap pointer-events-none"
            >
              Call Now
              {/* Tooltip Triangle */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1a1a1a]" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div animate={fastRingAnimation}>
          <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </a>
    </>
  );
}
