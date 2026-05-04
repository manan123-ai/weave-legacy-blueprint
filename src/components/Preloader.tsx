import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/jco-logo.png';

/**
 * Preloader — full-screen brand splash with logo + progress bar.
 * Background matches the logo's cream paper tone (#EFEAE2).
 * Mounts once on first load, hides after a minimum display time
 * AND the window 'load' event (so assets are ready).
 */
const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const minDisplay = 1400; // ms — give the brand a moment
    const start = performance.now();
    let raf = 0;

    const tick = () => {
      const elapsed = performance.now() - start;
      // Ease toward 90% while loading, then jump to 100 on 'load'
      const target = Math.min(90, (elapsed / minDisplay) * 90);
      setProgress((p) => (p < target ? p + (target - p) * 0.15 : p));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDisplay - elapsed);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setVisible(false), 450);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', finish);
    };
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
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

          <div className="mt-10 w-56 md:w-72">
            <div
              className="h-px w-full overflow-hidden"
              style={{ backgroundColor: 'rgba(138,116,80,0.18)' }}
            >
              <motion.div
                className="h-full origin-left"
                style={{
                  backgroundColor: '#8A7450',
                  scaleX: progress / 100,
                  transformOrigin: 'left',
                }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div
              className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: '#8A7450' }}
            >
              <span>Loading</span>
              <span className="tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
