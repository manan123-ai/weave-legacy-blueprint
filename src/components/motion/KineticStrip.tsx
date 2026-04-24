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
  // Move just enough to feel scroll-driven, but never hide the sentence.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['5%', '-15%'] : ['-15%', '5%']
  );

  const words = Array(6).fill(text);

  return (
    <div
      ref={ref}
      className="overflow-hidden py-8 border-y border-border/40 bg-background/40 backdrop-blur-sm"
    >
      <motion.div
        style={{ x }}
        className="flex gap-8 whitespace-nowrap will-change-transform"
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="font-serif italic text-3xl md:text-5xl font-light text-primary/30 tracking-tight flex items-center"
          >
            {w}
            <span className="ml-8 text-primary/15 text-2xl md:text-3xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default KineticStrip;
