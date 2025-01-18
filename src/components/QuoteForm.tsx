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
    city: "",
    state: "",
    pinCode: "",
    address: "",
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
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
  );
};