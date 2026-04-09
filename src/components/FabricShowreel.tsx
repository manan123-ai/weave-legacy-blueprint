import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import cottonFabric from '@/assets/cotton-pinterest.jpg';
import cottonBlendsFabric from '@/assets/cotton-blends-pinterest.jpg';
import linenFabric from '@/assets/linen-new.jpg';
import jacquardFabric from '@/assets/jacquard-pinterest.jpg';
import viscoseFabric from '@/assets/viscose-pinterest.jpg';
import tweedFabric from '@/assets/tweed-new.jpg';
import upholsteryFabric from '@/assets/upholstery-fabric-samples.jpg';
import specialtyWovenFabric from '@/assets/specialty-woven-new.jpg';

const TiltCard = ({ category, index }: { category: { name: string; image: string; description: string }; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Move shine effect
    const shine = cardRef.current.querySelector('.shine') as HTMLElement;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.3) 0%, transparent 60%)`;
      shine.style.opacity = '1';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    const shine = cardRef.current.querySelector('.shine') as HTMLElement;
    if (shine) shine.style.opacity = '0';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl relative"
        style={{ transition: 'transform 0.15s ease-out, box-shadow 0.3s ease', transformStyle: 'preserve-3d' }}
      >
        {/* Shine overlay */}
        <div className="shine absolute inset-0 z-10 pointer-events-none opacity-0 rounded-lg" style={{ transition: 'opacity 0.3s ease' }} />
        
        <div className="aspect-square overflow-hidden relative" style={{ transform: 'translateZ(20px)' }}>
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110"
            style={{ transition: 'transform 0.5s ease' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.3s ease' }} />
        </div>
        <div 
          className="p-4 sm:p-6 group-hover:bg-secondary"
          style={{ transform: 'translateZ(30px)', transition: 'background-color 0.3s ease' }}
        >
          <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-foreground" style={{ transition: 'color 0.3s ease' }}>
            {category.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground group-hover:text-foreground" style={{ transition: 'color 0.3s ease' }}>
            {category.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FabricShowreel = () => {
  const fabricCategories = [
    { name: 'Cotton', image: cottonFabric, description: 'Premium quality cotton fabrics' },
    { name: 'Cotton Blends', image: cottonBlendsFabric, description: 'Innovative cotton blend compositions' },
    { name: 'Viscose', image: viscoseFabric, description: 'Luxurious viscose textiles' },
    { name: 'Jacquards', image: jacquardFabric, description: 'Intricate jacquard patterns' },
    { name: 'Linen', image: linenFabric, description: 'Natural linen excellence' },
    { name: 'Tweeds', image: tweedFabric, description: 'Classic tweed fabrics' },
    { name: 'Upholstery & Home Furnishing', image: upholsteryFabric, description: 'Durable home textiles' },
    { name: 'Speciality Wovens', image: specialtyWovenFabric, description: 'Unique specialty textiles' },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden" style={{ perspective: '1200px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, rotateX: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
            <TiltCard key={index} category={category} index={index} />
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
            className="font-body font-medium hover:scale-110 shadow-lg hover:shadow-2xl"
            style={{ transition: 'all 0.3s ease' }}
          >
            <Link to="/fabrics">View All Fabrics</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricShowreel;
