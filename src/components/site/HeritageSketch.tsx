import { useEffect, useRef } from "react";

/** Decorative silhouettes, not archival drawings. Motifs follow Newar instrument
 * descriptions and Toffin's Kathmandu Valley oil-press study (1976). */
export function HeritageSketch({ className = "", variant = "drum" }: { className?: string; variant?: "drum" | "flute" | "cymbals" | "pole" | "press" }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const el = ref.current;
       if (el) { const mobile = window.matchMedia("(max-width: 639px)").matches; const limit = mobile ? 8 : 32; const offset = Math.max(-limit, Math.min(limit, (window.innerHeight / 2 - el.getBoundingClientRect().top) * (mobile ? .025 : .07))); el.style.transform = `translateY(${offset}px) rotate(${offset * .12}deg)`; }
    }); };
    window.addEventListener("scroll", update, { passive: true }); update();
    return () => { window.removeEventListener("scroll", update); cancelAnimationFrame(frame); };
  }, []);
  return <svg ref={ref} data-sketch={variant} viewBox="0 0 500 350" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`heritage-sketch pointer-events-none ${className}`}>
    {variant === "drum" && <g transform="rotate(-18 220 170)"><ellipse cx="130" cy="165" rx="45" ry="80" /><ellipse cx="130" cy="165" rx="36" ry="68" /><ellipse cx="335" cy="165" rx="45" ry="80" /><ellipse cx="335" cy="165" rx="35" ry="68" /><path d="M130 85 Q230 65 335 85 M130 245 Q230 265 335 245 M115 94 L345 237 M115 237 L345 94 M155 87 L315 244 M155 245 L315 86 M195 79 L275 250 M195 250 L275 79 M130 87 Q230 -5 335 87" /></g>}
    {variant === "flute" && <g transform="rotate(-25 250 175)"><path d="M50 160 L440 160 Q452 175 440 190 L50 190 Q40 175 50 160Z M73 160 V190 M423 160 V190 M100 160 V190" />{[130, 200, 235, 270, 305, 340, 375].map(x => <ellipse key={x} cx={x} cy="175" rx="6" ry="5" />)}<path d="M65 169 H95 M150 183 H410" opacity=".4" /></g>}
    {variant === "cymbals" && <g transform="rotate(-12 250 175)"><ellipse cx="175" cy="130" rx="100" ry="32" /><path d="M75 130 Q175 10 275 130 M155 74 Q175 45 195 74 M175 55 Q150 15 140 50" /><ellipse cx="335" cy="245" rx="100" ry="32" /><path d="M235 245 Q335 125 435 245 M315 189 Q335 160 355 189 M335 170 Q365 135 380 170" /><ellipse cx="175" cy="130" rx="85" ry="22" opacity=".5" /><ellipse cx="335" cy="245" rx="85" ry="22" opacity=".5" /></g>}
    {variant === "pole" && <g><path d="M242 320 L251 25 L260 320 M252 30 Q315 5 365 46 Q320 65 254 53 M252 40 L155 305 M256 48 L350 307 M220 320 H282" /><path d="M250 92 H260 M248 160 H260 M246 225 H260" opacity=".5" /></g>}
    {variant === "press" && <g><path d="M80 270 H430 V295 H80Z M100 80 H126 V270 H100Z M395 65 H420 V270 H395Z M126 145 L395 104 V128 L126 172Z M126 208 H395 V230 H126Z M225 145 L260 140 V208 H225Z M185 231 H305 L290 249 H198Z M250 249 V270 M110 90 L405 75 M151 270 V244 M365 270 V240" /><path d="M235 155 V200 M248 153 V201 M145 215 H209 M285 215 H377 M136 150 L365 116" opacity=".5" /></g>}
  </svg>;
}