import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const fetchBanners = async () => {
  const { data, error } = await supabase
    .from('banners')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

export const HeroCarousel = () => {
  const { data: banners, isLoading } = useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
  });

  if (isLoading) {
    return <div className="h-[250px] md:h-[220px] bg-gray-100 animate-pulse" />;
  }

  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {banners?.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative">
              <img 
                src={banner.image_url} 
                alt={banner.title}
                className="w-full h-[250px] md:h-[220px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r bg-black/40" />
              <div className="container mx-auto px-4 h-full flex items-center absolute inset-0">
                <div className="text-white max-w-2xl animate-fade-in text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{banner.title}</h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90">{banner.description}</p>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform"
                  >
                    {banner.button_text}
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