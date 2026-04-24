import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface KineticStripProps {
  text: string;
  reverse?: boolean;
}

/**
 * Scroll-velocity-driven horizontal text strip with measurement ticks above
 * and below — Figma frame inspector aesthetic.
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
    reverse ? ['2%', '-12%'] : ['-12%', '2%']
  );

  const words = Array(8).fill(text);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden py-6 border-y border-border/40 bg-background/40 backdrop-blur-sm"
    >
      <div className="measure-ticks absolute top-0 left-0 right-0 opacity-50" aria-hidden="true" />
      <div className="measure-ticks absolute bottom-0 left-0 right-0 opacity-50" aria-hidden="true" />

      <motion.div
        style={{ x }}
        className="flex gap-12 whitespace-nowrap will-change-transform"
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl md:text-4xl font-light text-primary/30 tracking-tight flex items-center"
          >
            {w}
            <span className="ml-12 text-primary/15 text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default KineticStrip;
