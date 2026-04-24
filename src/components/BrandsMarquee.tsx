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
    'FAHERTY',
    'SOFT SURROUNDINGS',
    'URBN',
    'MARKS & SPENCER',
    'LUCKY BRAND',
    'J.CREW',
    'PULL & BEAR',
  ];

  const domesticBrands = ['RELIANCE', 'RITU KUMAR'];

  const allBrands = [...internationalBrands, ...domesticBrands];

  return (
    <section className="py-24 bg-background border-y border-border/40 relative">
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

      {/* Edge fades for cinematic feel */}
      <div
        className="relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <Marquee speed={20} className="py-3">
          {allBrands.map((brand) => (
            <div key={brand} className="flex items-center px-6 group">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary/50 group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
                {brand}
              </span>
              <span className="ml-6 w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default BrandsMarquee;
