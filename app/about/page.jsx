import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MissionSection from "@/components/MissionSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { heroData } from "@/data/aboutData";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "About Us | Amar Travels - Best Travel Agency in Ahmedabad",
  description: "Learn more about Amar Travels, the most trusted travel agency in Ahmedabad. Discover our journey, premium fleet, and commitment to safe and reliable tours.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "About Us | Amar Travels",
    description: "Learn more about Amar Travels, the most trusted travel agency in Ahmedabad.",
    url: "https://www.amartourstravels.com/about",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "About Amar Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function About() {
    const seoTitle = "About The Best Travel Agency in Gujarat";
    const seoParagraphs = [
      "Founded with a vision to revolutionize transportation, Amar Travels has grown to become the most trusted travel agency in Gujarat. Whether you need a simple car rental in Ahmedabad for local errands or require a full-sized luxury bus booking for a corporate event, our mission remains the same: providing safe, comfortable, and reliable journeys. We pride ourselves on maintaining a modern fleet of vehicles, ensuring that every tempo traveller on rent or outstation taxi service meets the highest safety standards.",
      "As expert tour operators in Ahmedabad, we believe that the journey is just as important as the destination. We specialize in curating gujarat tours from Ahmedabad, taking you through vibrant heritage sites and scenic locations with ease. If you're searching for holiday packages or family tour packages that offer seamless travel logistics, our team is ready to assist. With Amar Travels, your wedding car rental in Ahmedabad and corporate travel services are managed by professionals who care about your comfort above all else."
    ];
    
    const seoKeywords = [...ahmedabadLocationKeywords.slice(6, 13), ...travelsHighVolumeKeywords.slice(6, 13)];

    return (
        <main className="min-h-screen bg-white">
            <Hero data={heroData} />
            <StorySection />
            <MissionSection />
            <ReviewSection />
            <WhyChooseSection />
            <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
            <CTASection />
        </main>
    );
}

