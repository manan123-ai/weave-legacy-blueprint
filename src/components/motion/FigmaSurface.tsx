import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FigmaSurfaceProps {
  children: ReactNode;
  variant?: 'grid' | 'dots' | 'blueprint' | 'holographic';
  spotlight?: boolean;
  crosshairs?: boolean;
  frameLabel?: string;
  className?: string;
  innerClassName?: string;
}

/**
 * FigmaSurface — wraps a section with Figma-style depth layers:
 * - Background grid/dots/blueprint pattern
 * - Soft drifting spotlight
 * - Corner crosshairs (frame markers)
 * - Optional frame label tag (top-left)
 * - Subtle film grain
 * Pure 2D — no 3D transforms.
 */
const FigmaSurface = ({
  children,
  variant = 'grid',
  spotlight = true,
  crosshairs = true,
  frameLabel,
  className = '',
  innerClassName = '',
}: FigmaSurfaceProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const spotX = useTransform(scrollYProgress, [0, 1], ['10%', '90%']);
  const spotOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0.5, 0.5, 0]
  );

  const patternClass =
    variant === 'dots'
      ? 'figma-dots'
      : variant === 'blueprint'
      ? 'figma-blueprint'
      : variant === 'holographic'
      ? 'figma-holographic'
      : 'figma-grid';

  return (
    <div
      ref={ref}
      className={`relative isolate overflow-hidden ${className}`}
    >
      {/* Pattern layer */}
      <div
        className={`absolute inset-0 ${patternClass} pointer-events-none`}
        aria-hidden="true"
      />

      {/* Drifting spotlight */}
      {spotlight && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[100px] pointer-events-none"
          style={{
            left: spotX,
            x: '-50%',
            opacity: spotOpacity,
            background:
              'radial-gradient(circle at center, hsl(var(--accent)) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Corner crosshairs — Figma frame markers */}
      {crosshairs && (
        <>
          <span className="figma-crosshair top-6 left-6" aria-hidden="true" />
          <span className="figma-crosshair top-6 right-6" aria-hidden="true" />
          <span className="figma-crosshair bottom-6 left-6" aria-hidden="true" />
          <span className="figma-crosshair bottom-6 right-6" aria-hidden="true" />
        </>
      )}

      {/* Frame label */}
      {frameLabel && (
        <div className="absolute top-4 left-4 z-10 hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80 px-2 py-1 border border-border/40 bg-background/40 backdrop-blur-sm rounded-sm">
            {frameLabel}
          </span>
        </div>
      )}

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className={`relative z-[1] ${innerClassName}`}>{children}</div>
    </div>
  );
};

export default FigmaSurface;
