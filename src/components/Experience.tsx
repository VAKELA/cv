"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Experience() {
  const { t, language } = useI18n();
  const { experience } = content;

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="section-kicker" variants={itemVariants}>
            {t.experience.kicker}
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            {t.experience.title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="experience-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {experience.map((job) => (
            <motion.article
              key={job.company}
              className={`experience-card${job.highlight ? " experience-card--highlight" : ""}`}
              variants={itemVariants}
            >
              <div className="experience-meta">
                <span className="experience-company">{job.company}</span>
                <span className="experience-period">{job.period[language]}</span>
              </div>

              <div className="experience-content">
                <h3 className="experience-role">{job.role[language]}</h3>
                <p className="experience-focus">{job.focus[language]}</p>
                <ul className="experience-bullets">
                  {job.bullets[language].map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-meta">
                <span className="experience-period">{job.type[language]}</span>
                <span className="experience-period">{job.location}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}