import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Heart, MapPin, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./Language";
import { siteContact, languages } from "@/lib/site-info";

const about = [
  { to: "/about", label: ["Who we are", "हामी को हौँ", "झी सु खः"] },
  { to: "/history", label: ["Our History", "हाम्रो इतिहास", "झीगु इतिहास"] },
  { to: "/committee-members", label: ["Committee Members", "कार्यसमिति सदस्यहरू", "कार्यसमिति सदस्यत"] },
  { to: "/sub-committees", label: ["Sub Committees", "उपसमितिहरू", "उपसमितित"] },
  { to: "/past-presidents", label: ["Past Presidents", "पूर्व अध्यक्षहरू", "न्हापाया अध्यक्षत"] },
] as const;
const nav = [
  { to: "/twa-directory", label: ["Twa Directory", "त्वाः निर्देशिका", "त्वाः निर्देशिका"] },
  { to: "/activities", label: ["Activities", "गतिविधिहरू", "गतिविधित"] },
  { to: "/interviews", label: ["Interviews", "अन्तर्वार्ता", "अन्तर्वार्ता"] },
  { to: "/library", label: ["Publications", "प्रकाशनहरू", "प्रकाशनत"] },
  { to: "/gallery", label: ["Photo Galleries", "फोटो ग्यालरी", "किपा ग्यालरी"] },
  { to: "/online-forms", label: ["Online Forms", "अनलाइन फाराम", "अनलाइन फाराम"] },
  { to: "/stories", label: ["Stories", "कथाहरू", "बाखंत"] },
  { to: "/contact", label: ["Contact", "सम्पर्क", "सम्पर्क"] },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { tr, language, setLanguage } = useLanguage();
  return <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
      <Link to="/" className="flex min-w-0 items-center gap-3"><img src={logo.url} alt={tr("Central Manandhar Sangh logo", "केन्द्रीय मानन्धर संघको लोगो", "केन्द्रीय मानन्धर संघया लोगो")} width={54} height={54} className="size-12 shrink-0 md:size-14" /><span className="min-w-0"><span className="deva block text-base text-primary md:text-xl">केन्द्रीय मानन्धर संघ</span><span className="hidden text-xs text-muted-foreground sm:block">Central Manandhar Sangh · ने.सं. १०७४</span></span></Link>
      <div className="flex items-center gap-2"><Globe className="hidden size-4 text-muted-foreground sm:block" /><label className="sr-only" htmlFor="site-language">Language</label><select id="site-language" aria-label="Language" value={language} onChange={e => { const selected = languages.find(l => l === e.target.value); if (selected) setLanguage(selected); }} className="max-w-32 rounded-none border border-border bg-background px-2 py-2 text-xs outline-none focus:border-secondary"><option value="en">ENGLISH</option><option value="ne">नेपाली</option><option value="new">नेपाल भाषा</option></select><Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    <nav className="mx-auto hidden max-w-7xl items-center justify-between border-t border-border/60 px-6 lg:flex" aria-label="Main">
      <div className="relative"><Button variant="ghost" onClick={() => setAboutOpen(!aboutOpen)} aria-expanded={aboutOpen} className="h-12 px-0 text-xs uppercase hover:bg-transparent hover:text-primary">{tr("About Us", "हाम्रो बारेमा", "झीगु बारेय्")}<ChevronDown className={`transition ${aboutOpen ? "rotate-180" : ""}`} /></Button>{aboutOpen && <div className="absolute left-0 top-full w-60 border border-border bg-popover py-2 shadow-lg">{about.map(n => <Link key={n.to} to={n.to} onClick={() => setAboutOpen(false)} className="block px-5 py-3 text-sm hover:bg-muted">{tr(...n.label)}</Link>)}</div>}</div>
      {nav.map(n => <Button key={n.to} asChild variant="ghost" className="h-12 px-1 text-xs hover:bg-transparent hover:text-primary"><Link to={n.to} activeProps={{ className: "text-primary" }}>{tr(...n.label)}</Link></Button>)}
    </nav>
    {open && <nav aria-label="Mobile" className="max-h-[75vh] overflow-auto border-t border-border px-6 pb-5 lg:hidden"><p className="eyebrow pt-4 text-primary">{tr("About Us", "हाम्रो बारेमा", "झीगु बारेय्")}</p>{about.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-2 pl-3 text-sm">{tr(...n.label)}</Link>)}{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-3">{tr(...n.label)}</Link>)}</nav>}
  </header>;
}
export function Footer() {
  const { tr } = useLanguage();
  return <footer className="bg-wood text-wood-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
    <div className="md:col-span-4"><img src={logo.url} alt="" width={64} height={64} className="size-16 rounded-full bg-card p-1" /><p className="deva mt-5 text-2xl">केन्द्रीय मानन्धर संघ</p><p className="mt-2 text-sm text-wood-foreground/60">Central Manandhar Sangh · ने.सं. १०७४</p><p className="mt-5 max-w-xs text-sm text-wood-foreground/70">{tr("Living heritage. Connected generations.", "जीवन्त सम्पदा। जोडिएका पुस्ताहरू।", "म्वाःगु सम्पदा। ज्वानाच्वंगु पुस्तात।")}</p></div>
    <div className="md:col-span-4"><p className="eyebrow text-wood-foreground/50">{tr("Explore", "अन्वेषण", "स्वयादिसँ")}</p><ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">{[about[0], ...nav].map(n => <li key={n.to}><Link to={n.to} className="link-line">{tr(...n.label)}</Link></li>)}</ul></div>
    <div className="md:col-span-4"><p className="eyebrow text-wood-foreground/50">{tr("Contact", "सम्पर्क", "सम्पर्क")}</p><p className="mt-5">{tr(siteContact.name, "केन्द्रीय मानन्धर संघ", "केन्द्रीय मानन्धर संघ")}</p><p className="mt-2 flex items-start gap-2 text-sm text-wood-foreground/70"><MapPin className="mt-1 size-4 shrink-0" />{tr(siteContact.address, "छेत्रपाटी, काठमाडौं, नेपाल।", "छेत्रपाटी, येँ, नेपाल।")}</p><div className="mt-4 flex items-start gap-2 text-sm"><Phone className="mt-1 size-4" /><div>{siteContact.phones.map(phone => <a className="link-line block" key={phone} href={`tel:+977${phone}`}>{phone}</a>)}</div></div></div>
  </div><div className="border-t border-wood-foreground/15"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-5 text-xs text-wood-foreground/60"><p>© 2026 {tr("Central Manandhar Sangh. All rights reserved.", "केन्द्रीय मानन्धर संघ। सर्वाधिकार सुरक्षित।", "केन्द्रीय मानन्धर संघ। सकल अधिकार सुरक्षित।")}</p><p className="inline-flex items-center gap-1.5">Crafted with <Heart aria-label="love" className="size-3.5 fill-primary text-primary" /> by <span className="text-wood-foreground">Codeilo Solutions</span></p></div></div></footer>;
}
