
import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/products/ProductGrid";
import { supabase } from "@/integrations/supabase/client";

export const ProductsSection = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Products</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our wide range of high-quality cement products suitable for all your construction needs.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="text-xl text-gray-600">Loading products...</div>
            </div>
          ) : (
            <ProductGrid products={products || []} />
          )}
        </div>
      </div>
    </section>
  );
};
