import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/motion/ScrollProgress";
import AuroraBackground from "./components/motion/AuroraBackground";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Index from "./pages/Index";
import About from "./pages/About";
import Fabrics from "./pages/Fabrics";
import Clientele from "./pages/Clientele";
import Contact from "./pages/Contact";
import ProductionProcess from "./pages/ProductionProcess";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Export from "./pages/Export";
import Certifications from "./pages/Certifications";
import Showroom from "./pages/Showroom";
import Sampling from "./pages/Sampling";
import FabricSourcingGuide from "./pages/FabricSourcingGuide";
import CottonFabric from "./pages/fabrics/CottonFabric";
import LinenFabric from "./pages/fabrics/LinenFabric";
import JacquardFabric from "./pages/fabrics/JacquardFabric";
import YarnDyedFabric from "./pages/fabrics/YarnDyedFabric";
import UpholsteryFabric from "./pages/fabrics/UpholsteryFabric";
import ViscoseFabric from "./pages/fabrics/ViscoseFabric";
import DobbyFabric from "./pages/fabrics/DobbyFabric";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Preloader />
        <AuroraBackground />
        <ScrollProgress />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/fabrics" element={<Fabrics />} />
          <Route path="/fabrics/cotton" element={<CottonFabric />} />
          <Route path="/fabrics/linen" element={<LinenFabric />} />
          <Route path="/fabrics/jacquard" element={<JacquardFabric />} />
          <Route path="/fabrics/yarn-dyed" element={<YarnDyedFabric />} />
          <Route path="/fabrics/upholstery" element={<UpholsteryFabric />} />
          <Route path="/fabrics/viscose" element={<ViscoseFabric />} />
          <Route path="/fabrics/dobby" element={<DobbyFabric />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/production" element={<ProductionProcess />} />
          <Route path="/export" element={<Export />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/sampling" element={<Sampling />} />
          <Route path="/fabric-sourcing-guide" element={<FabricSourcingGuide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
