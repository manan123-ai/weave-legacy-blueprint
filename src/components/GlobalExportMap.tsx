import { motion, useScroll, useTransform } from 'framer-motion';
import worldMapImage from '@/assets/world-map.jpg';
import { useRef, useState, useCallback } from 'react';

const GlobalExportMap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapTilt, setMapTilt] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleMapMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMapTilt({ x: x * 10, y: -y * 10 });
  }, []);

  const handleMapMouseLeave = useCallback(() => {
    setMapTilt({ x: 0, y: 0 });
  }, []);

  const exportLocations = [
    { x: 20, y: 40, label: 'USA' },
    { x: 50, y: 35, label: 'Europe' },
    { x: 75, y: 45, label: 'Asia' },
    { x: 85, y: 70, label: 'Australia' }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
      style={{ y, opacity, perspective: '1200px' }}
    >
      {/* Animated 3D background elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            z: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            z: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, rotateX: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Global Reach
          </motion.h2>
          <motion.p 
            className="font-body text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by international labels and high-volume manufacturers across the world
          </motion.p>
        </motion.div>

        {/* 3D World Map */}
        <motion.div 
          ref={mapRef}
          onMouseMove={handleMapMouseMove}
          onMouseLeave={handleMapMouseLeave}
          className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary-foreground/20 overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            transform: `perspective(1000px) rotateY(${mapTilt.x}deg) rotateX(${mapTilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Shine effect */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${(mapTilt.x / 10 + 0.5) * 100}% ${(-mapTilt.y / 10 + 0.5) * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            }}
          />

          <div className="relative" style={{ transform: 'translateZ(30px)' }}>
            <motion.img 
              src={worldMapImage}
              alt="World Map showing our global reach"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            
            {/* India marker - elevated in 3D */}
            <motion.div 
              className="absolute top-1/2 left-[58%] transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ transform: 'translate(-50%, -50%) translateZ(50px)' }}
            >
              <motion.div 
                className="relative"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-6 bg-primary-foreground rounded-full border-4 border-primary shadow-2xl"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                  India
                </div>
                {/* 3D pulse ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary-foreground"
                  animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Export markers with 3D elevation */}
            {exportLocations.map((location, index) => (
              <motion.div 
                key={location.label}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${location.y}%`, left: `${location.x}%`, transform: `translate(-50%, -50%) translateZ(${30 + index * 5}px)` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="relative"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <div className="w-4 h-4 bg-accent rounded-full border-2 border-primary-foreground shadow-lg"></div>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-md">
                    {location.label}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-accent"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10+', label: 'Countries Served' },
            { number: '50+', label: 'Global Partners' }, 
            { number: '40+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl hover:bg-primary-foreground/5 cursor-pointer"
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                z: 30,
                transition: { duration: 0.2 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="font-serif text-3xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                style={{ transform: 'translateZ(20px)' }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="font-body text-lg opacity-90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalExportMap;
