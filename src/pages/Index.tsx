import { Banner } from "@/components/Banner";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";
import { Award, Truck, HeadsetIcon, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const products = [
  {
    name: "Ambuja Cement PPC",
    price: 350,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ambuja"
  },
  {
    name: "ACC Gold PPC",
    price: 360,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech PPC",
    price: 355,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  },
  {
    name: "JK Super PPC",
    price: 345,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "JK"
  },
  {
    name: "Dalmia DSP PPC",
    price: 340,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Dalmia"
  },
  {
    name: "ACC F2R",
    price: 365,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech Super",
    price: 370,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  },
  {
    name: "JK Cement Pro",
    price: 355,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "JK"
  },
  {
    name: "Ambuja Plus",
    price: 358,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ambuja"
  },
  {
    name: "Dalmia Master",
    price: 352,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Dalmia"
  },
  {
    name: "ACC Premium",
    price: 375,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "ACC"
  },
  {
    name: "Ultratech Master",
    price: 368,
    image: "/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png",
    brand: "Ultratech"
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "RK Constructions",
    content: "Best quality cement products with excellent delivery service. Highly recommended for bulk orders."
  },
  {
    name: "Amit Patel",
    company: "Patel Builders",
    content: "Great prices and professional service. The team is very responsive and helpful."
  },
  {
    name: "Suresh Singh",
    company: "Singh & Associates",
    content: "Reliable supplier for all our cement needs. Always delivers on time."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Banner Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Build the Strongest Future!</h1>
            <p className="text-xl mb-8 opacity-90">Experience the power of premium quality cement for your construction needs.</p>
            <Button 
              variant="secondary"
              size="lg"
              className="rounded-full text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features Banner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Certified high-grade cement for lasting strength</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
              <h3 className="text-xl font-semibold mb-4">Pan India Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery across the country</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <HeadsetIcon className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">24/7 technical assistance for your projects</p>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      
      {/* Products Section */}
      <section id="products" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Welcome to CementKart, your trusted platform for ordering bulk cement online. We are dedicated to simplifying the process of sourcing premium cement for construction projects across India. With top brands, competitive pricing, and reliable delivery, CementKart is the go-to solution for builders, contractors, and businesses.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Top Brands: UltraTech, Ambuja, ACC, and more.</li>
                <li>Bulk Discounts: Affordable pricing with no hidden costs.</li>
                <li>Quick Delivery: Timely delivery across India.</li>
                <li>Easy Ordering: Place orders online in minutes.</li>
                <li>Expert Support: Always ready to assist you.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Our Cement Types</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Ordinary Portland Cement (OPC): General-purpose construction.</li>
                <li>Portland Pozzolana Cement (PPC): Durable and moisture-resistant.</li>
                <li>White Cement: Ideal for decorative applications.</li>
                <li>Rapid Hardening Cement: For time-sensitive projects.</li>
                <li>Sulphate Resistant Cement: Perfect for marine and industrial projects.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Construction Companies: Supporting large-scale projects.</li>
                <li>Real Estate Developers: Reliable supply for developments.</li>
                <li>Infrastructure Projects: Roads, bridges, and public works.</li>
                <li>Retail Cement Dealers: Maintaining consistent stock.</li>
                <li>Manufacturers: Bulk supply for industrial use.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 bg-[#221F26] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
              <p className="text-lg opacity-90">Get in touch with us for the best deals on bulk cement orders.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-0"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white border-0"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 9708976387</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@alphacements.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium mb-2">Office Address</h4>
                <p className="text-gray-600">
                  123 Cement Street<br />
                  Industrial Area, New Delhi<br />
                  India - 110001
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
