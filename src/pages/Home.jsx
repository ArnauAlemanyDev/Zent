import HeroSection from "../components/HeroSection";
import { usePageTitle } from "@/lib/usePageTitle";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PartnersSection from "../components/PartnersSection";
import WhyUsSection from "../components/WhyUsSection";
import CTASection from "../components/CTASection";

export default function Home() {
  usePageTitle("Inicio");
  return (
    <div className="relative z-10">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}

