import HeroBanner from '@/components/HeroBanner';
import AboutPreview from '@/components/AboutPreview';
import FabricMarquee from '@/components/FabricMarquee';
import FabricShowreel from '@/components/FabricShowreel';
import GlobalExportMap from '@/components/GlobalExportMap';
import WhyJankiNath from '@/components/WhyJankiNath';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import KineticStrip from '@/components/motion/KineticStrip';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Janki Nath & Co. | Woven Fabric Manufacturer India Since 1968"
        description="Janki Nath & Co. (JNC Fabrics) — fourth-generation woven fabric manufacturer and exporter from Mayapuri, New Delhi since 1968. Cotton, linen, jacquard, viscose, dobby, twill, yarn-dyed, upholstery and crepe fabrics. BCI, GOTS, OCS and OEKO-TEX Standard 100 certified. Mill-direct export to 20+ countries."
        path="/"
        keywords="woven fabric manufacturer India, fabric exporter India, cotton fabric manufacturer India export, linen fabric manufacturer India, jacquard fabric manufacturer India, GOTS certified fabric India, BCI cotton fabric India, woven fabric supplier India, fabric manufacturer New Delhi, fabric manufacturer Mayapuri, mill direct fabric India, Janki Nath Co, JNC Fabrics, JCO Fabrics, textile manufacturer India 1968, dobby fabric India, yarn dyed fabric India, upholstery fabric India, viscose fabric India, twill fabric India, crepe fabric India, fabric export New Delhi, woven fabric exporter India"
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
            alternateName: ['JNC Fabrics', 'JCO Fabrics', 'Janki Nath and Co'],
            url: 'https://jcofabrics.com',
            logo: 'https://jcofabrics.com/logo.png',
            foundingDate: '1968',
            founder: {
              '@type': 'Person',
              name: 'Mr. Janki Nath',
            },
            description: 'Fourth-generation woven fabric manufacturer and exporter from Mayapuri, New Delhi, India. Founded 1968 by Mr. Janki Nath. Cotton, linen, jacquard, viscose, dobby, yarn-dyed, twill, upholstery and crepe fabrics. BCI, GOTS, OCS and OEKO-TEX Standard 100 certified. Five weaving units across India. Mill-direct export to 20+ countries.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'A-14, Mayapuri Industrial Area, Phase-1',
              addressLocality: 'New Delhi',
              addressRegion: 'Delhi',
              addressCountry: 'IN',
              postalCode: '110064',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9891542727',
              email: 'jcofabrics@yahoo.co.in',
              contactType: 'sales',
              availableLanguage: ['English', 'Hindi'],
            },
            hasCredential: ['BCI — Better Cotton Initiative', 'GOTS — Global Organic Textile Standard', 'OCS — Organic Content Standard', 'OEKO-TEX Standard 100', 'MSME Registered'],
            knowsAbout: ['Woven fabric manufacturing', 'Cotton fabric export', 'Linen fabric manufacture', 'Jacquard fabric weaving', 'GOTS certified fabric', 'BCI cotton', 'Fabric export India', 'Textile manufacturing India'],
            areaServed: ['US', 'GB', 'DE', 'FR', 'JP', 'AU', 'AE', 'KR', 'CA', 'NL', 'IT', 'ES', 'BE', 'CH', 'SE', 'DK', 'NO'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '6',
              bestRating: '5',
              worstRating: '1',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Who founded Janki Nath & Co.?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Janki Nath & Co. was founded in 1968 by Mr. Janki Nath in Mayapuri Industrial Area, New Delhi. The business is now run by the fourth generation of the family, led by Mr. Hamesh Kumar Bhasin (second generation, Managing Director).',
                },
              },
              {
                '@type': 'Question',
                name: 'What woven fabrics does Janki Nath & Co. manufacture?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Janki Nath & Co. manufactures cotton, cotton blends, linen, jacquard, viscose, twill and drills, upholstery and home furnishing, crepe and high twist, yarn-dyed, dobby, indigo-dyed, lurex and sequins, IKAT and tie dye, and Lycra blend woven fabrics. All fabrics are available in greige, RFD, bleached, dyed, printed and yarn-dyed finishes.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the lead time for fabric orders from Janki Nath & Co.?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Standard lead times are 15–30 days for fabrics in our running range and 30–45 days for custom fabric development. Jacquard pattern development may require 45–60 days. FOB New Delhi from our head office in Mayapuri Industrial Area.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where are Janki Nath & Co. weaving units located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Our weaving units are located in Meerut (Uttar Pradesh), Bhiwandi and Ichalkaranji (Maharashtra), Erode and Salem (Tamil Nadu), and Surat (Gujarat) — across India's major textile manufacturing regions.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept small or development quantity orders?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work on both development quantities (small lots for sampling and collection development) and bulk production from the same weaving facilities. There is no minimum commitment to bulk before sample approval.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which countries does Janki Nath & Co. export fabric to?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We export woven fabrics to USA, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Switzerland, Japan, South Korea, Australia, New Zealand, UAE, Saudi Arabia, Canada, Scotland, Scandinavia and across Europe — supplying fashion brands, garment manufacturers, buying houses and fabric importers.',
                },
              },
            ],
          },
        ]}
      />
      <HeroBanner />
      <AboutPreview />
      <KineticStrip text="Heritage Craft — Modern Looms" />
      <FabricMarquee />
      <FabricShowreel />
      <KineticStrip text="Woven in India — Worn Worldwide" reverse />
      <GlobalExportMap />
      <WhyJankiNath />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
