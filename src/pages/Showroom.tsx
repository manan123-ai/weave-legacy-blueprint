import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const SITE = 'https://jcofabrics.com';

const Showroom = () => (
  <div className="min-h-screen">
    <SEO
      title="Fabric Showroom Mayapuri New Delhi — Visit JNC Fabrics"
      description="Visit Janki Nath & Co. fabric showroom in Mayapuri Industrial Area, New Delhi. View woven fabric collections, select qualities, develop samples. Open Mon-Sat 11AM-8PM."
      path="/showroom"
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Janki Nath & Co. Fabric Showroom',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'A-14, Mayapuri Industrial Area, Phase-1',
            addressLocality: 'New Delhi',
            addressCountry: 'IN',
            postalCode: '110064',
          },
          openingHours: 'Mo-Sa 11:00-20:00',
          telephone: '+91-9891542727',
          url: `${SITE}/showroom`,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Showroom', item: `${SITE}/showroom` },
          ],
        },
      ]}
    />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Visit Us</p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Fabric Showroom — Mayapuri, New Delhi"
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Janki Nath & Co. operates a fabric showroom and head office in Mayapuri Industrial Area, New Delhi — one of Delhi's established textile manufacturing hubs.
            </p>
          </Reveal>
        </div>
      </section>

      <KineticStrip text="Open Mon–Sat · 11:00 – 20:00 · By Appointment Welcome" />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Visit Our Showroom</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-6">
              Our Mayapuri showroom displays our complete woven fabric range — cotton, linen, jacquard, viscose, yarn-dyed, dobby, upholstery and specialty fabrics. Buyers can view collections, handle fabric samples, discuss custom development requirements and place orders directly.
            </p>
            <ul className="space-y-2 font-body text-muted-foreground list-disc pl-6">
              <li>View our complete woven fabric range</li>
              <li>Handle and select fabric qualities</li>
              <li>Discuss custom fabric development</li>
              <li>Review certification documentation</li>
              <li>Meet our design and production team</li>
              <li>Place sampling and bulk orders</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Showroom Details</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Address', 'A-14, Mayapuri Industrial Area, Phase-1, New Delhi – 110064'],
                ['Hours', 'Monday to Saturday, 11:00 AM – 8:00 PM'],
                ['Phone', '+91 9891542727 · 011-47079009 / 45567009'],
                ['Email', 'jcofabrics@yahoo.co.in'],
                ['WhatsApp', '+91 9891542727'],
              ].map(([l, v]) => (
                <div key={l} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary mb-1">{l}</p>
                  <p className="font-body text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">How to Reach Us</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              Mayapuri Industrial Area is located in West Delhi. Nearest Metro station: Mayapuri (Green Line). The showroom is in Phase-1 of Mayapuri Industrial Area.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">For Visiting Buyers</h2>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed">
              International buyers visiting New Delhi for sourcing are welcome to visit by appointment. Please contact us in advance to schedule a showroom visit and we will ensure the relevant fabric range and team are available.
            </p>
          </Reveal>

          <iframe
            src="https://maps.google.com/maps?width=100%25&hl=en&q=A-14,%20MAYAPURI%20INDUSTRIAL%20AREA%20PHASE%20-1,%20NEW%20DELHI%20-110064+(Janki%20Nath%20&%20Co)&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="Janki Nath & Co. showroom map"
          />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Showroom;
