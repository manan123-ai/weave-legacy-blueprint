import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricMarquee from '@/components/FabricMarquee';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Footer from '@/components/Footer';
import KineticStrip from '@/components/motion/KineticStrip';
import SectionDivider from '@/components/motion/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutPreview />
      <KineticStrip text="Heritage Craft — Modern Looms" />
      <SectionDivider label="The Collection" index="02" />
      <FabricMarquee />
      <FabricShowreel />
      <KineticStrip text="Woven in India — Worn Worldwide" reverse />
      <SectionDivider label="Global Reach" index="03" />
      <GlobalExportMap />
      <KineticStrip text="Precision · Craft · Scale" />
      <SectionDivider label="The Difference" index="04" />
      <WhyJankiNath />
      <Footer />
    </div>
  );
};

export default Index;
