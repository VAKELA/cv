"use client";

import { I18nProvider } from "@/components/I18nProvider";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <I18nProvider>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <TopNav />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}