
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/8e0b92e4-b3ab-4325-b6db-2a661412d9e9.png" alt="BulkCementOrders.in Logo" className="h-12 mb-4" />
            <p className="text-sm">Your trusted platform for bulk cement orders with top brands, best prices, and fast delivery.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/#products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/#about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/#contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/order-status" className="hover:text-gray-300">Order Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-gray-300">Return & Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p>Phone: 8981950011</p>
              <p>Email: info@bulkcementorders.in</p>
              <p className="text-sm">Address: 5th Floor, Ashiana Tower, 508, Exibition Road, Salimpur Ahra, Dujra Diara, Patna (800001)</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 BulkCementOrders.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
