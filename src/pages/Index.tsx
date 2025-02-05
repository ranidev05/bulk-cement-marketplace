import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Banner } from "@/components/Banner";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroCarousel />
      <WhyChooseUsSection />
      <BrandsSection />
      <HowItWorksSection />
      <Banner />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;