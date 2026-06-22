import Hero from "@/components/Hero";
import SearchBox from "@/components/SearchBox";
import FleetSection from "@/components/FleetSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "Book Car & Bus Rental in Ahmedabad",
  description: "Secure your booking for premium car rentals, luxury buses, and tempo travellers with Amar Travels. Best travel agency in Ahmedabad for outstation and local trips.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "Book Car & Bus Rental in Ahmedabad",
    description: "Secure your booking for premium car rentals, luxury buses, and tempo travellers with Amar Travels.",
    url: "https://www.amartourstravels.com/booking",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Book Amar Travels Fleet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BookingPage() {
  const bookingHeroData = {
    label: "BOOK YOUR RIDE",
    heading: {
      plainText: "Comfortable Journeys,",
      subText: "Trusted ",
      highlightedText: "Every Time"
    },
    description: "Book your ride with Amar Travels for reliable car rental in Ahmedabad, seamless bus booking online, and tempo traveller on rent. We offer spacious outstation cabs and luxury bus booking for family tour packages and corporate travel.",
    image: {
      src: "/herosection.webp",
      alt: "Gujarat landscape background"
    }
  };

  const seoTitle = "Book Premium Travel & Transportation Services";
  const seoParagraphs = [
    "Booking your next journey with Amar Travels is quick and hassle-free. As a highly rated travel agency, we make it easy to find a reliable car rental in Ahmedabad or secure a luxury bus booking online for large groups. Whether you need an urgent taxi service near me for local errands or wish to rent a car for outstation travel, our premium fleet is available 24/7. We provide flexible options, including outstation cabs from Ahmedabad and tempo traveller on rent, perfectly suited for family vacations, corporate trips, and weekend getaways.",
    "When it comes to special events, our wedding car rental in Ahmedabad ensures you and your guests travel in luxury and style. We also specialize in comprehensive holiday packages and customized gujarat tours from Ahmedabad, taking the stress out of planning. From corporate travel services to custom family tour packages, our experienced drivers and well-maintained vehicles guarantee a safe and comfortable ride across all major areas like SG Highway, Satellite, Navrangpura, and beyond."
  ];
  const seoKeywords = [...ahmedabadLocationKeywords.slice(2, 10), ...travelsHighVolumeKeywords.slice(2, 10)];

  return (
    <main className="w-full">
      <Hero data={bookingHeroData} />

      <SearchBox />
      <FleetSection />
      <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
      <CTASection />
    </main>
  );
}
