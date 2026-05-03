"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";

interface AboutProps {
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

export function About({ id }: AboutProps) {
  const { t } = useI18n();

  return (
    <section id={id} className="section about" tabIndex={-1}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.about.title}
        </motion.h2>

        <motion.p className="about-text" variants={itemVariants}>
          {t.about.text}
        </motion.p>
      </motion.div>
    </section>
  );
}