"use client";

import { BadgeCheck, MapPin, IndianRupee, User } from "lucide-react";

export const servicesHeroData = {
  label: "OUR SERVICES",
  heading: {
    plainText: "Comfortable Journeys,",
    subText: "Trusted ",
    highlightedText: "Every Time",
    className: "max-w-[600px] text-3xl sm:text-4xl md:text-5xl lg:text-[46px]"
  },
  description: "Amar Travels offers the best car rental near me and luxury bus booking across Gujarat. From corporate travel services to wedding car rental in Ahmedabad, our expert drivers and premium vehicles ensure a safe and comfortable journey.",
  descriptionClassName: "text-[13px] sm:text-[14px] max-w-[420px]",
  cta: {
    text: "Book Now",
    href: "/booking"
  },
  features: [
    {
      Icon: MapPin,
      title: "Anywhere",
      description: "Pan India presence"
    },
    {
      Icon: IndianRupee,
      title: "Affordable",
      description: "Best value pricing"
    },
    {
      Icon: User,
      title: "Experts",
      description: "Professional drivers"
    }
  ],
  image: {
    src: "/herosection.webp",
    alt: "Amar Travels Services"
  }
};
