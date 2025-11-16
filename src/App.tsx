import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Insurance from "./pages/Insurance";
import Currency from "./pages/Currency";
import Internet from "./pages/Internet";
import Companies from "./pages/Companies";
import Hotels from "./pages/Hotels";
import Laws from "./pages/Laws";
import Embassy from "./pages/Embassy";
import Reviews from "./pages/Reviews";
import Auth from "./pages/Auth";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/embassy" element={<Embassy />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
