import { Phone, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/eb7ac623-38fa-4cb3-ae59-d1dc47dbd81a.png" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold">Alpha Cements</h1>
        </Link>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white text-foreground">
                      {["Ultratech Cement", "Ambuja Cement", "Dalmia Cement", "ACC Cement", "JK Cement"].map((category) => (
                        <li key={category}>
                          <Link
                            to="/#products"
                            className="block p-2 hover:bg-accent rounded-md"
                          >
                            {category}
                          </Link>
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