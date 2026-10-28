import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage, archiveHead } from "@/components/site/ArchivePage";
export const Route = createFileRoute("/interviews")({
  head: () => archiveHead("Interviews", "Interviews of Central Manandhar Sangh — community, heritage and connection."),
  component: Page,
});
function Page() { return <ArchivePage kind="interviews" />; }
