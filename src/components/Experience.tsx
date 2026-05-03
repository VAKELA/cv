"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface ExperienceProps {
  id?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export function Experience({ id }: ExperienceProps) {
  const { t } = useI18n();
  const { experience } = content;

  return (
    <section id={id} className="section experience" tabIndex={-1}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.experience.title}
        </motion.h2>

        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={itemVariants}
            >
              <div className="experience-timeline-dot" />

              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-period">{job.period}</span>
              </div>

              <div className="experience-company-row">
                <div className="experience-company-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={job.logo}
                    alt={job.company}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="experience-company">{job.company}</span>
              </div>

              {job.level && <p className="experience-level">{job.level}</p>}

              <ul className="experience-bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}