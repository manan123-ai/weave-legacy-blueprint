import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';

const Export = () => (
  <div className="min-h-screen">
    <SEO
      title="Woven Fabric Export from India — Mill Direct Supply | JNC Fabrics"
      description="Export woven fabric directly from Indian mill. FOB pricing, export documentation, BCI GOTS OEKO-TEX certified. Supplying buyers across USA, UK, Germany, France, Japan, Australia, UAE."
      path="/export"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Export', item: `${SITE}/export` },
          ],
        },
      ]}
    />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              Export Services
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Woven Fabric Export from India"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Janki Nath & Co. exports premium woven fabrics mill-direct to fashion brands, garment manufacturers, buying houses and fabric importers across 20+ countries.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="Mill Direct · FOB New Delhi · 20+ Countries" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Export Markets</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              USA · United Kingdom · Germany · France · Italy · Spain · Netherlands · Belgium · Switzerland · Japan · South Korea · Australia · New Zealand · UAE · Saudi Arabia · Canada · Scotland · Scandinavia
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">How We Export</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-6">
              Mill-direct supply — fabric produced in our own weaving units and shipped directly to your destination. No agents, no trading houses between buyer and production.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Pricing', 'FOB New Delhi · CIF available on request'],
                ['Payment', 'TT (Telegraphic Transfer) · LC (Letter of Credit)'],
                ['Shipping', 'Air freight and sea freight both available'],
                ['Lead Time', '15–30 days standard · 30–45 days custom development'],
              ].map(([l, v]) => (
                <div key={l} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-1">{l}</p>
                  <p className="font-body text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Export Documentation</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Every export shipment includes: commercial invoice, packing list, certificate of origin, bill of lading, GST invoice, certification documentation (GOTS, BCI, OCS, OEKO-TEX as applicable) and pre-shipment inspection reports on request.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Certifications for Export</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              BCI (Better Cotton Initiative) · GOTS (Global Organic Textile Standard) · OCS (Organic Content Standard) · OEKO-TEX Standard 100. All certification documentation available on request.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Sampling for Export Buyers</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Strike-off samples available. Lab dip approval process followed. Bulk production begins after sample approval.
            </p>
          </Reveal>

          <div className="rounded-sm border border-border/60 bg-card p-10">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Contact our export team</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">jcofabrics@yahoo.co.in</a>
              <a href="tel:+919891542727" className="font-body text-sm text-primary underline-offset-4 hover:underline">WhatsApp / Phone: +91 98915 42727</a>
              <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">Contact form →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Export;
