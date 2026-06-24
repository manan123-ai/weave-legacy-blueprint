import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricMarquee from '@/components/FabricMarquee';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Footer from '@/components/Footer';
import KineticStrip from '@/components/motion/KineticStrip';
import SEO from '@/components/SEO';
import WeaveRevealBanner from '@/components/WeaveRevealBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="JNC Fabrics | Premium Woven Fabric Manufacturer & Exporter from India"
        description="Janki Nath & Co. — 50+ years of woven fabric manufacturing. Cotton, linen, jacquard, viscose. BCI, GOTS, OEKO-TEX certified. Mill-direct export to USA, UK, Germany, Japan, Australia."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'JNC Fabrics',
            url: 'https://jcofabrics.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://jcofabrics.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
            alternateName: 'JNC Fabrics',
            url: 'https://jcofabrics.com',
            logo: 'https://jcofabrics.com/logo.png',
            foundingDate: '1968',
            description: 'Premium woven fabric manufacturer and exporter from India. BCI, GOTS, OCS and OEKO-TEX certified. Supplying cotton, linen, jacquard and viscose fabrics to global buyers since 1968.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'A-14, Mayapuri Industrial Area, Phase-1',
              addressLocality: 'New Delhi',
              addressCountry: 'IN',
              postalCode: '110064',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9891542727',
              email: 'jcofabrics@yahoo.co.in',
              contactType: 'sales',
            },
            hasCredential: ['BCI Cotton', 'GOTS', 'OCS', 'OEKO-TEX Standard 100'],
          },
        ]}
      />
      <HeroBanner />
      <WeaveRevealBanner taglineText="Designers · Manufacturers · Suppliers" />
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
