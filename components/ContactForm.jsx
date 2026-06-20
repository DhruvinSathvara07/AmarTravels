"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contactFormData } from "@/data/contactData";

export default function ContactForm() {
  const { heading, description, fields, buttonText } = contactFormData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const WHATSAPP_NUMBER = "919725409908";
    
    let textMessage = `Hello Amar Travels,\n\nI have submitted a new inquiry via the Contact Form:\n`;
    if (formData.fullName) textMessage += `*Name:* ${formData.fullName}\n`;
    if (formData.email) textMessage += `*Email:* ${formData.email}\n`;
    if (formData.subject) textMessage += `*Subject:* ${formData.subject}\n`;
    if (formData.message) textMessage += `*Message:* ${formData.message}\n`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const url = isMobile 
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(textMessage)}`;
    
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <h2 className="font-heading text-[#0f172a] text-[42px] font-bold leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="font-sans text-slate-500 mt-3 text-[16px]">
          {description}
        </p>
      )}

      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className={field.colSpan === 2 ? "md:col-span-2" : "col-span-1"}>
            <label htmlFor={field.id} className="block text-[15px] font-medium text-[#0f172a] mb-1 font-sans">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full min-h-[120px] border-b border-slate-200 bg-transparent px-0 py-2 text-[#0f172a] placeholder:text-slate-300 focus:border-b-[#DC241C] outline-none transition-colors duration-300 font-sans resize-y rounded-none"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full h-[40px] border-b border-slate-200 bg-transparent px-0 text-[#0f172a] placeholder:text-slate-300 focus:border-b-[#DC241C] outline-none transition-colors duration-300 font-sans rounded-none"
              />
            )}
          </div>
        ))}

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="bg-[#DC241C] text-white rounded-xl h-[60px] px-8 font-medium inline-flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#b91c1c] group w-full sm:w-auto"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
