"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`bg-white rounded-[22px] border overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.03)] transition-all duration-300 ${
        isOpen
          ? "border-[#fecaca] shadow-[0_15px_50px_rgba(220,36,28,0.06)]"
          : "border-[#eef2f7] hover:border-[#fee2e2] hover:shadow-[0_15px_50px_rgba(220,36,28,0.06)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left px-8 py-6 min-h-[78px] group outline-none"
      >
        <span className="text-[#0f172a] text-[18px] font-medium leading-relaxed font-heading pr-8">
          {item.question}
        </span>
        <span
          className={`shrink-0 transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 group-hover:bg-red-50 ${
            isOpen ? "rotate-45 text-[#DC241C]" : "text-[#0f172a]"
          }`}
        >
          <Plus className="w-5 h-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-7 text-slate-500 leading-relaxed text-[16px] font-sans">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
