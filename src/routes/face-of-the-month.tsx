import { createFileRoute } from "@tanstack/react-router";
import { archiveHead } from "@/components/site/ArchivePage";
import { FaceArchive, FaceOfMonthFeature } from "@/components/site/FaceOfMonth";
import { PageIntro, PendingNote } from "@/components/site/Reveal";
import { useLanguage } from "@/components/site/Language";

export const Route = createFileRoute("/face-of-the-month")({
  head: () => archiveHead("Face of the Month", "A preview of detailed introductions and contributions from Manandhar community members."),
  component: Page,
});
function Page() {
  const { tr } = useLanguage();
  return <><PageIntro eyebrow={tr("People of our community", "हाम्रा समुदायका व्यक्तिहरू", "झीगु समुदायया मनूत")} title={tr("Face of the Month.", "फेस अफ द मन्थ।", "फेस अफ द मन्थ।")} lead={tr("A place to know the person behind a contribution and preserve their story with permission.", "योगदान पछाडिको व्यक्तिलाई चिन्न र सहमतिसहित कथा संरक्षण गर्ने स्थान।", "योगदान लिपाया मनू म्हसीगु व सहमतिं बाखं संरक्षण याइगु थास।")} /><FaceOfMonthFeature /><section className="mx-auto max-w-7xl px-6 py-20"><p className="eyebrow text-primary">{tr("From the archive", "अभिलेखबाट", "अभिलेखं")}</p><h2 className="mb-10 mt-3 text-3xl md:text-4xl">{tr("Every contribution leaves a story.", "हरेक योगदानले कथा छोड्छ।", "सकल योगदानं बाखं त्वंकी।")}</h2><FaceArchive compact /><div className="mt-10"><PendingNote>{tr("All profiles on this page are fictional samples. Verified names, portraits and contributions will be published only after approval.", "यस पृष्ठका सबै प्रोफाइल काल्पनिक नमूना हुन्। पुष्टि र स्वीकृतिपछि मात्र वास्तविक नाम, तस्बिर र योगदान प्रकाशित हुनेछ।", "थ्व पौया सकल प्रोफाइल काल्पनिक नमूना खः। पुष्टि व स्वीकृति धुंकाः जक वास्तविक नां, किपा व योगदान प्रकाशन जुइ।")}</PendingNote></div></section></>;
}
