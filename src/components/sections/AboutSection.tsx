export const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to CementKart, your trusted platform for ordering bulk cement online. We are dedicated to simplifying the process of sourcing premium cement for construction projects across India. With top brands, competitive pricing, and reliable delivery, CementKart is the go-to solution for builders, contractors, and businesses.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Top Brands: UltraTech, Ambuja, ACC, and more.</li>
              <li>Bulk Discounts: Affordable pricing with no hidden costs.</li>
              <li>Quick Delivery: Timely delivery across India.</li>
              <li>Easy Ordering: Place orders online in minutes.</li>
              <li>Expert Support: Always ready to assist you.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Our Cement Types</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Ordinary Portland Cement (OPC): General-purpose construction.</li>
              <li>Portland Pozzolana Cement (PPC): Durable and moisture-resistant.</li>
              <li>White Cement: Ideal for decorative applications.</li>
              <li>Rapid Hardening Cement: For time-sensitive projects.</li>
              <li>Sulphate Resistant Cement: Perfect for marine and industrial projects.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Industries We Serve</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Construction Companies: Supporting large-scale projects.</li>
              <li>Real Estate Developers: Reliable supply for developments.</li>
              <li>Infrastructure Projects: Roads, bridges, and public works.</li>
              <li>Retail Cement Dealers: Maintaining consistent stock.</li>
              <li>Manufacturers: Bulk supply for industrial use.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};