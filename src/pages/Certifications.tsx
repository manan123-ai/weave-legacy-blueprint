import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const certifications = [
  {
    name: 'BCI — Better Cotton Initiative',
    text: 'We are an active Better Cotton member and source Better Cotton, which supports responsible farming practices, efficient water use and better livelihoods for cotton farmers. BCI is a farm-level programme, so it supports a responsible-sourcing claim for your sustainability reporting rather than an organic claim. Better Cotton farmers are trained on reduced pesticide use, soil health and decent work, and a mass-balance system links purchases like ours to that farming. Membership details are available on request.',
  },
  {
    name: 'GOTS — Global Organic Textile Standard',
    text: 'GOTS covers the full chain of custody for organic fibre, including processing, manufacturing, packaging, labelling, trading and distribution, with environmental and social criteria audited throughout. The label requires a minimum organic fibre content and restricts harmful chemicals in dyeing and finishing, which makes it the most comprehensive standard for organic textiles. Buyers sourcing certified organic fabric can request GOTS transaction certificates from us for their orders.',
  },
  {
    name: 'OCS — Organic Content Standard',
    text: 'OCS verifies the presence and amount of organic material in a product, with chain-of-custody records behind the claim. It complements GOTS for products where the full GOTS processing and social criteria are not required, such as blended constructions. Ask for OCS when you need to state how much organic material a product contains, without the full processing audit that GOTS adds.',
  },
  {
    name: 'OEKO-TEX Standard 100',
    text: 'Fabrics under our OEKO-TEX Standard 100 certification are tested for harmful substances, so they are harmless in terms of human ecology and safe for skin contact. It is the certification most often asked for on garments, bedding and home textiles that touch the skin. Testing covers more than a hundred substances, including heavy metals, formaldehyde and restricted dyes, and the certification is renewed regularly.',
  },
  {
    name: 'GRS — Global Recycled Standard',
    text: 'GRS certifies recycled content in a product and verifies responsible social, environmental and chemical practices along the way. It is relevant to our recycled cotton and recycled polyester blend constructions, and gives your brand documentation for recycled-content claims. It also requires chain-of-custody tracking from the recycled raw material through to the finished fabric, so your recycled content figure can be verified.',
  },
];

const Certifications = () => (
  <div className="min-h-screen">
    <SEO
      title="GOTS & BCI Certified Fabric Manufacturer India | JNC Fabrics"
      description="Janki Nath & Co. is a GOTS certified fabric manufacturer in India and active BCI cotton fabric member, alongside OCS, OEKO-TEX Standard 100 and GRS. Full documentation on every export order."
      path="/certifications"
    />
    <Breadcrumbs items={[{ name: 'Certifications' }]} currentPath="/certifications" />
    <main className="pt-16">
      <section className="py-32 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              Certification
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Certified. Compliant. Trusted."
            className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
          />
          <Reveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Janki Nath & Co. holds five internationally recognised certifications across responsible cotton sourcing, organic content, chemical safety and recycled content. Here is what each one means for your order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {certifications.map((cert) => (
            <Reveal key={cert.name}>
              <div className="h-px w-16 mb-8" style={{ backgroundColor: '#c9a84c' }} />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">{cert.name}</h2>
              <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-14">{cert.text}</p>
            </Reveal>
          ))}

          <Reveal>
            <div className="h-px w-16 mx-auto mb-10" style={{ backgroundColor: '#c9a84c' }} />
            <p className="font-body text-lg text-muted-foreground font-light text-center leading-relaxed">
              Certified fabric developments are available on request, and we also work with conventional constructions depending on buyer requirements.
            </p>
            <p className="font-body text-lg text-primary text-center mt-6">
              Request certification documents or transaction certificates via WhatsApp:{' '}
              <a
                href="https://wa.me/919891542727"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                wa.me/919891542727
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Certifications;
