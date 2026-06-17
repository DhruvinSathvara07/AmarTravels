

import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";
import PremiumFleet from "@/components/PremiumFleet";
import Pricing from "@/components/Pricing";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import ArticleSection from "@/components/ArticleSection";
import CTASection from "@/components/CTASection";

import { latestBlogsData, homeHeroData } from "@/data/homeData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero data={homeHeroData} />
      <SearchBox />
      <PremiumFleet />
      <Pricing />
      <ServicesSection />
      <MissionSection />
      <WhyChooseSection />
      <StatsSection />
      <ReviewSection />
      <ArticleSection blogs={latestBlogsData} limit={3} showExploreButton={true} />
      <CTASection />
    </main>
  );
}

