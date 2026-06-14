"use client";

import { footerData } from "@/data/aboutData";

export default function FooterContact() {
  const { title, items } = footerData.contact;

  return (
    <div className="flex flex-col text-left">
      <h3 className="text-white font-semibold text-lg mb-6 font-heading tracking-wide">
        {title}
      </h3>
      <ul className="flex flex-col space-y-4">
        {items.map((detail, index) => {
          const IconComponent = detail.Icon;
          return (
            <li key={index} className="flex items-start gap-3.5 group">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#DC241C] transition-transform duration-300 group-hover:scale-110">
                <IconComponent className="w-full h-full" />
              </span>
              <a
                href={detail.href}
                target={IconComponent === footerData.contact.items[2].Icon ? "_blank" : undefined}
                rel={IconComponent === footerData.contact.items[2].Icon ? "noopener noreferrer" : undefined}
                className="text-white/85 text-[15px] font-sans transition-colors duration-300 hover:text-white"
              >
                {detail.value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
