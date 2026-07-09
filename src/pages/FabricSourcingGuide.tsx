import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';

const fabrics = [
  { name: 'Cotton fabrics', path: '/fabrics/cotton', desc: 'Plain, twill, poplin, canvas — greige, RFD, dyed and printed. BCI & GOTS certified.' },
  { name: 'Linen fabrics', path: '/fabrics/linen', desc: '100% linen and blends. GOTS and OCS certified. Fluid, breathable, export-grade.' },
  { name: 'Jacquard fabrics', path: '/fabrics/jacquard', desc: 'Damask, brocade, matelassé. Custom pattern development in cotton, viscose and linen.' },
  { name: 'Yarn dyed fabrics', path: '/fabrics/yarn-dyed', desc: 'Checks, stripes, plaids. Consistent colour across reorders. Cotton and blends.' },
  { name: 'Upholstery fabrics', path: '/fabrics/upholstery', desc: 'Home furnishing and contract-grade upholstery. OEKO-TEX certified.' },
  { name: 'Viscose fabrics', path: '/fabrics/viscose', desc: 'Fluid viscose plain, twill, crepe and jacquard for evening and resort wear.' },
  { name: 'Dobby fabrics', path: '/fabrics/dobby', desc: 'Self-dobby and colour dobby in cotton — subtle geometric weave for premium shirting.' },
];

const FabricSourcingGuide = () => {
  const path = '/fabric-sourcing-guide';
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Complete Guide to Sourcing Woven Fabric from India',
      description:
        'Everything international buyers need to know about sourcing woven fabric from India — certifications, sampling, MOQ, documentation, lead times and supplier evaluation.',
      author: { '@type': 'Person', name: 'Manan Bhasin' },
      publisher: {
        '@type': 'Organization',
        name: 'Janki Nath & Co.',
        logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${path}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Fabric Sourcing Guide', item: `${SITE}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Complete Guide to Sourcing Woven Fabric from India | JNC Fabrics"
        description="Everything international buyers need to know about sourcing woven fabric from India — certifications, sampling, MOQ, documentation, lead times and supplier evaluation."
        path={path}
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ name: 'Fabric Sourcing Guide' }]} />
      <main>
        <section className="py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Buyer's Guide
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="Complete Guide to Sourcing Woven Fabric from India"
              className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light">
                Everything international buyers need to know when sourcing woven fabric from Indian manufacturers.
              </p>
            </Reveal>
          </div>
        </section>

        <KineticStrip text="Mill Direct · Export Grade · Since 1968" />

        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">Why Source Woven Fabric from India</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
                India is the world's second largest textile producer. Key advantages for international buyers: strong
                certification infrastructure (GOTS, BCI, OCS, OEKO-TEX), competitive pricing on specialty constructions,
                flexible development capability, and strong sustainability credentials for European and US markets.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">What Woven Fabrics India Produces</h2>
              <ul className="space-y-4">
                {fabrics.map((f) => (
                  <li key={f.path} className="border-l-2 border-primary/40 pl-4">
                    <Link to={f.path} className="font-serif text-lg text-primary underline underline-offset-4 hover:no-underline">
                      {f.name} →
                    </Link>
                    <p className="font-body text-muted-foreground mt-1 font-light">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">Certifications Available</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
                <Link to="/certifications" className="text-primary underline underline-offset-4 hover:no-underline">BCI, GOTS, OCS, OEKO-TEX Standard 100</Link> — all available from certified Indian mills.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">The Sampling Process</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
                <Link to="/sampling" className="text-primary underline underline-offset-4 hover:no-underline">See our sampling process</Link> — how sampling works, what to expect, typical lead times.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">Export Documentation</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
                <Link to="/blog/fabric-export-documentation-india" className="text-primary underline underline-offset-4 hover:no-underline">Complete documentation guide</Link> — what documents come with every shipment.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">MOQ and Pricing</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
                <Link to="/blog/minimum-order-quantity-fabric-india" className="text-primary underline underline-offset-4 hover:no-underline">Minimum order quantity guide</Link> — development quantities and bulk minimums explained.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">How to Evaluate an Indian Fabric Supplier</h2>
              <ul className="font-body text-lg text-muted-foreground font-light leading-relaxed list-disc pl-6 space-y-2">
                <li>Verify certifications directly on issuing body websites</li>
                <li>Request factory audit reports</li>
                <li>Start with sample development before committing to bulk</li>
                <li>
                  Visit the <Link to="/showroom" className="text-primary underline underline-offset-4 hover:no-underline">showroom</Link> if possible
                </li>
                <li>Check export experience and references</li>
              </ul>
            </Reveal>

            <Reveal>
              <div className="mt-8 rounded-sm border border-border/60 bg-card p-10">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Contact JNC Fabrics</h3>
                <p className="font-body text-muted-foreground mb-6 font-light">
                  Janki Nath & Co. has been manufacturing and exporting woven fabrics since 1968. We supply fashion brands,
                  garment manufacturers, buying houses and fabric importers across 20+ countries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    📩 jcofabrics@yahoo.co.in
                  </a>
                  <a href="https://wa.me/919891542727" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    📱 +91 9891542727
                  </a>
                  <a href="https://jcofabrics.com" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    🌐 www.jcofabrics.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FabricSourcingGuide;
