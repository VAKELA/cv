"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "./I18nProvider";

const sectionIds = ["about", "education", "experience", "skills", "contact"];

export function SectionNav() {
  const { t } = useI18n();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const labels: Record<string, string> = {
    about: t.hero.nav.about,
    education: t.hero.nav.education,
    experience: t.hero.nav.experience,
    skills: t.hero.nav.skills,
    contact: t.hero.nav.contact,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus({ preventScroll: true });
    }
  };

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {sectionIds.map((id) => (
        <button
          key={id}
          className={`section-nav-item${activeSection === id ? " section-nav-item--active" : ""}`}
          onClick={() => scrollToSection(id)}
          onMouseEnter={() => setHoveredItem(id)}
          onMouseLeave={() => setHoveredItem(null)}
          aria-label={labels[id]}
          aria-current={activeSection === id ? "true" : undefined}
        >
          <span className="section-nav-dot" />
          <AnimatePresence>
            {hoveredItem === id && (
              <motion.span
                className="section-nav-label"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.15 }}
              >
                {labels[id]}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  );
}