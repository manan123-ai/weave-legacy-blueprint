import { motion } from 'framer-motion';
import { useState } from 'react';

// Import existing fabric texture images
import cottonTexture from '@/assets/cotton-fabric.jpg';
import linenTexture from '@/assets/linen-fabric.jpg';
import jacquardTexture from '@/assets/jacquard-fabric.jpg';
import viscoseTexture from '@/assets/viscose-fabric.jpg';
import dobbyTexture from '@/assets/dobby-fabric.jpg';
import crepeTexture from '@/assets/crepe-hightwist-fabric.jpg';
import twillTexture from '@/assets/twill-drill-fabric.jpg';
import oxfordTexture from '@/assets/oxford-canvas-fabric.jpg';

// Import new fabric texture images from web
import cottonTextureNew from '@/assets/fabric-textures/cotton-texture-new.jpg';
import linenTextureNew from '@/assets/fabric-textures/linen-natural-texture.jpg';
import jacquardTextureNew from '@/assets/fabric-textures/jacquard-pattern-texture.jpg';
import viscoseTextureNew from '@/assets/fabric-textures/viscose-silk-texture.jpg';
import twillTextureNew from '@/assets/fabric-textures/twill-texture-new.jpg';
import denimTexture from '@/assets/fabric-textures/denim-texture-new.jpg';
import canvasTexture from '@/assets/fabric-textures/canvas-texture-new.jpg';
import crepeTextureNew from '@/assets/fabric-textures/crepe-texture-new.jpg';
import oxfordTextureNew from '@/assets/fabric-textures/oxford-basket-weave.jpg';

const FabricGallery = () => {
  const [selectedFabric, setSelectedFabric] = useState<number | null>(null);

  const fabricTextures = [
    {
      name: 'Cotton',
      image: cottonTextureNew,
      description: 'Pure cotton with natural breathability and softness',
      technique: 'Plain Weave',
      properties: 'Hypoallergenic, Breathable, Durable'
    },
    {
      name: 'Linen',
      image: linenTextureNew,
      description: 'Natural flax fiber with exceptional cooling properties',
      technique: 'Loose Weave',
      properties: 'Moisture-wicking, Anti-bacterial, Strong'
    },
    {
      name: 'Jacquard',
      image: jacquardTextureNew,
      description: 'Intricate pattern weaving for luxury textiles',
      technique: 'Jacquard Loom',
      properties: 'Complex Patterns, Luxurious, Decorative'
    },
    {
      name: 'Viscose',
      image: viscoseTextureNew,
      description: 'Silk-like synthetic with elegant drape',
      technique: 'Twill Weave',
      properties: 'Silk-like Feel, Lustrous, Flowing'
    },
    {
      name: 'Twill Denim',
      image: denimTexture,
      description: 'Classic diagonal weave for sturdy fabrics',
      technique: 'Twill Weave',
      properties: 'Durable, Diagonal Pattern, Versatile'
    },
    {
      name: 'Canvas',
      image: canvasTexture,
      description: 'Heavy-duty fabric with basket weave structure',
      technique: 'Plain Weave',
      properties: 'Heavy-duty, Water-resistant, Strong'
    },
    {
      name: 'Dobby',
      image: dobbyTexture,
      description: 'Geometric pattern precision weaving',
      technique: 'Dobby Weave',
      properties: 'Geometric Patterns, Textured, Sophisticated'
    },
    {
      name: 'Crepe',
      image: crepeTextureNew,
      description: 'Twisted high-twist yarns creating texture',
      technique: 'Crepe Weave',
      properties: 'Crinkled Texture, Flowing, Elegant'
    },
    {
      name: 'Oxford',
      image: oxfordTextureNew,
      description: 'Basket weave structure for casual elegance',
      technique: 'Oxford Weave',
      properties: 'Casual, Breathable, Classic'
    },
    {
      name: 'High-Twist Crepe',
      image: crepeTexture,
      description: 'Advanced crepe with enhanced texture',
      technique: 'High-Twist Crepe',
      properties: 'Enhanced Texture, Wrinkle-resistant, Refined'
    },
    {
      name: 'Drill Twill',
      image: twillTextureNew,
      description: 'Reinforced twill for workwear applications',
      technique: 'Reinforced Twill',
      properties: 'Extra Strong, Workwear Grade, Long-lasting'
    },
    {
      name: 'Pure Linen',
      image: linenTexture,
      description: 'Traditional linen with authentic texture',
      technique: 'Traditional Weave',
      properties: 'Authentic, Natural, Breathable'
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                  className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="font-serif text-sm md:text-lg font-bold mb-1">
                    {fabric.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm opacity-90">
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
                  <p className="font-body text-sm text-muted-foreground mb-2">
                    {fabric.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    Properties: {fabric.properties}
                  </div>
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