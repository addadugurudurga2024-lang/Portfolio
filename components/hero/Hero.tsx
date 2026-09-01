"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { NetworkCanvas } from "./NetworkCanvas";
import { TerminalSnippet } from "./TerminalSnippet";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export function Hero({ onOpenResume, onOpenAssistant }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial-fade"
    >
      {/* Interactive Node Graph Canvas */}
      <NetworkCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status & Technical Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            COMPUTER SCIENCE STUDENT • AI/ML • SOFTWARE ENGINEERING
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {PERSONAL_INFO.statusBadges.map((badge, idx) => (
              <span
                key={badge}
                className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Main Grid: Headline + Live Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                intelligent systems.
              </span>
              <br />
              <span className="text-slate-200">One problem at a time.</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroSupporting}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98]"
              >
                <FileText className="h-4 w-4 text-cyan-400" />
                View Resume
              </button>

              <button
                onClick={onOpenAssistant}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3.5 text-sm font-medium text-violet-300 backdrop-blur-md transition-all hover:bg-violet-500/20 active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4 text-violet-400" />
                Ask AI Assistant
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 text-slate-400 text-xs font-mono">
              <span className="text-slate-500">PROFILES:</span>
              <a
                href={PERSONAL_INFO.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5 w-full">
            <TerminalSnippet />
          </div>
        </div>

        {/* Hero Bottom Stats Matrix */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          <div className="rounded-xl border border-white/[0.06] bg-[#0E1119]/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
              <GraduationCap className="h-3.5 w-3.5" />
              ACADEMIC METRIC
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.education.cgpa}
              <span className="text-sm font-mono text-slate-400"> / 10</span>
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">CGPA • VIT CHENNAI</div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#0E1119]/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
              <GraduationCap className="h-3.5 w-3.5" />
              BATCH TIMELINE
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              2024–2028
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">B.TECH COMPUTER SCIENCE</div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#0E1119]/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono mb-1">
              <Cpu className="h-3.5 w-3.5" />
              PRIMARY DOMAIN
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              AI / ML
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">INTELLIGENT PIPELINES</div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#0E1119]/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1">
              <Code2 className="h-3.5 w-3.5" />
              ENGINEERING STACK
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              FULL STACK
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">MERN • JAVA • PYTHON</div>
          </div>
        </div>
      </div>
    </section>
  );
}
