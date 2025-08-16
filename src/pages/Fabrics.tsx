import Footer from '@/components/Footer';
import cottonFabric from '@/assets/cotton-pinterest.jpg';
import cottonBlendsFabric from '@/assets/cotton-blends-pinterest.jpg';
import linenFabric from '@/assets/linen-new.jpg';
import jacquardFabric from '@/assets/jacquard-pinterest.jpg';
import viscoseFabric from '@/assets/viscose-pinterest.jpg';
import tweedFabric from '@/assets/tweed-new.jpg';
import upholsteryFabric from '@/assets/upholstery-fabric-samples.jpg';
import noveltyFabric from '@/assets/specialty-woven-new.jpg';
import yarnDyedFabric from '@/assets/yarn-dyed-fabric.jpg';
import indigoFabric from '@/assets/indigo-dyed-fabric.jpg';
import dobbyFabric from '@/assets/dobby-fabric.jpg';
import voileCambricFabric from '@/assets/voile-cambric-fabric.jpg';
import poplinSheetingFabric from '@/assets/poplin-sheeting-fabric.jpg';
import twillDrillFabric from '@/assets/twill-drill-fabric.jpg';
import oxfordCanvasFabric from '@/assets/oxford-canvas-fabric.jpg';
import lurexSequinFabric from '@/assets/lurex-sequin-fabric.jpg';
import cutworkJacquardFabric from '@/assets/cutwork-jacquard-fabric.jpg';
import ikatTieDyeFabric from '@/assets/ikat-tiedye-fabric.jpg';
import crepeHighTwistFabric from '@/assets/crepe-hightwist-fabric.jpg';
import lycraBlendFabric from '@/assets/lycra-blend-fabric.jpg';

