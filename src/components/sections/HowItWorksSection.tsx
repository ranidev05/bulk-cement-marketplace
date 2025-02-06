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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 flex-shrink-0">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="flex-shrink-0 text-gray-400 w-6 h-6" />
              )}
              <div className="bg-white p-4 rounded-lg shadow-md min-w-[200px]">
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};