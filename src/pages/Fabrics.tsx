import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import cottonFabric from '@/assets/cotton-pinterest.jpg';
import cottonBlendsFabric from '@/assets/cotton-blends-pinterest.jpg';
import linenFabric from '@/assets/linen-new.jpg';
import jacquardFabric from '@/assets/jacquard-pinterest.jpg';
import viscoseFabric from '@/assets/viscose-pinterest.jpg';
import tweedFabric from '@/assets/tweed-new.jpg';
import upholsteryFabric from '@/assets/upholstery-home-furnishing-new.jpg';
import noveltyFabric from '@/assets/specialty-woven-new.jpg';
import yarnDyedFabric from '@/assets/yarn-dyed-fabric.jpg';
import indigoFabric from '@/assets/indigo-dyed-fabric.jpg';
import dobbyFabric from '@/assets/dobby-fabric.jpg';
import voileCambricFabric from '@/assets/voile-cambric-fabric.jpg';
import poplinSheetingFabric from '@/assets/poplin-sheeting-fabric.jpg';
import twillDrillFabric from '@/assets/twill-drills-new.jpg';
import oxfordCanvasFabric from '@/assets/oxford-canvas-fabric.jpg';
import lurexSequinFabric from '@/assets/lurex-sequin-fabric.jpg';
import cutworkJacquardFabric from '@/assets/cutwork-jacquard-fabric.jpg';
import ikatTieDyeFabric from '@/assets/ikat-tiedye-fabric.jpg';
import crepeHighTwistFabric from '@/assets/crepe-hightwist-fabric.jpg';
import lycraBlendFabric from '@/assets/lycra-blend-fabric.jpg';

