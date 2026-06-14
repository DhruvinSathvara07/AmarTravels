"use client";

import { motion } from "framer-motion";
import CTAContent from "./CTAContent";
import CTAButton from "./CTAButton";

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleCTA = () => {
    // Navigate to booking or scroll to booking section
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/booking";
    }
  };

  return (
    <section className="relative w-full pb-10 z-20">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        {/* Main Red Gradient Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[36px] overflow-hidden isolate bg-gradient-to-r from-[#DC241C] via-[#e52b22] to-[#c91c14] border border-white/10"
        >
          {/* Subtle Radial Glossy Light Reflection */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_50%)] pointer-events-none z-10" />

          {/* Clean Glassmorphic Sheen */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[1px] pointer-events-none z-10" />

          {/* Inner Grid */}
          <div className="px-8 md:px-12 lg:px-16 py-10 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column - Heading & Description */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-8 z-20 relative text-left"
              >
                <CTAContent />
              </motion.div>

              {/* Right Column - White Button */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-4 z-20 relative flex items-center justify-start lg:justify-end"
              >
                <CTAButton text="Book Your Journey" onClick={handleCTA} />
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
