import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface OrderDetails {
  id: string;
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
  created_at: string;
}

const OrderStatus = () => {
  const [mobile, setMobile] = useState("");
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('mobile_number', mobile);

      if (error) throw error;

      setOrders(data || []);
      setSearched(true);

      if (!data || data.length === 0) {
        toast.error("No orders found for this mobile number");
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
          <div className="space-y-4">
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex gap-2">
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="flex-1"
                />
                <Button onClick={handleSearch}>Search</Button>
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
                No orders found for this mobile number
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