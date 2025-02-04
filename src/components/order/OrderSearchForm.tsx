import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface OrderSearchFormProps {
  searchType: "mobile" | "order";
  searchValue: string;
  onSearchTypeChange: (value: "mobile" | "order") => void;
  onSearchValueChange: (value: string) => void;
  onSearch: () => void;
}

export const OrderSearchForm = ({
  searchType,
  searchValue,
  onSearchTypeChange,
  onSearchValueChange,
  onSearch,
}: OrderSearchFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-medium mb-2 block">Search By</Label>
        <RadioGroup
          defaultValue={searchType}
          onValueChange={(value) => onSearchTypeChange(value as "mobile" | "order")}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mobile" id="mobile" />
            <Label htmlFor="mobile">Mobile Number</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="order" id="order" />
            <Label htmlFor="order">Order ID</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="searchValue" className="text-sm font-medium text-gray-700 mb-1">
          {searchType === "mobile" ? "Mobile Number" : "Order ID"}
        </Label>
        <div className="flex gap-2">
          <Input
            id="searchValue"
            type={searchType === "mobile" ? "tel" : "text"}
            placeholder={searchType === "mobile" ? "Enter your mobile number" : "Enter order ID"}
            value={searchValue}
            onChange={(e) => onSearchValueChange(searchType === "mobile" ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value)}
            className="flex-1"
          />
          <Button onClick={onSearch}>Search</Button>
        </div>
      </div>
    </div>
  );
};