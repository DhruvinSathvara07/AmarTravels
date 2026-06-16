import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MissionSection from "@/components/MissionSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import { heroData } from "@/data/aboutData";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Hero data={heroData} />
            <StorySection />
            <MissionSection />
            <ReviewSection />
            <WhyChooseSection />
            <CTASection />

        </main>
    );
}

