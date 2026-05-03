"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export function Hero() {
  const { t, language, setLanguage } = useI18n();
  const { personal } = content;
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    if (!mounted) return;
    const sectionIds = ["about", "education", "experience", "skills", "contact"];
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
  }, [mounted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus({ preventScroll: true });
    }
  };

  if (!mounted) return null;

  const navItems = [
    { id: "about", label: t.hero.nav.about, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "education", label: t.hero.nav.education, icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a60.46 60.46 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41m0-14.147a60.46 60.46 0 00-.491 6.347A48.62 48.62 0 0112 20.904M12 14.834a48.62 48.62 0 01-8.232-4.41M12 14.834a48.62 48.62 0 008.232-4.41" },
    { id: "experience", label: t.hero.nav.experience, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "skills", label: t.hero.nav.skills, icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
    { id: "contact", label: t.hero.nav.contact, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-header" variants={itemVariants}>
          <span className="hero-label">{t.hero.title}</span>
          <button
            className="lang-toggle"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          {personal.name}
        </motion.h1>

        <motion.p className="hero-pitch" variants={itemVariants}>
          {t.hero.pitch}
        </motion.p>

        <motion.nav className="hero-nav" variants={itemVariants} aria-label="Section navigation">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`hero-nav-btn${activeSection === item.id ? " hero-nav-btn--active" : ""}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      </motion.div>

      <motion.button
        className="scroll-indicator"
        style={{ opacity }}
        onClick={() => scrollToSection("about")}
        aria-label={t.hero.scroll}
      >
        <span>{t.hero.scroll}</span>
        <svg
          className="scroll-indicator-arrow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>
    </section>
  );
}