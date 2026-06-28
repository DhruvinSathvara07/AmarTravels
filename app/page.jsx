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
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { homeHeroData } from "@/data/homeData";
import { latestBlogsData } from "@/data/blogData";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas, vehicleSpecificKeywords, tourSpecificKeywords } from "@/data/seoKeywords";

export const metadata = {
  title: "Best Travel Agency, Car & Bus Rental in Ahmedabad | Amar Tours",
  description: "Looking for the best travel agency in Ahmedabad? Amar Tour & Travels offers premier domestic tour packages, along with top-rated car and bus rentals across Gujarat.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas, ...vehicleSpecificKeywords, ...tourSpecificKeywords].join(", "),
  openGraph: {
    title: "Best Travel Agency, Car & Bus Rental in Ahmedabad | Amar Tours",
    description: "Looking for the best travel agency in Ahmedabad? Amar Tour & Travels offers premier domestic tour packages, along with top-rated car and bus rentals across Gujarat.",
    url: "https://www.amartourstravels.com",
    siteName: "Amar Travels & Tours",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Amar Travels & Tours Premium Fleet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const seoTitle = "Best Travel Agency & Tour Operator in Ahmedabad";
  const seoParagraphs = [
    "Welcome to Amar Travels (widely known as Amar Tour & Travels), the top-rated travel agency in Gujarat. If you are searching for the best travels in Ahmedabad, we offer premier domestic tour packages, custom family holiday packages, and expert trip planning. Whether you are looking for a reliable car rental in Ahmedabad, seamless bus booking online, or a comfortable 17 seater tempo traveller on rent in Ahmedabad, we have you covered. Our fleet ensures safe and smooth journeys for every occasion.",
    "Planning a trip? As a leading travel agency in Ahmedabad, we provide top-tier Gujarat tours from Ahmedabad, including the popular Statue of Unity tour package, Somnath Dwarka tour, and memorable all-India holiday packages. Need a vehicle for a special event? Our wedding car rental in Ahmedabad provides elegant cars like Innova Crysta, Swift Dzire, and Kia Carens, as well as reliable Volvo bus on rent in Ahmedabad to make your big day perfect.",
    "Search for taxi service near me, outstation cabs from Ahmedabad, or rent a car for outstation, and you will find Amar Tour and Travels delivering unparalleled comfort. From 56 seater luxury bus hire in Ahmedabad to Urbania on rent in Ahmedabad, our top-rated transportation solutions cover all major local areas including SG Highway, Bopal, Vastrapur, Navrangpura, and Maninagar."
  ];
  const seoKeywords = [
    ...ahmedabadLocationKeywords.slice(0, 8), 
    ...travelsHighVolumeKeywords.slice(0, 8),
    ...vehicleSpecificKeywords.slice(0, 5),
    ...tourSpecificKeywords.slice(0, 5)
  ];

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
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}