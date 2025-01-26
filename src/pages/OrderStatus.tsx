import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface OrderDetails {
  orderId: string;
  status: "pending" | "shipped" | "success";
  date: string;
  product: string;
  quantity: number;
}

// Demo data
const demoOrders: Record<string, OrderDetails[]> = {
  "9876543210": [
    {
      orderId: "ORD001",
      status: "shipped",
      date: "2024-02-20",
      product: "Dalmia DSP PPC",
      quantity: 1000
    },
    {
      orderId: "ORD002",
      status: "pending",
      date: "2024-02-22",
      product: "ACC Cement",
      quantity: 500
    }
  ]
};

const OrderStatus = () => {
  const [mobile, setMobile] = useState("");
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const foundOrders = demoOrders[mobile] || [];
    setOrders(foundOrders);
    setSearched(true);

    if (foundOrders.length === 0) {
      toast.error("No orders found for this mobile number");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "success": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Order Status</h1>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
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
              <div className="mt-6 space-y-4">
                <h2 className="text-xl font-semibold">Your Orders</h2>
                {orders.map((order) => (
                  <div key={order.orderId} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Order ID: {order.orderId}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Date: {order.date}</p>
                      <p>Product: {order.product}</p>
                      <p>Quantity: {order.quantity} bags</p>
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