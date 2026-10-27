import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";
import { publications } from "@/data/content";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
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
  const [k, setK] = useState<(typeof kinds)[number]>("All");
  const list = publications.filter((p) => k === "All" || p.kind === k);
  return (
    <>
      <PageIntro eyebrow="Digital Library" title="The shelf of the Sangh." deva="पुस्तकालय" lead="Publications catalogued by type, year and language — each to be readable and downloadable once digitised." />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap gap-6 border-b border-border pb-4">
          {kinds.map((x) => (
            <button key={x} onClick={() => setK(x)} aria-pressed={k === x} className={`eyebrow pb-2 transition ${k === x ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}>{x}</button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className={`absolute inset-y-0 left-0 w-3 ${spine[i % spine.length]}`} />
                  <div className="flex h-full flex-col justify-between p-6 pl-8">
                    <p className="eyebrow text-muted-foreground">{p.kind}</p>
                    <p className="font-display text-xl text-muted-foreground">{p.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.lang} · {p.year}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14"><PendingNote>Catalogue entries are placeholders. Provide titles, years and PDF scans to populate the library.</PendingNote></div>
      </section>
    </>
  );
}
