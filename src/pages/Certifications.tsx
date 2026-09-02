import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const items = [
  {
    heading: 'BCI Cotton Fabric — Better Cotton Initiative',
    body: [
      "As a supplier of BCI cotton fabric from India, Janki Nath & Co. is an active Better Cotton Initiative member — the world's largest cotton sustainability programme. BCI certified cotton is grown using reduced water, reduced pesticides and responsible farming practices across our sourcing base.",
      'What this means for buyers: your cotton fabric purchase supports responsible farming. BCI claim documentation and membership number provided on request.',
    ],
  },
  {
    heading: 'GOTS Certified Fabric Manufacturer in India',
    body: [
      "Janki Nath & Co. is a GOTS certified fabric manufacturer in India — GOTS (Global Organic Textile Standard) is the world's leading textile processing standard for organic fibres, covering the entire supply chain from raw fibre through weaving, dyeing and finishing. It is the most comprehensive textile certification available.",
      'What this means for buyers: full organic supply chain traceability from an Indian manufacturer, not a trading intermediary. Suitable for brands making organic or certified fabric claims. GOTS scope certificate and transaction certificates provided per shipment.',
    ],
  },
  {
    heading: 'OCS — Organic Content Standard',
    body: [
      'OCS verifies that a product contains a specified percentage of organic material. Chain of custody certified. Suitable for blended fabrics where full GOTS is not required.',
    ],
  },
  {
    heading: 'OEKO-TEX Standard 100',
    body: [
      'OEKO-TEX Standard 100 tests the finished fabric for over 100 harmful substances including heavy metals, pesticides, formaldehyde and pH levels. Certifies product safety.',
      'What this means for buyers: the finished fabric is tested and confirmed free from harmful substances. Suitable for any fabric regardless of fibre source.',
    ],
  },
];

const Certifications = () => (
  <div className="min-h-screen">
    <SEO
      title="GOTS & BCI Certified Fabric Manufacturer India | JNC Fabrics"
      description="Janki Nath & Co. is a GOTS certified fabric manufacturer in India and active BCI cotton fabric member, alongside OCS and OEKO-TEX Standard 100. Full documentation on every export order."
      path="/certifications"
    />
    <Breadcrumbs items={[{ name: 'Certifications' }]} currentPath="/certifications" />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              Standards & Certification
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Fabric Certifications"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Janki Nath & Co. is a GOTS certified fabric manufacturer in India and BCI cotton fabric member, holding four internationally recognised textile certifications covering responsible cotton sourcing, organic supply chains and product safety.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="BCI · GOTS · OCS · OEKO-TEX Standard 100" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {items.map((it) => (
            <Reveal key={it.heading}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">{it.heading}</h2>
              {it.body.map((p, i) => (
                <p key={i} className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-4">{p}</p>
              ))}
            </Reveal>
          ))}
          <Reveal>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Documentation</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
              All certification documentation available on request: GOTS scope certificate · OCS certificate · OEKO-TEX certificate · BCI claim documents · transaction certificates per shipment.
            </p>
            <p className="font-body text-base text-primary mt-6">
              Contact us for certification documentation: <a href="mailto:jcofabrics@yahoo.co.in" className="underline-offset-4 hover:underline">jcofabrics@yahoo.co.in</a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Certifications;
