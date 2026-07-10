import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/jco-logo.png';

/**
 * Preloader — full-screen brand splash: logo + a thin gold line that fills
 * once, silently (no percentage/number), then the whole splash fades out.
 * Background matches the logo's cream paper tone (#EFEAE2). Fixed timeline
 * (not tied to window 'load') so it stays fast and predictable: 1.5s fill
 * + 0.3s fade — under 2s total.
 */
const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fillDuration = 1500; // ms
    const fadeDuration = 300; // ms
    const t = setTimeout(() => setVisible(false), fillDuration + fadeDuration);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#EFEAE2' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={!visible}
          role="status"
          aria-label="Loading Janki Nath & Co."
        >
          <motion.img
            src={logo}
            alt="Janki Nath & Co. — JCO Fabrics"
            width={220}
            height={220}
            className="w-44 h-44 md:w-56 md:h-56 object-contain select-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            draggable={false}
          />

          <div className="mt-10" style={{ width: 200 }}>
            <div className="w-full overflow-hidden" style={{ height: 1 }}>
              <motion.div
                className="h-full origin-left"
                style={{ backgroundColor: '#c9a84c' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
