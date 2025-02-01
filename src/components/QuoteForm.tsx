import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface QuoteFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal"
];

const quantityOptions = [
  "100", "200", "500", "1000", "2000", "5000", "10000", "50000", "100000"
];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('quotes')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          brand: formData.brand,
          quantity: formData.quantity,
          city: formData.city,
          state: formData.state,
          pin_code: formData.pinCode,
          address: formData.address
        }]);

      if (error) throw error;

      toast.success("Quote request submitted successfully!");
      setFormData({
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
      onSubmit(e);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to submit quote request. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 p-6 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            required
            placeholder="Enter Name"
            className="h-11 bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
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
            placeholder="Enter Email"
            className="h-11 bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">
            Mobile <span className="text-red-500">*</span>
          </Label>
          <Input
            id="mobile"
            required
            placeholder="Enter Number"
            className="h-11 bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
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
            <SelectTrigger className="h-11 bg-white border-gray-200">
              <SelectValue placeholder="Enter Cement Brand" />
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
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-sm font-medium text-gray-700">
            Quantity <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.quantity}
            onValueChange={(value) => setFormData({...formData, quantity: value})}
          >
            <SelectTrigger className="h-11 bg-white border-gray-200">
              <SelectValue placeholder="Enter Quantity" />
            </SelectTrigger>
            <SelectContent>
              {quantityOptions.map((qty) => (
                <SelectItem key={qty} value={qty}>{qty} Bags</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </Label>
          <Input
            id="city"
            required
            placeholder="Enter City"
            className="h-11 bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm font-medium text-gray-700">
            State <span className="text-red-500">*</span>
          </Label>
          <Select
            value={formData.state}
            onValueChange={(value) => setFormData({...formData, state: value})}
          >
            <SelectTrigger className="h-11 bg-white border-gray-200">
              <SelectValue placeholder="Enter State" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((state) => (
                <SelectItem key={state} value={state.toLowerCase()}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pinCode" className="text-sm font-medium text-gray-700">
            PIN Code <span className="text-red-500">*</span>
          </Label>
          <Input
            id="pinCode"
            required
            placeholder="Enter PIN Code"
            className="h-11 bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
            value={formData.pinCode}
            onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Address <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="address"
          required
          placeholder="Enter Address"
          className="min-h-[100px] bg-white border-gray-200 focus:border-[#F97316] focus:ring-[#F97316]"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full h-12 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg"
      >
        Get Quote
      </Button>
    </form>
  );
};