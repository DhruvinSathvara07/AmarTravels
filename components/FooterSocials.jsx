"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function FooterSocials() {
  const WHATSAPP_NUMBER = "919725409908";
  const WHATSAPP_MESSAGE = `Hello Amar Travels,\n\nI am interested in your vehicle rental and tours & travels services.\n\nPlease share details.`;

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    const url = isMobile 
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="w-5 h-5" />,
      href: "#",
      onClick: handleWhatsAppClick,
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/amar_travels_9094/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "#",
      onClick: handleWhatsAppClick,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          onClick={social.onClick}
          target={social.href !== "#" ? "_blank" : undefined}
          rel={social.href !== "#" ? "noopener noreferrer" : undefined}
          aria-label={social.name}
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300 hover:bg-[#DC241C] hover:border-[#DC241C] cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
