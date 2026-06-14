"use client";

import ContactForm from "./ContactForm";
import ContactMapCard from "./ContactMapCard";
import OfficeCard from "./OfficeCard";

export default function ContactFormSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-12">
      {/* Background Decorative Element */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-radial from-slate-50 to-transparent opacity-80 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Side - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Side - Map and Office Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ContactMapCard />
            <OfficeCard />
          </div>

        </div>
      </div>
    </section>
  );
}
