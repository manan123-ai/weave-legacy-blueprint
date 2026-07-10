import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';
const WA =
  'https://wa.me/919891542727?text=' +
  encodeURIComponent('I would like to request fabric samples from Janki Nath & Co. Please share your catalogue and sampling process.');

const RequestSamples = () => (
  <div className="min-h-screen">
    <SEO
      title="Request Fabric Samples — Janki Nath & Co."
      description="Request woven fabric samples from India. Strike-off samples, lab dips, development quantities. Contact JNC Fabrics for samples and pricing."
      path="/request-samples"
      keywords="request fabric samples India, fabric swatches India, strike off samples, lab dip fabric India"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Request Samples', item: `${SITE}/request-samples` },
        ],
      }}
    />
    <Breadcrumbs items={[{ name: 'Request Samples' }]} />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Samples</p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Request Fabric Samples from India"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Strike-off samples, lab dips and development yardage — for buyers evaluating construction, hand feel, colour and quality before bulk order.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="Sample · Approve · Bulk" />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">How sampling works</h2>
            <ol className="list-decimal pl-5 space-y-3 font-body text-muted-foreground">
              <li>Share your brief — construction, GSM, composition, finish, colour direction.</li>
              <li>We advise feasibility and share available headers or catalogue swatches.</li>
              <li>Lab dips for colour approval; strike-off for construction approval.</li>
              <li>Development yardage (3–5m) before bulk approval.</li>
            </ol>
          </Reveal>

          <Reveal>
            <div className="rounded-sm border border-border/60 bg-card p-10">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Request samples now</h3>
              <p className="font-body text-muted-foreground mb-6 font-light">
                Fastest response via WhatsApp. Or email your brief to jcofabrics@yahoo.co.in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href={WA} target="_blank" rel="noopener noreferrer">Request via WhatsApp</a>
                </Button>
                <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline self-center">
                  📩 jcofabrics@yahoo.co.in
                </a>
                <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline self-center">
                  Contact form →
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

export default RequestSamples;
