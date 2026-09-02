import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';
const PATH = '/fabrics/woven-fabric-exporter-india';

const WovenFabricExporterIndia = () => (
  <div className="min-h-screen">
    <SEO
      title="Woven Fabric Exporter India | Fabric Exporter | JNC Fabrics"
      description="Janki Nath & Co. is a woven fabric exporter in India — mill-direct, BCI GOTS OEKO-TEX certified, MOQ for development and bulk, full export documentation and Incoterms support."
      path={PATH}
      keywords="woven fabric exporter India, fabric exporter India, fabric export MOQ, Incoterms fabric export India"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Fabrics', item: `${SITE}/fabrics` },
            { '@type': 'ListItem', position: 3, name: 'Woven Fabric Exporter India', item: `${SITE}${PATH}` },
          ],
        },
      ]}
    />
    <Breadcrumbs items={[{ name: 'Fabrics', path: '/fabrics' }, { name: 'Woven Fabric Exporter India' }]} currentPath={PATH} />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              Export Capability
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Woven Fabric Exporter India"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Janki Nath & Co. is a woven fabric exporter based in New Delhi, India — supplying fashion brands, garment manufacturers, buying houses and fabric importers mill-direct from our own weaving units.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="Mill Direct · Export Documentation · 20+ Countries" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Export Capability</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              As a fabric exporter in India, we produce across five in-house weaving units — Meerut, Bhiwandi, Ichalkaranji, Erode, Salem and Surat — covering cotton, linen, jacquard, viscose, dobby, yarn-dyed, crepe, twill and upholstery constructions. Being mill-direct rather than a trading house means we control production, quality and documentation for every export order ourselves, not through an intermediary. See our full{' '}
              <Link to="/fabrics" className="text-primary underline underline-offset-4 hover:no-underline">fabric range</Link>{' '}
              for the complete catalogue.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Markets Served</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              USA · United Kingdom · Germany · France · Italy · Spain · Netherlands · Belgium · Switzerland · Japan · South Korea · Australia · New Zealand · UAE · Saudi Arabia · Canada · Scandinavia
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">MOQ for Export Orders</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-4">
              Minimum order quantity depends on the construction, not a fixed figure across the board. Fabrics already in our running range carry a lower MOQ since no new setup is required; custom development — a new construction, blend or finish — carries MOQ from the development stage itself. We work on both development quantities and bulk production, and do not require a bulk commitment before sampling — sample development comes first, bulk approval after.
            </p>
            <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
              See our full{' '}
              <Link to="/blog/minimum-order-quantity-fabric-india" className="text-primary underline underline-offset-4 hover:no-underline">minimum order quantity guide</Link>{' '}
              for the factors that affect MOQ at any Indian mill.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Certifications for Export</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              BCI (Better Cotton Initiative) · GOTS (Global Organic Textile Standard) · OCS (Organic Content Standard) · OEKO-TEX Standard 100. Full documentation, including shipment-specific transaction certificates, is available on request — see our{' '}
              <Link to="/certifications" className="text-primary underline underline-offset-4 hover:no-underline">certifications page</Link>{' '}
              for what each one verifies.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Export Documentation Support</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Every export shipment includes commercial invoice, packing list, certificate of origin, bill of lading or airway bill, GST invoice, and certification documentation as applicable. Pre-shipment inspection reports are available on request from independent third-party inspection companies. See our{' '}
              <Link to="/blog/fabric-export-documentation-india" className="text-primary underline underline-offset-4 hover:no-underline">full export documentation guide</Link>{' '}
              for what each document covers and why it matters at your border.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl md:text-3xl font-bold text-primary mb-6">Incoterms We Work On</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-4">
              Fabric export pricing is typically quoted under one of the following Incoterms, and we can work to whichever your logistics setup requires:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['FOB (Free on Board)', 'Our standard export pricing basis — from the nearest Indian port. Most common for buyers managing their own freight forwarder.'],
                ['CIF (Cost, Insurance & Freight)', 'Available on request — we arrange freight and insurance to your destination port.'],
                ['EXW (Ex Works)', 'Collection directly from our weaving unit or head office — buyer arranges all onward transport.'],
                ['DDP (Delivered Duty Paid)', 'Available for select markets on request — discuss at inquiry stage.'],
              ].map(([l, v]) => (
                <div key={l} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-body text-sm font-semibold text-primary mb-1">{l}</p>
                  <p className="font-body text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="rounded-sm border border-border/60 bg-card p-10">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Contact our export team</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">jcofabrics@yahoo.co.in</a>
              <a href="tel:+919891542727" className="font-body text-sm text-primary underline-offset-4 hover:underline">WhatsApp / Phone: +91 98915 42727</a>
              <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">Contact form →</Link>
              <Link to="/export" className="font-body text-sm text-primary underline-offset-4 hover:underline">Full export services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default WovenFabricExporterIndia;
