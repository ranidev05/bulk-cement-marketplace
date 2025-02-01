import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroContent = [
  {
    title: "Build the Strongest Future!",
    description: "Experience the power of premium quality cement for your construction needs.",
    bgClass: "from-[#9b87f5] to-[#D6BCFA]"
  },
  {
    title: "Quality That Lasts Forever",
    description: "Trust in our cement products for durable and reliable construction.",
    bgClass: "from-[#4F46E5] to-[#7C3AED]"
  },
  {
    title: "Nationwide Delivery Network",
    description: "We ensure timely delivery across India with our extensive logistics network.",
    bgClass: "from-[#2563EB] to-[#4F46E5]"
  }
];

export const HeroSection = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {heroContent.map((content, index) => (
          <CarouselItem key={index}>
            <section className={`relative h-[600px] bg-gradient-to-r ${content.bgClass}`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="container mx-auto h-full flex items-center relative z-10">
                <div className="text-white max-w-3xl text-left px-4 md:px-8 animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{content.title}</h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90">{content.description}</p>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform"
                  >
                    Explore Products
                  </Button>
                </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <CarouselPrevious className="bg-white/20 hover:bg-white/40 text-white border-none" />
        <CarouselNext className="bg-white/20 hover:bg-white/40 text-white border-none" />
      </div>
    </Carousel>
  );
};