import Reveal from '@/components/motion/Reveal';
import Marquee from '@/components/motion/Marquee';

const labels = [
  'Cotton',
  'Linen',
  'Jacquards',
  'Viscose',
  'Yarn-Dyed',
  'Crepe',
  'Twill',
  'Upholstery',
  'High Twist',
  'Dobby',
];

const FabricMarquee = () => {
  return (
    <section className="bg-background py-10 border-y border-border/50">
      <Reveal as="div" className="mb-4 text-center">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Our Specialities
        </p>
      </Reveal>
      <Marquee speed={45}>
        {labels.map((label) => (
          <span
            key={label}
            className="font-serif text-3xl md:text-5xl text-primary/80 italic"
          >
            {label}
            <span className="inline-block mx-8 text-muted-foreground/40">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default FabricMarquee;
