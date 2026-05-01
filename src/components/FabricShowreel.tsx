import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, FileText, ExternalLink } from 'lucide-react';
import cottonFabric from '@/assets/cotton-pinterest.jpg';
import cottonBlendsFabric from '@/assets/cotton-blends-pinterest.jpg';
import linenFabric from '@/assets/linen-new.jpg';
import jacquardFabric from '@/assets/jacquard-pinterest.jpg';
import viscoseFabric from '@/assets/viscose-pinterest.jpg';
import twillDrillsFabric from '@/assets/twill-drills-new.jpg';
import upholsteryFabric from '@/assets/upholstery-home-furnishing-new.jpg';
import crepeHighTwistFabric from '@/assets/crepe-high-twist-new.jpg';

interface FabricOption {
  name: string;
  description?: string;
  pdfUrl?: string;
}

interface FabricCategory {
  name: string;
  image: string;
  description: string;
  options: FabricOption[];
}

const FabricCard = ({ category, index }: { category: FabricCategory; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="group relative bg-card rounded-sm overflow-hidden shadow-[0_2px_20px_-8px_hsl(var(--primary)/0.1)] hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)] transition-all duration-700 border border-border/40">
        <div className="aspect-[4/5] overflow-hidden relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Hover-revealed name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-1">
              Collection
            </p>
            <p className="font-serif text-lg text-primary-foreground italic">
              {category.name}
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-xl font-semibold text-primary leading-tight">
              {category.name}
            </h3>
            <span className="font-body text-xs text-muted-foreground/60 tabular-nums pt-1.5">
              0{index + 1}
            </span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
            {category.description}
          </p>

          {/* Expandable options */}
          {category.options.length > 0 && (
            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-sm font-body font-medium text-primary hover:gap-2.5 transition-all duration-300 group/btn"
              >
                <span className="relative">
                  View Options
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover/btn:w-full" />
                </span>
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2 pt-4 border-t border-border">
                      {category.options.map((option, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center justify-between py-1.5 text-sm"
                        >
                          <span className="font-body text-muted-foreground">
                            {option.name}
                          </span>
                          {option.pdfUrl && (
                            <a
                              href={option.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-primary hover:text-primary/70 transition-colors"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span className="text-xs">PDF</span>
                            </a>
                          )}
                          {!option.pdfUrl && option.description && (
                            <span className="text-xs text-muted-foreground/60">{option.description}</span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FabricShowreel = () => {
  const fabricCategories: FabricCategory[] = [
    {
      name: 'Cotton',
      image: cottonFabric,
      description: 'Premium quality cotton fabrics',
      options: [
        { name: 'Plain Weave Cotton', description: '100-300 GSM' },
        { name: 'Twill Cotton', description: '150-350 GSM' },
        { name: 'Sateen Cotton', description: '200-400 GSM' },
        { name: 'Poplin', description: 'Fine weave' },
      ]
    },
    {
      name: 'Cotton Blends',
      image: cottonBlendsFabric,
      description: 'Innovative cotton blend compositions',
      options: [
        { name: 'Cotton-Polyester', description: '65/35 blend' },
        { name: 'Cotton-Linen', description: 'Natural blend' },
        { name: 'Cotton-Viscose', description: 'Soft blend' },
      ]
    },
    {
      name: 'Viscose',
      image: viscoseFabric,
      description: 'Luxurious viscose textiles',
      options: [
        { name: 'Plain Viscose', description: 'Lightweight' },
        { name: 'Viscose Twill', description: 'Medium weight' },
        { name: 'Viscose Crepe', description: 'Textured' },
      ]
    },
    {
      name: 'Jacquards',
      image: jacquardFabric,
      description: 'Intricate jacquard patterns',
      options: [
        { name: 'Damask Jacquard', description: 'Classic pattern' },
        { name: 'Brocade', description: 'Rich texture' },
        { name: 'Matelassé', description: 'Quilted look' },
      ]
    },
    {
      name: 'Linen',
      image: linenFabric,
      description: 'Natural linen excellence',
      options: [
        { name: 'Pure Linen', description: '100% flax' },
        { name: 'Linen Blends', description: 'Mixed fibers' },
      ]
    },
    {
      name: 'Twill & Drills',
      image: twillDrillsFabric,
      description: 'Durable twill weave fabrics',
      options: [
        { name: 'Cotton Twill', description: 'Classic weave' },
        { name: 'Drill Fabric', description: 'Heavy duty' },
        { name: 'Gabardine', description: 'Fine twill' },
      ]
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: upholsteryFabric,
      description: 'Premium home textiles',
      options: [
        { name: 'Curtain Fabrics', description: 'Drapery' },
        { name: 'Sofa Upholstery', description: 'Heavy duty' },
        { name: 'Cushion Covers', description: 'Decorative' },
      ]
    },
    {
      name: 'Crepe & High Twist',
      image: crepeHighTwistFabric,
      description: 'Textured crepe fabrics',
      options: [
        { name: 'Georgette', description: 'Sheer crepe' },
        { name: 'Moss Crepe', description: 'Textured' },
        { name: 'High Twist Voile', description: 'Lightweight' },
      ]
    },
  ];

  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 leading-[1.05]">
            Our Fabric <span className="italic text-muted-foreground">Categories</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A comprehensive range of premium fabrics, each crafted with precision and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {fabricCategories.map((category, index) => (
            <FabricCard key={index} category={category} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            className="font-body font-medium transition-all duration-500 rounded-full px-10 py-6 hover:scale-[1.03] group"
          >
            <Link to="/fabrics">
              <span>View All Fabrics</span>
              <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricShowreel;
