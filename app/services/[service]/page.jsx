import { notFound } from "next/navigation";
import { serviceSlugs, ahmedabadLocationKeywords, travelsHighVolumeKeywords } from "@/data/seoKeywords";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";

// 1. Tell Next.js to statically pre-build a page for every service slug
export async function generateStaticParams() {
  return serviceSlugs.map((service) => ({
    service: service.slug,
  }));
}

// 2. Generate highly specific SEO metadata for this exact service
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const serviceMatch = serviceSlugs.find(s => s.slug === resolvedParams.service);
  
  if (!serviceMatch) {
    return { title: "Service Not Found" };
  }

  const serviceName = serviceMatch.name;
  const title = `Best ${serviceName} in Ahmedabad, Gujarat | Amar Travels`;
  const description = `Looking for the best ${serviceName} in Ahmedabad? Amar Travels offers top-rated ${serviceName.toLowerCase()} with a modern fleet, reliable drivers, and affordable rates across Gujarat.`;

  return {
    title,
    description,
    keywords: [`${serviceName.toLowerCase()} in ahmedabad`, `best ${serviceName.toLowerCase()}`, ...ahmedabadLocationKeywords].join(", "),
    openGraph: {
      title,
      description,
      url: `https://www.amartourstravels.com/services/${resolvedParams.service}`,
      siteName: "Amar Travels",
      images: [
        {
          url: "/herosection.png",
          width: 1200,
          height: 630,
          alt: `${serviceName} by Amar Travels`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

// 3. The actual landing page UI
export default async function ServiceLandingPage({ params }) {
  const resolvedParams = await params;
  const serviceMatch = serviceSlugs.find(s => s.slug === resolvedParams.service);

  if (!serviceMatch) {
    notFound();
  }

  const serviceName = serviceMatch.name;

  // Generate dynamic hero data tailored to this service
  const serviceHeroData = {
    label: `AMAR TRAVELS - ${serviceName.toUpperCase()}`,
    heading: {
      plainText: "Top Rated ",
      highlightedText: serviceName,
      className: "max-w-[800px] text-4xl sm:text-5xl lg:text-6xl"
    },
    description: `Experience the most reliable ${serviceName.toLowerCase()} right here in Ahmedabad and across Gujarat. We offer a modern fleet with expert drivers for all your travel needs.`,
    cta: { text: "Book Now", href: "/booking" },
    image: { src: "/herosection.png", alt: `${serviceName} by Amar Travels` }
  };

  // Generate highly specific dynamic paragraphs for this service
  const seoTitle = `The Best ${serviceName} in Ahmedabad`;
  const seoParagraphs = [
    `When it comes to ${serviceName.toLowerCase()}, Amar Travels stands out as the most reliable travel partner in Ahmedabad and Gujarat. We understand the importance of timely and safe travel, ensuring that your experience with our ${serviceName.toLowerCase()} is smooth and stress-free.`,
    `Whether you need ${serviceName.toLowerCase()} for a quick local trip or an extended journey across Gujarat, our well-maintained fleet is ready to serve you. We pride ourselves on offering transparent pricing and the best customer service in the industry.`
  ];
  
  // Mix up keywords
  const seoKeywords = [
    `Best ${serviceName.toLowerCase()} in ahmedabad`,
    `Affordable ${serviceName.toLowerCase()} gujarat`,
    ...ahmedabadLocationKeywords.slice(0, 5),
    ...travelsHighVolumeKeywords.slice(0, 5)
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero data={serviceHeroData} />
      <ServicesSection />
      <FleetSection />
      <WhyChooseSection />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}
