import { Phone, Mail } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alpha Cements</h1>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#products" className="hover:text-gray-200">Products</a>
            <a href="#about" className="hover:text-gray-200">About Us</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>
          <ul className="flex items-center space-x-4">
            <li>
              <a 
                href="tel:18001218860" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">18001218860</span>
              </a>
            </li>
            <li>
              <a 
                href="mailto:info@alpha-cement.com" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@alpha-cement.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};