
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
    window.location.href = "tel:8981950011";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully!");
  };

  const handleViewDetail = () => {
    navigate(`/product/${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-contain mb-4 cursor-pointer hover:scale-105 transition-transform duration-300" 
          onClick={handleViewDetail}
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 cursor-pointer hover:text-secondary transition-colors" onClick={handleViewDetail}>
            {name}
          </h3>
          <p className="text-secondary font-bold mb-4">₹{price} / Bags</p>
          <p className="text-gray-600 text-sm mb-4">{brand}</p>
        </div>
        <div className="space-y-2">
          <Button 
            onClick={handleCall} 
            className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white"
          >
            Call Now
          </Button>
          <QuoteDialog onSubmit={handleSubmit} />
          <Button
            onClick={handleViewDetail}
            variant="outline"
            className="w-full rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
