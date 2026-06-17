import { useEffect, useRef } from 'react';

interface WeaveRevealBannerProps {
  taglineText?: string;
  accentColor?: string;
  duration?: number;
  logoSrc?: string;
}

/**
 * Cinematic canvas banner: yarn cone lays warp threads, shuttle weaves them,
 * brass ring draws around the swatch, then reveals the JNC logo + tagline.
 * Aspect ratio 1584:396. Loops continuously.
 */
const WeaveRevealBanner = ({
  taglineText = 'Designers · Manufacturers · Suppliers',
  accentColor = '#7a2e2e',
  duration = 14,
  logoSrc = '/jco-logo.png',
}: WeaveRevealBannerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const R = 2;
    canvas.width = 1584 * R;
    canvas.height = 396 * R;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cx = 792, cy = 190;
    const FW = 384, FH = 212;
    const ringR = 111, dotR = 89;
    const sealH = 290, sealW = 452;
    const sx = cx - 226, sy = cy - 145, clipR = 145;
    const ground = '#f4ebe8';
    const D = duration;

    const Nw = 29, Nh = 19;
    const X: number[] = [];
    for (let j = 0; j < Nw; j++) X.push(cx - FW / 2 + (FW * j) / (Nw - 1));
    const Y: number[] = [];
    for (let r = 0; r < Nh; r++) Y.push(cy - FH / 2 + (FH * r) / (Nh - 1));

    const clamp = (x: number, a: number, b: number) => (x < a ? a : x > b ? b : x);
    const seg = (f: number, a: number, b: number) => clamp((f - a) / (b - a), 0, 1);
    const ease = (x: number) => {
      x = clamp(x, 0, 1);
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    };
    const hx = (h: string) => {
      h = h.replace('#', '');
      if (h.length === 3) h = h.split('').map((c) => c + c).join('');
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    };
    const mix = (a: string, b: string, t: number) => {
      const A = hx(a), B = hx(b);
      return `rgb(${Math.round(A[0] + (B[0] - A[0]) * t)},${Math.round(A[1] + (B[1] - A[1]) * t)},${Math.round(A[2] + (B[2] - A[2]) * t)})`;
    };

    let img: HTMLImageElement | null = null;
    const im = new Image();
    im.onload = () => { img = im; };
    im.src = logoSrc;

    let lead: { x: number; y: number; active: boolean } | null = null;
    let shuttle: { x: number; y: number; dir: boolean; active: boolean } | null = null;

    const vseg = (x: number, y0: number, y1: number, ry: (x: number, y: number) => number) => {
      if (y1 - y0 < 1) return;
      const steps = Math.max(2, Math.round((y1 - y0) / 9));
      ctx.beginPath();
      for (let s = 0; s <= steps; s++) {
        const yy = y0 + ((y1 - y0) * s) / steps;
        const xx = x + ry(x, yy);
        if (s === 0) ctx.moveTo(xx, yy);
        else ctx.lineTo(xx, yy);
      }
      ctx.stroke();
    };
    const hseg = (x0: number, x1: number, y: number, ry: (x: number, y: number) => number) => {
      if (x1 - x0 < 1) return;
      const steps = Math.max(2, Math.round((x1 - x0) / 9));
      ctx.beginPath();
      for (let s = 0; s <= steps; s++) {
        const xx = x0 + ((x1 - x0) * s) / steps;
        const yy = y + ry(xx, y);
        if (s === 0) ctx.moveTo(xx, yy);
        else ctx.lineTo(xx, yy);
      }
      ctx.stroke();
    };

    const drawLayWarp = (f: number) => {
      const top = Y[0];
      const left = X[0], right = X[Nw - 1];
      const s = seg(f, 0.02, 0.34);
      const leadRaw = s * 1.16;
      const leadX = left + (right - left) * clamp(leadRaw, 0, 1);
      const col = mix('#c89a8f', '#b5897c', 0.4);
      ctx.save();
      ctx.lineCap = 'round';
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.7;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(180,130,110,0.45)';
      ctx.globalAlpha = 0.85;
      for (let j = 0; j < Nw; j++) {
        const posj = j / (Nw - 1);
        const gj = ease(clamp((leadRaw - posj) / 0.1, 0, 1));
        if (gj <= 0) continue;
        const x = X[j], y1 = top + FH * gj;
        ctx.beginPath();
        ctx.moveTo(x, top - 5);
        ctx.lineTo(x, y1);
        ctx.stroke();
      }
      ctx.restore();
      lead = { x: leadX, y: top - 14, active: leadRaw < 1.0 };
    };

    const drawCone = (a: number) => {
      if (a <= 0) return;
      const bx = 338, by = 326, h = 138, bw = 68, tw = 15, tipX = bx, tipY = by - h;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = 'rgba(120,90,80,0.16)';
      ctx.beginPath();
      ctx.ellipse(bx, by + 4, bw / 2 + 5, 7, 0, 0, 7);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx - tw / 2, tipY);
      ctx.lineTo(bx + tw / 2, tipY);
      ctx.lineTo(bx + bw / 2, by);
      ctx.lineTo(bx - bw / 2, by);
      ctx.closePath();
      const gr = ctx.createLinearGradient(bx - bw / 2, 0, bx + bw / 2, 0);
      gr.addColorStop(0, '#d3bcad');
      gr.addColorStop(0.5, '#efe1d7');
      gr.addColorStop(1, '#cab0a0');
      ctx.fillStyle = gr;
      ctx.fill();
      ctx.save();
      ctx.clip();
      ctx.strokeStyle = 'rgba(190,138,125,0.4)';
      ctx.lineWidth = 1;
      for (let i = -10; i < 26; i++) {
        const yy = tipY + (i / 26) * (by - tipY) * 1.5;
        ctx.beginPath();
        ctx.moveTo(bx - bw, yy);
        ctx.lineTo(bx + bw, yy + 32);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(bx - bw, yy + 32);
        ctx.lineTo(bx + bw, yy);
        ctx.stroke();
      }
      ctx.restore();
      ctx.fillStyle = 'rgba(90,70,64,0.5)';
      ctx.beginPath();
      ctx.ellipse(bx, tipY, tw / 2, 2, 0, 0, 7);
      ctx.fill();
      const l = lead || { x: bx + 230, y: tipY - 30, active: true };
      const cpx = (tipX + l.x) / 2, cpy = Math.min(tipY, l.y) - 72;
      ctx.strokeStyle = '#c69a90';
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(200,150,130,0.6)';
      ctx.beginPath();
      ctx.moveTo(tipX, tipY);
      ctx.quadraticCurveTo(cpx, cpy, l.x, l.y);
      ctx.stroke();
      if (l.active) {
        ctx.globalCompositeOperation = 'lighter';
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(235,195,150,0.9)';
        ctx.fillStyle = `rgba(255,240,218,${a})`;
        ctx.beginPath();
        ctx.arc(l.x, l.y, 3.2, 0, 7);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawWeave = (growth: number, alpha: number, f: number, t: number, clip: 'in' | 'out' | null) => {
      if (alpha <= 0.01) return;
      const left = X[0], right = X[Nw - 1], top = Y[0], bottom = Y[Nh - 1];
      const rowsF = growth * Nh, full = Math.floor(rowsF), frac = rowsF - full;
      const brass = ease(seg(f, 0.58, 0.7));
      const warpCol = mix('#b5897c', '#a87f54', brass);
      const weftCol = mix('#cfa498', '#b58c5e', brass);
      const ripAmp = 3.4 * ease(seg(f, 0.56, 0.66));
      const ry = (x: number, y: number) =>
        ripAmp * Math.sin((x - left) * 0.05 + (y - top) * 0.025 + t * 2.1);
      const g = 2.6;
      const dir = full % 2 === 0;
      const shuttleX = full < Nh ? (dir ? left + (right - left) * frac : right - (right - left) * frac) : right;
      shuttle = {
        x: shuttleX,
        y: Y[Math.min(full, Nh - 1)] + ry(shuttleX, Y[Math.min(full, Nh - 1)]),
        dir,
        active: full < Nh,
      };

      ctx.save();
      if (clip === 'in') {
        ctx.beginPath();
        ctx.arc(cx, cy, ringR + 2, 0, 7);
        ctx.clip();
      } else if (clip === 'out') {
        ctx.beginPath();
        ctx.rect(0, 0, 1584, 396);
        ctx.arc(cx, cy, ringR + 2, 0, Math.PI * 2, true);
        ctx.clip('evenodd');
      }
      ctx.globalAlpha = alpha;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 0;
      ctx.strokeStyle = warpCol;
      ctx.lineWidth = 1.7;
      for (let j = 0; j < Nw; j++) {
        const x = X[j];
        let wovenUpto = full - 1;
        if (full < Nh) {
          const passed = dir ? x <= shuttleX : x >= shuttleX;
          if (passed) wovenUpto = full;
        } else wovenUpto = Nh - 1;
        let yCur = top - 5;
        for (let r = 0; r <= wovenUpto && r < Nh; r++) {
          if ((j + r) % 2 === 1) {
            const gy = Y[r];
            vseg(x, yCur, gy - g, ry);
            yCur = gy + g;
          }
        }
        vseg(x, yCur, bottom + 5, ry);
      }
      ctx.strokeStyle = weftCol;
      ctx.lineWidth = 1.9;
      for (let r = 0; r <= Math.min(full, Nh - 1); r++) {
        const isCur = r === full;
        if (isCur && full >= Nh) continue;
        const y = Y[r];
        let xStart = left, xEnd = right;
        if (isCur) {
          if (dir) xEnd = shuttleX;
          else xStart = shuttleX;
        }
        let cur = xStart;
        for (let j = 0; j < Nw; j++) {
          if (X[j] < xStart - 0.1 || X[j] > xEnd + 0.1) continue;
          if ((j + r) % 2 === 0) {
            hseg(cur, X[j] - g, y, ry);
            cur = X[j] + g;
          }
        }
        hseg(cur, xEnd, y, ry);
      }
      ctx.restore();
    };

    const drawShuttle = (f: number) => {
      const s = shuttle;
      if (!s || !s.active) return;
      const a = ease(clamp((f - 0.34) / 0.03, 0, 1)) * (1 - clamp((f - 0.6) / 0.03, 0, 1));
      if (a <= 0) return;
      const dx = s.dir ? -1 : 1;
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 11; i++) {
        const tx = s.x + dx * i * 8, ta = a * (1 - i / 11) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(228,184,142,${ta})`;
        ctx.arc(tx, s.y, Math.max(0.4, 2.6 - i * 0.16), 0, 7);
        ctx.fill();
      }
      ctx.shadowBlur = 14;
      ctx.shadowColor = 'rgba(232,192,150,0.9)';
      ctx.fillStyle = `rgba(255,238,214,${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, 3.6, 0, 7);
      ctx.fill();
      ctx.restore();
    };

    const drawRingDraw = (f: number) => {
      const sweep = ease(seg(f, 0.68, 0.8));
      if (sweep <= 0) return;
      const a = 1 - ease(seg(f, 0.82, 0.92));
      if (a <= 0) return;
      const start = -Math.PI / 2, end = start + sweep * Math.PI * 2;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = '#a87f54';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(168,127,84,0.8)';
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, start, end);
      ctx.stroke();
      if (sweep < 1) {
        const ex = cx + Math.cos(end) * ringR, ey = cy + Math.sin(end) * ringR;
        ctx.globalCompositeOperation = 'lighter';
        ctx.shadowBlur = 14;
        ctx.fillStyle = `rgba(255,238,210,${a})`;
        ctx.beginPath();
        ctx.arc(ex, ey, 3.6, 0, 7);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawDots = (f: number) => {
      const grow = ease(seg(f, 0.72, 0.8));
      const fade = 1 - seg(f, 0.86, 0.93);
      const a = grow * fade;
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowBlur = 10;
      ctx.shadowColor = accentColor;
      ctx.fillStyle = accentColor;
      [[cx - dotR, cy], [cx + dotR, cy]].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 3.2 * grow, 0, 7);
        ctx.fill();
      });
      ctx.restore();
    };

    const sweep = (p: number, alpha: number, clip: boolean) => {
      const x = cx - 230 + 460 * p;
      ctx.save();
      if (clip) {
        ctx.beginPath();
        ctx.arc(cx, cy, clipR, 0, 7);
        ctx.clip();
      }
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createLinearGradient(x - 70, 0, x + 70, 0);
      g.addColorStop(0, 'rgba(255,245,230,0)');
      g.addColorStop(0.5, `rgba(255,245,230,${alpha})`);
      g.addColorStop(1, 'rgba(255,245,230,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1584, 396);
      ctx.restore();
    };

    let t = 0;
    let last: number | null = null;
    let raf = 0;

    const draw = () => {
      const f = t / D;
      ctx.setTransform(R, 0, 0, R, 0, 0);
      ctx.clearRect(0, 0, 1584, 396);
      ctx.fillStyle = ground;
      ctx.fillRect(0, 0, 1584, 396);

      const g = ctx.createRadialGradient(cx - 70, 40, 30, cx, cy, 560);
      g.addColorStop(0, 'rgba(255,244,233,0.5)');
      g.addColorStop(1, 'rgba(255,244,233,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1584, 396);

      const weaveGrowth = ease(seg(f, 0.34, 0.63));
      const inTrans = f >= 0.68;

      if (f < 0.34) {
        drawLayWarp(f);
      } else if (!inTrans) {
        drawWeave(weaveGrowth, 1, f, t, null);
        if (f > 0.34 && f < 0.63) drawShuttle(f);
      } else {
        const outsideFade = ease(seg(f, 0.7, 0.82));
        if (f < 0.92) drawWeave(1, 1, f, t, 'in');
        if (outsideFade < 1) drawWeave(1, 1 - outsideFade, f, t, 'out');
      }

      const coneAlpha = ease(seg(f, 0.0, 0.05)) * (1 - ease(seg(f, 0.33, 0.43)));
      if (coneAlpha > 0) drawCone(coneAlpha);

      const sh = seg(f, 0.63, 0.7);
      if (sh > 0 && sh < 1) sweep(sh, 0.13, false);

      drawRingDraw(f);
      drawDots(f);

      const embo = seg(f, 0.76, 0.88);
      if (embo > 0 && embo < 1) sweep(embo, 0.18, true);

      const imgA = ease(seg(f, 0.8, 0.92));
      if (img && imgA > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, clipR, 0, 7);
        ctx.clip();
        ctx.globalAlpha = imgA;
        ctx.drawImage(img, sx, sy, sealW, sealH);
        ctx.restore();
      }

      const sw2 = seg(f, 0.93, 1.0);
      if (sw2 > 0 && sw2 < 1) sweep(sw2, 0.2, true);

      if (taglineRef.current) {
        taglineRef.current.style.opacity = String(ease(seg(f, 0.88, 0.98)));
      }
    };

    const loop = (now: number) => {
      if (last == null) last = now;
      let dt = (now - last) / 1000;
      last = now;
      if (dt > 0.1) dt = 0.1;
      t += dt;
      if (t >= D) t = 0;
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, [accentColor, duration, logoSrc]);

  return (
    <section
      aria-label="Janki Nath & Co. weaving reveal banner"
      className="w-full bg-[#e7ddd6] py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-[1584px] px-4">
        <div
          ref={rootRef}
          className="relative w-full overflow-hidden bg-[#f4ebe8] rounded-sm shadow-sm"
          style={{ aspectRatio: '1584 / 396' }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full"
            aria-hidden="true"
          />
          <div
            ref={taglineRef}
            className="pointer-events-none absolute inset-x-0 flex items-center justify-center gap-4"
            style={{ bottom: '7%', opacity: 0, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(90,70,64,0.45)' }} />
            <span
              className="whitespace-nowrap font-normal uppercase"
              style={{
                fontSize: 'clamp(10px, 1vw, 13px)',
                letterSpacing: '0.34em',
                color: '#5a4640',
              }}
            >
              {taglineText}
            </span>
            <span className="h-px w-12" style={{ background: 'rgba(90,70,64,0.45)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaveRevealBanner;
