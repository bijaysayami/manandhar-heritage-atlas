import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, BriefcaseBusiness, Globe2, HeartHandshake, Megaphone, PenLine, Wrench } from "lucide-react";
import { useLanguage } from "./Language";
import { Reveal } from "./Reveal";

const hubLinks = [
  { to: "/face-of-the-month", icon: Award, title: ["Face of the Month", "फेस अफ द मन्थ", "फेस अफ द मन्थ"], text: ["People and their contributions", "व्यक्ति र उहाँहरूको योगदान", "मनूत व योगदान"] },
  { to: "/service-directory", icon: Wrench, title: ["Community Services", "सामुदायिक सेवा", "सामुदायिक सेवा"], text: ["Find electricians, technicians and more", "इलेक्ट्रिसियन, प्राविधिक लगायत खोज्नुहोस्", "इलेक्ट्रिसियन व प्राविधिक मालादिसँ"] },
  { to: "/jobs", icon: BriefcaseBusiness, title: ["Jobs & Opportunities", "रोजगारी र अवसर", "ज्या व अवसर"], text: ["Vacancies and application previews", "रोजगारी र आवेदनको नमूना", "ज्या व आवेदनया नमूना"] },
  { to: "/matrimonial", icon: HeartHandshake, title: ["Matrimonial", "वैवाहिक सम्बन्ध", "वैवाहिक सम्बन्ध"], text: ["Private, anonymous introductions", "गोप्य र अज्ञात परिचय", "गोप्य व अज्ञात परिचय"] },
  { to: "/pravas", icon: Globe2, title: ["Pravas", "प्रवास", "प्रवास"], text: ["Manandhar connections beyond Nepal", "नेपाल बाहिरका मानन्धर सम्बन्ध", "नेपाल पिनेया मानन्धर सम्बन्ध"] },
  { to: "/contribute", icon: PenLine, title: ["Share Your Writing", "आफ्नो लेख पठाउनुहोस्", "छिगु लेख छ्वयादिसँ"], text: ["Articles, poems and thoughts", "लेख, कविता र विचार", "लेख, कविता व विचार"] },
] as const;

const notices = [
  { label: ["Sample notice", "नमूना सूचना", "नमूना सूचना"], text: ["Verified Sangh announcements will appear here for quick daily reading.", "दैनिक पढ्नका लागि पुष्टि भएका संघका सूचना यहाँ देखिनेछन्।", "पुष्टि जूगु संघया सूचना थन न्हिन्ही पढेयायेगु निंतिं क्यनिइ।"] },
  { label: ["Sample volunteer call", "नमूना स्वयंसेवा आह्वान", "नमूना स्वयंसेवा आह्वान"], text: ["A future place for event support, skills and community requests.", "कार्यक्रम सहयोग, सीप र सामुदायिक अनुरोधका लागि सम्भावित स्थान।", "कार्यक्रम सहयोग, सीप व सामुदायिक अनुरोधया निंतिं थास।"] },
  { label: ["Sample Pravas update", "नमूना प्रवास समाचार", "नमूना प्रवास समाचार"], text: ["News and contributions from Manandhar families around the world.", "विश्वभरका मानन्धर परिवारका समाचार र योगदान।", "हलिमया मानन्धर परिवारया समाचार व योगदान।"] },
] as const;

export function CommunityHubPreview() {
  const { tr } = useLanguage();
  return <section className="border-b border-border bg-background"><div className="mx-auto max-w-7xl px-6 py-20">
    <Reveal className="max-w-3xl"><p className="eyebrow text-primary">{tr("The everyday community hub", "दैनिक सामुदायिक केन्द्र", "न्हिन्हीया सामुदायिक केन्द्र")}</p><h2 className="mt-4 text-3xl md:text-5xl">{tr("More reasons to return, connect and take part.", "फर्किने, जोडिने र सहभागी हुने थप कारणहरू।", "लिपा वइगु, ज्वानैगु व सहभागी जुइगु थप कारणत।")}</h2><p className="mt-5 text-muted-foreground">{tr("A preview of practical spaces for services, opportunities, relationships, writing and Manandhar life around the world.", "सेवा, अवसर, सम्बन्ध, लेखन र विश्वभरिको मानन्धर जीवनका व्यावहारिक स्थानहरूको नमूना।", "सेवा, अवसर, सम्बन्ध, लेखन व हलिमया मानन्धर जीवनया व्यावहारिक थासया नमूना।")}</p></Reveal>
    <div className="mt-12 grid gap-12 lg:grid-cols-12">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">{hubLinks.map((item, index) => <Reveal key={item.to} delay={index * 60}><Link to={item.to} className="group flex h-full gap-4 border-t border-border pt-5"><item.icon className="mt-1 size-6 shrink-0 text-primary transition-transform group-hover:-translate-y-1" /><span><span className="flex items-start justify-between gap-3 font-display text-2xl leading-tight">{tr(item.title[0], item.title[1], item.title[2])}<ArrowUpRight className="mt-1 size-4 shrink-0 text-secondary" /></span><span className="mt-2 block text-sm text-muted-foreground">{tr(item.text[0], item.text[1], item.text[2])}</span></span></Link></Reveal>)}</div>
      <Reveal delay={140} className="lg:col-span-4"><aside className="border border-border bg-muted/30 p-6"><p className="eyebrow flex items-center gap-2 text-secondary"><Megaphone className="size-4" />{tr("Community noticeboard", "सामुदायिक सूचना पाटी", "सामुदायिक सूचना पाटी")}</p><div className="mt-5 divide-y divide-border">{notices.map(notice => <div key={notice.label[0]} className="py-5 first:pt-0 last:pb-0"><p className="text-xs font-semibold text-primary">{tr(notice.label[0], notice.label[1], notice.label[2])}</p><p className="mt-2 text-sm text-muted-foreground">{tr(notice.text[0], notice.text[1], notice.text[2])}</p></div>)}</div><p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">{tr("Preview only · No official notices are being announced.", "नमूना मात्र · कुनै आधिकारिक सूचना घोषणा गरिएको छैन।", "नमूना जक · आधिकारिक सूचना घोषणा यानागु मदु।")}</p></aside></Reveal>
    </div>
  </div></section>;
}
