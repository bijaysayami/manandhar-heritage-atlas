import { useLanguage } from "@/components/site/Language";
import { createFileRoute } from "@tanstack/react-router";
import elder from "@/assets/elder.jpg";
import windowImg from "@/assets/window.jpg";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Community Stories & Senior Interviews — Central Manandhar Sangh" },
      { name: "description", content: "Oral histories and interviews with senior members of the Manandhar community." },
      { property: "og:title", content: "Community Stories — Central Manandhar Sangh" },
      { property: "og:description", content: "Voices of Manandhar elders, recorded for future generations." },
    ],
  }),
  component: Stories,
});

function Stories() {
  const { tr } = useLanguage();
  return (
    <>
      <PageIntro eyebrow={tr("Stories", "कथाहरू", "बाखंत")} title={tr("In their own words.", "उहाँहरूकै शब्दमा।", "वय्‌कःतया खँय्।")} lead={tr("Community memories and stories from our elders.", "सामुदायिक सम्झना र हाम्रा अग्रजका कथाहरू।", "समुदायया सम्झना व झीगु थकालीतया बाखंत।")} />
      <article className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="img-zoom aspect-[4/5]"><img src={elder} alt="Hands working a traditional oil press" width={1024} height={1280} className="h-full w-full object-cover" /></div>
          <p className="mt-3 text-xs text-muted-foreground">{tr("Illustrative image", "चित्रात्मक तस्बिर", "चित्रात्मक किपा")}</p>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal><p className="eyebrow text-primary">{tr("Community voices", "समुदायका आवाज", "समुदायया सः")}</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-4xl md:text-5xl">{tr("Stories yet to be shared.", "साझा गर्न बाँकी कथाहरू।", "साझा यायेगु बाँकी बाखंत।")}</h2></Reveal>
          <Reveal delay={160}>
            <p className="mt-8 text-lg first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:text-primary">
              {tr("Verified community stories and elder interviews will be published here when they are ready.", "पुष्टि भएका सामुदायिक कथा र अग्रजका अन्तर्वार्ता तयार भएपछि यहाँ प्रकाशित हुनेछ।", "पुष्टि जूगु समुदायया बाखं व थकालीतया अन्तर्वार्ता तयार जुइधुंकाः थन प्रकाशन जुइ।")}
            </p>
          </Reveal>
        </div>
      </article>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-12">
          <Reveal className="md:col-span-8"><p className="font-display text-3xl italic md:text-5xl">{tr("Memories carried forward.", "अगाडि बढाइएका सम्झनाहरू।", "लिपा बिइगु सम्झनात।")}</p></Reveal>
          <Reveal delay={120} className="md:col-span-3 md:col-start-10"><div className="img-zoom aspect-square"><img src={windowImg} alt="" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" /></div></Reveal>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-10"><PendingNote>{tr("No verified stories or interviews have been published yet.", "पुष्टि भएका कथा वा अन्तर्वार्ता हालसम्म प्रकाशित भएका छैनन्।", "पुष्टि जूगु बाखं वा अन्तर्वार्ता थौं तक प्रकाशन जूगु मदु।")}</PendingNote></div>
    </>
  );
}
