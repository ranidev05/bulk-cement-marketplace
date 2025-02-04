import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { OrderSearchForm } from "@/components/order/OrderSearchForm";
import { OrderList } from "@/components/order/OrderList";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Order Status</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <OrderSearchForm
              searchType={searchType}
              searchValue={searchValue}
              onSearchTypeChange={setSearchType}
              onSearchValueChange={setSearchValue}
              onSearch={handleSearch}
            />

            {searched && orders.length > 0 && (
              <OrderList orders={orders} />
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