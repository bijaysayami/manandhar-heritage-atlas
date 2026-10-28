import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage, archiveHead } from "@/components/site/ArchivePage";
export const Route = createFileRoute("/past-presidents")({
  head: () => archiveHead("Past Presidents", "Past Presidents of Central Manandhar Sangh — community, heritage and connection."),
  component: Page,
});
function Page() { return <ArchivePage kind="presidents" />; }
