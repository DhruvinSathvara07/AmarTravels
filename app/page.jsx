

import HomeHero from "@/components/home/HomeHero";
import BookingSearchBox from "@/components/home/BookingSearchBox";
import PremiumFleetSection from "@/components/home/PremiumFleetSection";
import PricingSection from "@/components/home/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

import { latestBlogsData } from "@/data/homeData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHero />
      <BookingSearchBox />
      <PremiumFleetSection />
      <PricingSection />
      <ServicesSection limit={3} showExploreButton={true} />
      <MissionSection />
      <ReviewSection />
      <WhyChooseSection />
      <BlogSection blogs={latestBlogsData} limit={3} showExploreButton={true} />
      <CTASection />
    </main>
  );
}

