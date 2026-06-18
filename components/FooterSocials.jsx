"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function FooterSocials() {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="w-5 h-5" />,
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/919676543210",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white transition-colors duration-300 hover:bg-[#DC241C] hover:border-[#DC241C]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
