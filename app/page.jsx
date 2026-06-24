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
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "Amar Tour & Travels | Best Car Rental & Bus Rental in Ahmedabad",
  description: "Book the best car rentals, AC buses, and tour packages with Amar Travels (Amar Tour & Travels) in Ahmedabad. Safe, reliable, and comfortable journeys across Gujarat.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "Amar Tour & Travels | Best Car Rental & Bus Rental in Ahmedabad",
    description: "Book the best car rentals, AC buses, and tour packages with Amar Travels (Amar Tour & Travels) in Ahmedabad. Safe, reliable, and comfortable journeys across Gujarat.",
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
  const seoTitle = "Best Tour and Travels & Car Rental Agency in Ahmedabad";
  const seoParagraphs = [
    "Welcome to Amar Travels (also widely known as Amar Tour & Travels), the top-rated travel agency in Gujarat. Whether you are looking for a reliable car rental in Ahmedabad, seamless bus booking online, or a comfortable tempo traveller on rent in Ahmedabad, we have you covered. Our fleet ensures safe and smooth journeys for every occasion. From the best car rental Ahmedabad to spacious outstation cabs from Ahmedabad, we offer tailored transportation solutions for individuals, families, and corporate clients.",
    "Planning a trip? We are recognized as the best travels in Ahmedabad (operating as Amar Tours and Travels) for offering top-tier gujarat tours from Ahmedabad, memorable holiday packages, and custom family tour packages. Need a vehicle for a special event? Our wedding car rental in Ahmedabad provides elegant cars and reliable buses to make your big day perfect. Search for taxi service near me or rent a car for outstation, and you will find Amar Tour and Travels delivering unparalleled comfort and safety across all major locations in Ahmedabad, including SG Highway, Bopal, Vastrapur, and more."
  ];
  const seoKeywords = [...ahmedabadLocationKeywords.slice(0, 8), ...travelsHighVolumeKeywords.slice(0, 8)];

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