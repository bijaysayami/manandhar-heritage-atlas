import { createFileRoute } from "@tanstack/react-router";
import { Globe2, HandHeart, MessagesSquare, UsersRound } from "lucide-react";
import { archiveHead } from "@/components/site/ArchivePage";
import { PageIntro, PendingNote, Reveal } from "@/components/site/Reveal";
import { HeritageSketch } from "@/components/site/HeritageSketch";
import { useLanguage } from "@/components/site/Language";
import { samplePravas } from "@/data/community-hub";

export const Route = createFileRoute("/pravas")({
  head: () => archiveHead("Pravas — Manandhar Around the World", "A static preview connecting Manandhar families living outside Nepal through stories, support and participation."),
  component: Page,
});
function Page() {
  const { tr } = useLanguage();
  return <><PageIntro eyebrow={tr("Pravas · प्रवास", "प्रवास", "प्रवास")} title={tr("One community, across borders.", "सीमापारि एउटै समुदाय।", "सीमापार छगू समुदाय।")} lead={tr("A dedicated space for Manandhar people living outside Nepal to stay connected, contribute and support one another.", "नेपाल बाहिरका मानन्धरलाई जोडिने, योगदान गर्ने र आपसी सहयोगको स्थान।", "नेपाल पिनेया मानन्धरत ज्वानैगु, योगदान बिइगु व आपसी सहयोगया थास।")} />
    <section className="relative overflow-hidden"><HeritageSketch variant="pole" className="absolute -right-16 top-0 w-72 text-secondary/15" /><div className="relative mx-auto max-w-7xl px-6 py-20"><Reveal className="max-w-3xl"><Globe2 className="size-9 text-primary" /><h2 className="mt-5 text-3xl md:text-4xl">{tr("Home is a connection, not only a location.", "घर स्थान मात्र होइन, सम्बन्ध पनि हो।", "छेँ थास जक मखु, सम्बन्ध नं खः।")}</h2><p className="mt-5 text-lg text-muted-foreground">{tr("Pravas stories can help families share experience, preserve language and remain part of Sangh and twa life from wherever they live.", "प्रवासी कथाले अनुभव बाँड्न, भाषा जोगाउन र जहाँबाट भए पनि संघ तथा त्वाःको जीवनमा सहभागी हुन सहयोग गर्न सक्छन्।", "प्रवासी बाखंं अनुभव बाँडेगु, भाषा संरक्षण याइगु व गथे नं च्वनाः नं संघ व त्वाःया जीवनय् सहभागी जुइगु सहयोग याइफु।")}</p></Reveal>
      <div className="mt-14 grid gap-8 md:grid-cols-3">{samplePravas.map((entry, index) => <Reveal key={entry.id} delay={index * 90}><article className="h-full border-t-2 border-primary/60 pt-5"><p className="eyebrow text-primary">{tr(...entry.place)}</p><h3 className="mt-3 text-2xl">{tr(...entry.title)}</h3><p className="mt-4 text-muted-foreground">{tr(...entry.summary)}</p><span className="mt-5 inline-block bg-muted px-2 py-1 text-xs text-muted-foreground">{tr("Sample · Not a real Pravas group", "नमूना · वास्तविक प्रवासी समूह होइन", "नमूना · वास्तविक प्रवासी समूह मखु")}</span></article></Reveal>)}</div>
    </div></section>
    <section className="border-y border-border bg-muted/25"><div className="mx-auto max-w-7xl px-6 py-16"><p className="eyebrow text-primary">{tr("Ways to take part", "सहभागी हुने तरिका", "सहभागी जुइगु कसम")}</p><div className="mt-8 grid gap-8 md:grid-cols-3">{([
      { icon: MessagesSquare, title: ["Share experience", "अनुभव बाँड्नुहोस्", "अनुभव बाँडेयादिसँ"], text: ["Practical guidance, interviews and reflections from life abroad.", "विदेशी जीवनका अनुभव, अन्तर्वार्ता र व्यावहारिक जानकारी।", "प्रवासी जीवनया अनुभव, अन्तर्वार्ता व व्यावहारिक जानकारी।"] },
      { icon: HandHeart, title: ["Offer skills", "सीप योगदान गर्नुहोस्", "सीप योगदान बियादिसँ"], text: ["Mentoring, archives, technology and cultural project support.", "मार्गदर्शन, अभिलेख, प्रविधि र सांस्कृतिक परियोजना सहयोग।", "मार्गदर्शन, अभिलेख, प्रविधि व सांस्कृतिक परियोजना सहयोग।"] },
      { icon: UsersRound, title: ["Build local circles", "स्थानीय समूह बनाउनुहोस्", "स्थानीय समूह दयेकादिसँ"], text: ["Verified city circles can help families meet and support newcomers.", "पुष्टि भएका स्थानीय समूहले भेटघाट र नयाँ आएकालाई सहयोग गर्न सक्छन्।", "पुष्टि जूगु स्थानीय समूहं भेटघाट व न्हूगु वयाःपिंत सहयोग याइफु।"] },
    ] as const).map((item, index) => <Reveal key={item.title[0]} delay={index * 80}><item.icon className="size-7 text-secondary" /><h3 className="mt-4 text-2xl">{tr(item.title[0], item.title[1], item.title[2])}</h3><p className="mt-3 text-muted-foreground">{tr(item.text[0], item.text[1], item.text[2])}</p></Reveal>)}</div></div></section>
    <div className="mx-auto max-w-7xl px-6 py-10"><PendingNote>{tr("Static preview only: no Pravas registration, member directory or group membership is active yet.", "नमूना मात्र: प्रवासी दर्ता, सदस्य डाइरेक्टरी वा समूह सदस्यता अहिले सक्रिय छैन।", "नमूना जक: प्रवासी दर्ता, सदस्य डाइरेक्टरी वा समूह सदस्यता अले सक्रिय मदु।")}</PendingNote></div></>;
}
