import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, CalendarDays, BookOpen, Users, Headphones, Facebook } from "lucide-react";
import hero from "@/assets/hero-courtyard.jpg";
import windowImg from "@/assets/window.jpg";
import festival from "@/assets/festival.jpg";
import library from "@/assets/library.jpg";
import elder from "@/assets/elder.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeritageSketch } from "@/components/site/HeritageSketch";
import { SampleStories } from "@/components/site/SampleStories";
import { Newsletter } from "@/components/site/Newsletter";
import { useLanguage } from "@/components/site/Language";
import { Button } from "@/components/ui/button";
import { facebookUrl } from "@/lib/site-info";
import { archiveHead } from "@/components/site/ArchivePage";

export const Route = createFileRoute("/")({
  head: () => archiveHead("Living Heritage, Connected Generations", "Central Manandhar Sangh — history, twas, publications, events and community stories. केन्द्रीय मानन्धर संघ, ने.सं. १०७४."),
  component: Index,
});
function Index() {
  const { tr } = useLanguage();
  const features = [
    { to: "/twa-directory", icon: Users, title: tr("Twa Directory", "त्वाः डाइरेक्टरी", "त्वाः डाइरेक्टरी"), text: tr("Our neighbourhoods", "हाम्रा छिमेकहरू", "झीगु त्वाःत") },
    { to: "/history", icon: CalendarDays, title: tr("Our History", "हाम्रो इतिहास", "झीगु इतिहास"), text: tr("From ने.सं. १०७४", "ने.सं. १०७४ देखि", "ने.सं. १०७४ निसें") },
    { to: "/library", icon: BookOpen, title: tr("Publications", "प्रकाशनहरू", "प्रकाशनत"), text: tr("The community archive", "सामुदायिक अभिलेख", "समुदायया अभिलेख") },
    { to: "/interviews", icon: Headphones, title: tr("Interviews", "अन्तर्वार्ताहरू", "अन्तर्वार्तात"), text: tr("Voices of our elders", "हाम्रा अग्रजका आवाज", "झीगु थकालीतया सः") },
  ] as const;
  return <>
    <section className="relative isolate overflow-hidden bg-wood text-wood-foreground">
      <img src={hero} alt={tr("Illustrative traditional Newar courtyard", "नेवार आँगनको चित्रात्मक तस्बिर", "नेवाः चुकया चित्रात्मक किपा")} width={1280} height={1600} className="hero-image absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[580px] max-w-7xl flex-col justify-center px-6 py-20 md:min-h-[620px] md:py-24">
        <p className="eyebrow enter text-wood-foreground/80">{tr("Community · Culture · Continuity", "समुदाय · संस्कृति · निरन्तरता", "समुदाय · संस्कृति · निरन्तरता")}</p>
        <h1 className="enter mt-6 max-w-4xl text-4xl leading-[1.18] md:text-6xl">{tr("Central Manandhar", "केन्द्रीय मानन्धर", "केन्द्रीय मानन्धर")}<br />{tr("Sangh", "संघ", "संघ")}</h1>
        <p className="enter mt-6 max-w-xl font-display text-xl italic md:text-2xl">{tr("Living heritage, connected generations.", "जीवन्त सम्पदा, जोडिएका पुस्ताहरू।", "म्वाःगु सम्पदा, ज्वानाच्वंगु पुस्तात।")}</p>
        <p className="enter mt-5 max-w-lg text-wood-foreground/80">{tr("A home for our history, our twas and the stories that bring us together.", "हाम्रो इतिहास, हाम्रा त्वाः र हामीलाई जोड्ने कथाहरूको साझा घर।", "झीगु इतिहास, झीगु त्वाः व झीत ज्वाइगु बाखंया साझा छेँ।")}</p>
        <div className="enter mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12"><Link to="/about">{tr("Discover the Sangh", "संघलाई चिन्नुहोस्", "संघ म्हस्यादिसँ")}<ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 border-wood-foreground/40 bg-transparent text-wood-foreground hover:bg-wood-foreground hover:text-wood"><Link to="/twa-directory">{tr("Find your twa", "आफ्नो त्वाः खोज्नुहोस्", "छिगु त्वाः मालादिसँ")}</Link></Button></div>
        <p className="mt-10 text-xs text-wood-foreground/65">{tr("Established", "स्थापना", "स्थापना")} ने.सं. १०७४</p>
      </div><p className="absolute bottom-3 right-5 text-[10px] text-wood-foreground/60">{tr("Illustrative heritage imagery", "चित्रात्मक सम्पदा तस्बिर", "चित्रात्मक सम्पदा किपा")}</p>
    </section>
    <section className="border-b border-border"><div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">{features.map(f => <Link key={f.to} to={f.to} className="group flex min-w-0 items-center gap-4 border-border py-7 pr-4 even:pl-4 md:border-r md:pl-6 md:first:pl-0 md:last:border-0"><f.icon className="size-6 shrink-0 text-primary transition group-hover:-translate-y-1" /><span className="min-w-0"><span className="block text-sm font-semibold md:text-base">{f.title}</span><span className="mt-1 block text-xs text-muted-foreground">{f.text}</span></span></Link>)}</div></section>
    <section className="relative overflow-hidden"><HeritageSketch className="absolute -right-10 bottom-0 w-[420px] max-w-full text-primary/25" /><HeritageSketch variant="pole" className="absolute -left-20 top-5 w-64 text-secondary/15" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:gap-16"><Reveal className="md:col-span-4"><p className="eyebrow text-primary">{tr("The Sangh", "संघ", "संघ")}</p><h2 className="mt-4 text-3xl md:text-4xl">{tr("Our roots. Our shared future.", "हाम्रो जरा। हाम्रो साझा भविष्य।", "झीगु मूल। झीगु साझा भविष्य।")}</h2></Reveal><Reveal delay={120} className="md:col-span-7 md:col-start-6"><p className="max-w-2xl text-xl leading-relaxed">{tr("Our heritage lives in the places we gather, the crafts we practise and the memories we pass on. This is a shared space for the Manandhar community — across neighbourhoods and generations.", "हाम्रो सम्पदा हामी भेला हुने ठाउँ, अभ्यास गर्ने शिल्प र हस्तान्तरण गर्ने सम्झनामा जीवित छ। यो मानन्धर समुदायका लागि छिमेक र पुस्ताहरूलाई जोड्ने साझा स्थान हो।", "झीगु सम्पदा झी मुंनिगु थास, झी याइगु शिल्प व झी बिइगु सम्झनाय् म्वाः। थ्व मानन्धर समुदायया निंतिं त्वाः व पुस्तात ज्वाइगु साझा थास खः।")}</p><Link to="/about" className="link-line mt-6 inline-flex items-center gap-2 text-secondary">{tr("More about us", "हाम्रो बारेमा थप", "झीगु बारेय् थप")}<ArrowRight className="size-4" /></Link></Reveal></div></section>
    <SampleStories kind="events" homepage />
    <SampleStories kind="blogs" homepage />
    <section className="relative isolate mx-auto max-w-7xl px-6 py-20"><HeritageSketch variant="press" className="absolute -right-4 -top-6 -z-10 w-72 max-w-full text-primary/20" /><Reveal className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow text-primary">{tr("Explore the archive", "अभिलेख अन्वेषण", "अभिलेख स्वयादिसँ")}</p><h2 className="mt-4 text-3xl md:text-4xl">{tr("Places, pages & people.", "स्थान, पृष्ठ र व्यक्तिहरू।", "थास, पृष्ठ व मनूत।")}</h2></div><Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-secondary">{tr("Photo galleries", "फोटो ग्यालरी", "किपा ग्यालरी")}<ArrowUpRight className="size-4" /></Link></Reveal><div className="mt-10 grid gap-8 md:grid-cols-3">{[{ to: "/twa-directory", img: windowImg, title: tr("Every twa, a doorway home.", "हरेक त्वाः, घरको ढोका।", "सकल त्वाः, छेँया लुखा।"), tag: tr("Twa Directory", "त्वाः डाइरेक्टरी", "त्वाः डाइरेक्टरी") }, { to: "/library", img: library, title: tr("Our words, preserved.", "हाम्रा शब्द, संरक्षित।", "झीगु खँ, संरक्षण जूगु।"), tag: tr("Publications", "प्रकाशनहरू", "प्रकाशनत") }, { to: "/interviews", img: elder, title: tr("A generation of stories.", "एक पुस्ताका कथाहरू।", "छगू पुस्ताया बाखंत।"), tag: tr("Interviews", "अन्तर्वार्ता", "अन्तर्वार्ता") }].map((item, i) => <Reveal key={item.to} delay={i * 100}><Link to={item.to} className="group block"><div className="img-zoom aspect-[4/3]"><img src={item.img} alt={item.tag} loading="lazy" className="h-full w-full object-cover" /></div><p className="eyebrow mt-5 text-primary">{item.tag}</p><h3 className="mt-3 flex items-start justify-between gap-4 text-2xl">{item.title}<ArrowUpRight className="mt-1 size-5 shrink-0 transition group-hover:-translate-y-1" /></h3></Link></Reveal>)}</div><p className="mt-6 text-xs text-muted-foreground">{tr("Illustrative images; verified community photographs will replace them.", "चित्रात्मक तस्बिरहरू; पुष्टि भएका सामुदायिक तस्बिरले प्रतिस्थापन गर्नेछन्।", "चित्रात्मक किपात; पुष्टि जूगु समुदायया किपां साटिइ।")}</p></section>
    <section className="bg-secondary text-secondary-foreground"><div className="mx-auto grid max-w-7xl md:grid-cols-2"><img src={festival} alt={tr("Illustrative Newar festival procession", "नेवार जात्राको चित्रात्मक तस्बिर", "नेवाः जात्राया चित्रात्मक किपा")} loading="lazy" className="h-full min-h-72 w-full object-cover" /><div className="flex flex-col justify-center px-6 py-14 md:px-12"><Reveal><p className="eyebrow opacity-70">{tr("Community updates", "सामुदायिक समाचार", "समुदायया समाचार")}</p><h2 className="mt-4 text-3xl md:text-4xl">{tr("Follow the Sangh.", "संघलाई पछ्याउनुहोस्।", "संघ नाप ज्वानादिसँ।")}</h2><p className="mt-5 text-secondary-foreground/75">{tr("The latest announcements and photographs on our Facebook profile.", "हाम्रो फेसबुक प्रोफाइलमा नवीनतम सूचना र तस्बिरहरू।", "झीगु फेसबुक प्रोफाइलय् न्हूगु सूचना व किपात।")}</p><Button asChild variant="outline" className="mt-6 h-11 border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"><a href={facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook />{tr("View Facebook updates", "फेसबुकका समाचार हेर्नुहोस्", "फेसबुकया समाचार स्वयादिसँ")}<ArrowUpRight /></a></Button><p className="mt-4 text-xs text-secondary-foreground/60">{tr("This profile’s live feed is not available for embedding.", "यस प्रोफाइलको प्रत्यक्ष फिड यहाँ देखाउन उपलब्ध छैन।", "थ्व प्रोफाइलया प्रत्यक्ष फिड थन क्यने उपलब्ध मदु।")}</p></Reveal></div></div></section>
    <Newsletter />
  </>;
}
