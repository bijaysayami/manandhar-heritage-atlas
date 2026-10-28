import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage, archiveHead } from "@/components/site/ArchivePage";
export const Route = createFileRoute("/committee-members")({
  head: () => archiveHead("Committee Members", "Committee Members of Central Manandhar Sangh — community, heritage and connection."),
  component: Page,
});
function Page() { return <ArchivePage kind="committee" />; }
