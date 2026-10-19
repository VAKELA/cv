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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

export function Skills() {
  const { t, language } = useI18n();
  const { skills } = content;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="section-kicker" variants={itemVariants}>
            {t.skills.kicker}
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            {t.skills.title}
          </motion.h2>
          <motion.p
            className="selected-subtitle"
            variants={itemVariants}
          >
            {t.skills.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.key}
              className={`skill-category${cat.highlight ? " skill-category--highlight" : ""}`}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="skill-category-name">
                <span>{cat.title[language]}</span>
              </div>
              <div className="skill-tags">
                {cat.items.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}