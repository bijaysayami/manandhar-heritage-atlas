import { facebookUrl } from "@/lib/site-info";

const paths: Record<string, string> = {
  Facebook: "M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6Z",
  YouTube: "M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15.2V8.8l5.2 3.2Z",
  TikTok: "M16.5 3c.4 2.2 1.8 3.7 4 4v3.2c-1.5 0-2.9-.5-4-1.2v6.5a6 6 0 1 1-6-6h.5v3.3a2.8 2.8 0 1 0 2.3 2.7V3Z",
  LinkedIn: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4Z",
  X: "M17.8 3h3.2l-7 8 8.2 10h-6.4l-5-6.3L5 21H1.8l7.5-8.6L1.5 3H8l4.5 5.8Zm-1.1 16h1.8L7.4 4.9H5.5Z",
};

// Only Facebook has a confirmed address; others stay inactive until real links are provided.
const links: [string, string | null][] = [["Facebook", facebookUrl], ["YouTube", null], ["TikTok", null], ["LinkedIn", null], ["X", null]];

export function SocialLinks() {
  return <ul className="mt-6 flex gap-2">{links.map(([name, href]) => {
    const icon = <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d={paths[name]} /></svg>;
    const cls = "grid size-9 place-items-center rounded-full border border-wood-foreground/20 transition-colors";
    return <li key={name}>{href
      ? <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`${cls} hover:border-primary hover:bg-primary hover:text-primary-foreground`}>{icon}</a>
      : <span aria-label={`${name} (coming soon)`} title={`${name} — coming soon`} className={`${cls} cursor-not-allowed opacity-40`}>{icon}</span>}</li>;
  })}</ul>;
}
