import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const EnhancedWorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const mapRef = useRef<SVGSVGElement>(null);

  const exportCountries = [
    { name: 'United States', coords: { x: 200, y: 150 }, color: 'hsl(var(--primary))' },
    { name: 'United Kingdom', coords: { x: 480, y: 120 }, color: 'hsl(var(--accent))' },
    { name: 'Germany', coords: { x: 520, y: 140 }, color: 'hsl(var(--primary))' },
    { name: 'France', coords: { x: 500, y: 150 }, color: 'hsl(var(--accent))' },
    { name: 'Italy', coords: { x: 530, y: 170 }, color: 'hsl(var(--primary))' },
    { name: 'Spain', coords: { x: 480, y: 170 }, color: 'hsl(var(--accent))' },
    { name: 'Australia', coords: { x: 780, y: 280 }, color: 'hsl(var(--primary))' },
    { name: 'Japan', coords: { x: 780, y: 160 }, color: 'hsl(var(--accent))' },
    { name: 'South Korea', coords: { x: 760, y: 150 }, color: 'hsl(var(--primary))' },
    { name: 'India', coords: { x: 650, y: 200 }, color: 'hsl(var(--accent))' }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div 
          className="absolute -inset-10 opacity-20"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, hsl(var(--primary)) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsl(var(--accent)) 0%, transparent 50%)'
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
      
      {/* World Map SVG */}
      <motion.svg
        ref={mapRef}
        viewBox="0 0 900 400"
        className="w-full h-auto relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* World Map Outline (Simplified) */}
        <motion.path
          d="M 100 150 Q 200 100 300 150 T 500 140 Q 600 120 700 150 Q 800 160 850 180 L 850 250 Q 800 270 700 250 Q 600 240 500 250 Q 400 260 300 250 Q 200 240 100 250 Z M 150 200 Q 200 180 250 200 T 350 190 Q 400 180 450 200 M 550 180 Q 600 160 650 180 T 750 170"
          fill="none"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* Country Markers */}
        {exportCountries.map((country, index) => (
          <motion.g
            key={country.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Pulsing Ring */}
            <motion.circle
              cx={country.coords.x}
              cy={country.coords.y}
              r="20"
              fill="none"
              stroke={country.color}
              strokeWidth="2"
              opacity="0.6"
              animate={{ 
                r: [15, 25, 15],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
            
            {/* Main Marker */}
            <motion.circle
              cx={country.coords.x}
              cy={country.coords.y}
              r="8"
              fill={country.color}
              className="cursor-pointer"
              whileHover={{ scale: 1.5 }}
              onHoverStart={() => setHoveredCountry(country.name)}
              onHoverEnd={() => setHoveredCountry(null)}
            />
            
            {/* Connection Lines */}
            <motion.line
              x1="450"
              y1="200"
              x2={country.coords.x}
              y2={country.coords.y}
              stroke={country.color}
              strokeWidth="1"
              opacity="0.4"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1,
                ease: "easeInOut" 
              }}
              viewport={{ once: true }}
            />
          </motion.g>
        ))}
        
        {/* Central Hub (India) */}
        <motion.g>
          <motion.circle
            cx="450"
            cy="200"
            r="15"
            fill="hsl(var(--primary))"
            className="drop-shadow-lg"
            animate={{ 
              boxShadow: [
                '0 0 10px hsl(var(--primary))',
                '0 0 20px hsl(var(--primary))',
                '0 0 10px hsl(var(--primary))'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text
            x="450"
            y="230"
            textAnchor="middle"
            className="text-sm font-medium fill-primary-foreground"
          >
            INDIA
          </text>
        </motion.g>
      </motion.svg>
      
      {/* Country Tooltip */}
      {hoveredCountry && (
        <motion.div
          className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <p className="font-medium text-card-foreground">{hoveredCountry}</p>
          <p className="text-sm text-muted-foreground">Export Destination</p>
        </motion.div>
      )}
      
      {/* Legend */}
      <motion.div 
        className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-xs font-medium text-card-foreground">Export Markets</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-0.5 bg-primary opacity-40"></div>
          <span className="text-xs text-muted-foreground">Trade Routes</span>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedWorldMap;