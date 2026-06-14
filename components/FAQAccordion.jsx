"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { faqData } from "@/data/contactData";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-16 max-w-4xl mx-auto xl:max-w-full">
      {faqData.faqs.map((faq, index) => (
        <FAQItem
          key={faq.id}
          item={faq}
          index={index}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
        />
      ))}
    </div>
  );
}
