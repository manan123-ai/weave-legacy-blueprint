import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/motion/AnimatedCounter';

// Delhi / Mayapuri is the origin of every arc.
const ORIGIN = { name: 'New Delhi', lat: 28.64, lng: 77.12 };

const DESTINATIONS = [
  { name: 'USA', lat: 38, lng: -97 },
  { name: 'Canada', lat: 56, lng: -106 },
  { name: 'United Kingdom', lat: 54, lng: -2 },
  { name: 'Germany', lat: 51, lng: 10 },
  { name: 'France', lat: 46.6, lng: 2.4 },
  { name: 'Italy', lat: 42.8, lng: 12.5 },
  { name: 'Spain', lat: 40.3, lng: -3.7 },
  { name: 'Netherlands', lat: 52.2, lng: 5.5 },
  { name: 'Belgium', lat: 50.6, lng: 4.6 },
  { name: 'Switzerland', lat: 46.8, lng: 8.2 },
  { name: 'Scandinavia', lat: 62, lng: 15 },
  { name: 'Japan', lat: 36, lng: 138 },
  { name: 'South Korea', lat: 36.5, lng: 127.9 },
  { name: 'Australia', lat: -25, lng: 134 },
  { name: 'New Zealand', lat: -41, lng: 174 },
  { name: 'UAE', lat: 24, lng: 54 },
  { name: 'Saudi Arabia', lat: 24, lng: 45 },
  { name: 'Bangladesh', lat: 23.7, lng: 90.4 },
  { name: 'Sri Lanka', lat: 7.9, lng: 80.8 },
];

const CREAM = '#F5F3EE';
const BRASS = '#C9A66B';

const GlobeCanvas = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  // Only load the 3D library once the section is near the viewport.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !hostRef.current) return;
    let disposed = false;
    let globe: any;
    let ro: ResizeObserver | undefined;
    const host = hostRef.current;

    (async () => {
      try {
        const [{ default: Globe }, topo, atlas] = await Promise.all([
          import('globe.gl'),
          import('topojson-client'),
          import('world-atlas/countries-110m.json'),
        ]);
        if (disposed) return;

        const countries = (topo as any).feature((atlas as any).default, (atlas as any).default.objects.countries).features;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const coarse = window.matchMedia('(pointer: coarse)').matches;

        globe = (Globe as any)()(host)
          .backgroundColor('rgba(0,0,0,0)')
          .showAtmosphere(true)
          .atmosphereColor(BRASS)
          .atmosphereAltitude(0.18)
          .hexPolygonsData(countries)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.42)
          .hexPolygonColor(() => 'rgba(245,243,238,0.62)')
          .arcsData(DESTINATIONS.map((d) => ({ startLat: ORIGIN.lat, startLng: ORIGIN.lng, endLat: d.lat, endLng: d.lng })))
          .arcColor(() => [BRASS, CREAM])
          .arcStroke(0.45)
          .arcAltitudeAutoScale(0.42)
          .arcDashLength(0.45)
          .arcDashGap(0.25)
          .arcDashInitialGap(() => Math.random())
          .arcDashAnimateTime(reduce ? 0 : 3200)
          .pointsData([ORIGIN, ...DESTINATIONS])
          .pointLat('lat')
          .pointLng('lng')
          .pointColor((d: any) => (d === ORIGIN ? '#FFFFFF' : BRASS))
          .pointAltitude(0.01)
          .pointRadius((d: any) => (d === ORIGIN ? 0.7 : 0.38))
          .labelsData([ORIGIN])
          .labelLat('lat')
          .labelLng('lng')
          .labelText(() => 'Delhi')
          .labelSize(1.6)
          .labelDotRadius(0)
          .labelColor(() => '#FFFFFF')
          .labelAltitude(0.03);

        const mat = globe.globeMaterial();
        mat.color.set('#1a1713');
        mat.emissive.set('#0d0b09');

        const controls = globe.controls();
        controlsRef.current = controls;
        controls.autoRotate = !reduce;
        controls.autoRotateSpeed = 0.55;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.minPolarAngle = Math.PI * 0.25;
        controls.maxPolarAngle = Math.PI * 0.75;

        globe.pointOfView({ lat: 24, lng: 55, altitude: 1.75 }, 0);

        // On touch screens let the page scroll instead of the globe grabbing the finger.
        const canvas = host.querySelector('canvas');
        if (canvas && coarse) (canvas as HTMLCanvasElement).style.pointerEvents = 'none';

        const fit = () => {
          const w = host.clientWidth;
          const h = host.clientHeight;
          if (w && h) globe.width(w).height(h);
        };
        fit();
        ro = new ResizeObserver(fit);
        ro.observe(host);
      } catch (e) {
        if (!disposed) setFailed(true);
      }
    })();

    return () => {
      disposed = true;
      ro?.disconnect();
      try {
        globe?._destructor?.();
      } catch {
        /* ignore */
      }
      host.innerHTML = '';
    };
  }, [visible]);

  if (failed) {
    return (
      <p className="text-center font-body text-sm opacity-70 py-16">
        Delhi to USA, UK, Germany, Japan, Australia and 15 more countries.
      </p>
    );
  }
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    if (controlsRef.current) controlsRef.current.autoRotate = !next;
  };

  return (
    <div className="relative">
      <div
        ref={hostRef}
        role="img"
        aria-label="Interactive globe: woven fabric exports from New Delhi, India to more than 20 countries"
        className="w-full h-[420px] sm:h-[600px] lg:h-[760px] cursor-grab active:cursor-grabbing"
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={paused}
        className="absolute right-2 bottom-2 font-body text-xs text-primary-foreground/80 border border-primary-foreground/30 rounded-full px-3 py-1.5 hover:bg-primary-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-foreground"
      >
        {paused ? 'Resume rotation' : 'Pause rotation'}
      </button>
    </div>
  );
};

const GlobalExportGlobe = () => (
  <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Global Reach
        </motion.h2>
        <motion.p
          className="font-body text-xl opacity-80 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by international labels and high-volume manufacturers across the world
        </motion.p>
      </div>

      <GlobeCanvas />
      <p className="text-center font-body text-xs opacity-50 -mt-2">Drag to rotate</p>

      <p className="mt-6 text-center font-body text-sm opacity-70">
        Exporting worldwide from New Delhi, India
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
        {[
          { value: 20, suffix: '+', label: 'Countries Served' },
          { value: 50, suffix: '+', label: 'Global Partners' },
          { value: new Date().getFullYear() - 1968, suffix: '+', label: 'Years Weaving, Since 1968' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="stats-glass p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="font-serif text-4xl font-bold mb-2">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-body text-lg opacity-70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalExportGlobe;
