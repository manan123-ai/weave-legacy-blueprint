import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
  amount?: number;
}

/**
 * Scroll-triggered reveal — fades + lifts (or slides horizontally, via `x`)
 * in once on enter. Honors prefers-reduced-motion.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 32,
  x,
  className,
  as = 'div',
  amount = 0.2,
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce || x !== undefined ? 0 : y,
      x: reduce ? 0 : x,
      filter: reduce ? 'none' : 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: x !== undefined ? 0.6 : 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
