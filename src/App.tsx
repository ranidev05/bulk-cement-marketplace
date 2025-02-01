import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import Index from "./pages/Index"
import OrderStatus from "./pages/OrderStatus"
import "./App.css"

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/order-status" element={<OrderStatus />} />
          </Routes>
        </Router>
        <Toaster />
        <Sonner />
      </div>
    </QueryClientProvider>
  )
}

export default App