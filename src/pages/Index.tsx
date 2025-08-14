import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutPreview />
      <FabricShowreel />
      <GlobalExportMap />
      <WhyJankiNath />
      <Footer />
    </div>
  );
};

export default Index;
