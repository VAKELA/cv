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

export function Stats() {
  const { t, language } = useI18n();
  const { stats } = content;

  return (
    <section className="stats" id="work">
      <div className="container">
        <motion.div
          className="stats-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <span className="stats-kicker">{t.stats.title}</span>
          <p className="stats-subtitle">{t.stats.subtitle}</p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div
                className={`stat-value${i === 1 ? " stat-value--accent" : ""}`}
              >
                {stat.value}
              </div>
              <div className="stat-label">{stat.label[language]}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}