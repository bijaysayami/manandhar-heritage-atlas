import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage, archiveHead } from "@/components/site/ArchivePage";
export const Route = createFileRoute("/contact")({
  head: () => archiveHead("Contact", "Contact of Central Manandhar Sangh — community, heritage and connection."),
  component: Page,
});
function Page() { return <ArchivePage kind="contact" />; }
