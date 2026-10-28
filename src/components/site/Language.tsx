import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { validLanguage, type Language } from "@/lib/site-info";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    try { const saved = localStorage.getItem("sangh-language"); if (validLanguage(saved)) setLanguageState(saved); } catch { /* Storage can be disabled. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const setLanguage = (value: Language) => {
    setLanguageState(value);
    try { localStorage.setItem("sangh-language", value); } catch { /* Preference remains active in this session. */ }
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}><div lang={language}>{children}</div></LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  return { ...context, tr: (en: string, ne: string, newari: string) => context.language === "ne" ? ne : context.language === "new" ? newari : en };
}