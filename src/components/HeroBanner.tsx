import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroSlide1 from '@/assets/colorful-fabric-banner.jpg';
import heroSlide2 from '@/assets/weaving-loom-banner.jpg';
import heroSlide3 from '@/assets/yarn-production-banner.jpg';
import MagneticButton from '@/components/motion/MagneticButton';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const slides = [
    {
      image: heroSlide1,
      title: 'Traditional Craftsmanship Meets Modern Excellence',
      subtitle: 'Explore Our Craft',
      description:
        'Discover our premium collection of vibrant fabrics, handpicked for quality and artistry',
      buttonText: 'Explore Our Craft',
      buttonAction: () =>
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }),
    },
    {
      image: heroSlide2,
      title: 'Advanced Weaving Technology',
      subtitle: 'About Our Journey',
      description:
        'State-of-the-art manufacturing processes ensuring consistent quality and innovation',
      buttonText: 'Our Story',
      buttonAction: () => (window.location.href = '/about'),
    },
    {
      image: heroSlide3,
      title: 'Premium Fabric Production',
      subtitle: 'World-Class Quality',
      description:
        'From fiber to finished fabric — complete control over our manufacturing excellence',
      buttonText: 'View Our Work',
      buttonAction: () => (window.location.href = '/clientele'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Split title into words for kinetic reveal
  const renderKineticTitle = (title: string) =>
    title.split(' ').map((word, i) => (
      <motion.span
        key={`${currentSlide}-${i}`}
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 0.8,
          delay: 0.3 + i * 0.08,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Images with subtle parallax + slow zoom */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${
                currentSlide === index ? 'animate-slow-zoom' : ''
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-5xl mx-auto text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="h-px w-10 bg-white/60" />
                <p className="text-xs sm:text-sm font-body uppercase tracking-[0.4em] text-white/80">
                  {slides[currentSlide].subtitle}
                </p>
                <span className="h-px w-10 bg-white/60" />
              </motion.div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.05] px-4 text-white">
                {renderKineticTitle(slides[currentSlide].title)}
              </h1>

              <motion.p
                className="font-body text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 px-4 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <MagneticButton>
                  <Button
                    size="lg"
                    onClick={slides[currentSlide].buttonAction}
                    className="bg-white text-foreground hover:bg-white/90 font-body font-medium px-10 py-6 text-base rounded-full transition-all duration-500 group"
                  >
                    <span className="relative">
                      {slides[currentSlide].buttonText}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-500 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-500 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators with progress */}
      <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 z-20 flex space-x-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative h-px overflow-hidden transition-all duration-500"
            style={{ width: currentSlide === index ? 56 : 24 }}
          >
            <span className="absolute inset-0 bg-white/30" />
            {currentSlide === index && (
              <motion.span
                key={currentSlide}
                className="absolute inset-0 bg-white origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6.5, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/70 text-[10px] uppercase tracking-[0.3em]"
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
};

export default HeroBanner;
