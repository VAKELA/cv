"use client";

import { motion } from "framer-motion";
import { I18nProvider } from "@/components/I18nProvider";
import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { FloatingContact } from "@/components/FloatingContact";
import { SectionNav } from "@/components/SectionNav";
import { useI18n } from "@/components/I18nProvider";
import { content } from "@/data/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function ContactSection() {
  const { t } = useI18n();
  const { personal } = content;

  return (
    <section id="contact" className="section contact-section" tabIndex={-1}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.contact.title}
        </motion.h2>
        <motion.p className="contact-headline" variants={itemVariants}>
          {t.contact.headline}
        </motion.p>
        <motion.p className="contact-subtitle" variants={itemVariants}>
          {personal.location}
        </motion.p>
        <motion.div
          className="contact-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="contact-link"
            variants={itemVariants}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {personal.email}
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={itemVariants}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            LinkedIn
          </motion.a>
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={itemVariants}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Background />
      <SectionNav />
      <main id="main-content">
        <Hero />
        <About id="about" />
        <Education id="education" />
        <Experience id="experience" />
        <Skills id="skills" />
        <ContactSection />
      </main>
      <FloatingContact />
    </I18nProvider>
  );
}