import Hero from "@/components/Hero";
import { servicesHeroData } from "@/data/servicesData";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <main>
      <Hero data={servicesHeroData} />
      <ServicesSection />
      <FleetSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
