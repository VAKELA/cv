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
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Contact() {
  const { t } = useI18n();
  const { personal } = content;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span className="section-kicker" variants={itemVariants}>
            {t.contact.kicker}
          </motion.span>

          <motion.h2 className="contact-title" variants={itemVariants}>
            Let&apos;s <em>build</em>
            <br />
            something.
          </motion.h2>

          <motion.p className="contact-sub" variants={itemVariants}>
            {t.contact.sub}
          </motion.p>

          <motion.a
            href={`mailto:${personal.email}`}
            className="contact-email"
            variants={itemVariants}
            whileHover={{ y: -3 }}
          >
            <span>{personal.email}</span>
            <span aria-hidden="true">↗</span>
          </motion.a>

          <motion.div className="contact-links" variants={itemVariants}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span aria-hidden="true">●</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span aria-hidden="true">●</span>
              <span>GitHub</span>
            </a>
            <span className="contact-link">
              <span aria-hidden="true">●</span>
              <span>{personal.location}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}