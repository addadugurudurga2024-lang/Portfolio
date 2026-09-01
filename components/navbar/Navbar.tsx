"use client";

import React, { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, FileText, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
  onScrollToTerminal: () => void;
}

const NAV_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar({ onOpenResume, onOpenAssistant, onScrollToTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ["hero", "about", "focus", "projects", "skills", "achievements", "terminal", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-glass"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-white font-mono tracking-wider font-bold text-lg focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-lg px-1"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black text-sm shadow-glow-cyan transition-transform group-hover:scale-105">
            A
          </div>
          <span className="tracking-widest">
            {PERSONAL_INFO.shortName}
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            ENGINEERING
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0E1119]/70 border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded-full relative",
                  isActive
                    ? "text-cyan-300 font-semibold bg-white/[0.06] shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-glow-cyan" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={onScrollToTerminal}
            aria-label="Open Interactive Terminal"
            title="Interactive Terminal"
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
          >
            <Terminal className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 text-xs font-mono transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-cyan-400" />
            Resume
          </button>

          <button
            onClick={onOpenAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-300 hover:bg-violet-500/20 text-xs font-mono transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            AI Assistant
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs font-mono shadow-glow-cyan hover:opacity-90 transition-opacity"
          >
            {"Let's Connect"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-slate-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0C12]/95 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-slate-300 hover:text-cyan-400 py-2 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}

            <div className="grid grid-cols-2 gap-2 pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-200"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                Resume
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssistant();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-violet-500/10 border border-violet-500/30 text-xs font-mono text-violet-300"
              >
                <Sparkles className="h-4 w-4 text-violet-400" />
                AI Assistant
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs font-mono mt-2"
            >
              {"Let's Connect"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
