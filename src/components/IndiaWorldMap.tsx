import { motion } from 'framer-motion';
import worldMapImage from '@/assets/world-map.jpg';

const IndiaWorldMap = () => {
  return (
    <div className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3 
          className="font-serif text-3xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Manufacturing Location
        </motion.h3>
        
        <motion.div 
          className="relative bg-background rounded-2xl p-8 shadow-lg border border-border/50 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* World Map Image */}
          <div className="relative">
            <motion.img 
              src={worldMapImage}
              alt="World Map showing our manufacturing location in India"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            
            {/* India marker overlay - positioned approximately over India */}
            <motion.div 
              className="absolute top-1/2 left-[58%] transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-6 bg-primary rounded-full border-4 border-primary-foreground shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  India
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-primary px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                  Manufacturing Hub
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-muted-foreground">
              Strategically located in India, our state-of-the-art manufacturing facility 
              serves global markets with premium quality fabrics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndiaWorldMap;