import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type OrderStatus = "created" | "pending" | "shipped" | "success";
type PaymentStatus = "holding" | "completed";

interface OrderDetails {
  order_id: string;
  status: string;
  payment_status: string;
  date: string;
  product: string;
  quantity: number;
  full_name: string;
  mobile_number: string;
  invoice_number: string;
  address: string;
  pincode: string;
}

const OrderStatus = () => {
  const [searchType, setSearchType] = useState<"mobile" | "order">("mobile");
  const [searchValue, setSearchValue] = useState("");
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [searched, setSearched] = useState(false);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<PaymentStatus | "all">("all");

  const handleSearch = async () => {
    if (searchType === "mobile" && searchValue.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (searchType === "order" && !searchValue.trim()) {
      toast.error("Please enter a valid order ID");
      return;
    }

    try {
      let query = supabase
        .from('orders')
        .select('*');

      // Apply search filter
      if (searchType === "mobile") {
        query = query.eq('mobile_number', searchValue);
      } else {
        query = query.eq('order_id', searchValue);
      }

      // Apply status filters
      if (statusFilter !== "all") {
        query = query.eq('status', statusFilter);
      }
      if (paymentStatusFilter !== "all") {
        query = query.eq('payment_status', paymentStatusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;

      setOrders(data || []);
      setSearched(true);

      if (!data || data.length === 0) {
        toast.error(`No orders found for this ${searchType === "mobile" ? "mobile number" : "order ID"}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to fetch orders. Please try again.");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "created": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "shipped": return "bg-purple-100 text-purple-800";
      case "success": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "holding": return "bg-orange-100 text-orange-800";
      case "completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const capitalizeFirstLetter = (str: string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Order Status</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium mb-2 block">Search By</Label>
                <RadioGroup
                  defaultValue="mobile"
                  onValueChange={(value) => setSearchType(value as "mobile" | "order")}
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
                    onChange={(e) => setSearchValue(searchType === "mobile" ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleSearch}>Search</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="status" className="text-sm font-medium text-gray-700 mb-1">
                    Order Status
                  </Label>
                  <Select
                    value={statusFilter}
                    onValueChange={(value) => setStatusFilter(value as OrderStatus | "all")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="created">Created</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="paymentStatus" className="text-sm font-medium text-gray-700 mb-1">
                    Payment Status
                  </Label>
                  <Select
                    value={paymentStatusFilter}
                    onValueChange={(value) => setPaymentStatusFilter(value as PaymentStatus | "all")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Payment Statuses</SelectItem>
                      <SelectItem value="holding">Holding</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {searched && orders.length > 0 && (
              <div className="mt-6 space-y-6">
                <h2 className="text-xl font-semibold">Your Orders</h2>
                {orders.map((order) => (
                  <div key={order.order_id} className="border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                      <div>
                        <span className="font-medium">Order ID: {order.order_id}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                          {capitalizeFirstLetter(order.status)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${getPaymentStatusColor(order.payment_status)}`}>
                          Payment: {capitalizeFirstLetter(order.payment_status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <p className="font-medium mb-1">Customer Details</p>
                        <p>Full Name: {order.full_name}</p>
                        <p>Mobile: {order.mobile_number}</p>
                        <p>Invoice Number: {order.invoice_number}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Delivery Address</p>
                        <p>{order.address}</p>
                        <p>PIN Code: {order.pincode}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Order Details</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                        <p>Product: {order.product}</p>
                        <p>Quantity: {order.quantity} bags</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searched && orders.length === 0 && (
              <div className="text-center text-gray-500 mt-4">
                No orders found for this {searchType === "mobile" ? "mobile number" : "order ID"}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderStatus;