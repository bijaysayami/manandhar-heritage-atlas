import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Heart, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import skyline from "@/assets/footer-skyline.png.asset.json";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./Language";
import { HeaderInfo } from "./HeaderInfo";
import { siteContact } from "@/lib/site-info";

const about = [
  { to: "/about", label: ["Who we are", "हामी को हौँ", "झी सु खः"] },
  { to: "/history", label: ["Our History", "हाम्रो इतिहास", "झीगु इतिहास"] },
  { to: "/committee-members", label: ["Committee Members", "कार्यसमिति सदस्यहरू", "कार्यसमिति सदस्यत"] },
  { to: "/sub-committees", label: ["Sub Committees", "उपसमितिहरू", "उपसमितित"] },
  { to: "/past-presidents", label: ["Past Presidents", "पूर्व अध्यक्षहरू", "न्हापाया अध्यक्षत"] },
] as const;
const nav = [
  { to: "/twa-directory", label: ["Twa Directory", "त्वाः डाइरेक्टरी", "त्वाः डाइरेक्टरी"] },
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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const on = () => setScrolled(window.scrollY > 120); on(); window.addEventListener("scroll", on, { passive: true }); return () => window.removeEventListener("scroll", on); }, []);
  const { tr, language, setLanguage } = useLanguage();
  return <><header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur lg:static lg:border-b-0 lg:bg-background lg:backdrop-blur-none">
    <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 py-3 sm:flex sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
      <Link to="/" className="flex min-w-0 items-center gap-3"><img src={logo.url} alt={tr("Central Manandhar Sangh logo", "केन्द्रीय मानन्धर संघको लोगो", "केन्द्रीय मानन्धर संघया लोगो")} width={54} height={54} className="size-12 shrink-0 md:size-14" /><span className="min-w-0"><span className="deva block text-base text-primary md:text-xl">केन्द्रीय मानन्धर संघ</span><span className="hidden text-xs text-muted-foreground sm:block">Central Manandhar Sangh · ने.सं. १०७४</span></span></Link>
      <HeaderInfo />
      <div className="flex shrink-0 items-center gap-1 sm:gap-2"><div className="flex flex-col items-end gap-1"><span id="lang-label" className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">{tr("Choose Language", "भाषा छान्नुहोस्", "भाय् ल्यये")}</span><div role="radiogroup" aria-labelledby="lang-label" aria-label="Language" className="flex rounded-full border border-border bg-muted/60 p-0.5">{([["en", "English", "EN"], ["ne", "नेपाली", "ने"], ["new", "नेपाल भाषा", "नेभा"]] as const).map(([code, label, short]) => <button key={code} type="button" role="radio" aria-checked={language === code} aria-label={label} onClick={() => setLanguage(code)} className={`rounded-full px-2.5 py-1.5 text-xs transition-colors duration-200 sm:px-3.5 ${code === "en" ? "" : "deva"} ${language === code ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}><span className="sm:hidden">{short}</span><span className="hidden sm:inline">{label}</span></button>)}</div></div><Button variant="ghost" size="icon" className="size-11 shrink-0 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile" className="mobile-navigation max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain border-t border-border px-4 pb-5 sm:px-6 lg:hidden"><Button variant="ghost" className="h-auto min-h-12 w-full justify-between whitespace-normal border-b border-border px-0 text-primary" aria-expanded={aboutOpen} aria-controls="mobile-about-submenu" onClick={() => setAboutOpen(!aboutOpen)}>{tr("About Us", "हाम्रो बारेमा", "झीगु बारेय्")}<ChevronDown className={`shrink-0 transition-transform ${aboutOpen ? "rotate-180" : ""}`} /></Button>{aboutOpen && <div id="mobile-about-submenu" className="mobile-navigation border-l-2 border-primary/30 pl-3">{about.map(n => <Link key={n.to} to={n.to} onClick={() => { setOpen(false); setAboutOpen(false); }} className="flex min-h-12 items-center border-b border-border py-3 text-sm">{tr(n.label[0], n.label[1], n.label[2])}</Link>)}</div>}{nav.map(n => <Link key={n.to} to={n.to} onClick={() => { setOpen(false); setAboutOpen(false); }} className="flex min-h-12 items-center border-b border-border py-3">{tr(n.label[0], n.label[1], n.label[2])}</Link>)}</nav>}
  </header>
    <div className="sticky top-0 z-40 hidden border-y border-border/60 bg-background/70 backdrop-blur-xl backdrop-saturate-150 lg:block"><nav className="menu-roof mx-auto flex text-[13px] uppercase tracking-[0.06em] max-w-7xl items-center justify-between gap-2 px-6" aria-label="Main"><Link to="/" aria-label={tr("Home", "गृहपृष्ठ", "मूपौ")} tabIndex={scrolled ? 0 : -1} aria-hidden={!scrolled} className={`shrink-0 overflow-hidden transition-all duration-300 ${scrolled ? "w-8 opacity-100" : "w-0 opacity-0"}`}><img src={logo.url} alt="" width={32} height={32} className="size-8 max-w-none" /></Link>
      <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setAboutOpen(false); }} onKeyDown={event => { if (event.key === "Escape") setAboutOpen(false); }}><Button variant="ghost" onClick={() => setAboutOpen(!aboutOpen)} aria-expanded={aboutOpen} aria-controls="about-submenu" className="h-12 px-0 text-xs uppercase hover:bg-transparent hover:text-primary">{tr("About Us", "हाम्रो बारेमा", "झीगु बारेय्")}<ChevronDown className={`transition ${aboutOpen ? "rotate-180" : ""}`} /></Button><div id="about-submenu" inert={!aboutOpen} aria-hidden={!aboutOpen} data-open={aboutOpen} className="about-submenu absolute left-0 top-full w-60 pt-2"><div className="border border-border bg-popover py-2 shadow-lg">{about.map(n => <Link key={n.to} to={n.to} onClick={() => setAboutOpen(false)} className="block px-5 py-3 text-sm hover:bg-muted focus:bg-muted">{tr(n.label[0], n.label[1], n.label[2])}</Link>)}</div></div></div>
      {nav.map(n => <Button key={n.to} asChild variant="ghost" className="h-12 px-1 text-xs hover:bg-transparent hover:text-primary"><Link to={n.to} activeProps={{ className: "text-primary" }}>{tr(n.label[0], n.label[1], n.label[2])}</Link></Button>)}
    </nav></div>
  </>;
}
export function Footer() {
  const { tr } = useLanguage();
  return <footer className="relative overflow-hidden bg-wood text-wood-foreground"><div aria-hidden="true" className="patasi-border" /><img src={skyline.url} alt="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 w-full select-none opacity-25" /><div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12">
    <div className="md:col-span-4"><img src={logo.url} alt="" width={64} height={64} className="size-16 rounded-full bg-card p-1" /><p className="deva mt-5 text-2xl">केन्द्रीय मानन्धर संघ</p><p className="mt-2 text-sm text-wood-foreground/60">Central Manandhar Sangh · ने.सं. १०७४</p><p className="mt-5 max-w-xs text-sm text-wood-foreground/70">{tr("Living heritage. Connected generations.", "जीवन्त सम्पदा। जोडिएका पुस्ताहरू।", "म्वाःगु सम्पदा। ज्वानाच्वंगु पुस्तात।")}</p><SocialLinks /></div>
    <div className="md:col-span-4"><p className="eyebrow text-wood-foreground/50">{tr("Explore", "अन्वेषण", "स्वयादिसँ")}</p><ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">{[about[0], ...nav].map(n => <li key={n.to}><Link to={n.to} className="link-line">{tr(n.label[0], n.label[1], n.label[2])}</Link></li>)}</ul></div>
    <div className="md:col-span-4"><p className="eyebrow text-wood-foreground/50">{tr("Contact", "सम्पर्क", "सम्पर्क")}</p><p className="mt-5">{tr(siteContact.name, "केन्द्रीय मानन्धर संघ", "केन्द्रीय मानन्धर संघ")}</p><p className="mt-2 flex items-start gap-2 text-sm text-wood-foreground/70"><MapPin className="mt-1 size-4 shrink-0" />{tr(siteContact.address, "छेत्रपाटी, काठमाडौं, नेपाल।", "छेत्रपाटी, येँ, नेपाल।")}</p><div className="mt-4 flex items-start gap-2 text-sm"><Phone className="mt-1 size-4" /><div>{siteContact.phones.map(phone => <a className="link-line block" key={phone} href={`tel:+977${phone}`}>{phone}</a>)}</div></div></div>
  </div><div className="relative border-t border-wood-foreground/15 bg-foreground"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 py-5 text-xs text-wood-foreground/60"><p>© 2026 {tr("Central Manandhar Sangh. All rights reserved.", "केन्द्रीय मानन्धर संघ। सर्वाधिकार सुरक्षित।", "केन्द्रीय मानन्धर संघ। सकल अधिकार सुरक्षित।")}</p><p className="inline-flex items-center gap-1.5">Crafted with <Heart aria-label="love" className="size-3.5 fill-primary text-primary" /> by <span className="text-wood-foreground">Codeilo Solutions</span></p></div></div></footer>;
}
