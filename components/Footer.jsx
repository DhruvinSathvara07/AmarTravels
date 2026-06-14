"use client";

import { motion } from "framer-motion";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterSupport from "./FooterSupport";
import FooterContact from "./FooterContact";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // premium cubic-bezier easing
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative w-full z-10 pt-16 pb-10 overflow-hidden isolate bg-gradient-to-r from-[#020817] via-[#081120] to-[#0f172a] shadow-[0_-15px_50px_rgba(0,0,0,0.25)] border-t border-white/10 mt-10"
    >
      {/* BACKGROUND EFFECTS */}
      {/* Subtle blue radial glow in top right */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Subtle indigo radial glow in bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[110px] pointer-events-none -z-10" />

      {/* Cinematic depth overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(15,23,42,0.5),transparent_80%)] pointer-events-none -z-10" />

      {/* Soft glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[0.5px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        {/* INNER FOOTER LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* COLUMN 1 - BRAND */}
          <motion.div variants={columnVariants} className="sm:col-span-2 lg:col-span-1">
            <FooterBrand />
          </motion.div>

          {/* COLUMN 2 - QUICK LINKS */}
          <motion.div variants={columnVariants}>
            <FooterLinks />
          </motion.div>

          {/* COLUMN 3 - SERVICES */}
          <motion.div variants={columnVariants}>
            <FooterServices />
          </motion.div>

          {/* COLUMN 4 - SUPPORT */}
          <motion.div variants={columnVariants}>
            <FooterSupport />
          </motion.div>

          {/* COLUMN 5 - CONTACT INFO */}
          <motion.div variants={columnVariants}>
            <FooterContact />
          </motion.div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <motion.div
          variants={fadeUpVariants}
          className="border-t border-white/10 pt-8 mt-12 text-center"
        >
          <p className="text-slate-400 text-sm font-sans tracking-wide">
            &copy; 2026 Amar Travels. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