const Fabrics = () => {
  const fabricCategories = [
    {
      name: 'Cotton',
      image: cottonFabric,
      description: 'Premium quality cotton fabrics in various weights and finishes.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Finishes: Plain, Mercerized, Sanforized',
      useCases: 'Shirts, Dresses, Casual Wear, Bedding',
    },
    {
      name: 'Cotton Blends',
      image: cottonBlendsFabric,
      description: 'Innovative cotton blend compositions for enhanced performance.',
      specs: 'GSM: 140-280 | Width: 44"-58" | Blends: Cotton-Polyester, Cotton-Modal',
      useCases: 'Workwear, Activewear, Smart Casual',
    },
    {
      name: 'Viscose',
      image: viscoseFabric,
      description: 'Luxurious viscose textiles with excellent drape and feel.',
      specs: 'GSM: 100-250 | Width: 44"-60" | Finishes: Soft, Crisp, Brushed',
      useCases: 'Evening Wear, Linings, Lightweight Garments',
    },
    {
      name: 'Jacquards',
      image: jacquardFabric,
      description: 'Intricate jacquard patterns woven with precision and artistry.',
      specs: 'GSM: 200-400 | Width: 44"-54" | Patterns: Floral, Geometric, Custom',
      useCases: 'Luxury Apparel, Upholstery, Accessories',
    },
    {
      name: 'Linen',
      image: linenFabric,
      description: 'Natural linen excellence with superior quality and finish.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Types: Pure Linen, Linen Blends',
      useCases: 'Summer Clothing, Home Textiles, Luxury Garments',
    },
    {
      name: 'Tweeds',
      image: tweedFabric,
      description: 'Classic tweed fabrics with traditional and modern interpretations.',
      specs: 'GSM: 300-500 | Width: 54"-60" | Patterns: Herringbone, Houndstooth',
      useCases: 'Coats, Jackets, Suits, Accessories',
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: upholsteryFabric,
      description: 'Durable home textiles designed for longevity and style.',
      specs: 'GSM: 250-600 | Width: 54"-140" | Features: Stain Resistant, Durable',
      useCases: 'Furniture, Curtains, Cushions, Decorative Items',
    },
    {
      name: 'Yarn-Dyed',
      image: yarnDyedFabric,
      description: 'Vibrant yarn-dyed fabrics with colorfast properties and rich textures.',
      specs: 'GSM: 120-280 | Width: 44"-58" | Colors: Multi-color, Checks, Stripes',
      useCases: 'Shirts, Dresses, Casual Wear, Fashion Garments',
    },
    {
      name: 'Novelty Fabrics',
      image: noveltyFabric,
      description: 'Unique specialty textiles for specific applications and requirements.',
      specs: 'GSM: Variable | Width: Custom | Features: Technical, Performance',
      useCases: 'Technical Wear, Medical Textiles, Industrial Applications',
    },
    {
      name: 'Indigo Dyes',
      image: indigoFabric,
      description: 'Traditional and modern indigo-dyed fabrics with authentic blue tones.',
      specs: 'GSM: 140-320 | Width: 44"-60" | Shades: Light to Deep Indigo',
      useCases: 'Denim, Traditional Wear, Fashion Garments, Accessories',
    },
    {
      name: 'Dobby',
      image: dobbyFabric,
      description: 'Sophisticated dobby weaves with geometric patterns and textures.',
      specs: 'GSM: 120-250 | Width: 44"-58" | Patterns: Geometric, Abstract, Custom',
      useCases: 'Formal Shirts, Dress Fabrics, Premium Textiles',
    },
    {
      name: 'Voiles & Cambric',
      image: voileCambricFabric,
      description: 'Lightweight, sheer fabrics with delicate weave and soft hand feel.',
      specs: 'GSM: 80-140 | Width: 44"-60" | Finishes: Soft, Crisp, Semi-Sheer',
      useCases: 'Summer Clothing, Linings, Scarves, Lightweight Garments',
    },
    {
      name: 'Poplin & Sheetings',
      image: poplinSheetingFabric,
      description: 'Smooth, plain weave fabrics with crisp finish and durability.',
      specs: 'GSM: 100-200 | Width: 44"-90" | Finishes: Mercerized, Sanforized',
      useCases: 'Shirts, Bedding, Institutional Textiles, Uniforms',
    },
    {
      name: 'Twills & Drills',
      image: twillDrillFabric,
      description: 'Diagonal weave fabrics offering strength and distinctive appearance.',
      specs: 'GSM: 180-350 | Width: 44"-60" | Angles: 45°, 63°, Custom',
      useCases: 'Workwear, Pants, Uniforms, Heavy-duty Applications',
    },
    {
      name: 'Oxfords & Canvas',
      image: oxfordCanvasFabric,
      description: 'Sturdy basket weave fabrics designed for durability and strength.',
      specs: 'GSM: 200-450 | Width: 44"-60" | Construction: Basket, Plain Weave',
      useCases: 'Casual Shirts, Bags, Upholstery, Industrial Uses',
    },
    {
      name: 'Lurex & Sequins',
      image: lurexSequinFabric,
      description: 'Glamorous fabrics with metallic threads and decorative elements.',
      specs: 'GSM: 120-300 | Width: 44"-54" | Features: Metallic, Reflective, Decorative',
      useCases: 'Evening Wear, Party Dresses, Stage Costumes, Fashion Accessories',
    },
    {
      name: 'Cutwork Jacquard',
      image: cutworkJacquardFabric,
      description: 'Intricate jacquard fabrics with decorative cutwork patterns.',
      specs: 'GSM: 180-350 | Width: 44"-54" | Patterns: Floral, Geometric, Openwork',
      useCases: 'Luxury Fashion, Evening Wear, Decorative Textiles, Premium Garments',
    },
    {
      name: 'IKAT & Tie Dye',
      image: ikatTieDyeFabric,
      description: 'Traditional resist-dyeing techniques creating unique patterns and colors.',
      specs: 'GSM: 120-280 | Width: 44"-58" | Patterns: Traditional, Contemporary',
      useCases: 'Ethnic Wear, Fashion Garments, Accessories, Decorative Items',
    },
    {
      name: 'Crepe & High Twist',
      image: crepeHighTwistFabric,
      description: 'Textured fabrics with twisted yarns creating distinctive surface effects.',
      specs: 'GSM: 100-250 | Width: 44"-58" | Textures: Fine Crepe, Heavy Crepe',
      useCases: 'Formal Wear, Dresses, Blouses, Fashion Garments',
    },
    {
      name: 'Lycra & Lycra Blends',
      image: lycraBlendFabric,
      description: 'Stretch fabrics combining comfort with performance and recovery.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Stretch: 2-way, 4-way, Recovery',
      useCases: 'Activewear, Swimwear, Fashion Garments, Performance Wear',
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
              Our Fabrics
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Discover our comprehensive range of premium textiles
            </p>
          </div>
        </section>

        {/* Fabric Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {fabricCategories.map((fabric, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={fabric.image}
                        alt={fabric.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                        {fabric.name}
                      </h3>
                      
                      <p className="font-body text-muted-foreground mb-6">
                        {fabric.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-body font-semibold text-sm text-primary mb-1">
                            Specifications
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {fabric.specs}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-body font-semibold text-sm text-primary mb-1">
                            Use Cases
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {fabric.useCases}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex space-x-4">
                        <a href="tel:+919891542727" className="font-body text-sm text-primary hover:text-primary/80 transition-colors underline">
                          Call Us
                        </a>
                        <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary hover:text-primary/80 transition-colors underline">
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Fabrics;