"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Skills } from "@/components/sections/Skills";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Activity } from "@/components/sections/Activity";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { PortfolioAssistant } from "@/components/assistant/PortfolioAssistant";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const handleScrollToTerminal = () => {
    const el = document.getElementById("terminal");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090D] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
        onScrollToTerminal={handleScrollToTerminal}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
        <Ticker />
        <About />
        <FocusAreas />
        <ProjectsSection />
        <Skills />
        <LearningJourney />
        <Achievements />
        <Education />
        <Activity />
        <InteractiveTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Tools */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <PortfolioAssistant
        isOpen={isAssistantOpen}
        onOpen={() => setIsAssistantOpen(true)}
        onClose={() => setIsAssistantOpen(false)}
      />
    </div>
  );
}
