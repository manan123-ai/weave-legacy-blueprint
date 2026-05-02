import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricMarquee from '@/components/FabricMarquee';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Footer from '@/components/Footer';
import KineticStrip from '@/components/motion/KineticStrip';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Janki Nath & Co. — Premium Woven Fabric Manufacturer, India"
        description="Premium woven fabrics — cotton, linen, jacquards & specialty textiles. Trusted by 50+ global brands across 20+ countries since 1968."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Janki Nath & Co.',
          url: 'https://jankinathandco.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://jankinathandco.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
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
