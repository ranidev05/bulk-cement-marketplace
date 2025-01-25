import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

interface QuoteFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const QuoteForm = ({ onSubmit }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    brand: "",
    quantity: "",
    city: "",
    state: "",
    pinCode: "",
    address: "",
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-2">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          required
          placeholder="Enter your full name"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
          Mobile Number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="mobile"
          required
          placeholder="Enter your mobile number"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.mobile}
          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="brand" className="text-sm font-medium text-gray-700">
          Cement Brand <span className="text-red-500">*</span>
        </Label>
        <Select
          value={formData.brand}
          onValueChange={(value) => setFormData({...formData, brand: value})}
        >
          <SelectTrigger className="h-11 bg-gray-50 border-gray-200">
            <SelectValue placeholder="Select cement brand" />
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

      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantity <span className="text-red-500">*</span>
        </Label>
        <Input
          id="quantity"
          required
          placeholder="Enter quantity needed"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.quantity}
          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </Label>
          <Input
            id="city"
            required
            placeholder="Enter city"
            className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm font-medium text-gray-700">
            State <span className="text-red-500">*</span>
          </Label>
          <Input
            id="state"
            required
            placeholder="Enter state"
            className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
            value={formData.state}
            onChange={(e) => setFormData({...formData, state: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pinCode" className="text-sm font-medium text-gray-700">
          PIN Code <span className="text-red-500">*</span>
        </Label>
        <Input
          id="pinCode"
          required
          placeholder="Enter PIN code"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.pinCode}
          onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="address"
          required
          placeholder="Enter your address"
          className="h-11 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full h-12 mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg"
      >
        Get Quote
      </Button>
    </form>
  );
};