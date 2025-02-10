
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cementTypes = [
  "OPC (Ordinary Portland Cement)",
  "PPC (Portland Pozzolana Cement)",
  "White Cement",
  "Rapid Hardening Cement"
];

export const BrandsSection = () => {
  const { data: brands, isLoading } = useQuery({
    queryKey: ['brand_logos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('brand_logos')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Available Cement Brands & Types</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We partner with leading cement manufacturers to provide you with the highest quality products for your construction needs.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Our Trusted Brands</h3>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {isLoading ? (
                      <div className="text-center w-full py-8">Loading brands...</div>
                    ) : brands?.map((brand) => (
                      <CarouselItem key={brand.id} className="md:basis-1/3 lg:basis-1/5">
                        <div className="flex flex-col items-center p-4">
                          <img
                            src={brand.logo_url}
                            alt={brand.name}
                            className="w-[200px] h-[50px] object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                          />
                          <p className="text-lg font-medium text-gray-800">{brand.name}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                    <CarouselPrevious className="relative -left-4" />
                    <CarouselNext className="relative -right-4" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="bg-secondary text-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-8 text-center">Cement Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cementTypes.map((type, index) => (
                    <div
                      key={index}
                      className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors duration-300"
                    >
                      <p className="text-lg font-medium">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