const Fabrics = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const fabricCategories = [
    {
      name: 'Cotton',
      image: cottonFabric,
      description: 'Export-grade cotton fabric from India — plain weave, twill, dobby and yarn-dyed. Available greige, RFD, dyed and printed. BCI certified.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Finishes: Plain, Mercerized, Sanforized',
      useCases: 'Shirts, Dresses, Casual Wear, Bedding',
    },
    {
      name: 'Cotton Blends',
      image: cottonBlendsFabric,
      description: 'Innovative cotton blend compositions for enhanced performance — export-grade for garment manufacturers worldwide.',
      specs: 'GSM: 140-280 | Width: 44"-58" | Blends: Cotton-Polyester, Cotton-Modal',
      useCases: 'Workwear, Activewear, Smart Casual',
    },
    {
      name: 'Viscose',
      image: viscoseFabric,
      description: 'Viscose fabric export from India — viscose twill, crepe, plain. Fluid drape, deep colour. Fashion brands and garment exporters.',
      specs: 'GSM: 100-250 | Width: 44"-60" | Finishes: Soft, Crisp, Brushed',
      useCases: 'Evening Wear, Linings, Lightweight Garments',
    },
    {
      name: 'Jacquards',
      image: jacquardFabric,
      description: 'Export jacquard fabric from India — damask, brocade, matelassé, cutwork. Custom patterns developed to your spec.',
      specs: 'GSM: 200-400 | Width: 44"-54" | Patterns: Floral, Geometric, Custom',
      useCases: 'Luxury Apparel, Upholstery, Accessories',
    },
    {
      name: 'Linen',
      image: linenFabric,
      description: '100% linen and linen blend fabric for export — GOTS certified. Cotton/linen, viscose/linen blends available. Mill-direct from India.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Types: Pure Linen, Linen Blends',
      useCases: 'Summer Clothing, Home Textiles, Luxury Garments',
    },
    {
      name: 'Tweeds',
      image: tweedFabric,
      description: 'Classic tweed fabrics — export-grade herringbone, houndstooth and traditional constructions from India.',
      specs: 'GSM: 300-500 | Width: 54"-60" | Patterns: Herringbone, Houndstooth',
      useCases: 'Coats, Jackets, Suits, Accessories',
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: upholsteryFabric,
      description: 'Upholstery and home furnishing fabric export from India — OEKO-TEX certified. Curtain, sofa and drapery fabric.',
      specs: 'GSM: 250-600 | Width: 54"-140" | Features: Stain Resistant, Durable',
      useCases: 'Furniture, Curtains, Cushions, Decorative Items',
    },
    {
      name: 'Yarn-Dyed',
      image: yarnDyedFabric,
      description: 'Yarn-dyed fabric export from India — checks, stripes, plaids in cotton, linen and viscose. Consistent colour across reorders.',
      specs: 'GSM: 120-280 | Width: 44"-58" | Colors: Multi-color, Checks, Stripes',
      useCases: 'Shirts, Dresses, Casual Wear, Fashion Garments',
    },
    {
      name: 'Novelty Fabrics',
      image: noveltyFabric,
      description: 'Specialty woven fabrics for export — technical and performance constructions developed to buyer spec.',
      specs: 'GSM: Variable | Width: Custom | Features: Technical, Performance',
      useCases: 'Technical Wear, Medical Textiles, Industrial Applications',
    },
    {
      name: 'Indigo Dyes',
      image: indigoFabric,
      description: 'Indigo dyed fabric export from India — traditional indigo woven fabric. Light to deep shades for denim and traditional wear.',
      specs: 'GSM: 140-320 | Width: 44"-60" | Shades: Light to Deep Indigo',
      useCases: 'Denim, Traditional Wear, Fashion Garments, Accessories',
    },
    {
      name: 'Dobby',
      image: dobbyFabric,
      description: 'Dobby fabric export India — self-dobby shirting, colour dobby. Subtle geometric weave for premium casualwear and formal shirts.',
      specs: 'GSM: 120-250 | Width: 44"-58" | Patterns: Geometric, Abstract, Custom',
      useCases: 'Formal Shirts, Dress Fabrics, Premium Textiles',
    },
    {
      name: 'Voiles & Cambric',
      image: voileCambricFabric,
      description: 'Lightweight, sheer woven fabric export from India — soft hand feel voile and cambric for summer garments.',
      specs: 'GSM: 80-140 | Width: 44"-60" | Finishes: Soft, Crisp, Semi-Sheer',
      useCases: 'Summer Clothing, Linings, Scarves, Lightweight Garments',
    },
    {
      name: 'Poplin & Sheetings',
      image: poplinSheetingFabric,
      description: 'Poplin and sheeting fabric export India — smooth plain weave, mercerized and sanforized finishes for shirts and bedding.',
      specs: 'GSM: 100-200 | Width: 44"-90" | Finishes: Mercerized, Sanforized',
      useCases: 'Shirts, Bedding, Institutional Textiles, Uniforms',
    },
    {
      name: 'Twills & Drills',
      image: twillDrillFabric,
      description: 'Export twill and drill fabric India — cotton twill, gabardine, structured weaves for workwear, uniforms and casualwear.',
      specs: 'GSM: 180-350 | Width: 44"-60" | Angles: 45°, 63°, Custom',
      useCases: 'Workwear, Pants, Uniforms, Heavy-duty Applications',
    },
    {
      name: 'Oxfords & Canvas',
      image: oxfordCanvasFabric,
      description: 'Oxford and canvas fabric export from India — sturdy basket weave constructions for casual shirts, bags and upholstery.',
      specs: 'GSM: 200-450 | Width: 44"-60" | Construction: Basket, Plain Weave',
      useCases: 'Casual Shirts, Bags, Upholstery, Industrial Uses',
    },
    {
      name: 'Lurex & Sequins',
      image: lurexSequinFabric,
      description: 'Lurex and metallic fabric export India — woven lurex, sequin fabric for evening and occasion wear collections.',
      specs: 'GSM: 120-300 | Width: 44"-54" | Features: Metallic, Reflective, Decorative',
      useCases: 'Evening Wear, Party Dresses, Stage Costumes, Fashion Accessories',
    },
    {
      name: 'Cutwork Jacquard',
      image: cutworkJacquardFabric,
      description: 'Cutwork jacquard fabric export from India — intricate openwork patterns for luxury fashion and evening wear.',
      specs: 'GSM: 180-350 | Width: 44"-54" | Patterns: Floral, Geometric, Openwork',
      useCases: 'Luxury Fashion, Evening Wear, Decorative Textiles, Premium Garments',
    },
    {
      name: 'IKAT & Tie Dye',
      image: ikatTieDyeFabric,
      description: 'IKAT and tie dye fabric export India — traditional resist-dyed woven fabric. Artisan constructions for premium collections.',
      specs: 'GSM: 120-280 | Width: 44"-58" | Patterns: Traditional, Contemporary',
      useCases: 'Ethnic Wear, Fashion Garments, Accessories, Decorative Items',
    },
    {
      name: 'Crepe & High Twist',
      image: crepeHighTwistFabric,
      description: 'Crepe and high twist fabric export India — moss crepe, georgette, chiffon-weight woven. For evening wear and formal collections.',
      specs: 'GSM: 100-250 | Width: 44"-58" | Textures: Fine Crepe, Heavy Crepe',
      useCases: 'Formal Wear, Dresses, Blouses, Fashion Garments',
    },
    {
      name: 'Lycra & Lycra Blends',
      image: lycraBlendFabric,
      description: 'Lycra blend woven fabric export India — stretch woven for activewear and swimwear. 2-way and 4-way stretch constructions.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Stretch: 2-way, 4-way, Recovery',
      useCases: 'Activewear, Swimwear, Fashion Garments, Performance Wear',
    },
  ];

  // Filter categories for the dropdown
  const filterCategories = [
    { value: 'all', label: 'All Fabrics' },
    { value: 'cotton', label: 'Cotton Types' },
    { value: 'luxury', label: 'Luxury Fabrics' },
    { value: 'specialty', label: 'Specialty & Technical' },
    { value: 'decorative', label: 'Decorative & Fashion' },
    { value: 'basic', label: 'Basic Weaves' },
  ];

  // Filter fabrics based on selected category
  const getFilteredFabrics = () => {
    if (selectedFilter === 'all') return fabricCategories;
    
    const filterMap = {
      cotton: ['Cotton', 'Cotton Blends', 'Poplin & Sheetings'],
      luxury: ['Viscose', 'Jacquards', 'Linen', 'Tweeds', 'Cutwork Jacquard'],
      specialty: ['Novelty Fabrics', 'Lycra & Lycra Blends', 'Upholstery & Home Furnishing'],
      decorative: ['Yarn-Dyed', 'Indigo Dyes', 'Lurex & Sequins', 'IKAT & Tie Dye'],
      basic: ['Dobby', 'Voiles & Cambric', 'Twills & Drills', 'Oxfords & Canvas', 'Crepe & High Twist'],
    };
    
    return fabricCategories.filter(fabric => 
      filterMap[selectedFilter]?.includes(fabric.name)
    );
  };

  const filteredFabrics = getFilteredFabrics();

  return (
    <div className="min-h-screen">
      <SEO
        title="Woven Fabric Range | Cotton, Linen, Jacquard, Viscose | JNC Fabrics"
        description="Export-grade woven fabrics from India — cotton, linen, jacquard, viscose, twill, upholstery, crepe, yarn-dyed, dobby. BCI and GOTS certified. Custom development available."
        path="/fabrics"
      />
      <Breadcrumbs items={[{ name: 'Fabrics' }]} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                The Collection
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="Our Fabrics"
              className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-xl text-muted-foreground font-light">
                Discover our comprehensive range of premium textiles
              </p>
            </Reveal>
          </div>
        </section>

        <KineticStrip text="Cotton · Linen · Jacquard · Viscose" />

        {/* Fabric Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Dropdown */}
            <div className="mb-8 flex justify-between items-center">
              <h2 className="font-serif text-3xl font-bold text-primary">
                Browse by Category
              </h2>
              <div className="w-64">
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="bg-background border-2 border-border hover:border-primary/50 transition-colors">
                    <SelectValue placeholder="Filter fabrics..." />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-border shadow-lg z-50">
                    {filterCategories.map((category) => (
                      <SelectItem 
                        key={category.value} 
                        value={category.value}
                        className="hover:bg-secondary cursor-pointer"
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="font-body text-muted-foreground">
                Showing {filteredFabrics.length} of {fabricCategories.length} fabric{filteredFabrics.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredFabrics.map((fabric, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-sm overflow-hidden shadow-[0_2px_20px_-8px_hsl(var(--primary)/0.1)] hover:shadow-[0_30px_70px_-15px_hsl(var(--primary)/0.25)] transition-all duration-700 border border-border/40 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2 overflow-hidden">
                      <img
                        src={fabric.image}
                        alt={`${fabric.name} fabric by Janki Nath & Co. — premium woven textile manufactured in India`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-64 md:h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 lg:p-10">
                      <p className="font-body text-xs text-muted-foreground/60 tabular-nums mb-3">
                        0{index + 1} / {filteredFabrics.length.toString().padStart(2, '0')}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                        {fabric.name}
                      </h3>
                      
                      <p className="font-body text-muted-foreground mb-6 font-light leading-relaxed">
                        {fabric.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-2">
                            Specifications
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {fabric.specs}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-2">
                            Use Cases
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {fabric.useCases}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex space-x-6">
                        <a href="tel:+919891542727" className="font-body text-sm text-primary relative group/link">
                          Call Us
                          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-500" />
                        </a>
                        <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary relative group/link">
                          Email Us
                          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-500" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <KineticStrip text="Woven for the World's Finest Brands" reverse />
      </main>

      <Footer />
    </div>
  );
};

export default Fabrics;