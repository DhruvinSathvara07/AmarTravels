"use client";

import Link from "next/link";
import { footerData } from "@/data/aboutData";

export default function FooterServices() {
  const { title, links } = footerData.services;

  return (
    <div className="flex flex-col text-left">
      <h3 className="text-white font-semibold text-lg mb-6 font-heading tracking-wide">
        {title}
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5">
        {links.map((service) => (
          <li key={service.name}>
            <Link
              href={service.href}
              className="inline-block text-slate-300 text-[14px] lg:text-[15px] font-sans transition-all duration-300 hover:text-[#DC241C] hover:translate-x-1"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
