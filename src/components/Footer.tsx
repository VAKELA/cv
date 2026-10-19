"use client";

import { useI18n } from "./I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>© {year} Vicente Akel</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}