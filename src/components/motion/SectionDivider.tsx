import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  label?: string;
  index?: string;
}

/**
 * Editorial section divider — animated rule with a Figma-style label chip
 * and measurement ticks that draw in on scroll.
 */
const SectionDivider = ({ label, index }: SectionDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex items-center gap-4">
        <motion.div
          style={{ scaleX }}
          className="origin-left h-px flex-1 bg-primary/30"
        />
        {label && (
          <div className="flex items-center gap-2 px-3 py-1 border border-border/60 bg-background/60 backdrop-blur-sm rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
            {index && (
              <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                {index}
              </span>
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {label}
            </span>
          </div>
        )}
        <motion.div
          style={{ scaleX }}
          className="origin-right h-px flex-1 bg-primary/30"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
