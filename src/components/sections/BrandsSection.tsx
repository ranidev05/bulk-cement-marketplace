import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brands = [
  { name: "UltraTech", image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" },
  { name: "ACC", image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" },
  { name: "Ambuja", image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" },
  { name: "Shree Cement", image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" },
  { name: "JK Cement", image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" }
];

const cementTypes = [
  "OPC (Ordinary Portland Cement)",
  "PPC (Portland Pozzolana Cement)",
  "White Cement",
  "Rapid Hardening Cement"
];

export const BrandsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Available Cement Brands & Types</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Trusted Brands</h3>
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                    <div className="flex flex-col items-center">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-32 h-32 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
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

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Cement Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cementTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <p className="text-lg text-gray-800">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};