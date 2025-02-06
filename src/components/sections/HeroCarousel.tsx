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
import { useIsMobile } from "@/hooks/use-mobile";

const fetchBanners = async () => {
  const { data, error } = await supabase
    .from('banners')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

const fetchMobileBanners = async () => {
  const { data, error } = await supabase
    .from('mobile_banners')
    .select('*')
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

export const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const { data: desktopBanners, isLoading: isDesktopLoading } = useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
  });

  const { data: mobileBanners, isLoading: isMobileLoading } = useQuery({
    queryKey: ['mobile_banners'],
    queryFn: fetchMobileBanners,
  });

  const banners = isMobile ? mobileBanners : desktopBanners;
  const isLoading = isMobile ? isMobileLoading : isDesktopLoading;
  const height = isMobile ? "h-[250px]" : "h-[280px]";

  if (isLoading) {
    return <div className={`${height} bg-gray-100 animate-pulse`} />;
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
                className={`w-full ${height} object-cover`}
              />
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
      <div className="absolute z-20 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
        <CarouselPrevious className="relative static bg-white/20 hover:bg-white/40 text-white border-none" />
        <CarouselNext className="relative static bg-white/20 hover:bg-white/40 text-white border-none" />
      </div>
    </Carousel>
  );
};