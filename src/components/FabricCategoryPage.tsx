import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Camera, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export interface FabricSection {
  heading: string;
  paragraphs?: string[];
  bullets?: { label: string; value: string }[];
}

export interface FabricCategoryPageProps {
  slug: string; // e.g. "cotton"
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  intro: string;
  sections: FabricSection[];
  productName: string;
}

const SITE = 'https://jcofabrics.com';

// Icon shown on each spec/quality card — matched by keyword in the bullet
// label so it works across every fabric page's existing data without
// needing per-page customization. Falls back to a generic swatch icon.
const specIcon = (label: string): string => {
  const l = label.toLowerCase();
  if (l.includes('construction') || l.includes('composition') || l.includes('weave')) return '🧵';
  if (l.includes('finish') || l.includes('colour') || l.includes('color') || l.includes('shade') || l.includes('pattern')) return '🎨';
  if (l.includes('certif')) return '🌿';
  if (l.includes('supply') || l.includes('quantit')) return '📦';
  if (l.includes('export') || l.includes('order')) return '✈️';
  if (l.includes('stretch')) return '🤸';
  if (l.includes('gsm') || l.includes('width')) return '📏';
  return '✅';
};

/**
 * "View Fabric Samples" CTA — placed between the fabric range description
 * and the Certifications section on every fabric category page.
 */
const PhotoRequestSection = ({ productName }: { productName: string }) => {
  const waText = encodeURIComponent(
    `Hi, I would like to see photos and swatches for your ${productName} range.`
  );
  return (
    <Reveal>
      <div className="rounded-lg border border-primary/20 bg-secondary/50 p-8 sm:p-10">
        <div className="flex items-start gap-4 mb-4">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
            <Camera className="w-6 h-6" />
          </span>
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
              View Fabric Samples
            </h3>
            <p className="font-body text-muted-foreground font-light">
              Interested in seeing our {productName.toLowerCase()} range? Contact us to request
              physical swatches or a digital catalogue with fabric photos.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={`https://wa.me/919891542727?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1fb855] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            Request Photos & Swatches
          </a>
          <a
            href="mailto:jcofabrics@yahoo.co.in"
            className="inline-flex items-center gap-2 font-body text-sm font-medium border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </div>
    </Reveal>
  );
};

const FabricCategoryPage = ({
  slug,
  title,
  metaTitle,
  metaDescription,
  keywords,
  intro,
  sections,
  productName,
}: FabricCategoryPageProps) => {
  const path = `/fabrics/${slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${productName} — Janki Nath & Co.`,
      description: metaDescription,
      manufacturer: { '@id': 'https://jcofabrics.com/#organization' },
      countryOfOrigin: 'India',
      brand: { '@type': 'Brand', name: 'JNC Fabrics' },
      image: 'https://jcofabrics.com/og-image.jpg',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: `${SITE}/contact`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'USD',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitText: 'quote on request — FOB New Delhi, MOQ varies by construction',
          },
        },
        seller: { '@id': 'https://jcofabrics.com/#organization' },
      },
    },
    // BreadcrumbList is emitted once by the shared <Breadcrumbs> component
    // below — do not duplicate it here (script tags aren't deduped by
    // scripts/prerender.mjs, so a second copy would ship to production).
  ];

  return (
    <div className="min-h-screen">
      <SEO title={metaTitle} description={metaDescription} path={path} keywords={keywords} jsonLd={jsonLd} />
      <Breadcrumbs
        items={[
          { name: 'Fabrics', path: '/fabrics' },
          { name: productName },
        ]}
        currentPath={path}
      />
      <main>
        <section className="py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Fabric Category
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text={title}
              className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                {intro}
              </p>
            </Reveal>
          </div>
        </section>

        <KineticStrip text="Mill Direct · Export Grade · India" />

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {(() => {
              // Photo/swatch request section goes between the fabric range
              // description and the Certifications section. Certifications
              // isn't always at a fixed index across fabric pages, so find
              // it by heading; fall back to right after the first section.
              const certIdx = sections.findIndex((s) => /certif/i.test(s.heading));
              const insertBeforeIdx = certIdx >= 0 ? certIdx : Math.min(1, sections.length);

              return sections.map((section, idx) => (
                <div key={idx}>
                  {idx === insertBeforeIdx && (
                    <div className="mb-16">
                      <PhotoRequestSection productName={productName} />
                    </div>
                  )}
                  <Reveal x={-32} delay={idx * 0.05}>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
                      {section.heading}
                    </h2>
                  </Reveal>
                  <Reveal delay={idx * 0.05 + 0.05}>
                    {section.paragraphs?.map((p, i) => (
                      <p key={i} className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-4">
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {section.bullets.map((b, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="rounded-lg border border-border bg-secondary/40 p-5 hover:border-primary/40 hover:bg-secondary/70 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl" aria-hidden="true">{specIcon(b.label)}</span>
                              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                {b.label}
                              </p>
                            </div>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.value}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </Reveal>
                </div>
              ));
            })()}

            <Reveal>
              <div className="mt-16 rounded-sm border border-border/60 bg-card p-10">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Ready to source {productName.toLowerCase()} from India?
                </h3>
                <p className="font-body text-muted-foreground mb-6 font-light">
                  Contact us for samples, pricing and custom development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    📩 jcofabrics@yahoo.co.in
                  </a>
                  <a href="https://wa.me/919891542727" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    📱 WhatsApp: +91 9891542727
                  </a>
                  <a href="https://jcofabrics.com" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    🌐 www.jcofabrics.com
                  </a>
                  <Link to="/contact" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    Contact form →
                  </Link>
                  <Link to="/fabrics" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    View all fabrics →
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
};

export default FabricCategoryPage;
