import { Link } from 'react-router-dom';
import { Sprout, Leaf, Wheat, ShieldCheck, Recycle } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const certifications = [
  {
    icon: Sprout,
    name: 'BCI',
    full: 'Better Cotton Initiative',
    meaning: 'Cotton grown under better farming practices — a credible responsible-sourcing claim for your sustainability reporting.',
  },
  {
    icon: Leaf,
    name: 'GOTS',
    full: 'Global Organic Textile Standard',
    meaning: 'Organic fibre with certified processing and social criteria, supporting an organic claim on your certified orders.',
  },
  {
    icon: Wheat,
    name: 'OCS',
    full: 'Organic Content Standard',
    meaning: 'Verified organic content percentage, backed by chain-of-custody records for your blended constructions.',
  },
  {
    icon: ShieldCheck,
    name: 'OEKO-TEX Standard 100',
    full: 'Tested for harmful substances',
    meaning: 'Finished fabric tested for harmful substances, so it is suitable for skin-contact garments and home textiles.',
  },
  {
    icon: Recycle,
    name: 'GRS',
    full: 'Global Recycled Standard',
    meaning: 'Verified recycled content with chain-of-custody records, supporting the recycled claims on your product.',
  },
];

const HomeCertifications = () => (
  <section className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="text-center mb-14">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Standards</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-[1.1]">Our Certifications</h2>
        <div className="h-px w-16 mx-auto" style={{ backgroundColor: '#A9895E' }} />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.07}>
            <div
              className="h-full rounded-lg bg-background p-6 text-center border"
              style={{ borderColor: 'rgba(169,137,94,0.4)' }}
            >
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(169,137,94,0.15)', color: '#2E3B54' }}
                aria-hidden="true"
              >
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary leading-tight">{c.name}</h3>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1 mb-3">{c.full}</p>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{c.meaning}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center mt-12">
        <p className="font-body text-base text-muted-foreground font-light mb-4">
          Certification documentation is available on request for every certified order.
        </p>
        <Link to="/certifications" className="font-body text-primary underline underline-offset-4 hover:no-underline">
          View full certification details →
        </Link>
      </Reveal>
    </div>
  </section>
);

export default HomeCertifications;
