import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/pages/Index";

export const ProductsSection = () => {
  return (
    <section id="products" className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <ProductGrid products={products} />
      </div>
    </section>
  );
};