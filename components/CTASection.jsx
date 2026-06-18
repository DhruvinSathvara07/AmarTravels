"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { handleContactAction } from "@/utils/contactUtils";

export default function CTASection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full rounded-[32px] bg-gradient-to-r from-[#DC241C] to-[#E53935] p-10 md:p-14 flex flex-col items-center justify-center text-center relative overflow-hidden">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>

          {/* Content */}
          <div className="text-white relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight font-poppins">
              Ready to Book Your Journey?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8">
              Choose from our premium fleet and travel comfortably across India.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={handleContactAction}
                aria-label="Contact Amar Travels"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#DC241C] px-8 py-4 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto cursor-pointer"
              >
                Book Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleContactAction}
                aria-label="Contact Amar Travels"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                <Phone size={20} />
                Call Us
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
