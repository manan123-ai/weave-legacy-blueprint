import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface KineticStripProps {
  text: string;
  reverse?: boolean;
}

/**
 * Scroll-velocity-driven horizontal text strip. As the user scrolls,
 * the words drift horizontally — feels alive without being noisy.
 */
const KineticStrip = ({ text, reverse = false }: KineticStripProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['10%', '-30%'] : ['-30%', '10%']
  );

  const words = Array(8).fill(text);

  return (
    <div
      ref={ref}
      className="overflow-hidden py-10 border-y border-border/40 bg-background/40 backdrop-blur-sm"
    >
      <motion.div
        style={{ x }}
        className="flex gap-12 whitespace-nowrap will-change-transform"
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="font-serif italic text-5xl md:text-7xl font-light text-primary/30 tracking-tight"
          >
            {w}
            <span className="ml-12 text-primary/15">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default KineticStrip;
