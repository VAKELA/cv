"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { content } from "@/data/content";

interface ExperienceProps {
  id?: string;
}

export function Experience({ id }: ExperienceProps) {
  const { t } = useI18n();
  const { experience } = content;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };

  return (
    <section id={id} className="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.experience.title}</h2>
        
        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.div 
              key={index} 
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="experience-company">{job.company}</p>
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