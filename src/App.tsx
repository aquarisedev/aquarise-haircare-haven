import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandPage from "./pages/BrandPage";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marcas/:brand" element={<BrandPage />} />
          {/* ADICIONE TODAS AS ROTAS CUSTOMIZADAS ACIMA DA ROTA CATCH-ALL "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
