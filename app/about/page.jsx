import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MissionSection from "@/components/MissionSection";
import ReviewSection from "@/components/ReviewSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { heroData } from "@/data/aboutData";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Hero data={heroData} />
            <StorySection />
            <MissionSection />
            <ReviewSection />
            <CTASection />
            <Footer />
        </main>
    );
}

