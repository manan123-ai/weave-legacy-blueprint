import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin progress bar fixed to the top of the viewport.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
