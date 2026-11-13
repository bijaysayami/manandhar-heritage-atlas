import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, BookOpen } from "lucide-react";
import { faceEntries } from "@/data/community-hub";
import { Button } from "@/components/ui/button";
import elder from "@/assets/elder.jpg";
import meeting from "@/assets/sample-meeting.jpg";
import books from "@/assets/sample-books.jpg";
import { useLanguage } from "./Language";
import { Reveal } from "./Reveal";
import { HeritageSketch } from "./HeritageSketch";

const images = { elder, meeting, books };

export function FaceOfMonthFeature() {
  const { tr } = useLanguage();
  const face = faceEntries[0]!;
  return <section className="relative overflow-hidden border-y border-border bg-muted/25">
    <HeritageSketch variant="cymbals" className="absolute -left-12 bottom-0 w-64 text-primary/15" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:gap-14">
      <Reveal className="md:col-span-5">
        <div className="relative mx-auto max-w-md md:mx-0"><div className="img-zoom aspect-[4/5] border border-border bg-background p-3"><img src={images[face.image]} alt={tr("Illustrative portrait for a sample contributor", "नमूना योगदानकर्ताका लागि चित्रात्मक तस्बिर", "नमूना योगदानकर्ताया निंतिं चित्रात्मक किपा")} className="h-full w-full object-cover" loading="lazy" /></div><span className="absolute bottom-6 left-6 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{tr("Sample profile", "नमूना प्रोफाइल", "नमूना प्रोफाइल")}</span></div>
        <p className="mt-3 text-xs text-muted-foreground">{tr("Illustrative image · Not a real featured person", "चित्रात्मक तस्बिर · वास्तविक व्यक्ति प्रस्तुत गरिएको होइन", "चित्रात्मक किपा · वास्तविक मनू क्यनातःगु मखु")}</p>
      </Reveal>
      <div className="md:col-span-7">
        <Reveal><p className="eyebrow flex items-center gap-2 text-primary"><Award className="size-4" />{tr("Face of the Month", "फेस अफ द मन्थ", "फेस अफ द मन्थ")}</p><h2 className="mt-4 text-4xl md:text-5xl">{tr(...face.name)}</h2><p className="mt-3 font-display text-xl italic text-secondary">{tr(...face.role)}</p></Reveal>
        <Reveal delay={100}><p className="mt-7 text-lg leading-relaxed">{tr(...face.introduction)}</p></Reveal>
        <Reveal delay={180}><div className="mt-7 border-l-2 border-primary pl-5"><p className="eyebrow text-muted-foreground">{tr("Contribution in detail", "योगदानको विस्तृत विवरण", "योगदानया विस्तृत विवरण")}</p><p className="mt-3 text-muted-foreground">{tr(...face.contribution)}</p></div></Reveal>
        <Reveal delay={240} className="mt-8 flex flex-wrap gap-3"><Button asChild><Link to="/face-of-the-month">{tr("Read the feature", "पूरा परिचय पढ्नुहोस्", "पूरा परिचय पढेयादिसँ")}<ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/face-of-the-month-archive"><BookOpen />{tr("View the archive", "अभिलेख हेर्नुहोस्", "अभिलेख स्वयादिसँ")}</Link></Button></Reveal>
      </div>
    </div>
  </section>;
}

export function FaceArchive({ compact = false }: { compact?: boolean }) {
  const { tr } = useLanguage();
  const entries = compact ? faceEntries.slice(1) : faceEntries;
  return <div className="grid gap-8 md:grid-cols-3">{entries.map((face, index) => <Reveal key={face.id} delay={index * 90} className="min-w-0"><article className="flex h-full min-w-0 flex-col border-t-2 border-primary/60 pt-5"><div className="img-zoom aspect-[16/10]"><img src={images[face.image]} alt="" loading="lazy" className="h-full w-full object-cover" /></div><p className="eyebrow mt-5 text-primary">{tr("Sample archive", "नमूना अभिलेख", "नमूना अभिलेख")}</p><h2 className="mt-3 break-words text-2xl">{tr(...face.name)}</h2><p className="mt-2 text-sm text-secondary">{tr(...face.role)}</p><p className="mt-4 text-muted-foreground">{tr(...face.introduction)}</p><p className="mt-4 border-l border-border pl-4 text-sm text-muted-foreground">{tr(...face.contribution)}</p></article></Reveal>)}</div>;
}
