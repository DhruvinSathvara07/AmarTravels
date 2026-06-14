"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { officeCardData } from "@/data/contactData";

export default function ContactMapCard() {
  const { mapIframeUrl } = officeCardData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="relative overflow-hidden rounded-[28px] shadow-[0_15px_50px_rgba(15,23,42,0.06)] border border-slate-100 h-[320px] w-full isolate bg-slate-50"
    >
      <iframe
        src={mapIframeUrl}
        className="w-full h-full object-cover border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
