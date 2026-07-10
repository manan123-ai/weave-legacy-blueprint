import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

const SITE = 'https://jcofabrics.com';

const rows: [string, string, string][] = [
  ['Cotton & natural fibre fabric', 'World's second-largest producer, strong in cotton, linen, viscose, jacquard, yarn-dyed', 'Strong in cotton, extremely strong in synthetics and polyester blends'],
  ['MOQ flexibility', 'Lower MOQs, development-friendly (from 300–500m for many constructions)', 'Higher MOQs typical (1,000m+), oriented to bulk'],
  ['Sampling & development', 'Fast sampling, custom construction, quick strike-off cycles', 'Strong for repeat programmes, slower for full custom development'],
  ['Certifications', 'GOTS, BCI, OCS, OEKO-TEX widely available', 'OEKO-TEX common, GOTS available at select mills'],
  ['Trade access from USA/EU', 'Preferential access under GSP, no tariff uncertainty from US-China dispute', 'Additional tariff exposure for US importers on many categories'],
  ['Communication', 'English-first, real-time WhatsApp / email', 'Mostly Mandarin, English varies by supplier'],
  ['Lead time', '15–30 days typical for bulk (post-sample approval)', '20–45 days typical for bulk'],
  ['Synthetics & functional fabrics', 'Growing capability', 'Category leader — best for technical polyester, nylon'],
];

const IndiaVsChinaFabric = () => (
  <div className="min-h-screen">
    <SEO
      title="India vs China Fabric Sourcing — Honest Comparison 2026 | JNC Fabrics"
      description="Honest comparison of sourcing woven fabric from India vs China in 2026. MOQ, certifications, lead times, tariffs, sampling and communication."
      path="/compare/india-vs-china-fabric"
      keywords="India vs China fabric sourcing, fabric manufacturer India vs China, sourcing woven fabric Asia"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'India vs China Fabric', item: `${SITE}/compare/india-vs-china-fabric` },
        ],
      }}
    />
    <Breadcrumbs items={[{ name: 'India vs China Fabric' }]} />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Comparison 2026</p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="India vs China Fabric Sourcing — Honest Comparison"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              A practical, no-spin comparison for fashion brands, garment manufacturers and buying houses evaluating fabric sourcing from India and China.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="MOQ · Lead Time · Certifications · Tariffs" />

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-x-auto rounded-sm border border-border/60">
              <table className="w-full font-body text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-4 font-serif text-primary">Factor</th>
                    <th className="text-left p-4 font-serif text-primary">India</th>
                    <th className="text-left p-4 font-serif text-primary">China</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([factor, india, china]) => (
                    <tr key={factor} className="border-t border-border/60 align-top">
                      <td className="p-4 font-medium text-primary">{factor}</td>
                      <td className="p-4 text-muted-foreground">{india}</td>
                      <td className="p-4 text-muted-foreground">{china}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 space-y-6 font-body text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                India is often the stronger choice for natural-fibre woven fabric — cotton, linen, viscose, jacquard, yarn-dyed and dobby — where flexibility on MOQ, custom development and certification coverage matter. China remains the category leader for synthetic, technical and high-volume polyester programmes.
              </p>
              <p>
                For USA-based buyers, India also carries less tariff and trade-policy risk in 2026, which increasingly factors into landed-cost calculations.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-sm border border-border/60 bg-card p-10">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Sourcing woven fabric from India?</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/fabrics" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  View our fabric range →
                </Link>
                <Link to="/request-samples" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  Request samples →
                </Link>
                <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                  Contact us →
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

export default IndiaVsChinaFabric;
