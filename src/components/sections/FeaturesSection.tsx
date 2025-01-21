import { Award, Truck, HeadsetIcon } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
            <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
            <p className="text-gray-600">Certified high-grade cement for lasting strength</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <Truck className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
            <h3 className="text-xl font-semibold mb-4">Pan India Delivery</h3>
            <p className="text-gray-600">Fast and reliable delivery across the country</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <HeadsetIcon className="w-12 h-12 mx-auto mb-4 text-[#8B5CF6]" />
            <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
            <p className="text-gray-600">24/7 technical assistance for your projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};