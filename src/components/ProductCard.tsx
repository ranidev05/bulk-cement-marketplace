import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  brand: string;
}

export const ProductCard = ({ name, price, image, brand }: ProductCardProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    brand: "",
    city: "",
    state: "",
    pinCode: "",
    address: "",
  });

  const handleCall = () => {
    window.location.href = "tel:+919708976387";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-primary font-bold mb-4">₹{price}/bag</p>
      <div className="mt-auto space-y-2">
        <Button onClick={handleCall} className="w-full bg-secondary hover:bg-secondary/90">
          Call Now
        </Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">Get Quote</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Request Quote</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="brand">Cement Brand</Label>
                <Select
                  value={formData.brand}
                  onValueChange={(value) => setFormData({...formData, brand: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ambuja">Ambuja Cement</SelectItem>
                    <SelectItem value="dalmia">Dalmia Cement</SelectItem>
                    <SelectItem value="acc">ACC Cement</SelectItem>
                    <SelectItem value="ultratech">Ultratech Cement</SelectItem>
                    <SelectItem value="jk">JK Cement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="pinCode">PIN Code</Label>
                <Input
                  id="pinCode"
                  required
                  value={formData.pinCode}
                  onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full mt-2">Submit Quote Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};