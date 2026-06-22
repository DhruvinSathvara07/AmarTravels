import Hero from "@/components/Hero";
import { servicesHeroData } from "@/data/servicesData";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "Our Services | Car & Bus Rental in Ahmedabad",
  description: "Explore the wide range of services offered by Amar Travels including corporate travel, wedding car rentals, family tour packages, and outstation taxi services.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "Our Services | Amar Travels",
    description: "Explore the wide range of services offered by Amar Travels including corporate travel, wedding car rentals, and outstation taxi services.",
    url: "https://www.amartourstravels.com/services",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Amar Travels Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  const seoTitle = "Comprehensive Transportation Services in Gujarat";
  const seoParagraphs = [
    "At Amar Travels, we provide a full spectrum of travel and transportation solutions designed to meet your every need. Our services include offering the best travels in Ahmedabad, providing top-notch vehicles for any occasion. Whether you're searching for an outstation taxi service for a weekend getaway or need comprehensive corporate travel services for your business team, our extensive fleet is at your disposal. We specialize in accommodating both small and large groups with our efficient bus rental ahmedabad and tempo traveller on rent in Ahmedabad.",
    "Beyond simple rentals, we pride ourselves on delivering unforgettable experiences. We curate engaging gujarat tours from Ahmedabad, taking care of all transportation logistics so you can focus on enjoying the journey. If you're organizing a grand event, our wedding car rental in Ahmedabad offers premium luxury cars to make your special day truly spectacular. Browse our holiday packages and family tour packages today to see why we are considered the premier travel agency in the region."
  ];
  
  const seoKeywords = [...ahmedabadLocationKeywords.slice(8, 15), ...travelsHighVolumeKeywords.slice(8, 15)];

  return (
    <main>
      <Hero data={servicesHeroData} />
      <ServicesSection />
      <FleetSection />
      <WhyChooseSection />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}
