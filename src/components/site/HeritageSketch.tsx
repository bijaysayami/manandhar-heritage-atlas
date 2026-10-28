import { useEffect, useRef } from "react";

/** Stylised dhime drum and cymbals: decorative, not an archival drawing. */
export function HeritageSketch({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => { frame = requestAnimationFrame(() => {
      const el = ref.current;
      if (el) { const offset = Math.max(-20, Math.min(20, (window.innerHeight / 2 - el.getBoundingClientRect().top) * .035)); el.style.transform = `translateY(${offset}px) rotate(${offset * .15}deg)`; }
    }); };
    window.addEventListener("scroll", update, { passive: true }); update();
    return () => { window.removeEventListener("scroll", update); cancelAnimationFrame(frame); };
  }, []);
  return <svg ref={ref} viewBox="0 0 500 350" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`heritage-sketch pointer-events-none ${className}`}>
    <g transform="rotate(-18 220 170)"><ellipse cx="110" cy="165" rx="45" ry="80" /><ellipse cx="110" cy="165" rx="36" ry="68" /><ellipse cx="335" cy="165" rx="45" ry="80" /><ellipse cx="335" cy="165" rx="35" ry="68" /><path d="M110 85 Q220 65 335 85 M110 245 Q220 265 335 245 M90 90 L345 237 M85 240 L350 94 M125 87 L315 244 M125 245 L315 86 M156 82 L282 249 M155 249 L282 82 M195 79 L242 250 M195 250 L242 79" /><path d="M75 165 L145 165 M110 100 L110 230" opacity=".3" /></g>
    <g transform="translate(310 255)"><ellipse cx="40" cy="25" rx="50" ry="16" /><path d="M-10 25 Q40 -25 90 25 M25 9 Q40 -5 55 9" /><ellipse cx="120" cy="60" rx="48" ry="16" /><path d="M72 60 Q120 12 168 60 M106 44 Q120 30 134 44" /></g>
  </svg>;
}