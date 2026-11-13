import { createFileRoute } from "@tanstack/react-router";
import { archiveHead } from "@/components/site/ArchivePage";
import { ServiceDirectory } from "@/components/site/ServiceDirectory";
import { PageIntro } from "@/components/site/Reveal";
import { useLanguage } from "@/components/site/Language";

export const Route = createFileRoute("/service-directory")({
  head: () => archiveHead("Community Service Directory", "Search sample listings for electricians, appliance technicians and services from the Manandhar community."),
  component: Page,
});
function Page() {
  const { tr } = useLanguage();
  return <><PageIntro eyebrow={tr("Community service directory", "सामुदायिक सेवा डाइरेक्टरी", "सामुदायिक सेवा डाइरेक्टरी")} title={tr("Find a helping hand.", "सहयोगी हात खोज्नुहोस्।", "सहयोगी ल्हात मालादिसँ।")} lead={tr("A categorized, searchable preview for finding practical skills and services within the Manandhar community.", "मानन्धर समुदायभित्रका सीप र सेवा खोज्ने वर्गीकृत नमूना।", "मानन्धर समुदायया सीप व सेवा मालेगु वर्गीकृत नमूना।")} /><ServiceDirectory /></>;
}
