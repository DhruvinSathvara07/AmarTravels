

import HomeHero from "@/components/home/HomeHero";
import BookingSearchBox from "@/components/home/BookingSearchBox";
import PremiumFleetSection from "@/components/home/PremiumFleetSection";
import PricingSection from "@/components/home/PricingSection";
import PremiumServicesSection from "@/components/home/PremiumServicesSection";
import TourPackagesSection from "@/components/home/TourPackagesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LatestBlogsSection from "@/components/home/LatestBlogsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <BookingSearchBox />
      <PremiumFleetSection />
      <PricingSection />
      <PremiumServicesSection />
      <TourPackagesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <LatestBlogsSection />
      <CTASection />
    </main>
  );
}

