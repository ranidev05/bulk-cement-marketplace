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

export const products = [
  {
    name: "Ambuja Cement PPC",
    price: 350,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ambuja"
  },
  {
    name: "ACC Gold PPC",
    price: 360,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech PPC",
    price: 355,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  },
  {
    name: "JK Super PPC",
    price: 345,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "JK"
  },
  {
    name: "Dalmia DSP PPC",
    price: 340,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Dalmia"
  },
  {
    name: "ACC F2R",
    price: 365,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech Super",
    price: 370,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  },
  {
    name: "JK Cement Pro",
    price: 355,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "JK"
  },
  {
    name: "Ambuja Plus",
    price: 358,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ambuja"
  },
  {
    name: "Dalmia Master",
    price: 352,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Dalmia"
  },
  {
    name: "ACC Premium",
    price: 375,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech Master",
    price: 368,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  }
];

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
