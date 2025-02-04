import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Select Your Cement",
    description: "Choose from top brands"
  },
  {
    title: "Enter Order Details",
    description: "Fill in quantity & delivery address"
  },
  {
    title: "Get Instant Pricing",
    description: "See bulk order discounts"
  },
  {
    title: "Confirm & Pay",
    description: "Easy online payment options"
  },
  {
    title: "Receive Fast Delivery",
    description: "Quick and reliable delivery service"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <ArrowRight className="mx-4 text-gray-400 flex-shrink-0 mt-3 hidden md:block" />
              <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};