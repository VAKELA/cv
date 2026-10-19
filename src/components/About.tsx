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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function About() {
  const { t, language } = useI18n();
  const { about } = content;

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="about-kicker" variants={itemVariants}>
            {t.about.kicker}
          </motion.span>
          <motion.h2 className="about-title" variants={itemVariants}>
            {t.about.title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="about-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {about[language].map((paragraph, i) => (
            <motion.p key={i} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}