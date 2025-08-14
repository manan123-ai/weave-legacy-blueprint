import Footer from '@/components/Footer';
import cottonSwatch from '@/assets/cotton-swatch.jpg';
import linenSwatch from '@/assets/linen-swatch.jpg';
import jacquardSwatch from '@/assets/jacquard-swatch.jpg';

const Fabrics = () => {
  const fabricCategories = [
    {
      name: 'Cotton',
      image: cottonSwatch,
      description: 'Premium quality cotton fabrics in various weights and finishes.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Finishes: Plain, Mercerized, Sanforized',
      useCases: 'Shirts, Dresses, Casual Wear, Bedding',
    },
    {
      name: 'Cotton Blends',
      image: cottonSwatch,
      description: 'Innovative cotton blend compositions for enhanced performance.',
      specs: 'GSM: 140-280 | Width: 44"-58" | Blends: Cotton-Polyester, Cotton-Modal',
      useCases: 'Workwear, Activewear, Smart Casual',
    },
    {
      name: 'Viscose',
      image: linenSwatch,
      description: 'Luxurious viscose textiles with excellent drape and feel.',
      specs: 'GSM: 100-250 | Width: 44"-60" | Finishes: Soft, Crisp, Brushed',
      useCases: 'Evening Wear, Linings, Lightweight Garments',
    },
    {
      name: 'Jacquards',
      image: jacquardSwatch,
      description: 'Intricate jacquard patterns woven with precision and artistry.',
      specs: 'GSM: 200-400 | Width: 44"-54" | Patterns: Floral, Geometric, Custom',
      useCases: 'Luxury Apparel, Upholstery, Accessories',
    },
    {
      name: 'Linen',
      image: linenSwatch,
      description: 'Natural linen excellence with superior quality and finish.',
      specs: 'GSM: 120-300 | Width: 44"-60" | Types: Pure Linen, Linen Blends',
      useCases: 'Summer Clothing, Home Textiles, Luxury Garments',
    },
    {
      name: 'Tweeds',
      image: jacquardSwatch,
      description: 'Classic tweed fabrics with traditional and modern interpretations.',
      specs: 'GSM: 300-500 | Width: 54"-60" | Patterns: Herringbone, Houndstooth',
      useCases: 'Coats, Jackets, Suits, Accessories',
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: cottonSwatch,
      description: 'Durable home textiles designed for longevity and style.',
      specs: 'GSM: 250-600 | Width: 54"-140" | Features: Stain Resistant, Durable',
      useCases: 'Furniture, Curtains, Cushions, Decorative Items',
    },
    {
      name: 'Speciality Wovens',
      image: jacquardSwatch,
      description: 'Unique specialty textiles for specific applications and requirements.',
      specs: 'GSM: Variable | Width: Custom | Features: Technical, Performance',
      useCases: 'Technical Wear, Medical Textiles, Industrial Applications',
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