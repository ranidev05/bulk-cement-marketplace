import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderStatus from "./pages/OrderStatus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Toaster />
      <SonnerToaster position="top-center" />
    </Router>
  );
}

export default App;