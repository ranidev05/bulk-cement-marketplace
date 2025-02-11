
import { ContactForm } from "@/components/ContactForm";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Column */}
          <div className="p-8 lg:p-12">
            <h2 className="text-4xl font-bold text-secondary mb-6">Let's get in touch</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Whether you're working on a residential, commercial, or infrastructure project, BulkCementOrders.in has you covered.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-gray-600">
                  5th Floor, Ashiana Tower, 508<br />
                  Exibition Road, Salimpur Ahra<br />
                  Dujra Diara, Patna (800001)
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <a href="mailto:info@bulkcementorders.in" className="text-gray-600 hover:text-secondary">
                  info@bulkcementorders.in
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-2">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <a href="tel:8981950011" className="text-gray-600 hover:text-secondary">
                  8981950011
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect with us:</h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-secondary p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">Contact us</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
