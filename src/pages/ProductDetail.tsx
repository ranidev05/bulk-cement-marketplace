import { useParams } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "./Index";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.name === decodeURIComponent(id || ""));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
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
                      <p className="font-medium">Type</p>
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
                      <p className="font-medium">Product Type</p>
                      <p>Non Trade</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;