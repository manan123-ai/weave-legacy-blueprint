import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/colorful-fabric-banner.jpg';
import heroSlide2 from '@/assets/weaving-loom-banner.jpg';
import heroSlide3 from '@/assets/yarn-production-banner.jpg';

const processSteps = [
  { label: 'Yarn', icon: '🧶' },
  { label: 'Weaving', icon: '🔄' },
  { label: 'Dyeing', icon: '🎨' },
  { label: 'Finishing', icon: '✨' },
  { label: 'Garment', icon: '👔' },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

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
      title: "Premium Fabric Production",
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

  // Animate through process steps
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 2000);
    return () => clearInterval(stepTimer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl mx-auto text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-sm font-body uppercase tracking-[0.3em] text-accent mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.h1
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight px-4"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="font-body text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button
                  size="lg"
                  onClick={slides[currentSlide].buttonAction}
                  className="bg-white text-foreground hover:bg-white/90 font-body font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  {slides[currentSlide].buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Yarn to Garment Process Timeline */}
        <motion.div
          className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-between relative">
            {/* Progress line */}
            <div className="absolute top-5 left-[10%] right-[10%] h-[2px] bg-white/20">
              <motion.div
                className="h-full bg-white/80"
                animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {processSteps.map((step, index) => (
              <div key={step.label} className="flex flex-col items-center z-10 relative">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-500 ${
                    index <= activeStep
                      ? 'bg-white text-foreground shadow-lg shadow-white/30'
                      : 'bg-white/20 text-white/60'
                  }`}
                  animate={index === activeStep ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {step.icon}
                </motion.div>
                <span className={`text-xs mt-2 font-body transition-all duration-500 ${
                  index <= activeStep ? 'text-white' : 'text-white/40'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/40 w-3 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
