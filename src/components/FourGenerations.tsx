import Reveal from '@/components/motion/Reveal';

const FourGenerations = () => (
  <section className="py-24 bg-background">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Reveal>
        <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Since 1968</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-[1.1]">
          Four Generations of Craft
        </h2>
        <div className="h-px w-16 mx-auto mb-10" style={{ backgroundColor: '#A9895E' }} />
      </Reveal>
      <Reveal delay={0.15}>
        <p className="font-body text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Founded in 1968 by the late Shri Janki Nath Bhasin ji, JNC Fabrics has been weaving export-grade fabric for over five decades. What began as a single unit in New Delhi is today a multi-unit operation supplying buyers across 20+ countries — still family-run, still built on the same commitment to quality that Shri Janki Nath Bhasin ji established.
        </p>
      </Reveal>
    </div>
  </section>
);

export default FourGenerations;
