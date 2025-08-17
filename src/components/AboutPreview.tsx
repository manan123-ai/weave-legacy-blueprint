import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weavingVideo from '@/assets/weaving-process.jpg'; // Using image as fallback for video

const AboutPreview = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src={weavingVideo} 
            alt="Weaving Process Background" 
            className="w-full h-full object-cover opacity-15 scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/95"></div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 border border-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
        
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            For generations, Janki Nath & Co. has been weaving excellence into every fabric we create. 
            Our commitment to quality and innovation has made us a trusted partner for international 
            brands and manufacturers worldwide.
          </motion.p>
          
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From traditional techniques passed down through generations to cutting-edge technology, 
            we blend heritage with innovation to create fabrics that define luxury and durability.
          </motion.p>
          
          <motion.p 
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Every thread tells a story of precision, every weave speaks of craftsmanship, 
            and every fabric carries our promise of uncompromising quality.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="font-body font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/about">Know More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;