import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveWorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const exportLocations = [
    { name: 'United States', x: '20%', y: '35%', color: 'from-blue-500 to-blue-600' },
    { name: 'United Kingdom', x: '48%', y: '28%', color: 'from-green-500 to-green-600' },
    { name: 'France', x: '50%', y: '32%', color: 'from-purple-500 to-purple-600' },
    { name: 'Italy', x: '52%', y: '38%', color: 'from-red-500 to-red-600' },
    { name: 'Germany', x: '52%', y: '30%', color: 'from-orange-500 to-orange-600' },
    { name: 'Japan', x: '85%', y: '40%', color: 'from-pink-500 to-pink-600' },
    { name: 'Hong Kong', x: '82%', y: '48%', color: 'from-indigo-500 to-indigo-600' },
    { name: 'UAE', x: '60%', y: '45%', color: 'from-teal-500 to-teal-600' },
    { name: 'India', x: '70%', y: '50%', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Australia', x: '85%', y: '70%', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 overflow-hidden">
        {/* World Map SVG */}
        <div className="relative">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto max-h-96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified world map continents */}
            <motion.path
              d="M 100 150 Q 200 120 350 140 Q 450 130 520 150 L 520 280 Q 450 260 350 270 Q 200 280 100 270 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              className="opacity-60"
              whileHover={{ opacity: 0.8 }}
            />
            <motion.path
              d="M 140 180 Q 240 160 340 180 Q 400 170 460 190 L 460 250 Q 400 230 340 240 Q 240 250 140 240 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              className="opacity-50"
              whileHover={{ opacity: 0.7 }}
            />
            <motion.path
              d="M 520 140 Q 650 120 780 140 Q 850 130 900 150 L 900 280 Q 850 260 780 270 Q 650 280 520 270 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              className="opacity-60"
              whileHover={{ opacity: 0.8 }}
            />
            <motion.path
              d="M 700 300 Q 800 280 900 300 L 900 400 Q 800 380 700 390 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              className="opacity-50"
              whileHover={{ opacity: 0.7 }}
            />

            {/* Export lines from India (source) */}
            {exportLocations.map((location, index) => (
              <motion.g key={index}>
                {/* Connection line */}
                <motion.path
                  d={`M 700 250 Q ${(700 + parseFloat(location.x.replace('%', '')) * 10) / 2} ${Math.min(250, parseFloat(location.y.replace('%', '')) * 5) - 50} ${parseFloat(location.x.replace('%', '')) * 10} ${parseFloat(location.y.replace('%', '')) * 5}`}
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="2"
                  fill="none"
                  className="opacity-0"
                  animate={{
                    opacity: hoveredCountry === location.name ? 1 : 0.3,
                    strokeWidth: hoveredCountry === location.name ? 3 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Gradient definition */}
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0.8" />
                    <stop offset="100%" className="text-accent" stopColor="currentColor" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Animated dots along the line */}
                <motion.circle
                  r="3"
                  fill="hsl(var(--primary))"
                  className="opacity-0"
                  animate={{
                    opacity: hoveredCountry === location.name ? [0, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href={`#path-${index}`} />
                  </animateMotion>
                </motion.circle>
              </motion.g>
            ))}
          </svg>

          {/* Export location markers */}
          {exportLocations.map((location, index) => (
            <motion.div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ 
                left: location.x, 
                top: location.y,
              }}
              onMouseEnter={() => setHoveredCountry(location.name)}
              onMouseLeave={() => setHoveredCountry(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="relative"
                animate={{
                  scale: hoveredCountry === location.name ? 1.3 : 1,
                }}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${location.color} shadow-lg border-2 border-white`} />
                
                {/* Pulsing ring */}
                <motion.div 
                  className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${location.color} opacity-30`}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                {/* Country label */}
                <motion.div
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: hoveredCountry === location.name ? 1 : 0,
                    y: hoveredCountry === location.name ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm font-medium text-foreground">
                    {location.name}
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* India (source) marker */}
          <motion.div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '70%', top: '50%' }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary-foreground shadow-xl border-3 border-white"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(var(--primary), 0.4)",
                  "0 0 0 20px rgba(var(--primary), 0)",
                  "0 0 0 0 rgba(var(--primary), 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-lg px-3 py-1 shadow-lg">
              <div className="text-sm font-bold">India (HQ)</div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
          Exporting Worldwide
        </h3>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Delivering premium fabrics to fashion capitals and manufacturing hubs across the globe
        </p>
        <motion.p 
          className="font-body text-sm text-muted-foreground mt-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Hover over markers to see export routes
        </motion.p>
      </motion.div>
    </div>
  );
};

export default InteractiveWorldMap;