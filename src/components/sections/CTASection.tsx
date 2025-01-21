import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { QuoteDialog } from "@/components/QuoteDialog";
import { toast } from "sonner";

export const CTASection = () => {
  const handleCall = () => {
    window.location.href = "tel:+919708976387";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully!");
  };

  return (
    <section className="py-12 bg-[#221F26] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
            <p className="text-lg opacity-90">Get in touch with us for the best deals on bulk cement orders.</p>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCall}
              className="rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white border-0"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <QuoteDialog onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};