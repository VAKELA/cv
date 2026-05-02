"use client";

import { I18nProvider } from "@/components/I18nProvider";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { FloatingContact } from "@/components/FloatingContact";
import { useI18n } from "@/components/I18nProvider";
import { content } from "@/data/content";

function ContactSection() {
  const { t } = useI18n();
  const { personal } = content;
  
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-links">
        <a href={`mailto:${personal.email}`} className="contact-link">
          {personal.email}
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <main>
        <Hero />
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <ContactSection />
      </main>
      <FloatingContact />
    </I18nProvider>
  );
}