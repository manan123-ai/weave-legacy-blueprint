import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Site-wide animated aurora — soft, slow-drifting gradient blobs in brand
 * tones that sit behind every page. Pure CSS/Framer; no 3D, no perspective.
 *
 * Performance: heavy blur+grain filters are expensive. We render a lighter
 * static version on mobile / reduced-motion to keep paint cost low.
 */
const AuroraBackground = () => {
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const lite = isMobile || reduce;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* editorial grid — Figma-style faint lines (skip on mobile) */}
      {!lite && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      )}

      {lite ? (
        // Lightweight static gradient wash — no blur, no animation
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at 20% 10%, hsl(var(--accent) / 0.18), transparent 55%), radial-gradient(ellipse at 80% 60%, hsl(var(--secondary) / 0.18), transparent 55%)',
          }}
        />
      ) : (
        <>
          <motion.div
            className="absolute -top-1/3 -left-1/4 w-[55vw] h-[55vw] rounded-full blur-[90px] opacity-[0.16] will-change-transform"
            style={{
              background:
                'radial-gradient(circle at center, hsl(var(--accent)) 0%, transparent 65%)',
            }}
            animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-[0.12] will-change-transform"
            style={{
              background:
                'radial-gradient(circle at center, hsl(var(--primary) / 0.6) 0%, transparent 65%)',
            }}
            animate={{ x: [0, -40, 30, 0], y: [0, -30, 40, 0] }}
            transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
};

export default AuroraBackground;
