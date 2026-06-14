"use client";

import { contactInfoData } from "@/data/contactData";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactInfoSection() {
  return (
    <section className="relative w-full bg-white pt-20 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {contactInfoData.map((item, index) => (
            <ContactInfoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
