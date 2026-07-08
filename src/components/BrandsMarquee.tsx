import Marquee from '@/components/motion/Marquee';
import Reveal from '@/components/motion/Reveal';

/**
 * Moving banner of the buyer sectors we supply worldwide.
 * Uses generic sector labels rather than specific brand names.
 */
const BrandsMarquee = () => {
  const sectors = [
    'FASHION BRANDS',
    'GARMENT MANUFACTURERS',
    'BUYING HOUSES',
    'TEXTILE IMPORTERS',
    'HOME FURNISHING BRANDS',
    'RESORT WEAR LABELS',
    'CONTRACT INTERIORS',
    'PRIVATE LABEL',
    'DESIGNER ATELIERS',
    'RETAIL CHAINS',
  ];

  return (
    <section className="py-24 bg-background border-y border-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            In Good Company
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            Who We <span className="italic text-muted-foreground">Supply</span>
          </h2>
          <p className="font-body text-base text-muted-foreground mt-6 font-light max-w-2xl mx-auto">
            We supply premium woven fabrics to leading fashion brands, garment manufacturers, buying houses and textile importers across USA, UK, Germany, France, Japan, Australia and UAE.
          </p>
        </Reveal>
      </div>

      <div
        className="relative"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <Marquee speed={5} className="py-3">
          {sectors.map((sector) => (
            <div key={sector} className="flex items-center px-6 group">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary/50 group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
                {sector}
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
