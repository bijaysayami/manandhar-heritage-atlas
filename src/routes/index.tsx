import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero-courtyard.jpg";
import windowImg from "@/assets/window.jpg";
import festival from "@/assets/festival.jpg";
import library from "@/assets/library.jpg";
import elder from "@/assets/elder.jpg";
import { Reveal, SealRings } from "@/components/site/Reveal";
import { milestones } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Manandhar Sangh — Living Heritage, Connected Generations" },
      { name: "description", content: "केन्द्रीय मानन्धर संघ — a digital heritage home for the Manandhar community: history, twa directory, library and stories." },
      { property: "og:title", content: "Central Manandhar Sangh — Living Heritage" },
      { property: "og:description", content: "History, twa directory, digital library and community stories of the Manandhar community." },
    ],
  }),
  component: Index,
});

function Index() {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (imgRef.current) imgRef.current.style.transform = `translateY(${Math.min(window.scrollY, 600) * 0.08}px) scale(1.06)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-12 md:min-h-[88vh]">
          <div className="relative z-10 flex flex-col justify-between px-6 py-14 md:col-span-6 md:py-20">
            <div className="enter flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />
              <p className="eyebrow text-primary">Est. ने.सं. १०७४ · Kathmandu Valley</p>
            </div>
            <div className="my-12">
              <h1 className="enter text-[clamp(3rem,7vw,6.2rem)]" style={{ ["--d" as string]: "100ms" }}>
                Living heritage,
                <br />
                <em className="text-primary">connected</em> generations.
              </h1>
              <p lang="ne" className="deva enter mt-6 text-2xl text-secondary" style={{ ["--d" as string]: "220ms" }}>
                केन्द्रीय मानन्धर संघ
              </p>
              <p className="enter mt-6 max-w-md text-muted-foreground" style={{ ["--d" as string]: "320ms" }}>
                The digital home of the Manandhar community — gathering our twas, our elders' voices,
                our publications and our history in one living archive.
              </p>
            </div>
            <div className="enter flex flex-wrap gap-4" style={{ ["--d" as string]: "420ms" }}>
              <Link to="/history" className="group inline-flex items-center gap-2 bg-primary px-6 py-3 text-primary-foreground transition hover:bg-secondary">
                Explore our history <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/twa-directory" className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3 transition hover:border-secondary hover:text-secondary">
                Find your twa
              </Link>
            </div>
          </div>
          <div className="relative md:col-span-6">
            <div className="enter h-[60vh] overflow-hidden md:absolute md:inset-0 md:h-auto" style={{ ["--d" as string]: "150ms" }}>
              <img ref={imgRef} src={hero} alt="A traditional Newar brick courtyard with carved wooden windows at golden hour" width={1280} height={1600} className="h-full w-full scale-[1.06] object-cover" />
            </div>
            <div className="enter absolute -left-16 bottom-10 hidden md:block" style={{ ["--d" as string]: "500ms" }}>
              <div className="relative grid h-40 w-40 place-items-center rounded-full bg-card shadow-xl">
                <SealRings className="spin-slow absolute inset-0 h-full w-full text-secondary/40" />
                <img src={logo.url} alt="Official seal of Central Manandhar Sangh" width={112} height={112} className="relative h-28 w-28" />
              </div>
            </div>
            <p className="eyebrow absolute bottom-4 right-4 bg-background/85 px-3 py-1 text-[0.6rem] text-muted-foreground">Illustrative heritage imagery</p>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT — dark */}
      <section className="bg-wood text-wood-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12">
          <Reveal className="md:col-span-3"><p className="eyebrow text-accent">01 — The Sangh</p></Reveal>
          <Reveal delay={100} className="md:col-span-9">
            <p className="font-display text-3xl leading-snug md:text-5xl">
              A community is remembered through its places, its crafts and the people who carry them forward.
              <span className="text-wood-foreground/50"> This archive is built to hold all three.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-primary">02 — Timeline</p>
            <h2 className="mt-4 text-4xl md:text-6xl">A history, kept in sequence.</h2>
            <Link to="/history" className="link-line mt-8 inline-block text-secondary">View the full timeline & past presidents →</Link>
          </Reveal>
          <div className="md:col-span-7">
            <ol className="relative border-l border-border">
              {milestones.slice(0, 3).map((m, i) => (
                <Reveal as="li" key={i} delay={i * 120} className="relative pb-10 pl-8">
                  <span className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full ${m.pending ? "border border-border bg-background" : "bg-primary"}`} />
                  <p lang="ne" className="deva text-sm text-secondary">{m.yearNe}</p>
                  <h3 className={`mt-1 text-2xl ${m.pending ? "text-muted-foreground" : ""}`}>{m.title}</h3>
                  <p className="mt-1 text-muted-foreground">{m.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FULL-BLEED */}
      <section className="relative h-[80vh] min-h-[480px] overflow-hidden">
        <img src={festival} alt="A Newar festival procession at dusk in an old city street" width={1600} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-wood via-wood/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
          <Reveal className="max-w-2xl text-wood-foreground">
            <p className="eyebrow text-accent">03 — Gallery</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Jatra, lamplight and the streets we share.</h2>
            <Link to="/gallery" className="link-line mt-6 inline-block">Enter the gallery →</Link>
          </Reveal>
        </div>
      </section>

      {/* DIRECTORY + LIBRARY asymmetric */}
      <section className="brick-texture">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="img-zoom aspect-[4/5]"><img src={windowImg} alt="Carved Newar wooden window in a brick wall" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" /></div>
          </Reveal>
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Reveal><p className="eyebrow text-primary">04 — Twa Directory</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-6xl">Every twa, a doorway to home.</h2></Reveal>
            <Reveal delay={160}><p className="mt-6 text-muted-foreground">A searchable register of the neighbourhoods where Manandhar families have lived, worked and gathered — built to grow as records are verified.</p></Reveal>
            <Reveal delay={240}><Link to="/twa-directory" className="mt-8 inline-flex w-fit items-center gap-2 border-b-2 border-primary pb-1 transition hover:text-primary">Search the directory <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
          </div>
        </div>
      </section>

      {/* LIBRARY — dark split */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 md:pr-16">
            <Reveal><p className="eyebrow opacity-70">05 — Digital Library</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl">Souvenirs, journals and books — preserved and readable.</h2></Reveal>
            <Reveal delay={160}><Link to="/library" className="link-line mt-8 inline-block">Browse publications →</Link></Reveal>
          </div>
          <div className="img-zoom min-h-[360px]"><img src={library} alt="Old manuscripts and books beside a brass oil lamp" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      {/* STORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6 md:order-2">
            <Reveal className="img-zoom aspect-[4/5] md:ml-auto md:w-4/5"><img src={elder} alt="Elder's hands working a traditional wooden oil press" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" /></Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal><p className="eyebrow text-primary">06 — Voices</p></Reveal>
            <Reveal delay={80}>
              <blockquote className="mt-6 font-display text-3xl italic leading-snug md:text-5xl">
                “Interviews with our seniors will appear here — in their own words.”
              </blockquote>
            </Reveal>
            <Reveal delay={160}><p className="mt-6 text-muted-foreground">Oral histories of craft, festival and family, recorded with care for the next generation.</p></Reveal>
            <Reveal delay={240}><Link to="/stories" className="link-line mt-6 inline-block text-secondary">Read community stories →</Link></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
