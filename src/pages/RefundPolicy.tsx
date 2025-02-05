import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Return & Refund Policy</h1>
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p>
              Due to the nature of cement products, we have specific guidelines for returns:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Returns must be initiated within 24 hours of delivery</li>
              <li>Products must be unopened and in original packaging</li>
              <li>Damaged products must be reported immediately upon delivery</li>
              <li>Return shipping costs may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds will be processed within 7-10 business days</li>
              <li>Original payment method will be used for refund</li>
              <li>Shipping charges are non-refundable</li>
              <li>Damaged products will be fully refunded including shipping</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Opened bags of cement</li>
              <li>Custom or bulk orders</li>
              <li>Products damaged due to improper storage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For any questions about our return and refund policy, please contact us at:
              <br />
              Email: support@cementkart.com
              <br />
              Phone: +91 9708976387
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;