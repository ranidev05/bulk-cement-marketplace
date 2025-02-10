
import { ThumbsUp, Percent, Truck, CreditCard, Users } from "lucide-react";

const features = [
  {
    icon: ThumbsUp,
    title: "Trust & Credibility",
    description: "Years of experience serving quality cement products"
  },
  {
    icon: Percent,
    title: "Bulk Discounts & Best Pricing",
    description: "Competitive prices with special bulk order discounts"
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Quick delivery to your construction site"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Options",
    description: "Multiple payment methods for your convenience"
  },
  {
    icon: Users,
    title: "Trusted by Contractors & Builders",
    description: "Preferred supplier for construction professionals"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional service and quality cement products to meet all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
