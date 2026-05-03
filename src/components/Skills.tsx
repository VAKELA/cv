"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface SkillsProps {
  id?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

const categoryIcons: Record<string, string> = {
  languages: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  frontend: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  backend: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 002-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01",
  databases: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
};

export function Skills({ id }: SkillsProps) {
  const { t } = useI18n();
  const { skills } = content;

  const skillGroups = [
    { key: "languages", title: t.skills.languages, items: skills.languages },
    { key: "frontend", title: t.skills.frontend, items: skills.frontend },
    { key: "backend", title: t.skills.backend, items: skills.backend },
    { key: "databases", title: t.skills.databases, items: skills.databases },
  ];

  return (
    <section id={id} className="section skills" tabIndex={-1}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <motion.h2 className="section-title" variants={groupVariants}>
          {t.skills.title}
        </motion.h2>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <motion.div
              key={group.key}
              className="skill-group"
              variants={groupVariants}
            >
              <div className="skill-group-header">
                <svg
                  className="skill-group-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={categoryIcons[group.key]}
                  />
                </svg>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <motion.div
                className="skill-tags"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.04,
                      y: -1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}