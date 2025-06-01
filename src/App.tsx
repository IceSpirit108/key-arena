import { Toaster } from "@/components/ui/sonner"; 
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Index from "@/pages/Index";
import Catalog from "@/pages/Catalog";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";
import PrivateRoute from "@/components/PrivateRoute"; // Подключаем приватный роут

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster position="top-center" richColors /> {/* Подключаем уведомления */}
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
