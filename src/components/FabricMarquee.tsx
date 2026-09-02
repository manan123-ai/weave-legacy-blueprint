import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal';
import Marquee from '@/components/motion/Marquee';

const labels = [
  { label: 'Cotton', slug: 'cotton' },
  { label: 'Linen', slug: 'linen' },
  { label: 'Jacquards', slug: 'jacquard' },
  { label: 'Viscose', slug: 'viscose' },
  { label: 'Yarn-Dyed', slug: 'yarn-dyed' },
  { label: 'Crepe', slug: 'crepe' },
  { label: 'Twill', slug: 'twill' },
  { label: 'Upholstery', slug: 'upholstery' },
  { label: 'High Twist', slug: null },
  { label: 'Dobby', slug: 'dobby' },
];

const FabricMarquee = () => {
  return (
    <section className="bg-background py-10 border-y border-border/50">
      <Reveal as="div" className="mb-4 text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Our Specialities
        </p>
      </Reveal>
      <Marquee speed={7}>
        {labels.map(({ label, slug }) => (
          <span
            key={label}
            className="font-serif text-3xl md:text-5xl text-primary/80 italic"
          >
            {slug ? (
              <Link to={`/fabrics/${slug}`} className="hover:text-primary transition-colors">
                {label}
              </Link>
            ) : (
              label
            )}
            <span className="inline-block mx-8 text-muted-foreground/40">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default FabricMarquee;
