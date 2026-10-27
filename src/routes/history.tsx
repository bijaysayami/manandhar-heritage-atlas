import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";
import { milestones, terms } from "@/data/content";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History & Past Presidents — Central Manandhar Sangh" },
      { name: "description", content: "Timeline of Central Manandhar Sangh since NS 1074 and the archive of past presidents and committees." },
      { property: "og:title", content: "History & Past Presidents — Central Manandhar Sangh" },
      { property: "og:description", content: "Timeline and committee archive of Central Manandhar Sangh." },
    ],
  }),
  component: History,
});

function History() {
  const [active, setActive] = useState(0);
  const t = terms[active];
  return (
    <>
      <PageIntro eyebrow="History" title="From the seal of 1074 onward." deva="इतिहास" lead="Milestones and leadership of the Sangh, recorded in order. Entries are added only once verified from the Sangh's records." />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow text-primary">Timeline</p>
        <div className="mt-10 flex snap-x gap-0 overflow-x-auto pb-6">
          {milestones.map((m, i) => (
            <Reveal key={i} delay={i * 120} className="relative w-72 shrink-0 snap-start border-t-2 border-border pr-8 pt-8">
              <span className={`absolute -top-[9px] left-0 h-4 w-4 rounded-full ${m.pending ? "border-2 border-border bg-background" : "bg-primary"}`} />
              <p lang="ne" className="deva text-3xl text-secondary">{m.yearNe}</p>
              <h3 className={`mt-3 text-2xl ${m.pending ? "text-muted-foreground" : ""}`}>{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-wood text-wood-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="eyebrow text-accent">Past presidents & committees</p>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <ul className="md:col-span-4" role="tablist">
              {terms.map((x, i) => (
                <li key={i}>
                  <button role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`w-full border-b border-wood-foreground/15 py-4 text-left font-display text-2xl transition ${i === active ? "pl-4 text-accent" : "text-wood-foreground/60 hover:pl-2 hover:text-wood-foreground"}`}>
                    {x.term}
                  </button>
                </li>
              ))}
            </ul>
            <div key={active} className="enter md:col-span-7 md:col-start-6" role="tabpanel">
              <p className="eyebrow text-wood-foreground/60">President</p>
              <h3 className="mt-2 text-4xl md:text-5xl">{t.president}</h3>
              <p className="eyebrow mt-10 text-wood-foreground/60">Committee</p>
              <ul className="mt-3 space-y-1 text-wood-foreground/80">{t.committee.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <PendingNote>Only the founding year (ने.सं. १०७४, from the official seal) is shown as fact. Please supply verified milestones, presidents and committee lists to complete this archive.</PendingNote>
      </div>
    </>
  );
}
