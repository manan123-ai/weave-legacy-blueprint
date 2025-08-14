import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cottonFabric from '@/assets/cotton-fabric.jpg';
import linenFabric from '@/assets/linen-fabric.jpg';
import jacquardFabric from '@/assets/jacquard-fabric.jpg';
import viscoseFabric from '@/assets/viscose-fabric.jpg';

const FabricShowreel = () => {
  const fabricCategories = [
    {
      name: 'Cotton',
      image: cottonFabric,
      description: 'Premium quality cotton fabrics',
    },
    {
      name: 'Cotton Blends',
      image: cottonFabric,
      description: 'Innovative cotton blend compositions',
    },
    {
      name: 'Viscose',
      image: viscoseFabric,
      description: 'Luxurious viscose textiles',
    },
    {
      name: 'Jacquards',
      image: jacquardFabric,
      description: 'Intricate jacquard patterns',
    },
    {
      name: 'Linen',
      image: linenFabric,
      description: 'Natural linen excellence',
    },
    {
      name: 'Tweeds',
      image: jacquardFabric,
      description: 'Classic tweed fabrics',
    },
    {
      name: 'Upholstery & Home Furnishing',
      image: cottonFabric,
      description: 'Durable home textiles',
    },
    {
      name: 'Speciality Wovens',
      image: jacquardFabric,
      description: 'Unique specialty textiles',
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Fabric Categories
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive range of premium fabrics, each crafted with precision and care
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {fabricCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <motion.div 
                className="p-4 sm:p-6"
                whileHover={{ backgroundColor: "hsl(var(--secondary))" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-foreground transition-colors">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild 
            size="lg" 
            className="font-body font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to="/fabrics">View All Fabrics</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricShowreel;