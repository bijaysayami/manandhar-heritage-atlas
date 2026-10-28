import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage, archiveHead } from "@/components/site/ArchivePage";
export const Route = createFileRoute("/activities")({
  head: () => archiveHead("Activities & Events", "Activities & Events of Central Manandhar Sangh — community, heritage and connection."),
  component: Page,
});
function Page() { return <ArchivePage kind="activities" />; }
