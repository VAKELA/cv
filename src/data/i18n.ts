export type Language = "en" | "es";

export const translations = {
  en: {
    hero: {
      title: "Computer Science Engineer",
      major: "Major: Software",
      minor: "Minor: Data Science",
      pitch: "Full Stack Developer | AI, Data Science & Machine Learning",
      nav: {
        about: "About",
        education: "Education",
        experience: "Experience",
        skills: "Skills",
        contact: "Contact",
      },
      scroll: "Scroll",
    },
    about: {
      title: "About",
      text: "Computer Science Engineer with 3+ years of experience in full-stack development. Major in Software, Minor in Data Science. Proven track record in building and maintaining production-grade systems, optimizing performance, and improving developer experience.",
    },
    experience: {
      title: "Experience",
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
    },
    education: {
      title: "Education",
      degree: "Civil Engineering in Computer Science",
      major: "Major in Software",
      minor: "Minor in Data Science",
    },
    contact: {
      title: "Contact",
      headline: "Let's connect",
    },
  },
  es: {
    hero: {
      title: "Ingeniero Civil en Computación",
      major: "Major: Software",
      minor: "Minor: Data Science",
      pitch: "Full Stack Developer | AI, Data Science & Machine Learning",
      nav: {
        about: "Sobre Mí",
        education: "Educación",
        experience: "Experiencia",
        skills: "Habilidades",
        contact: "Contacto",
      },
      scroll: "Desplazar",
    },
    about: {
      title: "Sobre Mí",
      text: "Ingeniero Civil en Computación con más de 3 años de experiencia en desarrollo full-stack. Major en Software, Minor en Data Science. Trayectoria comprobada en la construcción y mantenimiento de sistemas de grado de producción, optimización del rendimiento y mejora de la experiencia del desarrollador.",
    },
    experience: {
      title: "Experiencia",
    },
    skills: {
      title: "Habilidades",
      languages: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de Datos",
    },
    education: {
      title: "Educación",
      degree: "Ingeniería Civil en Computación",
      major: "Major en Software",
      minor: "Minor en Data Science",
    },
    contact: {
      title: "Contacto",
      headline: "Conectemos",
    },
  },
} as const;

export function getTranslations(lang: Language) {
  return translations[lang];
}