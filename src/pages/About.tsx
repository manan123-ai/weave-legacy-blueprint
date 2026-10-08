import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const About = () => {
  const certifications = [
    { name: 'BCI', description: 'Responsible cotton farming, at the source.' },
    { name: 'GOTS', description: 'Organic fibre through to finished fabric.' },
    { name: 'OCS', description: 'Verified organic material content.' },
    { name: 'OEKO-TEX Standard 100', description: 'Every component tested for harmful substances.' },
    { name: 'GRS', description: 'Verified recycled content.' },
  ];

  const leadership = [
    { name: 'MR. HAMESH KUMAR BHASIN', role: 'Managing Director', years: '45+ Years Experience' },
    { name: 'MR. SANDEEPAN BHASIN', role: 'Director', years: '30+ Years Experience' },
    { name: 'MR. DEEPAK BHASIN', role: 'Director', years: '30+ Years Experience' },
    { name: 'MR. MANAN BHASIN', role: 'Marketing Head', years: 'Next-Generation Leadership' },
  ];

  const generations = [
    { gen: 'First Generation — Founder', name: 'The late Shri Janki Nath Bhasin ji', description: 'Founded the business in 1968 in Mayapuri Industrial Area, New Delhi, and laid the foundation of quality and trust that the family continues to build on.' },
    { gen: 'Second Generation', name: 'Mr. Hamesh Kumar Bhasin (Managing Director, 45+ years)', description: 'Built the export side of the business and established JNC Fabrics as a dependable supplier to international buyers.' },
    { gen: 'Third Generation', name: 'Mr. Sandeepan Bhasin & Mr. Deepak Bhasin (Directors, 30+ years each)', description: 'Expanded weaving capacity to five units across India and grew the company\'s reach across major export markets.' },
    { gen: 'Fourth Generation', name: 'Mr. Manan Bhasin (Marketing Head)', description: 'Brings the business to a new generation of international buyers through direct communication and a modern online presence.' },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About JNC Fabrics — Woven Fabric Manufacturer & Exporter, New Delhi"
        description="Family-run woven fabric manufacturer and exporter in New Delhi since 1968. BCI, GOTS, OCS, OEKO-TEX and GRS certified. Exporting to 20+ countries."
        path="/about"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
            foundingDate: '1968',
            founder: {
              '@type': 'Person',
              name: 'Shri Janki Nath Bhasin',
            },
            url: 'https://jcofabrics.com',
          },
          // BreadcrumbList is emitted once by <Breadcrumbs> below — do not
          // duplicate it here (script tags aren't deduped by
          // scripts/prerender.mjs).
        ]}
      />
      <Breadcrumbs items={[{ name: 'About' }]} currentPath="/about" />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-32 bg-secondary relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Est. 1968
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="About Janki Nath & Co. — Four Generations of Woven Fabric Manufacturing"
              className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-xl text-muted-foreground font-light">
                Founded in 1968 by the late Shri Janki Nath Bhasin ji — 55+ Years of Textile Excellence
              </p>
            </Reveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                Janki Nath <span className="italic text-muted-foreground">& Co.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6">
                Janki Nath & Co. (JNC Fabrics) was founded in 1968 by the late Shri Janki Nath Bhasin ji in Mayapuri Industrial Area, New Delhi. What began as a single unit has grown, over four generations of family ownership, into a woven fabric manufacturer and exporter with weaving units across India and buyers in more than 20 countries.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6">
                Our weaving units in Meerut, Bhiwandi, Erode, Salem and Surat each bring their own strengths in yarn, loom and finishing, while our head office and showroom in Mayapuri remains the place where buyers meet the family, see the fabrics and develop new qualities together.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
                We have stayed family-run because it keeps decisions close to the work. The people who take your enquiry are the people accountable for your order, from the first conversation to dispatch.
              </p>
            </Reveal>
          </div>
        </section>

        {/* What We Make / Who Buys */}
        <section className="py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What We Make</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Woven fabrics for garments and homes</h3>
              <p className="font-body text-muted-foreground leading-relaxed font-light">
                We weave fabrics across garment and home furnishing weights: cotton, linen, jacquard, viscose, dobby, twill, yarn-dyed, crepe and upholstery constructions, along with indigo, lurex, IKAT and Lycra blends. A shirting for a collection and a furnishing cloth for a sofa are developed with the same attention to construction, handle and colour. Orders range from small development quantities to bulk production, and custom development is part of everyday work.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Who We Work With</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6">Buyers in 20+ countries</h3>
              <p className="font-body text-muted-foreground leading-relaxed font-light">
                Our fabrics are chosen by garment brands, interior designers and home furnishing companies, fabric retailers and sourcing houses, across more than 20 countries including the USA, UK, Germany, France, Italy, Japan, Australia, UAE and South Korea.
              </p>
            </Reveal>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">How We Work</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                From first enquiry to finished roll
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
                You tell us the end use, handle, weight, colour and certification you need. We propose constructions from our range or develop a new one, and strike-off samples are prepared for your approval. Production then follows in the quantity you need, whether a small first order or a bulk programme. Standard lead times are 15–30 days for running qualities and 30–45 days for custom development.
              </p>
            </Reveal>
          </div>
        </section>

        <KineticStrip text="Since 1968 — Crafted in India" />

        {/* Certifications */}
        <section className="py-32 bg-accent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Standards</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">Certifications</h2>
              <p className="font-body text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Our fabrics are available under five internationally recognised standards, with documentation provided for certified orders. We are also MSME registered.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {certifications.map((c, index) => (
                <motion.div
                  key={c.name}
                  className="bg-background p-6 rounded-sm text-center border border-border/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-serif text-lg font-bold text-primary mb-2 leading-tight">{c.name}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed font-light">{c.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Where we work
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                Our <span className="text-primary font-medium">Head Office and Showroom</span> in Mayapuri, New Delhi anchors weaving units in five of India's textile regions.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40 rounded-sm overflow-hidden">
                {[
                  { label: 'Head Office / Showroom', value: 'Mayapuri, New Delhi' },
                  { label: 'Weaving Unit', value: 'Meerut' },
                  { label: 'Weaving Unit', value: 'Bhiwandi / Ichalkaranji' },
                  { label: 'Weaving Unit', value: 'Erode' },
                  { label: 'Weaving Unit', value: 'Salem' },
                  { label: 'Weaving Unit', value: 'Surat' },
                ].map((loc) => (
                  <div key={loc.value + loc.label} className="bg-background p-6">
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      {loc.label}
                    </p>
                    <p className="font-serif text-lg text-primary font-medium leading-tight">
                      {loc.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <KineticStrip text="Heritage · Quality · Innovation" reverse />

        {/* Four Generations */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Family Legacy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                The Four Generations
              </h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              {generations.map((g, index) => (
                <motion.div
                  key={g.gen}
                  className="border-l-2 border-primary pl-8 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">{g.gen}</p>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{g.name}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed font-light">{g.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal className="mb-20">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                The Team
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                Leadership
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((person, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-10 rounded-sm border border-border/40 hover:border-primary/30 transition-all duration-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 leading-tight">{person.name}</h3>
                  <p className="font-body text-muted-foreground text-sm">{person.role}</p>
                  <p className="font-body text-muted-foreground/70 text-xs mt-1">{person.years}</p>
                </motion.div>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="font-body text-lg text-muted-foreground mt-12 font-light italic">
                Founded in 1968 by the late Shri Janki Nath Bhasin ji — still family-run, still built on the same commitment to quality.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="font-body text-base text-muted-foreground mt-8">
                <a href="https://wa.me/919891542727" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:no-underline">
                  Speak with us on WhatsApp →
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
