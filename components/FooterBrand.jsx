"use client";

import Image from "next/image";
import FooterSocials from "./FooterSocials";
import { footerData } from "@/data/aboutData";

export default function FooterBrand() {
  const { brand } = footerData;

  return (
    <div className="flex flex-col text-left">
      {/* Logo Wrapper */}
      <div className="w-[160px] relative">
        <Image
          src={brand.logo}
          alt="Amar Travels"
          width={160}
          height={52}
          className="object-contain w-auto h-auto rounded-md"
          priority
        />
      </div>

      {/* Description */}
      <p className="text-slate-300 text-[15px] leading-relaxed max-w-xs mt-5 font-sans">
        {brand.description}
      </p>

      {/* Social Icons */}
      <div className="mt-6">
        <FooterSocials />
      </div>
    </div>
  );
}
