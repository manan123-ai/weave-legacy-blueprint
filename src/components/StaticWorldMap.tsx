import React from 'react';
import { motion } from 'framer-motion';
import worldMapImage from '@/assets/world-map.jpg';

const StaticWorldMap = () => {
  // Export locations with positions on the image (percentage based)
  const exportLocations = [
    { name: 'United States', x: '20%', y: '35%', color: '#FF6B6B' },
    { name: 'United Kingdom', x: '48%', y: '28%', color: '#4ECDC4' },
    { name: 'Germany', x: '52%', y: '30%', color: '#45B7D1' },
    { name: 'France', x: '50%', y: '32%', color: '#96CEB4' },
    { name: 'Italy', x: '52%', y: '38%', color: '#FFEAA7' },
    { name: 'Japan', x: '85%', y: '40%', color: '#DDA0DD' },
    { name: 'Australia', x: '82%', y: '75%', color: '#98D8C8' },
    { name: 'Canada', x: '25%', y: '25%', color: '#F7DC6F' },
    { name: 'Brazil', x: '35%', y: '60%', color: '#BB8FCE' },
    { name: 'South Africa', x: '55%', y: '75%', color: '#85C1E9' },
  ];

  const indiaLocation = { x: '70%', y: '45%' };

  return (
    <motion.div 
      className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* World Map Image */}
      <div className="relative">
        <img 
          src={worldMapImage} 
          alt="World Map showing global export locations" 
          className="w-full h-auto object-cover"
        />
        
        {/* India HQ Marker */}
        <motion.div
          className="absolute w-4 h-4 -translate-x-2 -translate-y-2"
          style={{ left: indiaLocation.x, top: indiaLocation.y }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
            <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary whitespace-nowrap shadow-lg">
              India (HQ)
            </div>
          </div>
        </motion.div>

        {/* Export Location Markers */}
        {exportLocations.map((location, index) => (
          <motion.div
            key={location.name}
            className="absolute w-3 h-3 -translate-x-1.5 -translate-y-1.5 group cursor-pointer"
            style={{ left: location.x, top: location.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.5 }}
          >
            <div className="relative">
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ backgroundColor: location.color }}
              ></div>
              <div 
                className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-75"
                style={{ backgroundColor: location.color }}
              ></div>
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-primary whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                {location.name}
              </div>
              
              {/* Connection Line to India */}
              <svg 
                className="absolute inset-0 pointer-events-none overflow-visible"
                style={{ 
                  width: '100vw', 
                  height: '100vh',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.line
                  x1={location.x}
                  y1={location.y}
                  x2={indiaLocation.x}
                  y2={indiaLocation.y}
                  stroke={location.color}
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 + index * 0.2 }}
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-primary mb-1">Global Export Network</p>
        <p className="text-xs text-muted-foreground">Hover over markers to see locations</p>
      </div>
    </motion.div>
  );
};

export default StaticWorldMap;