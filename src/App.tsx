import { Suspense, lazy, useEffect } from "react";
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

// Route-based code splitting: every page below is fetched as its own chunk
// on navigation instead of shipping in the single ~735KB main bundle, which
// was blocking the main thread on first interaction (INP risk) on every
// route, even ones the visitor never opens.
const About = lazy(() => import("./pages/About"));
const Fabrics = lazy(() => import("./pages/Fabrics"));
const Clientele = lazy(() => import("./pages/Clientele"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductionProcess = lazy(() => import("./pages/ProductionProcess"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Export = lazy(() => import("./pages/Export"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Showroom = lazy(() => import("./pages/Showroom"));
const Sampling = lazy(() => import("./pages/Sampling"));
const FabricSourcingGuide = lazy(() => import("./pages/FabricSourcingGuide"));
const CottonFabric = lazy(() => import("./pages/fabrics/CottonFabric"));
const LinenFabric = lazy(() => import("./pages/fabrics/LinenFabric"));
const JacquardFabric = lazy(() => import("./pages/fabrics/JacquardFabric"));
const YarnDyedFabric = lazy(() => import("./pages/fabrics/YarnDyedFabric"));
const UpholsteryFabric = lazy(() => import("./pages/fabrics/UpholsteryFabric"));
const ViscoseFabric = lazy(() => import("./pages/fabrics/ViscoseFabric"));
const DobbyFabric = lazy(() => import("./pages/fabrics/DobbyFabric"));
const CertifiedFabrics = lazy(() => import("./pages/CertifiedFabrics"));
const RequestSamples = lazy(() => import("./pages/RequestSamples"));
const CrepeFabric = lazy(() => import("./pages/fabrics/CrepeFabric"));
const TwillFabric = lazy(() => import("./pages/fabrics/TwillFabric"));
const IndigoFabric = lazy(() => import("./pages/fabrics/IndigoFabric"));
const LurexFabric = lazy(() => import("./pages/fabrics/LurexFabric"));
const IkatFabric = lazy(() => import("./pages/fabrics/IkatFabric"));
const LycraBlendsFabric = lazy(() => import("./pages/fabrics/LycraBlendsFabric"));
const WovenFabricExporterIndia = lazy(() => import("./pages/fabrics/WovenFabricExporterIndia"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/**
 * Hide the static #initial-splash (from index.html) the instant React
 * actually mounts. Replaces a setInterval poll of document.getElementById
 * ('root').childNodes (100ms x up to 40 tries = 4s worst case before even
 * starting the fade) with a mount effect, which fires as soon as this
 * component commits — no polling granularity, no artificial ceiling. This
 * was a measured contributor to a 7+ second LCP on desktop in a Lighthouse
 * audit.
 */
const useHideInitialSplash = () => {
  useEffect(() => {
    document.documentElement.classList.add('react-mounted');
    const t = setTimeout(() => {
      const splash = document.getElementById('initial-splash');
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }, 600); // matches the existing 0.5s CSS opacity transition on #initial-splash
    return () => clearTimeout(t);
  }, []);
};

const App = () => {
  useHideInitialSplash();
  return (
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
        <Suspense fallback={null}>
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
            <Route path="/fabrics/certified" element={<CertifiedFabrics />} />
            <Route path="/fabrics/crepe" element={<CrepeFabric />} />
            <Route path="/fabrics/twill" element={<TwillFabric />} />
            <Route path="/fabrics/indigo" element={<IndigoFabric />} />
            <Route path="/fabrics/lurex" element={<LurexFabric />} />
            <Route path="/fabrics/ikat" element={<IkatFabric />} />
            <Route path="/fabrics/lycra-blends" element={<LycraBlendsFabric />} />
            <Route path="/fabrics/woven-fabric-exporter-india" element={<WovenFabricExporterIndia />} />
            <Route path="/request-samples" element={<RequestSamples />} />
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
        </Suspense>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
