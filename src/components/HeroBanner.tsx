import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/motion/MagneticButton';

/**
 * Code-based animated hero — a slowly drifting woven-grid pattern (CSS
 * repeating-linear-gradient "threads" crossing on a dark ground) instead of
 * a static banner image or video file. See .weave-hero-bg in index.css.
 */
const HeroBanner = () => {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center">
      {/* Animated woven-grid background */}
      <div className="absolute inset-0 weave-hero-bg" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="h-px w-10 bg-[#c49b59]/70" />
          <p className="text-xs sm:text-sm font-body uppercase tracking-[0.4em] text-[#c49b59]">
            Since 1968
          </p>
          <span className="h-px w-10 bg-[#c49b59]/70" />
        </motion.div>

        <motion.h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.05] px-4"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Janki Nath & Co.
        </motion.h1>

        <motion.p
          className="font-body text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/85 px-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Premium woven fabric manufacturer and exporter from India — cotton, linen, jacquard,
          viscose and more, mill-direct to fashion brands worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 font-body font-medium px-10 py-6 text-base rounded-full transition-all duration-500"
            >
              <Link to="/request-samples">Request Samples</Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/5 hover:bg-white/15 backdrop-blur-sm font-body font-medium px-10 py-6 text-base rounded-full transition-all duration-500"
            >
              <Link to="/fabrics">View Fabrics</Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-[10px] uppercase tracking-[0.3em]"
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
};

export default HeroBanner;
