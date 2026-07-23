import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const About = () => {
  const whyChoose = [
    { title: 'Experience and Expertise', description: 'Over five decades in the textile industry with a proven track record' },
    { title: 'Top Quality', description: 'Exceptional export-quality fabrics that meet the highest standards' },
    { title: 'Innovative Designs', description: 'Unique and trendsetting fabric designs' },
    { title: 'Competitive Prices', description: 'High-quality products at competitive rates' },
    { title: 'Global Reach', description: 'Reliable partner for international clients' },
    { title: 'Customer Focus', description: 'Tailored solutions with a commitment to customer satisfaction' },
    { title: 'Sustainability', description: 'Environmentally friendly manufacturing practices' },
  ];

  const leadership = [
    { name: 'MR. HAMESH KUMAR BHASIN', role: 'Managing Director', years: '45+ Years Experience' },
    { name: 'MR. SANDEEPAN BHASIN', role: 'Director', years: '30+ Years Experience' },
    { name: 'MR. DEEPAK BHASIN', role: 'Director', years: '30+ Years Experience' },
    { name: 'MR. MANAN BHASIN', role: 'Marketing Head', years: 'Next-Generation Leadership' },
  ];

  const generations = [
    { gen: 'First Generation — Founder', name: 'Mr. Janki Nath', description: 'Founded the business in 1968 in Mayapuri Industrial Area, New Delhi, building the original weaving capacity and the company\'s first relationships with yarn suppliers and fabric buyers in the Delhi textile trade.' },
    { gen: 'Second Generation', name: 'Mr. Hamesh Kumar Bhasin (Managing Director, 45+ years)', description: 'Built the export business, developing relationships with international buyers and establishing JNC Fabrics as a reliable export-quality fabric supplier. Expanded weaving capacity across multiple units and added certifications including BCI, GOTS, OCS and OEKO-TEX.' },
    { gen: 'Third Generation', name: 'Mr. Sandeepan Bhasin & Mr. Deepak Bhasin (Directors, 30+ years each)', description: 'Scaled international operations, expanded to five weaving units across India, and grew the company\'s reach across major export markets including USA, UK, Germany, France, Japan, Australia and UAE.' },
    { gen: 'Fourth Generation', name: 'Mr. Manan Bhasin (Marketing Head)', description: 'Building on the company\'s manufacturing heritage with digital infrastructure, direct international buyer outreach and modern brand positioning for the next phase of growth.' },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Janki Nath & Co. — Woven Fabric Manufacturer India Since 1968 | JNC Fabrics"
        description="Janki Nath & Co. (JNC Fabrics) — fourth-generation woven fabric manufacturer from Mayapuri, New Delhi, founded 1968 by Mr. Janki Nath. Over 55 years of export-quality fabric manufacturing. BCI, GOTS, OCS and OEKO-TEX certified. Five weaving units across India."
        path="/about"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
            foundingDate: '1968',
            founder: {
              '@type': 'Person',
              name: 'Mr. Janki Nath',
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
                Founded 1968 by Mr. Janki Nath — 55+ Years of Textile Excellence
              </p>
            </Reveal>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Company Profile
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                Janki Nath <span className="italic text-muted-foreground">& Co.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6">
                Janki Nath & Co. (JNC Fabrics) is a fourth-generation woven fabric manufacturer and exporter from Mayapuri, New Delhi, founded in 1968 by Mr. Janki Nath.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6">
                We export premium woven fabrics to fashion brands, garment manufacturers, buying houses and fabric importers across USA, UK, Germany, France, Italy, Japan, Australia, UAE and South Korea.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6">
                Our weaving units in Meerut, Bhiwandi, Erode, Salem and Surat produce export-grade fabric across cotton, linen, jacquard, viscose, dobby, yarn-dyed, crepe, twill and upholstery constructions.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed font-light">
                All export orders include full certification documentation — BCI, GOTS, OCS and OEKO-TEX Standard 100. MSME registered, monthly capacity 2 million+ meters, lead times 15-30 days.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                About Janki Nath <span className="italic text-muted-foreground">& Co.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                Janki Nath & Co. is one of the leading names in the Indian export industry, catering to top garment and home furnishings exporters across Delhi NCR, Jaipur, and Bangalore for over 55 years. Renowned for our exceptional fabric designs and unwavering commitment to quality, we supply international garment brands with a wide range of fabrics that adhere to the highest global standards, including advanced dyeing and processing techniques.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                Our <span className="text-primary font-medium">Head Office and Showroom</span> in Mayapuri, New Delhi anchors a network of dedicated weaving units across India's most renowned textile hubs — <span className="text-primary font-medium">Meerut, Bhiwandi / Ichalkaranji, Erode, Salem, and Surat</span>. This integrated setup lets us maintain stringent quality control and ensure timely delivery on every order. Our comprehensive product portfolio includes export-grade fabrics such as Greige, RFD, Bleached, Dyed, Printed, Yarn-Dyed, Mill-made, Auto/Powerloom, Handloom, and Jacquard &amp; Dobbys.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40 rounded-sm overflow-hidden mb-12">
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

            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <Reveal>
                <div className="border-l-2 border-primary pl-8">
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — Vision</p>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Our Vision</h3>
                  <p className="font-body text-muted-foreground leading-relaxed font-light">
                    To be a global leader in the textile industry, renowned for our exceptional quality, innovative designs, and commitment to sustainability, while fostering long-term partnerships with our clients and contributing positively to the community.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="border-l-2 border-primary pl-8">
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">02 — Mission</p>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Our Mission</h3>
                  <p className="font-body text-muted-foreground leading-relaxed font-light">
                    At Janki Nath, our mission is to deliver superior export-quality fabrics that exceed our clients' expectations through unparalleled craftsmanship, innovative designs, and competitive pricing. We are dedicated to continuous improvement, sustainability, and customer satisfaction.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <KineticStrip text="Since 1968 — Crafted in India" />

        {/* Why Choose Us */}
        <section className="py-32 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                The Difference
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
                Why Choose <span className="italic text-muted-foreground">Janki Nath</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-8 rounded-sm text-center border border-border/40 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] transition-all duration-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <p className="font-body text-xs text-muted-foreground/60 tabular-nums mb-3">0{index + 1}</p>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
                Founded by Mr. Janki Nath in 1968, the business has since grown into a known name in the Indian woven fabric export industry.
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
