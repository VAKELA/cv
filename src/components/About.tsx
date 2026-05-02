"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface AboutProps {
  id?: string;
}

export function About({ id }: AboutProps) {
  const { t } = useI18n();
  const { education } = content;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };

  return (
    <section id={id} className="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
      >
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <p className="about-text">{t.about.text}</p>
          <div className="about-meta">
            <p className="about-degree">{education.degree}</p>
            <div className="about-focus">
              <span>Major: {education.major}</span>
              <span className="separator">•</span>
              <span>Minor: {education.minor}</span>
            </div>
            <p className="about-school">{education.school}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}