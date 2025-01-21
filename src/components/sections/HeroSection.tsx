import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="text-white max-w-2xl animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Build the Strongest Future!</h1>
          <p className="text-xl mb-8 opacity-90">Experience the power of premium quality cement for your construction needs.</p>
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
  );
};