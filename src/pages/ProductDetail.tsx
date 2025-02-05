import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Testimonial } from "@/components/Testimonial";
import { CTASection } from "@/components/sections/CTASection";
import { ProductCard } from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('name', decodeURIComponent(id || ''))
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  const { data: bestSellingProducts } = useQuery({
    queryKey: ['bestSellingProducts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(4);
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  if (!product) return <div>Product not found</div>;

  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "RK Constructions",
      content: "Best quality cement I've used in my 15 years of construction experience. Highly recommended!"
    },
    {
      name: "Amit Patel",
      company: "Patel Builders",
      content: "Great product quality and excellent customer service. Will definitely order again."
    },
    {
      name: "Suresh Reddy",
      company: "SR Infrastructure",
      content: "The consistency in quality is what makes this product stand out. Perfect for all our construction needs."
    }
  ];

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-white rounded-lg shadow-lg p-6">
          <button 
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl text-primary font-bold mb-6">₹{product.price} / Bags</p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Features</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <p className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                        <p>{value as string}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={() => window.location.href = "tel:8981950011"}
                    className="flex-1 h-12 rounded-full bg-[#333333] hover:bg-[#222222] text-white"
                  >
                    Call Now
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('quote-dialog')?.click()}
                    className="flex-1 h-12 rounded-full bg-primary hover:bg-primary/90"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {bestSellingProducts && bestSellingProducts.length > 0 && (
          <section className="mt-16 relative px-12">
            <h2 className="text-3xl font-bold text-center mb-8">Best Selling Products</h2>
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {bestSellingProducts.map((product) => (
                  <CarouselItem key={product.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <ProductCard {...product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Testimonial key={index} {...review} />
            ))}
          </div>
        </section>

        <div className="mt-16">
          <CTASection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;