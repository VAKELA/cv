export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      kicker: "Santiago, Chile",
      tagline: "Full Stack · AI Systems · Software Architecture",
      bio: "Full Stack Developer | AI, Data Science & Machine Learning.",
      cta: "Get in touch",
    },
    stats: {
      title: "Numbers",
      subtitle: "Three years. Three industries. Many systems built.",
    },
    about: {
      kicker: "About",
      title: "An engineer who reads the system before writing the code.",
    },
    experience: {
      kicker: "Experience",
      title: "Where I've put in the hours.",
    },
    skills: {
      kicker: "Skills",
      title: "What I use.",
      subtitle: "Languages, frameworks and methods I actually use.",
    },
    selected: {
      kicker: "Selected Work",
      subtitle: "One sentence each. The full stories live in conversations.",
    },
    contact: {
      kicker: "Get in touch",
      title: "Let's build something.",
      sub: "Open to conversations about senior engineering work.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      copy: "© Vicente Akel",
      built: "Built in Next.js · Deployed on Vercel",
    },
  },
  es: {
    nav: {
      work: "Trabajo",
      experience: "Experiencia",
      about: "Sobre mí",
      skills: "Skills",
      contact: "Contacto",
    },
    hero: {
      kicker: "Santiago, Chile",
      tagline: "Full Stack · Sistemas de IA · Arquitectura de software",
      bio: "Full Stack Developer | AI, Data Science & Machine Learning.",
      cta: "Conversemos",
    },
    stats: {
      title: "Números",
      subtitle: "Tres años. Tres industrias. Muchos sistemas construidos.",
    },
    about: {
      kicker: "Sobre mí",
      title: "Un ingeniero que lee el sistema antes de escribir el código.",
    },
    experience: {
      kicker: "Experiencia",
      title: "Dónde he puesto las horas.",
    },
    skills: {
      kicker: "Skills",
      title: "Lo que uso.",
      subtitle: "Lenguajes, frameworks y métodos que realmente uso.",
    },
    selected: {
      kicker: "Trabajo seleccionado",
      subtitle: "Una oración cada una. Las historias viven en las conversaciones.",
    },
    contact: {
      kicker: "Contacto",
      title: "Construyamos algo.",
      sub: "Abierto a conversar sobre trabajo de ingeniería senior.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      copy: "© Vicente Akel",
      built: "Construido en Next.js · Desplegado en Vercel",
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
}