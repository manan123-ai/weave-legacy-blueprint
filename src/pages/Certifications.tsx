import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const certifications = [
  { name: 'GOTS', description: 'Global Organic Textile Standard — the full organic fibre-to-fabric supply chain.' },
  { name: 'OEKO-TEX Standard 100', description: 'Every fabric tested and confirmed free from harmful substances.' },
  { name: 'BCI', description: 'Better Cotton Initiative — responsibly farmed cotton at the source.' },
  { name: 'OCS', description: 'Organic Content Standard — chain-of-custody verified organic content.' },
];

const Certifications = () => (
  <div className="min-h-screen">
    <SEO
      title="GOTS & BCI Certified Fabric Manufacturer India | JNC Fabrics"
      description="Janki Nath & Co. is a GOTS certified fabric manufacturer in India and active BCI cotton fabric member, alongside OCS and OEKO-TEX Standard 100. Full documentation on every export order."
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
              Janki Nath & Co. holds internationally recognised certifications across sustainability, organic content, chemical safety and responsible cotton sourcing. All certification documentation is available on request.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="h-px w-16 mx-auto mb-14" style={{ backgroundColor: '#c9a84c' }} />
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-14">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center">
                  <p className="font-serif text-xl md:text-2xl font-bold text-primary leading-tight">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="h-px w-16 mx-auto mb-14" style={{ backgroundColor: '#c9a84c' }} />
          </Reveal>

          <Reveal>
            <div className="space-y-5 mb-16">
              {certifications.map((cert) => (
                <p
                  key={cert.name}
                  className="font-body text-base md:text-lg text-muted-foreground font-light text-center leading-relaxed"
                >
                  <span className="text-primary font-medium">{cert.name}</span> — {cert.description}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="font-body text-base text-muted-foreground font-light text-center max-w-xl mx-auto">
              Certified fabric developments are available on request. We also work with conventional constructions depending on buyer requirements.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Certifications;
