import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import hero from "@/assets/hero-courtyard.jpg";
import windowImg from "@/assets/window.jpg";
import festival from "@/assets/festival.jpg";
import library from "@/assets/library.jpg";
import elder from "@/assets/elder.jpg";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Cultural Gallery — Central Manandhar Sangh" },
      { name: "description", content: "Images of Newar heritage, festivals and community life." },
      { property: "og:title", content: "Cultural Gallery — Central Manandhar Sangh" },
      { property: "og:description", content: "A visual archive of heritage and community life." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: festival, alt: "Festival procession at dusk", cls: "md:col-span-8 aspect-[16/9]" },
  { src: windowImg, alt: "Carved wooden window", cls: "md:col-span-4 aspect-[4/5]" },
  { src: elder, alt: "Traditional oil press", cls: "md:col-span-4 aspect-[4/5]" },
  { src: hero, alt: "Brick courtyard at golden hour", cls: "md:col-span-4 aspect-[4/5]" },
  { src: library, alt: "Old manuscripts and oil lamp", cls: "md:col-span-4 aspect-[4/5]" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Seen, and kept." deva="चित्रशाला" lead="A visual archive of courtyards, crafts and celebrations. Select any image to view it larger." />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-14 md:grid-cols-12">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 80} className={it.cls}>
            <button onClick={() => setOpen(i)} className="img-zoom block h-full w-full" aria-label={`Open ${it.alt}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover" />
            </button>
          </Reveal>
        ))}
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-14"><PendingNote>Current images are illustrative. Community photographs will replace them as they are contributed.</PendingNote></div>
      {open !== null && items[open] && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-wood/95 p-6 animate-in fade-in duration-300" onClick={() => setOpen(null)}>
          <button className="absolute right-6 top-6 text-wood-foreground" aria-label="Close"><X className="h-7 w-7" /></button>
          <figure className="animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <img src={items[open]!.src} alt={items[open]!.alt} className="max-h-[80vh] w-auto" />
            <figcaption className="mt-3 text-sm text-wood-foreground/80">{items[open]!.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
