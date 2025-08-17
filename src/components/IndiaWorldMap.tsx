import { motion } from 'framer-motion';

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
          className="relative bg-background rounded-2xl p-8 shadow-lg border border-border/50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Simple SVG World Map with India highlighted */}
          <svg 
            viewBox="0 0 800 400" 
            className="w-full h-64 md:h-80"
          >
            {/* World outline - simplified */}
            <g fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="1">
              {/* North America */}
              <path d="M50 80 L120 60 L180 80 L160 150 L80 160 L50 120 Z" />
              
              {/* South America */}
              <path d="M120 180 L160 170 L150 250 L110 280 L90 250 L100 200 Z" />
              
              {/* Europe */}
              <path d="M280 70 L350 65 L360 90 L320 110 L280 100 Z" />
              
              {/* Africa */}
              <path d="M300 120 L380 110 L400 200 L380 280 L320 290 L290 220 L300 150 Z" />
              
              {/* Asia (excluding India) */}
              <path d="M400 60 L550 50 L600 80 L580 120 L520 130 L480 110 L420 90 Z" />
              
              {/* China */}
              <path d="M520 90 L580 85 L600 110 L580 140 L540 145 L520 120 Z" />
              
              {/* Australia */}
              <path d="M600 250 L680 245 L690 280 L650 290 L600 285 Z" />
            </g>
            
            {/* India - highlighted */}
            <motion.path 
              d="M420 130 L480 125 L490 160 L480 180 L450 185 L430 175 L415 160 L420 140 Z" 
              fill="hsl(var(--primary))" 
              stroke="hsl(var(--primary-foreground))" 
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            {/* Pulsing marker on India */}
            <motion.circle 
              cx="450" 
              cy="155" 
              r="4" 
              fill="hsl(var(--primary-foreground))"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Location label */}
            <motion.text 
              x="465" 
              y="150" 
              className="fill-primary font-serif text-sm font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              India
            </motion.text>
            
            {/* Manufacturing facility marker */}
            <motion.text 
              x="465" 
              y="165" 
              className="fill-muted-foreground font-body text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Manufacturing Hub
            </motion.text>
          </svg>
          
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