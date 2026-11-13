import { useMemo, useState } from "react";
import { MapPin, Search, ShieldCheck, Wrench } from "lucide-react";
import { sampleServices, serviceCategoryLabels, type ServiceCategory } from "@/data/community-hub";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./Language";
import { PendingNote, Reveal } from "./Reveal";

const categories = ["all", "electrical", "appliances", "plumbing", "carpentry", "technology", "creative"] as const;
type CategoryFilter = "all" | ServiceCategory;

export function ServiceDirectory() {
  const { tr } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const results = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return sampleServices.filter(service => {
      const searchable = [...service.name, ...service.summary, ...service.area, ...service.keywords].join(" ").toLocaleLowerCase();
      return (category === "all" || service.category === category) && (!needle || searchable.includes(needle));
    });
  }, [category, query]);

  return <>
    <section className="mx-auto max-w-7xl px-6 py-14">
      <Reveal><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-end">
        <label className="relative block"><span className="eyebrow text-muted-foreground">{tr("What do you need help with?", "तपाईंलाई के सहयोग चाहिएको छ?", "छित छू सहयोग माथु?")}</span><Search className="pointer-events-none absolute bottom-4 left-0 size-5 text-muted-foreground" /><input id="service-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={tr("Try “electrician” or “mixer repair”", "“इलेक्ट्रिसियन” वा “मिक्सर मर्मत” खोज्नुहोस्", "“इलेक्ट्रिसियन” वा “मिक्सर मर्मत” मालादिसँ")} className="mt-2 w-full border-b-2 border-foreground/20 bg-transparent py-3 pl-8 font-display text-xl outline-none transition focus:border-primary md:text-2xl" /></label>
        <div className="flex gap-3 border-l-2 border-secondary pl-4"><ShieldCheck className="mt-1 size-5 shrink-0 text-secondary" /><p className="text-sm text-muted-foreground">{tr("Real listings will be checked before publication. These entries are fictional samples with no contact details.", "वास्तविक विवरण प्रकाशन अघि जाँचिनेछ। यी सम्पर्कविहीन काल्पनिक नमूना हुन्।", "वास्तविक विवरण प्रकाशन न्ह्यः जाँच जुइ। थीगु सम्पर्क मदुगु काल्पनिक नमूना खः।")}</p></div>
      </div></Reveal>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={tr("Filter services by category", "सेवा वर्ग अनुसार छान्नुहोस्", "सेवा वर्ग कथं ल्ययादिसँ")}>{categories.map(item => <Button key={item} type="button" variant="ghost" aria-pressed={category === item} onClick={() => setCategory(item)} className={`h-auto min-h-11 whitespace-normal border px-4 py-2 text-sm ${category === item ? "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary" : "border-border hover:border-secondary"}`}>{tr(...serviceCategoryLabels[item])}</Button>)}</div>
      <p className="eyebrow mt-10 text-muted-foreground" aria-live="polite">{results.length} {tr("sample services", "नमूना सेवा", "नमूना सेवा")}</p>
      <div className="mt-4 border-t border-foreground/70">{results.map((service, index) => <Reveal key={service.id} delay={index * 45}><article className="grid gap-5 border-b border-border py-7 md:grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,20rem)] md:gap-6"><span className="font-display text-xl text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div className="min-w-0"><p className="eyebrow text-primary">{tr(...serviceCategoryLabels[service.category])}</p><h2 className="mt-2 break-words text-2xl">{tr(...service.name)}</h2><p className="mt-3 text-muted-foreground">{tr(...service.summary)}</p><span className="mt-3 inline-block bg-muted px-2 py-1 text-xs text-muted-foreground">{tr("Sample", "नमूना", "नमूना")}</span></div><div className="text-sm text-muted-foreground"><p className="flex items-start gap-2"><MapPin className="mt-1 size-4 shrink-0 text-secondary" />{tr(...service.area)}</p><p className="mt-3 flex items-start gap-2"><Wrench className="mt-1 size-4 shrink-0 text-secondary" />{tr("Contact: unavailable in this preview", "सम्पर्क: यस नमूनामा उपलब्ध छैन", "सम्पर्क: थ्व नमूनाय् उपलब्ध मदु")}</p></div></article></Reveal>)}{results.length === 0 && <p className="py-16 text-center text-muted-foreground">{tr("No sample service matches that search.", "त्यो खोजीसँग मिल्ने नमूना सेवा भेटिएन।", "उकी मिलय् जुइगु नमूना सेवा लुमदु।")}</p>}</div>
      <div className="mt-10 space-y-4"><PendingNote>{tr("This preview uses category and keyword search. AI-assisted matching can be considered after real, verified service listings are available.", "यो नमूनामा वर्ग र शब्द खोजी प्रयोग गरिएको छ। वास्तविक र पुष्टि भएका सेवा उपलब्ध भएपछि AI खोजी विचार गर्न सकिनेछ।", "थ्व नमूनाय् वर्ग व खँ खोजी छ्यलातःगु दु। वास्तविक व पुष्टि जूगु सेवा उपलब्ध जुइधुंकाः AI खोजीया बारेय् स्यनेयाइ।")}</PendingNote></div>
    </section>
  </>;
}
