import { Banner } from "@/components/Banner";
import { ProductCard } from "@/components/ProductCard";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";

const products = [
  {
    name: "Ambuja Cement PPC",
    price: 350,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "Ambuja"
  },
  {
    name: "ACC Gold PPC",
    price: 360,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "ACC"
  },
  {
    name: "Ultratech PPC",
    price: 355,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "Ultratech"
  },
  {
    name: "JK Super PPC",
    price: 345,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "JK"
  },
  {
    name: "Dalmia DSP PPC",
    price: 340,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "Dalmia"
  },
  {
    name: "ACC F2R",
    price: 365,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "ACC"
  },
  {
    name: "Ultratech Super",
    price: 370,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
    brand: "Ultratech"
  },
  {
    name: "JK Cement Pro",
    price: 355,
    image: "/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png",
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
      {/* Navigation */}
      <nav className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alpha Cements</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#products" className="hover:text-gray-200">Products</a>
            <a href="#about" className="hover:text-gray-200">About Us</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      <Banner />
      
      {/* Products Section */}
      <section id="products" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                We are one of India's leading cement suppliers, offering premium quality cement products from top brands. With years of experience in the industry, we ensure reliable supply and competitive pricing for all your construction needs.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence and customer satisfaction has made us a trusted name in the cement industry. We specialize in bulk orders and provide pan-India delivery services.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/0786dc0d-ea55-4dbc-af9f-a7041c7210d7.png" 
                alt="Cement Factory" 
                className="w-full h-auto"
              />
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

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Alpha Cements</h3>
              <p className="text-sm">Your trusted partner for quality cement products.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#products" className="hover:text-gray-300">Products</a></li>
                <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-2">
                <p>Phone: +91 9708976387</p>
                <p>Email: info@alphacements.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 Alpha Cements. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;