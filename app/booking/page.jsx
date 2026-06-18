"use client";

import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";
import FleetSection from "@/components/FleetSection";
import CTASection from "@/components/CTASection";

export default function BookingPage() {
  const bookingHeroData = {
    label: "BOOK YOUR RIDE",
    heading: {
      plainText: "Comfortable Journeys,",
      subText: "Trusted ",
      highlightedText: "Every Time"
    },
    description: "Looking for car rental, bus rental, or tours and travels in Ahmedabad and Gujarat? Amar Travels offers comfortable vehicles for family trips, weddings, business travel, and group tours across Gujarat and India.",
    image: {
      src: "/herosection.png",
      alt: "Gujarat landscape background"
    }
  };

  return (
    <main className="w-full">
      <Hero data={bookingHeroData} />

      <SearchBox />
      <FleetSection />
      <CTASection />
    </main>
  );
}
