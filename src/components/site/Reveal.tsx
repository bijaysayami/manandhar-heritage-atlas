import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Concentric ring motif echoing the circular seal of the logo. */
export function SealRings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none">
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 4" />
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.6" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <line key={i} x1={100 + Math.cos(a) * 64} y1={100 + Math.sin(a) * 64} x2={100 + Math.cos(a) * 72} y2={100 + Math.sin(a) * 72} stroke="currentColor" strokeWidth="0.6" />
        );
      })}
    </svg>
  );
}

export function PageIntro({ eyebrow, title, deva, lead }: { eyebrow: string; title: string; deva?: string; lead: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-8">
          <p className="eyebrow enter text-primary">{eyebrow}</p>
          <h1 className="enter mt-5 text-5xl md:text-7xl" style={{ ["--d" as string]: "80ms" }}>{title}</h1>
          {deva && <p lang="ne" className="enter mt-4 text-2xl text-secondary" style={{ ["--d" as string]: "160ms" }}>{deva}</p>}
        </div>
        <p className="enter self-end text-muted-foreground md:col-span-4" style={{ ["--d" as string]: "240ms" }}>{lead}</p>
      </div>
      <SealRings className="spin-slow pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-primary/20" />
    </section>
  );
}

export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-secondary bg-muted/60 px-4 py-3 text-sm text-muted-foreground">{children}</p>
  );
}
