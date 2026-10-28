import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./Language";
import { newsletterSchema } from "@/lib/newsletter-schema";
import { subscribeNewsletter } from "@/lib/newsletter.functions";

export function Newsletter() {
  const { tr, language } = useLanguage();
  const subscribe = useServerFn(subscribeNewsletter);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = newsletterSchema.safeParse({ email, language, consent, website });
    if (!parsed.success) { setState("error"); return; }
    setState("sending");
    try { const result = await subscribe({ data: parsed.data }); setState(result.success ? "success" : "error"); } catch { setState("error"); }
  }
  return <section className="border-y border-border bg-muted/40" id="newsletter">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-20">
      <div><p className="eyebrow flex items-center gap-2 text-primary"><Mail className="size-4" />{tr("Newsletter", "समाचारपत्र", "समाचारपत्र")}</p><h2 className="mt-4 text-3xl md:text-4xl">{tr("Stay close to your community.", "आफ्नो समुदायसँग जोडिनुहोस्।", "झीगु समुदाय नाप ज्वानाः च्वनु।")}</h2><p className="mt-4 text-muted-foreground">{tr("News, stories and upcoming gatherings from the Sangh.", "संघका समाचार, कथा र आगामी कार्यक्रमहरू।", "संघया समाचार, बाखं व लिपाया कार्यक्रम।")}</p></div>
      {state === "success" ? <div className="flex items-center gap-4 self-center" role="status"><Check className="size-8 text-secondary" /><p>{tr("Thank you. Your subscription has been registered.", "धन्यवाद। तपाईंको सदस्यता दर्ता भएको छ।", "सुभाय्। छिगु सदस्यता दर्ता जुल।")}</p></div> : <form onSubmit={submit} className="self-center">
        <label htmlFor="newsletter-email" className="text-sm">{tr("Email address", "इमेल ठेगाना", "इमेल ठेगाना")}</label>
        <div className="mt-2 flex border-b border-foreground pb-2"><input id="newsletter-email" type="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" className="min-w-0 flex-1 bg-transparent py-2 outline-none" /><Button type="submit" disabled={state === "sending"} className="h-11 shrink-0">{state === "sending" ? tr("Registering…", "दर्ता हुँदैछ…", "दर्ता जुयाच्वंगु…") : tr("Subscribe", "सदस्य बन्नुहोस्", "सदस्य जुयादिसँ")}<ArrowRight /></Button></div>
        <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground"><input type="checkbox" required checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 accent-primary" />{tr("I agree to receive the Sangh’s newsletter by email.", "म इमेलमार्फत संघको समाचारपत्र प्राप्त गर्न सहमत छु।", "जि इमेलं संघया समाचारपत्र कायेगु मञ्जुर याना।")}</label>
        <div hidden aria-hidden="true"><label>Website<input tabIndex={-1} value={website} onChange={e => setWebsite(e.target.value)} autoComplete="off" /></label></div>
        {state === "error" && <p role="alert" className="mt-3 text-sm text-destructive">{tr("Check your email and consent, then try again.", "इमेल र सहमति जाँच गरी फेरि प्रयास गर्नुहोस्।", "इमेल व मञ्जुरी स्वयाः हानं प्रयास यानादिसँ।")}</p>}
      </form>}
    </div>
  </section>;
}