import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import OrderStatus from "./pages/OrderStatus"
import "./App.css"

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/order-status" element={<OrderStatus />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App