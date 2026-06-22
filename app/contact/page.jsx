import Hero from "@/components/Hero";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import DynamicSEOContent from "@/components/DynamicSEOContent";
import { contactHeroData } from "@/data/contactData";
import { ahmedabadLocationKeywords, travelsHighVolumeKeywords, ahmedabadAreas } from "@/data/seoKeywords";

export const metadata = {
  title: "Contact Amar Travels | Best Travel Agency in Ahmedabad",
  description: "Get in touch with Amar Travels for the best car rental in Ahmedabad, outstation cabs, and luxury bus bookings. We are available 24/7 to assist you.",
  keywords: [...ahmedabadLocationKeywords, ...travelsHighVolumeKeywords, ...ahmedabadAreas].join(", "),
  openGraph: {
    title: "Contact Amar Travels",
    description: "Get in touch with Amar Travels for the best car rental in Ahmedabad, outstation cabs, and luxury bus bookings.",
    url: "https://www.amartourstravels.com/contact",
    siteName: "Amar Travels",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "Contact Amar Travels",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Contact() {
    const seoTitle = "Get in Touch for Premium Travel Services";
    const seoParagraphs = [
      "Whether you're planning a quick weekend getaway or a long corporate retreat, reaching out to the best travels in Ahmedabad is the first step. Our support team is available around the clock to help you with everything from a simple car rental ahmedabad inquiry to a complex luxury bus rental ahmedabad booking. We understand that travel plans can change, which is why we offer flexible options for outstation taxi service and tempo traveller on rent in Ahmedabad.",
      "If you're unsure which vehicle suits your needs, our experts can guide you. We cater to all types of groups, offering spacious outstation cabs from Ahmedabad for family trips, and elegant options for wedding car rental in Ahmedabad. Drop us a message, give us a call, or visit our office to discuss your next gujarat tours from Ahmedabad or to customize our popular holiday packages. Your comfort and safety are always our top priorities."
    ];
    
    const seoKeywords = [...ahmedabadLocationKeywords.slice(9, 16), ...travelsHighVolumeKeywords.slice(9, 16)];

    return (
        <main className="min-h-screen bg-white">
            <Hero data={contactHeroData} />
            <ContactInfoSection />
            <ContactFormSection />
            <FAQSection />
            <DynamicSEOContent title={seoTitle} paragraphs={seoParagraphs} keywords={seoKeywords} />
            <CTASection />
        </main>
    );
}
