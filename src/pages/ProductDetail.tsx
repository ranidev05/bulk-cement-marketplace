import { useParams } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "./Index";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Testimonial } from "@/components/Testimonial";
import { CTASection } from "@/components/sections/CTASection";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.name === decodeURIComponent(id || ""));

  if (!product) return <div>Product not found</div>;

  const bestSellingProducts = products.slice(0, 4); // Just taking first 4 products as example

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
                  <p className="text-gray-600">
                    Premium quality cement suitable for all construction needs. Manufactured under strict quality control.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Features</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>High early strength</li>
                    <li>Superior workability</li>
                    <li>Consistent quality</li>
                    <li>Optimal setting time</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <p className="font-medium">Brand</p>
                      <p>{product.brand}</p>
                    </div>
                    <div>
                      <p className="font-medium">Product Type</p>
                      <p>PPC/OPC</p>
                    </div>
                    <div>
                      <p className="font-medium">Package Size</p>
                      <p>50 KG</p>
                    </div>
                    <div>
                      <p className="font-medium">Grade</p>
                      <p>43/53</p>
                    </div>
                    <div>
                      <p className="font-medium">MOQ</p>
                      <p>500</p>
                    </div>
                    <div>
                      <p className="font-medium">Payment Terms</p>
                      <p>Bank Transfer (RTGS, NEFT)</p>
                    </div>
                    <div>
                      <p className="font-medium">Certified</p>
                      <p>ISI Certified</p>
                    </div>
                    <div>
                      <p className="font-medium">Application</p>
                      <p>Construction Use</p>
                    </div>
                    <div>
                      <p className="font-medium">Delivery Time</p>
                      <p>2 - 3 Days</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={() => window.location.href = "tel:+919708976387"}
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

        {/* Best Selling Products Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Best Selling Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Best Reviews Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Testimonial key={index} {...review} />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="mt-16">
          <CTASection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;