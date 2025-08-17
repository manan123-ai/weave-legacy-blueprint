import { motion } from 'framer-motion';
import { useState } from 'react';

// Import fabric texture images
import cottonTexture from '@/assets/cotton-fabric.jpg';
import linenTexture from '@/assets/linen-fabric.jpg';
import jacquardTexture from '@/assets/jacquard-fabric.jpg';
import viscoseTexture from '@/assets/viscose-fabric.jpg';
import dobbyTexture from '@/assets/dobby-fabric.jpg';
import crepeTexture from '@/assets/crepe-hightwist-fabric.jpg';
import twillTexture from '@/assets/twill-drill-fabric.jpg';
import oxfordTexture from '@/assets/oxford-canvas-fabric.jpg';

const FabricGallery = () => {
  const [selectedFabric, setSelectedFabric] = useState<number | null>(null);

  const fabricTextures = [
    {
      name: 'Cotton',
      image: cottonTexture,
      description: 'Pure cotton with natural breathability',
      technique: 'Plain Weave'
    },
    {
      name: 'Linen',
      image: linenTexture,
      description: 'Natural flax fiber luxury',
      technique: 'Loose Weave'
    },
    {
      name: 'Jacquard',
      image: jacquardTexture,
      description: 'Intricate pattern weaving',
      technique: 'Jacquard Loom'
    },
    {
      name: 'Viscose',
      image: viscoseTexture,
      description: 'Silk-like synthetic elegance',
      technique: 'Twill Weave'
    },
    {
      name: 'Dobby',
      image: dobbyTexture,
      description: 'Geometric pattern precision',
      technique: 'Dobby Weave'
    },
    {
      name: 'Crepe',
      image: crepeTexture,
      description: 'Twisted high-twist yarns',
      technique: 'Crepe Weave'
    },
    {
      name: 'Twill',
      image: twillTexture,
      description: 'Diagonal weave pattern',
      technique: 'Twill Weave'
    },
    {
      name: 'Oxford',
      image: oxfordTexture,
      description: 'Basket weave structure',
      technique: 'Oxford Weave'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/50 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            Fabric Textures & Techniques
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore the intricate details and weaving techniques behind our premium fabric collection
          </motion.p>
        </motion.div>

        {/* Fabric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {fabricTextures.map((fabric, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedFabric(selectedFabric === index ? null : index)}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative">
                <motion.img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Weaving pattern indicator */}
                <motion.div 
                  className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                {/* Hover Content */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="font-serif text-lg font-bold mb-1">
                    {fabric.name}
                  </h3>
                  <p className="font-body text-sm opacity-90">
                    {fabric.technique}
                  </p>
                </motion.div>
              </div>

              {/* Expanded Info */}
              {selectedFabric === index && (
                <motion.div 
                  className="p-4 bg-card-foreground/5 border-t border-border/20"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-body text-sm text-muted-foreground">
                    {fabric.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-lg text-muted-foreground mb-6">
            Interested in learning more about our weaving techniques?
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.a
              href="/production"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Production Process
            </motion.a>
            <motion.a
              href="/fabrics"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Browse All Fabrics
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FabricGallery;