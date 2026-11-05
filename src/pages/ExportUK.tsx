import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

const TERMS: [string, string][] = [
  ['Bulk minimum', '1,500 m per quality'],
  ['Development', 'From 150 m through our sampling unit, depending on the quality. Some qualities need a higher quantity.'],
  ['Widths', '48 in to 120 in, and wider to order'],
  ['Lead time', 'About 45 days for greige and most qualities, about 60 days for yarn-dyed and jacquard, ex Delhi'],
  ['Pricing', 'FOB New Delhi. CIF available on request'],
  ['Payment', 'TT (Telegraphic Transfer) or LC (Letter of Credit)'],
  ['Shipping', 'Air freight and sea freight both available'],
];

const RANGE: [string, string, string][] = [
  ['Jacquard fabric', '/fabrics/jacquard', 'Custom jacquard for garments and home furnishing, developed from your artwork.'],
  ['Dobby fabric', '/fabrics/dobby', 'Self and colour dobby for shirting, table linen and cushion covers.'],
  ['Yarn-dyed fabric', '/fabrics/yarn-dyed', 'Checks, stripes and plaids with the colour woven in.'],
  ['Linen and blends', '/fabrics/linen', 'Pure linen and cotton or viscose blends, with OEKO-TEX Standard 100 testing available.'],
  ['Home furnishing', '/fabrics/home-furnishing', 'Table linen, cushion covers, bed linen accessories, curtain and upholstery fabrics.'],
  ['Organic cotton', '/fabrics/organic-cotton', 'GOTS and OCS options with certification documents for certified orders.'],
  ['Recycled fabric', '/fabrics/recycled', 'Recycled cotton and recycled polyester blends with GRS documentation.'],
];

const FAQS: [string, string][] = [
  [
    'What is the minimum order for UK buyers?',
    'Bulk orders start at 1,500 m per quality. For custom development we can start from 150 m through our sampling unit. The minimum depends on the quality, and some qualities need a higher quantity.',
  ],
  [
    'How long does an order take?',
    'Lead time is about 45 days for greige and most qualities, and about 60 days for yarn-dyed and jacquard, ex Delhi. Sampling comes first, and bulk starts after approval.',
  ],
  [
    'Do UK buyers pay import duty on fabric from India?',
    'The India-UK Comprehensive Economic and Trade Agreement was reported to come into force on 15 July 2026, with zero duty for Indian textiles and apparel entering the UK. Whether a shipment qualifies depends on its commodity code and the origin rules, so please check current UK Government guidance and confirm with your customs agent. We supply a certificate of origin and the other export documents with each shipment.',
  ],
  [
    'Which documents come with a shipment?',
    'Commercial invoice, packing list, certificate of origin, bill of lading, GST invoice and certification documentation as applicable (GOTS, OCS, GRS, BCI, OEKO-TEX). Pre-shipment inspection reports are available on request.',
  ],
  [
    'What fabric widths do you offer?',
    'From 48 inches to 120 inches, and wider to order.',
  ],
  [
    'Can I see a sample before ordering in bulk?',
    'Yes. We prepare strike-off samples and follow a lab dip approval process. Sample development charges apply for custom constructions and are adjustable against a bulk order. Bulk production begins after sample approval.',
  ],
];

const ExportUK = () => (
  <div className="min-h-screen">
    <SEO
      title="Woven Fabric Supplier India for UK Buyers | JNC Fabrics"
      description="Woven fabric from India for UK buyers: jacquard, dobby, yarn-dyed and linen. Bulk from 1,500 m, development from 150 m. India-UK trade deal notes."
      path="/export/uk"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    />
    <Breadcrumbs
      items={[{ name: 'Export', path: '/export' }, { name: 'UK Buyers' }]}
      currentPath="/export/uk"
    />
    <main className="pt-16">
      <section className="py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              For UK Buyers
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Woven Fabric from India for UK Buyers"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Janki Nath & Co. supplies woven fabric from New Delhi to fashion brands, home furnishing companies and fabric importers in the United Kingdom. Cotton, linen, viscose, jacquard, dobby and yarn-dyed constructions for garments and homes, with sampling first and bulk after approval.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Terms at a Glance</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {TERMS.map(([l, v]) => (
                <div key={l} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-1">{l}</p>
                  <p className="font-body text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">India-UK Trade Agreement</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-4">
              The India-UK Comprehensive Economic and Trade Agreement (CETA) was reported to come into force on 15 July 2026. Trade press reports zero duty on Indian textiles and apparel entering the UK, where import duties applied before.
            </p>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-4">
              Whether a particular shipment qualifies depends on its commodity code and the origin rules. Please check the current UK Government tariff and origin guidance, and confirm with your customs agent. We provide a certificate of origin and the export documents listed below with each shipment.
            </p>
            <p className="font-body text-sm text-muted-foreground">Last checked: 6 November 2026.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">What We Supply</h2>
            <ul className="space-y-3">
              {RANGE.map(([name, to, text]) => (
                <li key={to} className="font-body text-base text-muted-foreground leading-relaxed">
                  <Link to={to} className="text-primary underline underline-offset-4 hover:no-underline">{name}</Link>
                  {': '}
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">How an Order Starts</h2>
            <ol className="list-decimal pl-6 space-y-2 font-body text-base text-muted-foreground leading-relaxed">
              <li>Send us your brief: end use, weight, width, colour and the quantity you have in mind.</li>
              <li>We propose a construction from our range or develop a new one, and prepare strike-off samples for approval.</li>
              <li>You approve the sample. Sample development charges are adjustable against a bulk order.</li>
              <li>Bulk production follows from 1,500 m per quality, with lead time as above.</li>
              <li>We ship by air or sea with the export documents.</li>
            </ol>
            <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
              More detail: <Link to="/sampling" className="text-primary underline underline-offset-4 hover:no-underline">sampling process</Link>, {' '}
              <Link to="/blog/minimum-order-quantity-fabric-india" className="text-primary underline underline-offset-4 hover:no-underline">minimum order guide</Link> and {' '}
              <Link to="/blog/fabric-export-documentation-india" className="text-primary underline underline-offset-4 hover:no-underline">export documentation guide</Link>.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Certifications</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Certified options include GOTS, OCS, GRS, OEKO-TEX Standard 100 and BCI, with documents for certified orders. For linen, OEKO-TEX Standard 100 testing is available. See our <Link to="/certifications" className="text-primary underline underline-offset-4 hover:no-underline">certifications page</Link> for what each standard covers.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Questions UK Buyers Ask</h2>
            <div className="space-y-6">
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{q}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="rounded-sm border border-border/60 bg-card p-10">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Send us your brief</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">jcofabrics@yahoo.co.in</a>
              <a href="https://wa.me/919891542727" className="font-body text-sm text-primary underline-offset-4 hover:underline">WhatsApp: +91 98915 42727</a>
              <Link to="/export" className="font-body text-sm text-primary underline-offset-4 hover:underline">Export information →</Link>
              <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">Contact →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default ExportUK;
