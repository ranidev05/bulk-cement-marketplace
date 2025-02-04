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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};