import Marquee from '@/components/motion/Marquee';
import Reveal from '@/components/motion/Reveal';

/**
 * Moving banner of brand wordmarks the company has worked with.
 * Uses styled text wordmarks (no third-party logo files) to keep things
 * legally safe while still presenting an editorial luxury feel.
 */
const BrandsMarquee = () => {
  const internationalBrands = [
    'ZARA',
    'FREE PEOPLE',
    'SUPERDRY',
    'ANTHROPOLOGIE',
    'FEHERTY',
    'SOFT SURROUNDINGS',
  ];

  const domesticBrands = ['RELIANCE', 'RITU KUMAR'];

  const allBrands = [...internationalBrands, ...domesticBrands];

  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            In Good Company
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Brands We've <span className="italic text-muted-foreground">Woven With</span>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-6 font-light max-w-2xl mx-auto">
            Trusted by leading international and domestic fashion houses for premium fabrics.
          </p>
        </Reveal>
      </div>

      <Marquee speed={45} className="py-6">
        {allBrands.map((brand) => (
          <div
            key={brand}
            className="flex items-center px-10 group"
          >
            <span className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-primary/40 group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
              {brand}
            </span>
            <span className="ml-10 w-2 h-2 rounded-full bg-primary/20" />
          </div>
        ))}
      </Marquee>

      <Marquee speed={50} reverse className="py-6">
        {allBrands.map((brand) => (
          <div
            key={`r-${brand}`}
            className="flex items-center px-10 group"
          >
            <span className="font-serif italic text-3xl md:text-5xl font-light tracking-tight text-primary/30 group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
              {brand}
            </span>
            <span className="ml-10 w-2 h-2 rounded-full bg-primary/20" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default BrandsMarquee;
