"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

export function Hero() {
  const { t, language, setLanguage } = useI18n();
  const { personal } = content;
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  const navItems = [
    { id: "about", label: t.hero.nav.about, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "experience", label: t.hero.nav.experience, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "skills", label: t.hero.nav.skills, icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
    { id: "contact", label: t.hero.nav.contact, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  ];

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        style={{ y, opacity }}
      >
        <div className="hero-header">
          <span className="hero-label">{t.hero.title}</span>
          <button 
            className="lang-toggle"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>
        
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {personal.name}
        </motion.h1>
        
        <motion.p 
          className="hero-pitch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t.hero.pitch}
        </motion.p>

        <motion.div 
          className="hero-nav"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className="hero-nav-btn"
              onClick={() => scrollToSection(item.id)}
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
            </button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
        onClick={() => scrollToSection("about")}
      >
        <span>Scroll</span>
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
      </motion.div>
    </section>
  );
}