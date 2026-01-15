import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Business from "./pages/Business";
import Markets from "./pages/Markets";
import Premium from "./pages/Premium";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Finance from "./pages/Finance";
import Economy from "./pages/Economy";
import Startups from "./pages/Startups";
import Opinion from "./pages/Opinion";
import Videos from "./pages/Videos";
import Stocks from "./pages/markets/Stocks";
import Currencies from "./pages/markets/Currencies";
import Crypto from "./pages/markets/Crypto";
import Article from "./pages/Article";
import JournalistProfile from "./pages/JournalistProfile";
import AdminDashboard from "./pages/admin/Dashboard";
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
            <Route path="/business" element={<Business />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/markets/stocks" element={<Stocks />} />
            <Route path="/markets/currencies" element={<Currencies />} />
            <Route path="/markets/crypto" element={<Crypto />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/opinion" element={<Opinion />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/journalist/:id" element={<JournalistProfile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
