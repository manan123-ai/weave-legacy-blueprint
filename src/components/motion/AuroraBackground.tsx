import { motion } from 'framer-motion';

/**
 * Site-wide animated aurora — soft, slow-drifting gradient blobs in brand
 * tones that sit behind every page. Pure CSS/Framer; no 3D, no perspective.
 * Stays editorial: extremely low opacity, slow easing, never compete with content.
 */
const AuroraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* drifting aurora blobs */}
      <motion.div
        className="absolute -top-1/3 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.18]"
        style={{
          background:
            'radial-gradient(circle at center, hsl(var(--accent)) 0%, transparent 65%)',
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-1/4 w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-[0.14]"
        style={{
          background:
            'radial-gradient(circle at center, hsl(var(--primary) / 0.6) 0%, transparent 65%)',
        }}
        animate={{ x: [0, -60, 40, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle at center, hsl(var(--secondary)) 0%, transparent 65%)',
        }}
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* fine grain for film texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
