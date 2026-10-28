import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./Language";

export function Newsletter() {
  const { tr } = useLanguage();
  return <section className="border-y border-border bg-muted/40" id="newsletter">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-20">
      <div><p className="eyebrow flex items-center gap-2 text-primary"><Mail className="size-4" />{tr("Newsletter", "समाचारपत्र", "समाचारपत्र")}</p><h2 className="mt-4 text-3xl md:text-4xl">{tr("Stay close to your community.", "आफ्नो समुदायसँग जोडिनुहोस्।", "झीगु समुदाय नाप ज्वानाः च्वनु।")}</h2><p className="mt-4 text-muted-foreground">{tr("News, stories and upcoming gatherings from the Sangh.", "संघका समाचार, कथा र आगामी कार्यक्रमहरू।", "संघया समाचार, बाखं व लिपाया कार्यक्रम।")}</p></div>
      <form onSubmit={event => event.preventDefault()} className="self-center">
        <label htmlFor="newsletter-email" className="text-sm">{tr("Email address", "इमेल ठेगाना", "इमेल ठेगाना")}</label>
        <div className="mt-2 flex border-b border-border pb-2"><input id="newsletter-email" type="email" disabled placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent py-2 outline-none disabled:opacity-50" /><Button type="submit" disabled className="h-11 shrink-0">{tr("Subscribe", "सदस्य बन्नुहोस्", "सदस्य जुयादिसँ")}</Button></div>
        <p className="mt-4 text-sm text-muted-foreground">{tr("Subscriptions will open soon. No email addresses are being collected yet.", "सदस्यता चाँडै खुल्नेछ। अहिले इमेल ठेगाना सङ्कलन भइरहेको छैन।", "सदस्यता छिट्टं चालु जुइ। थौं इमेल ठेगाना मुंकेगु मदु।")}</p>
      </form>
    </div>
  </section>;
}