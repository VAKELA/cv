"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface SkillsProps {
  id?: string;
}

export function Skills({ id }: SkillsProps) {
  const { t } = useI18n();
  const { skills } = content;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skillGroups = [
    { title: t.skills.languages, items: skills.languages },
    { title: t.skills.frontend, items: skills.frontend },
    { title: t.skills.backend, items: skills.backend },
    { title: t.skills.databases, items: skills.databases },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };

  return (
    <section id={id} className="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.skills.title}</h2>
        
        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index} 
              className="skill-group"
              variants={groupVariants}
            >
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    whileHover={{ scale: 1.05, backgroundColor: "var(--accent)", color: "var(--bg-deep)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}