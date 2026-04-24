import { motion } from 'framer-motion';

interface FrameMarkerProps {
  label: string;
  index?: string;
  align?: 'left' | 'center' | 'right';
}

/**
 * FrameMarker — a Figma-style section identifier with measurement ticks,
 * frame index, and a status dot. Sits above section headings.
 */
const FrameMarker = ({ label, index = '01', align = 'center' }: FrameMarkerProps) => {
  const justify =
    align === 'left'
      ? 'justify-start'
      : align === 'right'
      ? 'justify-end'
      : 'justify-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 ${justify} mb-6`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
        / {index}
      </span>
      <span className="h-px w-8 bg-primary/30" />
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">
          {label}
        </span>
      </div>
      <span className="h-px w-8 bg-primary/30" />
    </motion.div>
  );
};

export default FrameMarker;
