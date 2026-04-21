import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface KineticHeadingProps {
  text: string;
  className?: string;
  highlight?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

/**
 * Animates each word in with a stagger + blur reveal.
 * Optional highlight word styled with muted-foreground.
 */
const KineticHeading = ({
  text,
  className = '',
  highlight,
  as: Tag = 'h2',
  delay = 0,
}: KineticHeadingProps) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 24, filter: reduce ? 'none' : 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const content = (
    <motion.span
      className="inline-block"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`inline-block mr-[0.25em] ${
            highlight && w.toLowerCase().includes(highlight.toLowerCase())
              ? 'text-muted-foreground italic'
              : ''
          }`}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );

  if (Tag === 'h1') return <h1 className={className}>{content}</h1>;
  if (Tag === 'h3') return <h3 className={className}>{content}</h3>;
  return <h2 className={className}>{content}</h2>;
};

export default KineticHeading;
