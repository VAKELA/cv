"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const nameVariants: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: EASE },
  },
};

export function Hero() {
  const { t, language } = useI18n();
  const { personal } = content;
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  const isEs = language === "es";

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="container">
        <motion.div
          className="hero-inner"
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-kicker" variants={itemVariants}>
            <span className="hero-kicker-dot" aria-hidden="true" />
            <span>{t.hero.kicker}</span>
          </motion.div>

          <motion.h1
            id="hero-name"
            className="hero-name"
            variants={nameVariants}
          >
            <span className="hero-name-line">{personal.firstName}</span>
            <span className="hero-name-line hero-name-line--accent">
              {personal.lastName}
            </span>
          </motion.h1>

          <motion.p className="hero-tagline" variants={itemVariants}>
            {t.hero.tagline}
          </motion.p>

          <motion.p className="hero-bio" variants={itemVariants}>
            {t.hero.bio}
          </motion.p>

          <motion.div className="hero-bottom" variants={itemVariants}>
            <a href="#contact" className="cta-primary">
              {t.hero.cta}
              <span className="cta-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#work" className="cta-secondary">
              {isEs ? "Ver trabajo" : "See work"}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}