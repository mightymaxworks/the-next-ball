"use client";

import { useEffect, useRef } from "react";

type Point = { p: number; x: number; y: number; r: number };

const desktop: Point[] = [
  { p: 0.00, x: 84, y: 36, r: 0 },
  { p: 0.08, x: 72, y: 53, r: 70 },
  { p: 0.16, x: 42, y: 42, r: 145 },
  { p: 0.23, x: 70, y: 70, r: 235 },
  { p: 0.31, x: 25, y: 45, r: 325 },
  { p: 0.40, x: 76, y: 55, r: 430 },
  { p: 0.50, x: 57, y: 34, r: 520 },
  { p: 0.60, x: 22, y: 64, r: 610 },
  { p: 0.70, x: 78, y: 40, r: 700 },
  { p: 0.80, x: 34, y: 62, r: 790 },
  { p: 0.90, x: 67, y: 42, r: 880 },
  { p: 1.00, x: 86, y: 26, r: 960 },
];

const mobile: Point[] = [
  { p: 0.00, x: 82, y: 31, r: 0 },
  { p: 0.10, x: 65, y: 56, r: 80 },
  { p: 0.20, x: 25, y: 43, r: 165 },
  { p: 0.30, x: 72, y: 66, r: 250 },
  { p: 0.40, x: 28, y: 48, r: 335 },
  { p: 0.50, x: 68, y: 38, r: 425 },
  { p: 0.60, x: 30, y: 62, r: 515 },
  { p: 0.70, x: 72, y: 44, r: 610 },
  { p: 0.80, x: 26, y: 60, r: 700 },
  { p: 0.90, x: 66, y: 42, r: 800 },
  { p: 1.00, x: 82, y: 28, r: 900 },
];

function interpolate(points: Point[], progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  let b = points[points.length - 1];
  let a = points[0];
  for (let i = 1; i < points.length; i++) {
    if (p <= points[i].p) { a = points[i - 1]; b = points[i]; break; }
  }
  const span = b.p - a.p || 1;
  const t = (p - a.p) / span;
  // A small arc between waypoints makes direction changes read as bounces.
  const arc = Math.sin(Math.PI * t) * -8;
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t + arc,
    r: a.r + (b.r - a.r) * t,
  };
}

export default function BallJourney() {
  const ball = useRef<HTMLDivElement>(null);
  const trail = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ball.current;
    const path = trail.current;
    if (!el || !path) return;

    let raf = 0;
    const render = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      const points = window.innerWidth <= 900 ? mobile : desktop;
      const pos = interpolate(points, progress);

      el.style.transform = `translate3d(${pos.x}vw,${pos.y}vh,0) translate(-50%,-50%) rotate(${pos.r}deg)`;
      el.dataset.phase =
        progress < .18 ? "plan" :
        progress < .35 ? "change" :
        progress < .82 ? "play" : "question";

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
      raf = 0;
    };

    const request = () => { if (!raf) raf = requestAnimationFrame(render); };
    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ballJourney" aria-hidden="true">
      <svg className="journeyTrail" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={trail} d="M84 36 C72 52 56 38 42 42 S78 65 70 70 S34 38 25 45 S67 62 76 55 S64 30 57 34 S28 70 22 64 S66 34 78 40 S42 68 34 62 S61 35 67 42 S79 28 86 26" />
      </svg>
      <div ref={ball} className="journeyBall"><span className="ball" /></div>
    </div>
  );
}
