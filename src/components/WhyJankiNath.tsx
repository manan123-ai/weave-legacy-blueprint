import { Microscope, Award, Factory, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';

const TiltIcon = ({ item, index }: { item: { icon: any; title: string; description: string }; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg) translateZ(30px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="text-center group cursor-pointer p-6 rounded-xl hover:bg-primary/5"
        style={{ transition: 'transform 0.15s ease-out, background-color 0.3s ease', transformStyle: 'preserve-3d' }}
      >
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 relative shadow-lg"
          style={{ transform: 'translateZ(40px)' }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, 0],
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
          }}
          transition={{ duration: 0.5 }}
        >
          <item.icon className="w-8 h-8" />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <h3 
          className="font-serif text-xl font-semibold text-primary mb-4"
          style={{ transform: 'translateZ(25px)' }}
        >
          {item.title}
        </h3>
        
        <p 
          className="font-body text-muted-foreground leading-relaxed"
          style={{ transform: 'translateZ(15px)' }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyJankiNath = () => {
  const differentiators = [
    {
      icon: Microscope,
      title: 'Unmatched Weaving Complexity',
      description: 'We specialize in intricate patterns and complex weaves that others find impossible to execute.',
    },
    {
      icon: Award,
      title: 'Export-Grade Quality',
      description: 'Every fabric meets international standards with rigorous quality control at every stage.',
    },
    {
      icon: Factory,
      title: 'High-Capacity Production',
      description: 'State-of-the-art facilities capable of handling large-scale orders without compromising quality.',
    },
    {
      icon: Lightbulb,
      title: 'In-House R&D and Customization',
      description: 'Dedicated research team continuously innovating and developing custom solutions for clients.',
    },
  ];

  return (
    <section className="py-24 bg-accent relative overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Floating 3D background elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 border border-primary/10 rounded-full"
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 180],
            z: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-32 h-32 border border-primary/10 rounded-full"
          animate={{ 
            rotateX: [180, -180],
            rotateY: [0, 360],
            z: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary/10 rounded-full"
          animate={{ 
            rotateZ: [0, 360],
            z: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, rotateX: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Janki Nath & Co.?
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Four pillars that set us apart in the global textile industry
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <TiltIcon key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJankiNath;
