import { Button } from "../ui/button";
import { QuoteDialog } from "../QuoteDialog";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  brand: string;
}

export const ProductCard = ({ name, price, image, brand }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleCall = () => {
    window.location.href = "tel:+919708976387";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully!");
  };

  const handleViewDetail = () => {
    navigate(`/product/${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-contain mb-4 cursor-pointer" 
        onClick={handleViewDetail}
      />
      <div className="text-center flex-grow">
        <h3 className="text-lg font-semibold mb-2 cursor-pointer" onClick={handleViewDetail}>{name}</h3>
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
        <Button
          onClick={handleViewDetail}
          variant="outline"
          className="w-full rounded-full"
        >
          View Detail
        </Button>
      </div>
    </div>
  );
};