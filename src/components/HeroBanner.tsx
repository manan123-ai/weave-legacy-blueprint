import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/colorful-fabric-banner.jpg';
import heroSlide2 from '@/assets/weaving-loom-banner.jpg';
import heroSlide3 from '@/assets/yarn-production-banner.jpg';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slides = [
    {
      image: heroSlide1,
      title: "Traditional Craftsmanship Meets Modern Excellence",
      subtitle: "Explore Our Craft",
      description: "Discover our premium collection of vibrant fabrics, handpicked for quality and artistry",
      buttonText: "Explore Our Craft",
      buttonAction: () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    },
    {
      image: heroSlide2,
      title: "Advanced Weaving Technology",
      subtitle: "About Our Journey",
      description: "State-of-the-art manufacturing processes ensuring consistent quality and innovation",
      buttonText: "Our Story", 
      buttonAction: () => window.location.href = '/about'
    },
    {
      image: heroSlide3,
      title: "Premium Yarn Production",
      subtitle: "World-Class Quality",
      description: "From fiber to finished fabric - complete control over our manufacturing excellence",
      buttonText: "View Our Work",
      buttonAction: () => window.location.href = '/clientele'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <motion.section 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      style={{ y }}
    >
      {/* Background Images with Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Weaving pattern animation overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full relative overflow-hidden">
                {/* Dynamic weaving animations */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ 
                    x: ["-100%", "100%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  animate={{ 
                    y: ["-100%", "100%"]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.7
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto text-white">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="text-sm font-body uppercase tracking-wider text-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.div>
            
            <motion.h1 
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="font-body text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button 
                size="lg" 
                onClick={slides[currentSlide].buttonAction}
                className="bg-white text-black hover:bg-white/90 hover:scale-105 font-body font-medium px-8 py-3 text-lg transition-all duration-300 shadow-lg"
              >
                {slides[currentSlide].buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2" 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroBanner;