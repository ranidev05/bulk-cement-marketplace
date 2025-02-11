
import { Users, Building2, Boxes, Handshake } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">About Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Welcome to BulkCementOrders.in, your trusted platform for ordering bulk cement online. We are dedicated to simplifying 
              the process of sourcing premium cement for construction projects across India.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top Brands</h3>
              <p className="text-gray-600">
                Access premium cement from UltraTech, Ambuja, ACC, and more leading manufacturers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bulk Discounts</h3>
              <p className="text-gray-600">
                Enjoy competitive pricing with transparent costs and volume-based discounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Delivery</h3>
              <p className="text-gray-600">
                Experience timely and reliable delivery services across India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Get assistance from our knowledgeable team whenever you need it.
              </p>
            </div>
          </div>

          {/* Industries Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-secondary mb-6">Industries We Serve</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Construction Companies</h4>
                      <p className="text-gray-600">Supporting large-scale construction projects with reliable cement supply</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real Estate Developers</h4>
                      <p className="text-gray-600">Ensuring consistent material quality for residential and commercial developments</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Infrastructure Projects</h4>
                      <p className="text-gray-600">Providing high-grade cement for roads, bridges, and public works</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Our Cement Types</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ordinary Portland Cement (OPC)</h4>
                        <p className="text-white/80">Perfect for general construction needs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Portland Pozzolana Cement (PPC)</h4>
                        <p className="text-white/80">Enhanced durability and moisture resistance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Sulphate Resistant Cement</h4>
                        <p className="text-white/80">Ideal for marine and industrial applications</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
