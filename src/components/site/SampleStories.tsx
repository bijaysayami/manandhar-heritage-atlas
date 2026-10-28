import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sampleEvents, sampleBlogs, type SampleStory } from "@/data/homepage-samples";
import festival from "@/assets/festival.jpg";
import meeting from "@/assets/sample-meeting.jpg";
import books from "@/assets/sample-books.jpg";
import windowImage from "@/assets/window.jpg";
import elder from "@/assets/elder.jpg";
import { useLanguage } from "./Language";
import { Reveal } from "./Reveal";
import { HeritageSketch } from "./HeritageSketch";

const images = { festival, meeting, books, window: windowImage, elder };
export function SampleStories({ kind, homepage = false }: { kind: "events" | "blogs"; homepage?: boolean }) {
  const { tr } = useLanguage();
  const [selected, setSelected] = useState<SampleStory | null>(null);
  const events = kind === "events";
  const entries = events ? sampleEvents : sampleBlogs;
  return <section className={`relative overflow-hidden border-b border-border ${events ? "bg-muted/25" : "bg-background"}`}>
    <HeritageSketch variant={events ? "flute" : "cymbals"} className={`absolute w-64 text-secondary/20 ${events ? "-right-12 top-0" : "-left-16 bottom-0"}`} />
    <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-primary">{events ? tr("Around the community", "समुदायमा", "समुदायय्") : tr("From the journal", "ब्लगबाट", "ब्लगं")}</p><h2 className="mt-3 text-3xl md:text-4xl">{events ? tr("Latest Events", "नवीनतम कार्यक्रमहरू", "न्हूगु कार्यक्रमत") : tr("Latest Blogs", "नवीनतम ब्लगहरू", "न्हूगु ब्लगत")}</h2></div>{homepage && <Link to={events ? "/activities" : "/blogs"} className="inline-flex items-center gap-2 text-sm text-secondary">{tr("View all", "सबै हेर्नुहोस्", "सकल स्वयादिसँ")}<ArrowUpRight className="size-4" /></Link>}</Reveal>
      <p className="mt-4 text-sm text-muted-foreground">{tr("Sample stories · Illustrative photos · Not official Sangh records", "नमूना कथा · चित्रात्मक तस्बिर · संघका आधिकारिक अभिलेख होइनन्", "नमूना बाखं · चित्रात्मक किपा · संघया आधिकारिक अभिलेख मखु")}</p>
      <div className="mt-8 grid gap-9 md:grid-cols-3">{entries.map((story, i) => <Reveal key={story.id} delay={i * 90}><article className="group"><div className={`img-zoom relative ${events && i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`}><img src={images[story.image]} alt={tr(...story.title)} width={1280} height={960} loading="lazy" className="h-full w-full object-cover" /><span className="absolute bottom-3 left-3 bg-background/95 px-2 py-1 text-xs text-foreground">{tr("Sample", "नमूना", "नमूना")}</span></div><p className="eyebrow mt-5 text-primary">{tr(...story.category)}</p><h3 className="mt-3 text-2xl">{tr(...story.title)}</h3><p className="mt-4 text-muted-foreground">{tr(...story.summary)}</p><Button variant="link" className="mt-3 h-auto px-0 text-secondary" onClick={() => setSelected(story)}>{events ? tr("View story", "कथा हेर्नुहोस्", "बाखं स्वयादिसँ") : tr("Read article", "लेख पढ्नुहोस्", "लेख पढेयादिसँ")}<ArrowRight className="size-4" /></Button></article></Reveal>)}</div>
    </div>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">{selected && <><p className="eyebrow text-primary">{tr("Sample story · Not an official record", "नमूना कथा · आधिकारिक अभिलेख होइन", "नमूना बाखं · आधिकारिक अभिलेख मखु")}</p><DialogTitle className="pr-6 font-display text-3xl">{tr(...selected.title)}</DialogTitle><DialogDescription>{tr(...selected.summary)}</DialogDescription><img src={images[selected.image]} width={1280} height={960} alt={tr(...selected.title)} className="aspect-[16/9] w-full object-cover" /><p className="leading-relaxed">{tr(...selected.body)}</p></>}</DialogContent></Dialog>
  </section>;
}