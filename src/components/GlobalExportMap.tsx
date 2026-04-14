import { motion } from 'framer-motion';
import { useRef } from 'react';

const exportDestinations = [
  { name: 'USA', x: 180, y: 180, labelPos: 'top' as const },
  { name: 'UK', x: 430, y: 130, labelPos: 'top' as const },
  { name: 'Germany', x: 470, y: 135, labelPos: 'bottom' as const },
  { name: 'Italy', x: 475, y: 165, labelPos: 'bottom' as const },
  { name: 'Japan', x: 790, y: 170, labelPos: 'top' as const },
  { name: 'Australia', x: 770, y: 320, labelPos: 'bottom' as const },
  { name: 'UAE', x: 570, y: 210, labelPos: 'bottom' as const },
  { name: 'Canada', x: 190, y: 130, labelPos: 'top' as const },
  { name: 'Bangladesh', x: 650, y: 210, labelPos: 'bottom' as const },
  { name: 'Sri Lanka', x: 625, y: 260, labelPos: 'bottom' as const },
];

const indiaPos = { x: 620, y: 215 };

// Simplified world map continents as SVG paths
const continents = `M 120 100 L 130 95 L 170 90 L 200 95 L 260 80 L 270 100 L 280 120 L 260 160 L 240 180 L 230 220 L 200 280 L 180 310 L 160 280 L 150 240 L 140 200 L 130 170 L 120 140 Z
M 300 280 L 320 270 L 360 260 L 380 290 L 370 330 L 340 360 L 310 340 L 300 310 Z
M 400 60 L 420 55 L 460 50 L 500 55 L 540 60 L 560 80 L 580 70 L 620 65 L 680 60 L 740 65 L 800 70 L 840 80 L 830 100 L 800 110 L 780 130 L 750 120 L 720 115 L 680 120 L 640 130 L 600 140 L 570 150 L 540 140 L 510 150 L 490 170 L 470 180 L 450 170 L 430 160 L 410 140 L 400 120 L 390 100 Z
M 540 160 L 560 170 L 580 180 L 600 200 L 620 210 L 640 220 L 660 210 L 680 200 L 720 190 L 740 180 L 760 190 L 780 200 L 800 180 L 790 160 L 770 150 L 750 140 L 730 135 L 700 140 L 680 150 L 660 160 L 640 165 L 620 170 L 600 175 L 580 170 Z
M 590 200 L 610 195 L 630 200 L 640 220 L 630 250 L 620 270 L 610 260 L 600 240 L 595 220 Z
M 700 220 L 730 210 L 750 220 L 770 240 L 800 250 L 810 280 L 800 310 L 780 330 L 750 340 L 730 320 L 720 290 L 710 260 Z
M 420 180 L 440 190 L 460 200 L 480 220 L 500 250 L 520 280 L 510 310 L 490 330 L 470 340 L 450 320 L 440 300 L 430 270 L 420 240 L 415 210 Z`;

const GlobalExportMap = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Global Reach
          </h2>
          <p className="font-body text-xl opacity-80 max-w-3xl mx-auto">
            Trusted by international labels and high-volume manufacturers across the world
          </p>
        </motion.div>

        {/* SVG World Map with animated connection lines */}
        <motion.div
          className="relative bg-primary-foreground/5 rounded-2xl p-6 md:p-10 border border-primary-foreground/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <svg
            viewBox="0 0 900 400"
            className="w-full h-auto"
            style={{ maxHeight: '450px' }}
          >
            {/* Continent outlines */}
            {continents.split('\n').map((path, i) => (
              <motion.path
                key={i}
                d={path.trim()}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.15"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}

            {/* Filled continents - subtle */}
            {continents.split('\n').map((path, i) => (
              <motion.path
                key={`fill-${i}`}
                d={path.trim()}
                fill="currentColor"
                fillOpacity="0.05"
                stroke="none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}

            {/* Animated connection lines from India */}
            {exportDestinations.map((dest, index) => {
              // Calculate curve control point
              const midX = (indiaPos.x + dest.x) / 2;
              const midY = Math.min(indiaPos.y, dest.y) - 40 - Math.abs(indiaPos.x - dest.x) * 0.1;
              const pathD = `M ${indiaPos.x} ${indiaPos.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

              return (
                <g key={dest.name}>
                  {/* Line shadow/trail */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.08"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.15 }}
                    viewport={{ once: true }}
                  />
                  {/* Animated line */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    strokeDasharray="6 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.15 }}
                    viewport={{ once: true }}
                  />
                </g>
              );
            })}

            {/* India marker */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <circle cx={indiaPos.x} cy={indiaPos.y} r="8" fill="currentColor" fillOpacity="0.9" />
              <motion.circle
                cx={indiaPos.x} cy={indiaPos.y} r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                animate={{ r: [8, 20], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text
                x={indiaPos.x}
                y={indiaPos.y - 16}
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
                fontWeight="700"
                fontFamily="'Playfair Display', serif"
              >
                INDIA
              </text>
            </motion.g>

            {/* Destination markers */}
            {exportDestinations.map((dest, index) => (
              <motion.g
                key={dest.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.12 }}
                viewport={{ once: true }}
              >
                <circle cx={dest.x} cy={dest.y} r="4" fill="currentColor" fillOpacity="0.7" />
                <text
                  x={dest.x}
                  y={dest.labelPos === 'top' ? dest.y - 10 : dest.y + 18}
                  textAnchor="middle"
                  fill="currentColor"
                  fillOpacity="0.7"
                  fontSize="9"
                  fontWeight="500"
                  fontFamily="'Inter', sans-serif"
                >
                  {dest.name}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { number: '10+', label: 'Countries Served' },
            { number: '50+', label: 'Global Partners' },
            { number: '40+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="font-serif text-4xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="font-body text-lg opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalExportMap;
