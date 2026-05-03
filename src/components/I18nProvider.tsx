"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getTranslations, Language } from "@/data/i18n";

type TranslationType = ReturnType<typeof getTranslations>;

interface I18nContextType {
  language: Language;
  t: TranslationType;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    const browserLang = navigator.language.split("-")[0];
    const defaultLang: Language = saved ?? (browserLang === "es" ? "es" : "en");
    setLanguageState(defaultLang); // eslint-disable-line react-hooks/set-state-in-effect
    document.documentElement.lang = defaultLang;
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
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