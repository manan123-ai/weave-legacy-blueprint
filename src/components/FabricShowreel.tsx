import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import cottonSwatch from '@/assets/cotton-swatch.jpg';
import linenSwatch from '@/assets/linen-swatch.jpg';
import jacquardSwatch from '@/assets/jacquard-swatch.jpg';

const FabricShowreel = () => {
  const fabricCategories = [
    {
      name: 'Cotton',
      image: cottonSwatch,
      description: 'Premium quality cotton fabrics',
    },
    {
      name: 'Cotton Blends',
      image: cottonSwatch,
      description: 'Innovative cotton blend compositions',
    },
    {
      name: 'Viscose',
      image: linenSwatch,
      description: 'Luxurious viscose textiles',
    },
    {
      name: 'Jacquards',
      image: jacquardSwatch,
      description: 'Intricate jacquard patterns',
    },
    {
      name: 'Linen',
      image: linenSwatch,
      description: 'Natural linen excellence',
    },
    {
      name: 'Tweeds',
      image: jacquardSwatch,
      description: 'Classic tweed fabrics',
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: cottonSwatch,
      description: 'Durable home textiles',
    },
    {
      name: 'Speciality Wovens',
      image: jacquardSwatch,
      description: 'Unique specialty textiles',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Fabric Categories
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium fabrics, each crafted with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {fabricCategories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-body font-medium">
            <Link to="/fabrics">View All Fabrics</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FabricShowreel;