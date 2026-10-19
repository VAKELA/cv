"use client";

import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

export function TopNav() {
  const { t, language, setLanguage } = useI18n();
  const { personal } = content;
  const isEs = language === "es";

  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="container top-nav-inner">
        <a href="#hero" className="top-nav-logo" aria-label="Home">
          <span className="top-nav-logo-dot" aria-hidden="true" />
          <span>{personal.firstName.toLowerCase()}.dev</span>
        </a>

        <div className="top-nav-links">
          <a href="#experience" className="top-nav-link">
            {t.nav.experience}
          </a>
          <a href="#work" className="top-nav-link">
            {t.nav.work}
          </a>
          <a href="#about" className="top-nav-link">
            {t.nav.about}
          </a>
          <a href="#skills" className="top-nav-link">
            {t.nav.skills}
          </a>
          <a href="#contact" className="top-nav-link">
            {t.nav.contact}
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            className="top-nav-lang"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={isEs ? "Switch to English" : "Cambiar a español"}
            aria-pressed={isEs}
          >
            {isEs ? "EN" : "ES"}
          </button>
          <a href="#contact" className="top-nav-cta">
            {t.hero.cta}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}