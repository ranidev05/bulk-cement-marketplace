import { Button } from "./ui/button";
import { QuoteDialog } from "./QuoteDialog";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  brand: string;
}

export const ProductCard = ({ name, price, image, brand }: ProductCardProps) => {
  const handleCall = () => {
    window.location.href = "tel:+919708976387";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
      <div className="text-center flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-primary font-bold mb-4">₹{price} / Bags</p>
      </div>
      <div className="w-full space-y-2">
        <Button 
          onClick={handleCall} 
          className="w-full rounded-full bg-[#333333] hover:bg-[#222222] text-white"
        >
          Call Now
        </Button>
        <QuoteDialog onSubmit={handleSubmit} />
      </div>
    </div>
  );
};