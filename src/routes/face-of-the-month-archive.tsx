import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { archiveHead } from "@/components/site/ArchivePage";
import { FaceArchive } from "@/components/site/FaceOfMonth";
import { PageIntro, PendingNote } from "@/components/site/Reveal";
import { useLanguage } from "@/components/site/Language";

export const Route = createFileRoute("/face-of-the-month-archive")({
  head: () => archiveHead("Face of the Month Archive", "The sample archive of Manandhar community introductions and contributions."),
  component: Page,
});
function Page() {
  const { tr } = useLanguage();
  return <><PageIntro eyebrow={tr("Face of the Month", "फेस अफ द मन्थ", "फेस अफ द मन्थ")} title={tr("The contributor archive.", "योगदानकर्ताको अभिलेख।", "योगदानकर्ताया अभिलेख।")} lead={tr("A growing record of people, their work and the difference they have made.", "व्यक्ति, कार्य र उहाँहरूले पारेको परिवर्तनको बढ्दो अभिलेख।", "मनूत, ज्या व परिवर्तनया अभिलेख।")} /><section className="mx-auto max-w-7xl px-6 py-16"><Link to="/face-of-the-month" className="link-line mb-10 inline-flex items-center gap-2 text-secondary"><ArrowLeft className="size-4" />{tr("Current feature", "हालको प्रस्तुति", "आचाःगु प्रस्तुति")}</Link><FaceArchive /><div className="mt-12"><PendingNote>{tr("This archive contains layout samples only, not real honourees or verified community records.", "यस अभिलेखमा वास्तविक व्यक्ति होइन, नमूना डिजाइन मात्र छ।", "थ्व अभिलेखय् वास्तविक मनू मखु, नमूना डिजाइन जक दु।")}</PendingNote></div></section></>;
}
