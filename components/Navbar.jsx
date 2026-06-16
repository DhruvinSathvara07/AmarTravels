"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { navbarData } from "@/data/aboutData";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { logo, links, cta } = navbarData;
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = isHomePage && !scrolled
    ? "bg-transparent border-transparent"
    : "bg-white/70 backdrop-blur-xl border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-500 ${navbarClasses}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="object-contain w-auto h-9 sm:h-10"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 text-[14.5px] font-medium tracking-wide transition-colors duration-500 group ${
                  isActive
                    ? "text-[#DC241C]"
                    : "text-slate-800 hover:text-[#DC241C]"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[1.5px] bg-[#DC241C] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Link
            href={cta.href}
            className="px-6 py-2.5 bg-[#DC241C] text-white text-[14.5px] font-semibold rounded-full hover:bg-[#b91c18] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            {cta.text}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-dark-heading hover:text-[#DC241C] transition-colors flex items-center justify-center w-10 h-10"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-center justify-center gap-[5px]">
            <span className={`block h-[2px] bg-current transition-all duration-300 ease-out origin-center ${mobileMenuOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'}`} />
            <span className={`block h-[2px] bg-current transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0 translate-x-4' : 'w-6'}`} />
            <span className={`block h-[2px] bg-current transition-all duration-300 ease-out origin-center ${mobileMenuOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-white border-b border-slate-100 px-6 overflow-hidden"
          >
            <div className="py-4 flex flex-col space-y-4">
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-[15px] font-medium tracking-wide py-1 transition-all duration-300 ${
                      isActive ? "text-[#DC241C]" : "text-dark-heading hover:text-[#DC241C]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href={cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center px-6 py-2.5 bg-[#DC241C] text-white text-[14.5px] font-semibold rounded-full hover:bg-[#b91c18] shadow-md transition-all duration-300 flex items-center gap-2 mt-2"
              >
                {cta.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

