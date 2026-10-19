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

export function SelectedWork() {
  const { t, language } = useI18n();
  const { selected } = content;

  return (
    <section className="selected">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="section-kicker" variants={itemVariants}>
            {selected.intro[language]}
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            {selected.heading[language]}
          </motion.h2>
          <motion.p className="selected-subtitle" variants={itemVariants}>
            {t.selected.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="selected-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {selected.items.map((item, i) => {
            const Arrow = (
              <span className="selected-card-arrow" aria-hidden="true">
                ↗
              </span>
            );
            return (
              <motion.article
                key={i}
                className={`selected-card${item.highlight ? " selected-card--highlight" : ""}`}
                variants={itemVariants}
              >
                <div className="selected-card-content">
                  <span className="selected-card-meta">{item.meta}</span>
                  <h3 className="selected-card-title">
                    {item.title[language]}
                  </h3>
                  <p className="selected-card-body">{item.body[language]}</p>
                </div>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="selected-card-link"
                    aria-label={item.title[language]}
                  >
                    {Arrow}
                  </a>
                ) : (
                  Arrow
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}