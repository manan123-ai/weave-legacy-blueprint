import { useEffect, useRef } from 'react';

/**
 * Subtle cursor halo that softly trails the pointer. Desktop only (hidden on
 * touch devices). Uses CSS variables and rAF — no React state churn.
 */
const CursorGlow = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 z-[100] w-10 h-10 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 z-[100] w-1.5 h-1.5 rounded-full bg-primary/60 pointer-events-none"
      />
    </>
  );
};

export default CursorGlow;
