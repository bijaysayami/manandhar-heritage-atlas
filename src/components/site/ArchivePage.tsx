import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./Language";
import { Reveal } from "./Reveal";
import { Newsletter } from "./Newsletter";
import { HeritageSketch } from "./HeritageSketch";
import { siteContact, facebookUrl } from "@/lib/site-info";

export type ArchiveKind = "about" | "committee" | "subcommittees" | "presidents" | "activities" | "interviews" | "forms" | "contact" | "blogs";
const copy: Record<ArchiveKind, { title: [string, string, string]; lead: [string, string, string]; empty: [string, string, string] }> = {
  about: { title: ["Who we are", "हामी को हौँ", "झी सु खः"], lead: ["Central Manandhar Sangh · Established ने.सं. १०७४", "केन्द्रीय मानन्धर संघ · स्थापना ने.सं. १०७४", "केन्द्रीय मानन्धर संघ · स्थापना ने.सं. १०७४"], empty: ["The Sangh’s official introduction and mission will be added once approved.", "संघको आधिकारिक परिचय र उद्देश्य स्वीकृत भएपछि प्रकाशित हुनेछ।", "संघया आधिकारिक परिचय व उद्देश्य स्वीकृत जुइधुंकाः प्रकाशन जुइ।"] },
  committee: { title: ["Committee Members", "कार्यसमिति सदस्यहरू", "कार्यसमिति सदस्यत"], lead: ["The people serving the Sangh.", "संघको सेवामा समर्पित व्यक्तिहरू।", "संघया सेवाय् लागिपिं मनूत।"], empty: ["The current committee list awaits official confirmation.", "वर्तमान कार्यसमितिको सूची आधिकारिक पुष्टि हुन बाँकी छ।", "थौंया कार्यसमितिया सूची आधिकारिक पुष्टि जुइगु बाँकी दु।"] },
  subcommittees: { title: ["Sub Committees", "उपसमितिहरू", "उपसमितित"], lead: ["Working together for the community.", "समुदायका लागि सँगसँगै।", "समुदायया निंतिं नापं नापं।"], empty: ["Subcommittee names and members await verified records.", "उपसमितिका नाम र सदस्यहरूको विवरण पुष्टि हुन बाँकी छ।", "उपसमितिया नां व सदस्यतया विवरण पुष्टि जुइगु बाँकी दु।"] },
  presidents: { title: ["Past Presidents", "पूर्व अध्यक्षहरू", "न्हापाया अध्यक्षत"], lead: ["An archive of the Sangh’s leadership.", "संघको नेतृत्वको अभिलेख।", "संघया नेतृत्वया अभिलेख।"], empty: ["Presidents’ names, terms and portraits await verified records.", "अध्यक्षहरूको नाम, कार्यकाल र तस्बिर पुष्टि हुन बाँकी छ।", "अध्यक्षतया नां, कार्यकाल व किपा पुष्टि जुइगु बाँकी दु।"] },
  activities: { title: ["Activities & Events", "गतिविधि र कार्यक्रमहरू", "गतिविधि व कार्यक्रमत"], lead: ["Gatherings, culture and community life.", "भेला, संस्कृति र सामुदायिक जीवन।", "मुंकागु, संस्कृति व सामुदायिक जीवन।"], empty: ["No verified events have been published yet.", "पुष्टि भएका कार्यक्रमहरू हालसम्म प्रकाशित भएका छैनन्।", "पुष्टि जूगु कार्यक्रम थौं तक प्रकाशन जूगु मदु।"] },
  interviews: { title: ["Interviews", "अन्तर्वार्ताहरू", "अन्तर्वार्तात"], lead: ["Listening to the voices of our elders.", "हाम्रा अग्रजका आवाज सुन्दै।", "झीगु थकालीतया सः न्यनाः।"], empty: ["Interviews will appear here when recordings and transcripts are ready.", "रेकर्डिङ र प्रतिलिपि तयार भएपछि अन्तर्वार्ता यहाँ प्रकाशित हुनेछ।", "रेकर्डिङ व प्रतिलिपि तयार जुइधुंकाः अन्तर्वार्ता थन प्रकाशन जुइ।"] },
  forms: { title: ["Online Forms", "अनलाइन फारामहरू", "अनलाइन फारामत"], lead: ["Connect with the Sangh.", "संघसँग जोडिनुहोस्।", "संघ नाप ज्वानादिसँ।"], empty: ["Newsletter registration is open below. Other official forms await approval.", "तल समाचारपत्रको सदस्यता लिन सकिन्छ। अन्य आधिकारिक फाराम स्वीकृत हुन बाँकी छन्।", "क्वे समाचारपत्रया सदस्यता कायेफु। मेगु आधिकारिक फाराम स्वीकृत जुइगु बाँकी दु।"] },
  contact: { title: ["Contact", "सम्पर्क", "सम्पर्क"], lead: ["We would love to hear from you.", "हामी तपाईंका कुरा सुन्न चाहन्छौँ।", "झी छिगु खँ न्यने मति याना।"], empty: ["", "", ""] },
  blogs: { title: ["Latest Blogs", "नवीनतम ब्लगहरू", "न्हूगु ब्लगत"], lead: ["Reflections, heritage and community perspectives.", "विचार, सम्पदा र सामुदायिक दृष्टिकोण।", "विचार, सम्पदा व समुदायया दृष्टिकोण।"], empty: ["No blog articles have been published yet.", "हालसम्म ब्लग लेख प्रकाशित भएका छैनन्।", "थौं तक ब्लग लेख प्रकाशन जूगु मदु।"] },
};
export function ArchivePage({ kind }: { kind: ArchiveKind }) {
  const { tr } = useLanguage();
  const entry = copy[kind];
  return <><section className="relative overflow-hidden border-b border-border"><div className="mx-auto max-w-7xl px-6 py-20"><p className="eyebrow text-primary">{tr("Central Manandhar Sangh", "केन्द्रीय मानन्धर संघ", "केन्द्रीय मानन्धर संघ")}</p><h1 className="enter mt-5 max-w-4xl text-4xl md:text-6xl">{tr(...entry.title)}</h1><p className="mt-6 max-w-2xl text-muted-foreground">{tr(...entry.lead)}</p></div><HeritageSketch className="absolute -bottom-16 -right-12 w-80 text-primary/10" /></section>
    <section className="mx-auto max-w-7xl px-6 py-16"><Reveal>
      {kind === "contact" ? <div className="grid gap-12 md:grid-cols-2"><div><h2 className="text-3xl">{tr(siteContact.name, "केन्द्रीय मानन्धर संघ", "केन्द्रीय मानन्धर संघ")}</h2><p className="mt-6 flex items-start gap-3"><MapPin className="mt-1 size-5 shrink-0 text-primary" />{tr(siteContact.address, "छेत्रपाटी, काठमाडौं, नेपाल।", "छेत्रपाटी, येँ, नेपाल।")}</p><div className="mt-5 flex items-start gap-3"><Phone className="mt-1 size-5 text-primary" /><div>{siteContact.phones.map(phone => <a className="link-line block" href={`tel:+977${phone}`} key={phone}>{phone}</a>)}</div></div></div><div className="border-l border-border pl-8"><p className="eyebrow text-secondary">Facebook</p><a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2">{tr("Visit the Sangh on Facebook", "फेसबुकमा संघ हेर्नुहोस्", "फेसबुकय् संघ स्वयादिसँ")}<ArrowUpRight className="size-4" /></a></div></div> : <p className="max-w-2xl border-l-2 border-primary py-3 pl-6 text-muted-foreground">{tr(...entry.empty)}</p>}
      {kind === "about" && <Link to="/history" className="link-line mt-8 inline-flex items-center gap-2 text-secondary">{tr("Explore our history", "हाम्रो इतिहास हेर्नुहोस्", "झीगु इतिहास स्वयादिसँ")}<ArrowUpRight className="size-4" /></Link>}
    </Reveal></section>{kind === "forms" && <Newsletter />}</>;
}
export function archiveHead(title: string, description: string) {
  const fullTitle = `${title} — Central Manandhar Sangh`;
  return { meta: [{ title: fullTitle }, { name: "description", content: description }, { property: "og:title", content: fullTitle }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}