import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Earth globe component
function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a simple earth-like texture using gradients
  const earthTexture = useRef<THREE.CanvasTexture | null>(null);
  
  useEffect(() => {
    // Create a canvas texture for the earth
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Create gradient background (ocean blue)
      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e40af');
      gradient.addColorStop(0.5, '#2563eb');
      gradient.addColorStop(1, '#1e40af');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add landmasses (simplified continents)
      context.fillStyle = '#22c55e';
      
      // North America
      context.fillRect(100, 150, 200, 100);
      context.fillRect(150, 120, 100, 150);
      
      // South America
      context.fillRect(200, 280, 80, 150);
      
      // Europe/Africa
      context.fillRect(450, 130, 120, 200);
      context.fillRect(480, 280, 100, 120);
      
      // Asia
      context.fillRect(600, 100, 250, 180);
      
      // Australia
      context.fillRect(750, 350, 100, 60);
      
      earthTexture.current = new THREE.CanvasTexture(canvas);
    }
  }, []);
  
  // Rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        map={earthTexture.current} 
        transparent 
        opacity={0.9}
      />
    </Sphere>
  );
}

// Glowing dots for cities
function CityDots() {
  const cities = [
    { name: 'New York', position: [-1.2, 0.8, 1.2] },
    { name: 'London', position: [0.2, 1.0, 1.8] },
    { name: 'Paris', position: [0.3, 0.9, 1.8] },
    { name: 'Milan', position: [0.4, 0.7, 1.8] },
    { name: 'Tokyo', position: [1.5, 0.5, 1.0] },
    { name: 'Hong Kong', position: [1.4, 0.2, 1.2] },
    { name: 'Dubai', position: [0.8, 0.3, 1.6] },
    { name: 'Mumbai', position: [1.0, 0.2, 1.5] },
  ];

  return (
    <>
      {cities.map((city, index) => (
        <mesh key={index} position={city.position as [number, number, number]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
      ))}
    </>
  );
}

// Atmosphere glow effect
function Atmosphere() {
  return (
    <Sphere args={[2.1, 64, 64]} position={[0, 0, 0]}>
      <meshBasicMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.1} 
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

const Globe3DThree = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="h-96 w-96 mx-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            
            {/* Globe components */}
            <Earth />
            <CityDots />
            <Atmosphere />
            
            {/* Controls */}
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
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