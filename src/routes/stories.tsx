import { createFileRoute } from "@tanstack/react-router";
import elder from "@/assets/elder.jpg";
import windowImg from "@/assets/window.jpg";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Community Stories & Senior Interviews — Central Manandhar Sangh" },
      { name: "description", content: "Oral histories and interviews with senior members of the Manandhar community." },
      { property: "og:title", content: "Community Stories — Central Manandhar Sangh" },
      { property: "og:description", content: "Voices of Manandhar elders, recorded for future generations." },
    ],
  }),
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageIntro eyebrow="Stories" title="In their own words." deva="ज्येष्ठ नागरिकया खँ" lead="Interviews with our seniors and stories from the community, presented as long-form features." />
      <article className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="img-zoom aspect-[4/5]"><img src={elder} alt="Hands working a traditional oil press" width={1024} height={1280} className="h-full w-full object-cover" /></div>
          <p className="mt-3 text-xs text-muted-foreground">Illustrative image</p>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal><p className="eyebrow text-primary">Feature · Senior interview</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl">The first interview is being prepared.</h2></Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:text-primary">
              This feature layout is ready for long-form interviews: a portrait, a pull quote, and the conversation set in readable columns. Each story will be published with the consent of the person interviewed and their family.
            </p>
          </Reveal>
        </div>
      </article>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-12">
          <Reveal className="md:col-span-8"><p className="font-display text-3xl italic md:text-5xl">“Pull quotes from interviews will sit here, large and unhurried.”</p></Reveal>
          <Reveal delay={120} className="md:col-span-3 md:col-start-10"><div className="img-zoom aspect-square"><img src={windowImg} alt="" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-10"><PendingNote>No interviews have been published yet. Send recordings or transcripts to begin.</PendingNote></div>
    </>
  );
}
