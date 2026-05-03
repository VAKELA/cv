"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface EducationProps {
  id?: string;
}

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

export function Education({ id }: EducationProps) {
  const { t } = useI18n();
  const { education } = content;

  return (
    <section id={id} className="section education" tabIndex={-1}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.education.title}
        </motion.h2>

        <motion.div className="education-card" variants={itemVariants}>
          <div className="education-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={education.logo}
              alt={education.shortName}
              width={56}
              height={56}
            />
          </div>
          <div className="education-meta">
            <p className="education-degree">{t.education.degree}</p>
            <p className="education-focus">
              <span>{t.education.major}</span>
              <span className="separator">•</span>
              <span>{t.education.minor}</span>
            </p>
            <p className="education-school">{education.school}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}