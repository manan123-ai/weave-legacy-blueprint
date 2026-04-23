import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricMarquee from '@/components/FabricMarquee';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Footer from '@/components/Footer';
import KineticStrip from '@/components/motion/KineticStrip';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutPreview />
      <KineticStrip text="Heritage Craft — Modern Looms" />
      <FabricMarquee />
      <FabricShowreel />
      <KineticStrip text="Woven in India — Worn Worldwide" reverse />
      <GlobalExportMap />
      <WhyJankiNath />
      <Footer />
    </div>
  );
};

export default Index;
