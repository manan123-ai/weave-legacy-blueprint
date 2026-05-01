import { useRef, useState, ReactNode, MouseEvent } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * Card with a mouse-tracked radial spotlight overlay — Figma-style hover depth.
 * No 3D transforms, just a soft light following the cursor.
 */
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'hsl(var(--primary) / 0.12)',
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default SpotlightCard;
