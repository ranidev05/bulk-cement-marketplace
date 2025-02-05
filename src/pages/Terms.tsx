import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using CementKart's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Users must be 18 years or older</li>
              <li>Accurate information must be provided for orders</li>
              <li>Account credentials must be kept secure</li>
              <li>Bulk pricing is subject to availability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ordering & Delivery</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Orders are subject to confirmation and availability</li>
              <li>Delivery times are estimates only</li>
              <li>Prices may vary based on location and quantity</li>
              <li>Minimum order quantities may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All prices are in Indian Rupees (INR)</li>
              <li>Payment must be made before delivery</li>
              <li>Multiple payment options available</li>
              <li>GST and other taxes will be applied as applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              CementKart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;