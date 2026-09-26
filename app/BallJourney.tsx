"use client";

import { useEffect, useRef } from "react";

type Stop = { selector: string; x: number; y: number; r: number; phase: string };

const desktop: Stop[] = [
  { selector: ".hero", x: 84, y: 36, r: 0, phase: "plan" },
  { selector: ".disruption", x: 67, y: 58, r: 95, phase: "change" },
  { selector: ".principle", x: 27, y: 42, r: 185, phase: "play" },
  { selector: ".ideaToHuman", x: 74, y: 66, r: 270, phase: "change" },
  { selector: "#darren", x: 30, y: 46, r: 355, phase: "play" },
  { selector: ".perspectives", x: 76, y: 55, r: 455, phase: "play" },
  { selector: "#speaking", x: 23, y: 63, r: 560, phase: "play" },
  { selector: "#book", x: 72, y: 39, r: 655, phase: "play" },
  { selector: "#next-balls", x: 32, y: 59, r: 750, phase: "play" },
  { selector: "#one-to-one", x: 67, y: 43, r: 845, phase: "question" },
  { selector: "#finale", x: 84, y: 28, r: 940, phase: "question" },
];

const mobile: Stop[] = desktop.map((stop, i) => ({
  ...stop,
  x: [80, 68, 28, 70, 30, 68, 30, 70, 30, 66, 80][i],
  y: [30, 58, 44, 65, 48, 39, 62, 43, 60, 42, 28][i],
}));

function anchors(stops: Stop[]) {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  return stops.map((stop, i) => {
    const el = document.querySelector(stop.selector) as HTMLElement | null;
    const top = el ? el.offsetTop : (max * i) / (stops.length - 1);
    const height = el?.offsetHeight ?? 0;
    return { ...stop, p: Math.max(0, Math.min(1, (top + height * .42) / max)) };
  });
}

function interpolate(points: ReturnType<typeof anchors>, progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  let a = points[0], b = points[points.length - 1];
  for (let i = 1; i < points.length; i++) {
    if (p <= points[i].p) { a = points[i - 1]; b = points[i]; break; }
  }
  const span = b.p - a.p || 1;
  const t = Math.max(0, Math.min(1, (p - a.p) / span));
  const arc = Math.sin(Math.PI * t) * -7;
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t + arc,
    r: a.r + (b.r - a.r) * t,
    phase: t < .5 ? a.phase : b.phase,
  };
}

export default function BallJourney() {
  const ball = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ball.current;
    if (!el) return;
    let raf = 0;
    let points = anchors(window.innerWidth <= 900 ? mobile : desktop);

    const render = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = window.scrollY / max;
      const pos = interpolate(points, progress);
      el.style.transform = `translate3d(${pos.x}vw,${pos.y}vh,0) translate(-50%,-50%) rotate(${pos.r}deg)`;
      el.dataset.phase = pos.phase;
      raf = 0;
    };

    const recalc = () => {
      points = anchors(window.innerWidth <= 900 ? mobile : desktop);
      render();
    };
    const request = () => { if (!raf) raf = requestAnimationFrame(render); };

    recalc();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", recalc);
    window.addEventListener("load", recalc);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("load", recalc);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ballJourney" aria-hidden="true">
      <div ref={ball} className="journeyBall"><span className="ball" /></div>
    </div>
  );
}
