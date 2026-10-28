import { useLanguage } from "@/components/site/Language";
import { Button } from "@/components/ui/button";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  const { tr, language } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    const selected = open === null ? undefined : items[open];
  return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <PageIntro eyebrow={tr("Photo Galleries", "फोटो ग्यालरी", "किपा ग्यालरी")} title={tr("Seen, and kept.", "देखिएका र सुरक्षित।", "स्वयातःगु व सुरक्षित।")} lead={tr("Courtyards, crafts and celebrations.", "आँगन, शिल्प र उत्सवहरू।", "चुक, शिल्प व उत्सवत।")} />
      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-14 md:grid-cols-12">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 80} className={it.cls}>
            <Button variant="ghost" onClick={() => setOpen(i)} className="img-zoom block h-full w-full p-0" aria-label={`Open ${it.alt}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover" />
            </Button>
          </Reveal>
        ))}
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-14"><PendingNote>{tr("Current images are illustrative; community photographs are awaited.", "हालका तस्बिर चित्रात्मक हुन्; सामुदायिक तस्बिर आउन बाँकी छन्।", "थौंया किपा चित्रात्मक खः; समुदायया किपा वइगु बाँकी दु।")}</PendingNote></div>
      {selected && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-wood/95 p-6 animate-in fade-in duration-300" onClick={() => setOpen(null)}>
          <Button variant="ghost" className="absolute right-6 top-6 text-wood-foreground" onClick={() => setOpen(null)} aria-label={tr("Close", "बन्द गर्नुहोस्", "बन्द यानादिसँ")}><X className="h-7 w-7" /></Button>
          <figure className="animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} className="max-h-[80vh] w-auto" />
            <figcaption className="mt-3 text-sm text-wood-foreground/80">{selected.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
