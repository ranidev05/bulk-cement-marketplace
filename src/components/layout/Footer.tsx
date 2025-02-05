export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CementKart</h3>
            <p className="text-sm">Your trusted partner for quality cement products.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/#products" className="hover:text-gray-300">Products</a></li>
              <li><a href="/#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="/order-status" className="hover:text-gray-300">Order Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-gray-300">Return & Refund Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-300">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p>Phone: +91 9708976387</p>
              <p>Email: info@cementkart.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 CementKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};