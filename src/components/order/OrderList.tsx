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

interface OrderListProps {
  orders: OrderDetails[];
}

export const OrderList = ({ orders }: OrderListProps) => {
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
    <div className="space-y-6">
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
  );
};