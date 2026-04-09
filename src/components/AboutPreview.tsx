import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import weavingVideo from '@/assets/weaving-process.jpg';

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const contentZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 0]);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden" style={{ perspective: '1200px' }}>
      {/* 3D Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="relative w-full h-full">
          <img 
            src={weavingVideo} 
            alt="Weaving Process Background" 
            className="w-full h-full object-cover opacity-15 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/95"></div>
        </div>
      </motion.div>
      
      {/* 3D Floating decorative elements */}
      <div className="absolute inset-0 z-[1]" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full"
          animate={{ 
            rotateX: [0, 360],
            z: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-primary/10 rounded-full"
          animate={{ 
            rotateY: [0, 360],
            z: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 right-10 w-16 h-16 border border-primary/10 rounded-full"
          animate={{ 
            rotateZ: [0, 360],
            z: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 50, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: 'translateZ(40px)' }}
        >
          <span className="inline-block">Legacy in Every</span>{' '}
          <motion.span 
            className="inline-block bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Thread
          </motion.span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto mb-12 space-y-6" style={{ transform: 'translateZ(25px)' }}>
          {[
            "For generations, Janki Nath & Co. has been weaving excellence into every fabric we create. Our commitment to quality and innovation has made us a trusted partner for international brands and manufacturers worldwide.",
            "From traditional techniques passed down through generations to cutting-edge technology, we blend heritage with innovation to create fabrics that define luxury and durability.",
            "Every thread tells a story of precision, every weave speaks of craftsmanship, and every fabric carries our promise of uncompromising quality."
          ].map((text, index) => (
            <motion.p 
              key={index}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30, z: -20 }}
              whileInView={{ opacity: 1, y: 0, z: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{ transform: 'translateZ(50px)' }}
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="font-body font-medium hover:scale-110 shadow-lg hover:shadow-2xl border-2 hover:bg-primary hover:text-primary-foreground"
            style={{ transition: 'all 0.3s ease' }}
          >
            <Link to="/about">Know More About Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
