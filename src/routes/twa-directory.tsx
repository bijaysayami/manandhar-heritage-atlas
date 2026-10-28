import { useLanguage } from "@/components/site/Language";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageIntro, PendingNote } from "@/components/site/Reveal";
import { twas } from "@/data/content";

export const Route = createFileRoute("/twa-directory")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Twa Directory — Central Manandhar Sangh" },
      { name: "description", content: "Search the register of twas (neighbourhoods) of the Manandhar community across the Kathmandu Valley." },
      { property: "og:title", content: "Twa Directory — Central Manandhar Sangh" },
      { property: "og:description", content: "A searchable register of Manandhar community twas." },
    ],
  }),
  component: Directory,
});

function Directory() {
  const { tr, language } = useLanguage();
  const [q, setQ] = useState("");
  const [city, setCity] = useState("All");
  const cities = ["All", ...Array.from(new Set(twas.map((t) => t.city)))];
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return twas.filter((t) => (city === "All" || t.city === city) && (!s || t.name.toLowerCase().includes(s) || t.nameNe.includes(q.trim())));
  }, [q, city]);

  return (
    <>
      <PageIntro eyebrow={tr("Twa Directory", "त्वाः निर्देशिका", "त्वाः निर्देशिका")} title={tr("Find your twa.", "आफ्नो त्वाः खोज्नुहोस्।", "छिगु त्वाः मालादिसँ।")} lead={tr("A register of community neighbourhoods.", "समुदायका छिमेकहरूको अभिलेख।", "समुदायया त्वाःतया अभिलेख।")} />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <label className="relative block">
            <span className="eyebrow text-muted-foreground">{tr("Search", "खोज्नुहोस्", "मालादिसँ")}</span>
            <Search className="pointer-events-none absolute bottom-4 left-0 h-5 w-5 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Twa name / त्वाःया नां" className="mt-2 w-full border-b-2 border-foreground/20 bg-transparent py-3 pl-8 font-display text-2xl outline-none transition focus:border-primary" />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by city">
            {cities.map((c) => (
              <Button variant="ghost" key={c} onClick={() => setCity(c)} aria-pressed={city === c} className={`border px-4 py-2 text-sm transition ${city === c ? "border-secondary bg-secondary text-secondary-foreground" : "border-border hover:border-secondary"}`}>{language === "en" ? c : ({All:tr("All", "सबै", "सकल"), Kathmandu:tr("Kathmandu", "काठमाडौं", "येँ"), Lalitpur:tr("Lalitpur", "ललितपुर", "यल"), Bhaktapur:tr("Bhaktapur", "भक्तपुर", "ख्वप"), Kirtipur:tr("Kirtipur", "कीर्तिपुर", "किपू")})[c] ?? c}</Button>
            ))}
          </div>
        </div>

        <p className="eyebrow mt-10 text-muted-foreground" aria-live="polite">{results.length} {tr("records", "अभिलेख", "अभिलेख")}</p>
        <ol className="mt-4 border-t border-foreground/80">
          {results.map((t, i) => (
            <li key={t.id} className="enter grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-border py-6 transition hover:bg-muted/50 md:grid-cols-[4rem_minmax(0,2fr)_minmax(0,1fr)_minmax(0,2fr)] md:items-baseline" style={{ ["--d" as string]: `${i * 50}ms` }}>
              <span className="font-display text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h2 className="truncate text-2xl">{language === "en" ? t.name : t.nameNe}</h2>
                <p lang="ne" className="deva text-secondary">{t.nameNe}</p>
              </div>
              <p className="eyebrow col-start-2 text-primary md:col-start-auto">{language === "en" ? t.city : ({Kathmandu:"काठमाडौं", Lalitpur:"ललितपुर", Bhaktapur:"भक्तपुर", Kirtipur:"कीर्तिपुर"})[t.city] ?? t.city}</p>
              <p className="col-start-2 text-sm text-muted-foreground md:col-start-auto">{tr(t.note, "नमूना — पुष्टि भएको अभिलेख होइन।", "नमूना — पुष्टि जूगु अभिलेख मखु।")}</p>
            </li>
          ))}
          {results.length === 0 && <li className="py-16 text-center text-muted-foreground">{tr("No matching twa.", "मिल्ने त्वाः भेटिएन।", "मिलय् जुइगु त्वाः लुमदु।")}</li>}
        </ol>
        <div className="mt-10"><PendingNote>{tr("Sample entries only; the verified twa register is awaited.", "नमूना विवरण मात्र; पुष्टि भएको त्वाः अभिलेख आउन बाँकी छ।", "नमूना विवरण जक; पुष्टि जूगु त्वाः अभिलेख वइगु बाँकी दु।")}</PendingNote></div>
      </section>
    </>
  );
}
