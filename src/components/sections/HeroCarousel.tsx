import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const banners = [
  {
    title: "Build the Strongest Future!",
    description: "Experience the power of premium quality cement for your construction needs.",
    gradient: "from-[#9b87f5] to-[#D6BCFA]",
    buttonText: "Explore Products"
  },
  {
    title: "Quality That Lasts Forever",
    description: "Trust in our cement for durable and reliable construction projects.",
    gradient: "from-[#F97316] to-[#FDBA74]",
    buttonText: "Get a Quote"
  },
  {
    title: "Building Dreams Together",
    description: "Partner with us for all your construction material needs.",
    gradient: "from-[#2563EB] to-[#93C5FD]",
    buttonText: "Contact Us"
  }
];

export const HeroCarousel = () => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className={`relative h-[400px] md:h-[600px] bg-gradient-to-r ${banner.gradient}`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="text-white max-w-2xl animate-fade-in text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{banner.title}</h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90">{banner.description}</p>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform"
                  >
                    {banner.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute z-20 flex gap-2 bottom-4 right-4">
        <CarouselPrevious className="relative static bg-white/20 hover:bg-white/40 text-white border-none" />
        <CarouselNext className="relative static bg-white/20 hover:bg-white/40 text-white border-none" />
      </div>
    </Carousel>
  );
};