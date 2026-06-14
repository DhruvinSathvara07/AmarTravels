import Hero from "@/components/Hero";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { contactHeroData } from "@/data/contactData";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Hero data={contactHeroData} />
            <ContactInfoSection />
            <ContactFormSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </main>
    );
}
