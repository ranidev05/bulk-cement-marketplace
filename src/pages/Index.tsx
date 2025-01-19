import { Banner } from "@/components/Banner";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";

const products = [
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
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Build the Strongest Future!</h1>
            <p className="text-xl mb-8">Experience the power of premium quality cement for your construction needs.</p>
          </div>
        </div>
      </section>

      {/* Features Banner Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p>Certified high-grade cement for lasting strength</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Pan India Delivery</h3>
              <p>Fast and reliable delivery across the country</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p>24/7 technical assistance for your projects</p>
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
          <div className="space-y-4">
            <p className="text-gray-600">
              We are one of India's leading cement suppliers, offering premium quality cement products from top brands. With years of experience in the industry, we ensure reliable supply and competitive pricing for all your construction needs.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence and customer satisfaction has made us a trusted name in the cement industry. We specialize in bulk orders and provide pan-India delivery services.
            </p>
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

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <div className="space-y-4 text-gray-600">
                <p>123 Cement Street</p>
                <p>Industrial Area, New Delhi</p>
                <p>India - 110001</p>
                <p>Phone: +91 9708976387</p>
                <p>Email: info@alphacements.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
