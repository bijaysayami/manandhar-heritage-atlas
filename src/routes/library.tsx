import { useLanguage } from "@/components/site/Language";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";
import { publications } from "@/data/content";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Digital Library & Publications — Central Manandhar Sangh" },
      { name: "description", content: "Journals, souvenirs, books and reports published by Central Manandhar Sangh." },
      { property: "og:title", content: "Digital Library — Central Manandhar Sangh" },
      { property: "og:description", content: "A curated archive of Sangh publications." },
    ],
  }),
  component: Library,
});

const kinds = ["All", "Journal", "Book", "Souvenir", "Report"] as const;
const spine = ["bg-primary", "bg-secondary", "bg-wood", "bg-brick", "bg-accent"];

function Library() {
  const { tr, language } = useLanguage();
  const [k, setK] = useState<(typeof kinds)[number]>("All");
  const list = publications.filter((p) => k === "All" || p.kind === k);
  return (
    <>
      <PageIntro eyebrow={tr("Publications", "प्रकाशनहरू", "प्रकाशनत")} title={tr("The shelf of the Sangh.", "संघको पुस्तकालय।", "संघया पुस्तकालय।")} lead={tr("Books, journals, souvenirs and reports.", "पुस्तक, पत्रिका, स्मारिका र प्रतिवेदनहरू।", "पुस्तक, पत्रिका, स्मारिका व प्रतिवेदनत।")} />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap gap-6 border-b border-border pb-4">
          {kinds.map((x) => (
            <Button variant="ghost" key={x} onClick={() => setK(x)} aria-pressed={k === x} className={`eyebrow pb-2 transition ${k === x ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}>{tr(x, ({All:"सबै", Journal:"पत्रिका", Book:"पुस्तक", Souvenir:"स्मारिका", Report:"प्रतिवेदन"})[x], ({All:"सकल", Journal:"पत्रिका", Book:"पुस्तक", Souvenir:"स्मारिका", Report:"प्रतिवेदन"})[x])}</Button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className={`absolute inset-y-0 left-0 w-3 ${spine[i % spine.length]}`} />
                  <div className="flex h-full flex-col justify-between p-6 pl-8">
                    <p className="eyebrow text-muted-foreground">{tr(p.kind, ({Journal:"पत्रिका", Book:"पुस्तक", Souvenir:"स्मारिका", Report:"प्रतिवेदन"})[p.kind], ({Journal:"पत्रिका", Book:"पुस्तक", Souvenir:"स्मारिका", Report:"प्रतिवेदन"})[p.kind])}</p>
                    <p className="font-display text-xl text-muted-foreground">{tr(p.title, "प्रकाशनको शीर्षक आउन बाँकी", "प्रकाशनया शीर्षक वइगु बाँकी")}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{tr(p.lang, ({"Nepal Bhasa":"नेपाल भाषा", Nepali:"नेपाली", English:"अङ्ग्रेजी"})[p.lang], ({"Nepal Bhasa":"नेपाल भाषा", Nepali:"नेपाली", English:"अङ्ग्रेजी"})[p.lang])} · {p.year}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14"><PendingNote>{tr("Catalogue entries await verified titles, years and scans.", "सूचीमा पुष्टि भएका शीर्षक, वर्ष र स्क्यान आउन बाँकी छन्।", "सूचीय् पुष्टि जूगु शीर्षक, दँ व स्क्यान वइगु बाँकी दु।")}</PendingNote></div>
      </section>
    </>
  );
}
