import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/history", label: "History", ne: "इतिहास" },
  { to: "/twa-directory", label: "Twa Directory", ne: "त्वाः" },
  { to: "/library", label: "Library", ne: "पुस्तकालय" },
  { to: "/stories", label: "Stories", ne: "कथा" },
  { to: "/gallery", label: "Gallery", ne: "चित्रशाला" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="Central Manandhar Sangh logo" width={44} height={44} className="h-11 w-11 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span lang="ne" className="deva block truncate text-base text-primary">केन्द्रीय मानन्धर संघ</span>
            <span className="eyebrow block truncate text-[0.62rem] text-muted-foreground">Central Manandhar Sangh</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-line text-sm" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav className="min-h-0" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-t border-border px-6 py-4 font-display text-2xl">
              {n.label}
              <span lang="ne" className="deva text-sm text-muted-foreground">{n.ne}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-wood text-wood-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logo.url} alt="" width={72} height={72} className="h-18 w-18 rounded-full bg-card p-1" />
          <p lang="ne" className="deva mt-6 text-3xl">केन्द्रीय मानन्धर संघ</p>
          <p className="mt-2 text-wood-foreground/70">Central Manandhar Sangh · ने.सं. १०७४</p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-wood-foreground/60">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-line">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-wood-foreground/60">Contact</p>
          <p className="mt-4 text-wood-foreground/80">Official address, phone and email will be published here once confirmed by the Sangh.</p>
        </div>
      </div>
      <div className="border-t border-wood-foreground/15 px-6 py-6 text-center text-xs text-wood-foreground/60">
        Living Heritage, Connected Generations
      </div>
    </footer>
  );
}
