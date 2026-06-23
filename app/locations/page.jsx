import Link from "next/link";
import { ahmedabadAreas, travelsHighVolumeKeywords } from "@/data/seoKeywords";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { MapPin } from "lucide-react";

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export const metadata = {
  title: "Areas We Serve in Ahmedabad | Amar Travels",
  description: "Amar Travels provides premium car rental, luxury bus booking, and outstation taxi services across all major areas of Ahmedabad. Find travel services near you.",
  keywords: "locations ahmedabad, travel agency areas, car rental ahmedabad locations",
  openGraph: {
    title: "Service Areas | Amar Travels Gujarat",
    description: "Amar Travels provides premium car rental and bus booking services across Ahmedabad, Gandhinagar, Vadodara, Surat, Rajkot, and all major cities in Gujarat.",
    url: "https://www.amartourstravels.com/locations",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Amar Travels Locations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function LocationsDirectory() {
  const sortedAreas = [...ahmedabadAreas].sort();

  // Group areas alphabetically
  const groupedAreas = sortedAreas.reduce((acc, area) => {
    const firstLetter = area[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(area);
    return acc;
  }, {});

  const locationHeroData = {
    label: "OUR SERVICE AREAS",
    heading: {
      plainText: "Extensive Coverage Across ",
      highlightedText: "Ahmedabad",
      className: "max-w-[900px] text-4xl sm:text-5xl lg:text-6xl"
    },
    description: "From quick local drops to luxurious outstation journeys, our fleet covers every corner of Ahmedabad. Browse our directory below to find hyper-local travel services near you.",
    cta: { text: "Book Your Ride", href: "/booking" },
    image: { src: "/herosection.png", alt: "Locations Directory Amar Travels" }
  };

  const seoTitle = "Ahmedabad's Most Trusted Travel Network";
  const seoParagraphs = [
    "Amar Travels is proud to offer its premium transportation services across every major neighborhood in Ahmedabad. Whether you are located in the bustling business district of SG Highway, the peaceful residential zones of Bopal, or the central hubs like Navrangpura, our fleet is just a phone call away. Our localized approach ensures that when you search for the best travels near you, we are always ready to provide swift and reliable service.",
    "By establishing a strong presence in all these key areas, we ensure that our outstation cabs and luxury bus rental services are easily accessible to everyone. Browse through our alphabetical service directory above to find hyper-local travel information tailored specifically to your neighborhood."
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero data={locationHeroData} />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-20">
        
        {/* Directory Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedAreas.map((area) => (
            <Link 
              key={area} 
              href={`/locations/${slugify(area)}`}
              className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#DC241C]/30 hover:shadow-[0_8px_30px_rgba(220,36,28,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#DC241C]/10 transition-colors shrink-0">
                <MapPin className="w-5 h-5 text-slate-400 group-hover:text-[#DC241C] transition-colors" />
              </div>
              <span className="font-semibold text-[16px] text-[#334155] group-hover:text-[#0F172A] transition-colors">
                {area}
              </span>
            </Link>
          ))}
        </div>

      </div>

      <div className="bg-white py-10">
        {/* SEO Injection */}
        <DynamicSEOContent 
          title={seoTitle} 
          paragraphs={seoParagraphs} 
          keywords={[...travelsHighVolumeKeywords.slice(0, 10)]} 
        />
      </div>

      <div className="mt-10">
        <CTASection />
      </div>
    </main>
  );
}
