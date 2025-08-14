import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Globe3DThree = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    // Create a simple rotating 3D globe using CSS transforms
    const animate = () => {
      if (globeRef.current) {
        const time = Date.now() * 0.001;
        globeRef.current.style.transform = `rotateY(${time * 15}deg) rotateX(${Math.sin(time * 0.3) * 5}deg)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const exportLocations = [
    { name: 'New York', x: '25%', y: '35%', delay: 0 },
    { name: 'London', x: '45%', y: '30%', delay: 0.2 },
    { name: 'Paris', x: '48%', y: '32%', delay: 0.4 },
    { name: 'Milan', x: '50%', y: '38%', delay: 0.6 },
    { name: 'Tokyo', x: '85%', y: '40%', delay: 0.8 },
    { name: 'Hong Kong', x: '82%', y: '48%', delay: 1 },
    { name: 'Dubai', x: '60%', y: '45%', delay: 1.2 },
    { name: 'Mumbai', x: '70%', y: '48%', delay: 1.4 },
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="perspective-1000">
        <motion.div 
          ref={globeRef}
          className="relative w-96 h-96 mx-auto preserve-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Globe sphere with better gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 via-blue-500/60 to-blue-600/80 shadow-2xl shadow-blue-500/30">
            {/* World map overlay with better styling */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full opacity-60"
                fill="currentColor"
              >
                {/* Simplified world continents */}
                <path d="M 80 120 Q 160 100 240 120 Q 320 110 360 130 L 360 280 Q 320 260 240 270 Q 160 280 80 270 Z" className="text-green-400/80" />
                <path d="M 100 160 Q 180 140 260 160 Q 300 150 340 170 L 340 240 Q 300 220 260 230 Q 180 240 100 230 Z" className="text-green-500/70" />
                <path d="M 240 180 Q 320 160 380 180 L 380 250 Q 320 230 240 240 Z" className="text-green-400/60" />
                <circle cx="70" cy="250" r="25" className="text-green-500/70" />
                <circle cx="350" cy="320" r="20" className="text-green-400/80" />
              </svg>
            </div>

            {/* Glowing dots for cities with enhanced animation */}
            {exportLocations.map((location, index) => (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: location.x, top: location.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: location.delay }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.8, 1],
                      boxShadow: [
                        "0 0 10px rgba(251, 191, 36, 0.5)",
                        "0 0 20px rgba(251, 191, 36, 0.8)",
                        "0 0 10px rgba(251, 191, 36, 0.5)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 w-3 h-3 bg-yellow-300 rounded-full opacity-50"
                    animate={{ 
                      scale: [1, 2.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Globe rings/atmosphere */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-300/30 scale-105 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-blue-200/20 scale-110 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 rounded-full border border-blue-100/10 scale-115 animate-pulse" style={{ animationDelay: '2s' }} />
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
          Exporting Worldwide
        </h3>
        <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Delivering premium fabrics to fashion capitals and manufacturing hubs across the globe
        </p>
      </motion.div>
    </div>
  );
};

export default Globe3DThree;