import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Link } from 'react-router-dom';

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
  intro: string;
  sections: FabricSection[];
  productName: string;
}

const SITE = 'https://jcofabrics.com';

const FabricCategoryPage = ({
  slug,
  title,
  metaTitle,
  metaDescription,
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
      manufacturer: {
        '@type': 'Organization',
        name: 'Janki Nath & Co.',
        url: SITE,
      },
      countryOfOrigin: 'India',
      brand: { '@type': 'Brand', name: 'JNC Fabrics' },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: `${SITE}/contact`,
        priceCurrency: 'USD',
        price: '0',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: 'Price on request — contact us for FOB pricing and samples',
        },
        seller: {
          '@type': 'Organization',
          name: 'Janki Nath & Co.',
          url: SITE,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Fabrics', item: `${SITE}/fabrics` },
        { '@type': 'ListItem', position: 3, name: productName, item: `${SITE}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO title={metaTitle} description={metaDescription} path={path} jsonLd={jsonLd} />
      <main className="pt-16">
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
            {sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((b, i) => (
                      <div key={i} className="border-l-2 border-primary/40 pl-4">
                        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                          {b.label}
                        </p>
                        <p className="font-body text-sm text-muted-foreground">{b.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-16 rounded-sm border border-border/60 bg-card p-10">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  Request Samples & Pricing
                </h3>
                <p className="font-body text-muted-foreground mb-6 font-light">
                  Contact us for samples, pricing and custom development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    jcofabrics@yahoo.co.in
                  </a>
                  <a href="tel:+919891542727" className="font-body text-sm text-primary underline-offset-4 hover:underline">
                    WhatsApp: +91 98915 42727
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
