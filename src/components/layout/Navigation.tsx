
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#222222] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/8e0b92e4-b3ab-4325-b6db-2a661412d9e9.png" alt="BulkCementOrders.in Logo" className="h-12" />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isMenuOpen ? 'absolute top-16 left-0 right-0 bg-[#222222] p-4 shadow-lg z-50' : 'hidden'} md:relative md:flex md:items-center md:space-x-8 md:top-0 md:shadow-none md:block`}>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <Link to="/" className="hover:text-gray-200">Home</Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-4 bg-white text-foreground">
                        {["Ultratech Cement", "Ambuja Cement", "Dalmia Cement", "ACC Cement", "JK Cement"].map((category) => (
                          <li key={category}>
                            <a
                              href="#products"
                              className="block p-2 hover:bg-accent rounded-md"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                              }}
                            >
                              {category}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <a href="#about" className="hover:text-gray-200">About Us</a>
              <a href="#contact" className="hover:text-gray-200">Contact</a>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <a 
                href="tel:8981950011" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors w-full md:w-auto justify-center"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">8981950011</span>
              </a>
              <a 
                href="mailto:info@bulkcementorders.in" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] transition-colors w-full md:w-auto justify-center"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@bulkcementorders.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
