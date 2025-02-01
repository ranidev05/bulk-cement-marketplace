import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/pages/Index";

export const ProductsSection = () => {
  return (
    <section id="products" className="py-12 section-padding">
      <div className="container">
        <h2 className="text-3xl font-bold text-left mb-8">Our Products</h2>
        <ProductGrid products={products} />
      </div>
    </section>
  );
};