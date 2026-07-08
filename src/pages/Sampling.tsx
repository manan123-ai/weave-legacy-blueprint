import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';

const SITE = 'https://jcofabrics.com';

const steps = [
  {
    name: 'Inquiry',
    text: 'Share your fabric requirement — construction type, fibre content, finish, colour direction and end use. We will advise on available options and development feasibility.',
  },
  {
    name: 'Strike-off / Lab Dip',
    text: 'For colour approval — lab dips (small colour samples) are developed and submitted for your approval. Strike-off samples of the actual construction are provided for hand feel and quality approval.',
  },
  {
    name: 'Sample Development',
    text: 'Once construction and colour are approved, we produce a sample length (typically 3-5 metres) for final approval before bulk production begins.',
  },
  {
    name: 'Bulk Production',
    text: 'After sample approval, bulk production proceeds. Mid-production and pre-shipment inspection available on request.',
  },
];

const Sampling = () => (
  <div className="min-h-screen">
    <SEO
      title="Fabric Sampling — Strike Off Lab Dip Bulk Approval | JNC Fabrics"
      description="Fabric sampling process at Janki Nath & Co. Strike-off samples, lab dip approval, bulk approval. Custom development from specification. Export quality sampling."
      path="/sampling"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'Fabric Sampling Process — Janki Nath & Co.',
          step: steps.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Sampling', item: `${SITE}/sampling` },
          ],
        },
      ]}
    />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Process</p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Fabric Sampling Process"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              How custom fabric development works at Janki Nath & Co. — from initial brief to bulk production.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="Inquiry · Lab Dip · Sample · Bulk" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {steps.map((s, i) => (
            <Reveal key={s.name}>
              <div className="border-l-2 border-primary pl-8">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  Step 0{i + 1}
                </p>
                <h2 className="font-serif text-2xl font-bold text-primary mb-4">{s.name}</h2>
                <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-primary mt-10 mb-4">Development Quantities</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              We welcome custom fabric development from small sampling quantities — no requirement to commit to bulk before sample approval.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-primary mt-10 mb-4">Sample Charges</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Sample development charges apply for custom constructions. Charges are adjustable against bulk order. Contact us for details.
            </p>
          </Reveal>

          <div className="rounded-sm border border-border/60 bg-card p-10">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Start the sampling process</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">jcofabrics@yahoo.co.in</a>
              <a href="tel:+919891542727" className="font-body text-sm text-primary underline-offset-4 hover:underline">WhatsApp: +91 98915 42727</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Sampling;
