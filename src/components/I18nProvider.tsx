"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, getTranslations, Language } from "@/data/i18n";

type TranslationType = ReturnType<typeof getTranslations>;

interface I18nContextType {
  language: Language;
  t: TranslationType;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language.split("-")[0];
    const defaultLang: Language = browserLang === "es" ? "es" : "en";
    setLanguageState(defaultLang);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = getTranslations(language);

  return (
    <I18nContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}