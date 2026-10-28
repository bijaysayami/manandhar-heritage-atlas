import { useLanguage } from "@/components/site/Language";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";
import { milestones, terms } from "@/data/content";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "History & Past Presidents — Central Manandhar Sangh" },
      { name: "description", content: "Timeline of Central Manandhar Sangh since NS 1074 and the archive of past presidents and committees." },
      { property: "og:title", content: "History & Past Presidents — Central Manandhar Sangh" },
      { property: "og:description", content: "Timeline and committee archive of Central Manandhar Sangh." },
    ],
  }),
  component: History,
});

function History() {
  const { tr, language } = useLanguage();
  const [active, setActive] = useState(0);
  const t = terms[active] ?? terms[0];
  if (!t) return null;
  return (
    <>
      <PageIntro eyebrow={tr("History", "इतिहास", "इतिहास")} title={tr("From the seal of 1074 onward.", "१०७४ को छापदेखि आजसम्म।", "१०७४ या छाप निसें थौं तक।")} lead={tr("Verified milestones and leadership of the Sangh.", "संघका पुष्टि भएका ऐतिहासिक घटना र नेतृत्व।", "संघया पुष्टि जूगु ऐतिहासिक घटना व नेतृत्व।")} />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow text-primary">{tr("Timeline", "समयरेखा", "समयरेखा")}</p>
        <div className="mt-10 flex snap-x gap-0 overflow-x-auto pb-6">
          {milestones.map((m, i) => (
            <Reveal key={i} delay={i * 120} className="relative w-72 shrink-0 snap-start border-t-2 border-border pr-8 pt-8">
              <span className={`absolute -top-[9px] left-0 h-4 w-4 rounded-full ${m.pending ? "border-2 border-border bg-background" : "bg-primary"}`} />
              <p lang="ne" className="deva text-3xl text-secondary">{m.yearNe}</p>
              <h3 className={`mt-3 text-2xl ${m.pending ? "text-muted-foreground" : ""}`}>{language === "en" ? m.title : m.pending ? tr("Awaiting records", "अभिलेखको प्रतीक्षामा", "अभिलेखया प्रतीक्षाय्") : tr("Founding of the Sangh", "संघको स्थापना", "संघया स्थापना")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{language === "en" ? m.body : m.pending ? tr("Verified entries will be added.", "पुष्टि भएका विवरण थपिनेछन्।", "पुष्टि जूगु विवरण थप जुइ।") : tr("Year inscribed on the official seal.", "आधिकारिक छापमा उल्लेख भएको वर्ष।", "आधिकारिक छापय् च्वयातःगु दँ।")}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-wood text-wood-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="eyebrow text-accent">{tr("Past presidents & committees", "पूर्व अध्यक्ष र समितिहरू", "न्हापाया अध्यक्ष व समितित")}</p>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <ul className="md:col-span-4" role="tablist">
              {terms.map((x, i) => (
                <li key={i}>
                  <Button variant="ghost" role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`w-full border-b border-wood-foreground/15 py-4 text-left font-display text-2xl transition ${i === active ? "pl-4 text-accent" : "text-wood-foreground/60 hover:pl-2 hover:text-wood-foreground"}`}>
                    {tr(x.term, `कार्यकाल ${i + 1}`, `कार्यकाल ${i + 1}`)}
                  </Button>
                </li>
              ))}
            </ul>
            <div key={active} className="enter md:col-span-7 md:col-start-6" role="tabpanel">
              <p className="eyebrow text-wood-foreground/60">{tr("President", "अध्यक्ष", "अध्यक्ष")}</p>
              <h3 className="mt-2 text-4xl md:text-5xl">{tr(t.president, "नाम पुष्टि हुन बाँकी", "नां पुष्टि जुइगु बाँकी")}</h3>
              <p className="eyebrow mt-10 text-wood-foreground/60">{tr("Committee", "समिति", "समिति")}</p>
              <ul className="mt-3 space-y-1 text-wood-foreground/80">{t.committee.map((c) => <li key={c}>{tr(c, "समितिको सूची अभिलेखको प्रतीक्षामा", "समितिया सूची अभिलेखया प्रतीक्षाय्")}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <PendingNote>{tr("Only the founding year ने.सं. १०७४ is confirmed from the official seal. Other entries await records.", "आधिकारिक छापबाट स्थापना वर्ष ने.सं. १०७४ मात्र पुष्टि भएको छ। अन्य विवरण अभिलेखको प्रतीक्षामा छन्।", "आधिकारिक छापं स्थापना दँ ने.सं. १०७४ जक पुष्टि जुल। मेगु विवरण अभिलेखया प्रतीक्षाय् दु।")}</PendingNote>
      </div>
    </>
  );
}
