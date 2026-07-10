import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';

const CERTS = [
  {
    name: 'GOTS — Global Organic Textile Standard',
    text: 'GOTS is the leading global standard for organic textiles, covering organic fibre content, ecological and social criteria across the entire textile supply chain. Required by most organic apparel brands worldwide.',
  },
  {
    name: 'BCI — Better Cotton Initiative',
    text: 'BCI is the largest cotton sustainability programme globally. Cotton produced with reduced water, pesticides and improved farmer livelihoods. Chosen by most volume apparel brands.',
  },
  {
    name: 'OCS — Organic Content Standard',
    text: 'OCS verifies the presence and amount of organic material in a final product and tracks the flow of raw material through the supply chain from source to final product.',
  },
  {
    name: 'OEKO-TEX Standard 100',
    text: 'OEKO-TEX Standard 100 tests textiles for harmful substances at every stage of production. Required by most retailers and importers in the EU, USA, Japan and Australia.',
  },
];

const CertifiedFabrics = () => (
  <div className="min-h-screen">
    <SEO
      title="GOTS BCI OCS OEKO-TEX Certified Fabric from India | JNC Fabrics"
      description="Certified woven fabric from India. GOTS, BCI, OCS and OEKO-TEX Standard 100 certified fabric manufacturer. Documentation for every export order."
      path="/fabrics/certified"
      keywords="GOTS certified fabric India, BCI cotton fabric India, OCS certified fabric, OEKO-TEX certified fabric manufacturer"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Fabrics', item: `${SITE}/fabrics` },
          { '@type': 'ListItem', position: 3, name: 'Certified', item: `${SITE}/fabrics/certified` },
        ],
      }}
    />
    <Breadcrumbs items={[{ name: 'Fabrics', path: '/fabrics' }, { name: 'Certified' }]} />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Certifications</p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Certified Woven Fabric from India — GOTS, BCI, OCS, OEKO-TEX"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Every export order ships with full certification documentation and traceability.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="GOTS · BCI · OCS · OEKO-TEX" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {CERTS.map((c) => (
            <Reveal key={c.name}>
              <div className="border-l-2 border-primary pl-8">
                <h2 className="font-serif text-2xl font-bold text-primary mb-3">{c.name}</h2>
                <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="rounded-sm border border-border/60 bg-card p-10">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Request certification documentation</h3>
              <p className="font-body text-muted-foreground mb-6 font-light">
                Scope certificates and transaction certificates provided per order. Contact us for the full documentation pack.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/certifications" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  Full certification details →
                </Link>
                <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  Contact us →
                </Link>
                <Link to="/request-samples" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  Request samples →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CertifiedFabrics;
