import { notFound } from "next/navigation";
import { ahmedabadAreas, ahmedabadLocationKeywords, travelsHighVolumeKeywords } from "@/data/seoKeywords";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";

// Helper functions for URL safety
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const unslugify = (slug) => {
  const match = ahmedabadAreas.find(area => slugify(area) === slug);
  return match || null;
};

// 1. Tell Next.js to statically pre-build a page for every single area in our array!
export async function generateStaticParams() {
  return ahmedabadAreas.map((area) => ({
    area: slugify(area),
  }));
}

// 2. Generate highly specific SEO metadata for this exact location
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const areaName = unslugify(resolvedParams.area);

  if (!areaName) {
    return { title: "Location Not Found" };
  }

  const title = `Best Travels & Car Rental in ${areaName}, Ahmedabad`;
  const description = `Looking for the best travel agency in ${areaName}? Amar Travels offers the best car rental, ac bus booking, and outstation cabs directly from ${areaName}, Ahmedabad.`;

  return {
    title,
    description,
    keywords: [`travels in ${areaName}`, `car rental ${areaName}`, `taxi service ${areaName}`, ...ahmedabadLocationKeywords].join(", "),
    openGraph: {
      title,
      description,
      url: `https://www.amartourstravels.com/locations/${resolvedParams.area}`,
      siteName: "Amar Travels",
      images: [
        {
          url: "/herosection.png",
          width: 1200,
          height: 630,
          alt: `Travel Services in ${areaName}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

// 3. The actual landing page UI
export default async function LocationLandingPage({ params }) {
  const resolvedParams = await params;
  const areaName = unslugify(resolvedParams.area);

  if (!areaName) {
    notFound();
  }

  // Generate dynamic hero data tailored to this area
  const locationHeroData = {
    label: `AMAR TRAVELS IN ${areaName.toUpperCase()}`,
    heading: {
      plainText: "Best Travel & Car Rental in ",
      highlightedText: areaName,
      className: "max-w-[800px] text-4xl sm:text-5xl lg:text-6xl"
    },
    description: `Experience the best car rental and outstation taxi services right here in ${areaName}, Ahmedabad. We offer a modern fleet with expert drivers for all your travel needs.`,
    cta: { text: "Book Your Ride", href: "/booking" },
    image: { src: "/herosection.png", alt: `Amar Travels in ${areaName}` }
  };

  // Generate highly specific dynamic paragraphs for this area
  const seoTitle = `Top Rated Travel Agency in ${areaName}`;
  const seoParagraphs = [
    `If you are based in ${areaName} and looking for a reliable travel partner, Amar Travels is your top choice. We understand the local routes and traffic patterns around ${areaName}, ensuring that your outstation cabs or local car rental services arrive on time, every time.`,
    `Whether you need a comfortable tempo traveller on rent for a family function near ${areaName} or require professional corporate travel services for your business, our fleet is stationed to serve you quickly. We pride ourselves on offering transparent pricing and the best taxi service in the ${areaName} area.`
  ];
  
  // Mix up keywords using string length to ensure variability
  const startIndex = areaName.length % ahmedabadLocationKeywords.length;
  const seoKeywords = [
    `Best travels in ${areaName}`,
    `Car rental near ${areaName}`,
    ...ahmedabadLocationKeywords.slice(startIndex, startIndex + 5),
    ...travelsHighVolumeKeywords.slice(startIndex, startIndex + 5)
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero data={locationHeroData} />
      <ServicesSection />
      <FleetSection />
      <WhyChooseSection />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}
