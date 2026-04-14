import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import weavingVideo from '@/assets/weaving-process.jpg';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={weavingVideo}
          alt="Weaving Process Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Legacy in Every <span className="text-muted-foreground">Thread</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          {[
            "For generations, Janki Nath & Co. has been weaving excellence into every fabric we create. Our commitment to quality and innovation has made us a trusted partner for international brands and manufacturers worldwide.",
            "From traditional techniques passed down through generations to cutting-edge technology, we blend heritage with innovation to create fabrics that define luxury and durability.",
            "Every thread tells a story of precision, every weave speaks of craftsmanship, and every fabric carries our promise of uncompromising quality."
          ].map((text, index) => (
            <motion.p
              key={index}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-body font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <Link to="/about">Know More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
