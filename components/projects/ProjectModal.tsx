"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projectsData";
import { ArchitectureVisualizer } from "./ArchitectureVisualizer";
import { Badge } from "@/components/ui/Badge";
import {
  X,
  Github,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#0A0C12] p-6 sm:p-8 md:p-10 shadow-2xl text-left">
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-white/[0.08] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-cyan-400">
                CASE STUDY //{project.number}
              </span>
              <span className="text-slate-600">•</span>
              <Badge variant="cyan" size="sm">
                {project.categoryLabel}
              </Badge>
              {project.statusTag && (
                <Badge variant="amber" size="sm">
                  {project.statusTag}
                </Badge>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0E1119] border border-white/[0.06] mb-8 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-emerald-400">●</span>
            <span>VERIFIED REPOSITORY DATA</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 hover:text-white hover:border-white/20 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Source Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Application
              </a>
            )}
          </div>
        </div>

        {/* 9-Step Case Study Structure */}
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* 01 & 02: Problem & Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="font-mono text-[11px] text-rose-400 block mb-2 font-semibold">
                01 — THE PROBLEM
              </span>
              <p className="text-slate-300 text-xs sm:text-sm">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <span className="font-mono text-[11px] text-cyan-400 block mb-2 font-semibold">
                02 — THE GOAL
              </span>
              <p className="text-slate-300 text-xs sm:text-sm">
                {caseStudy.goal}
              </p>
            </div>
          </div>

          {/* 03: Approach */}
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              03 — ENGINEERING APPROACH
            </span>
            <p className="text-slate-300">
              {caseStudy.approach}
            </p>
          </div>

          {/* 04: Architecture & Dataflow */}
          <div>
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">
              04 — SYSTEM ARCHITECTURE
            </span>
            <p className="text-slate-400 mb-4 text-xs sm:text-sm">
              {caseStudy.architectureDescription}
            </p>
            {project.architectureSteps && (
              <ArchitectureVisualizer steps={project.architectureSteps} interactive={true} />
            )}
          </div>

          {/* 05: Technologies */}
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              05 — TECHNOLOGIES USED
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-slate-200 bg-[#0E1119] border border-white/[0.08] px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06: Key Implementation */}
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-3">
              06 — KEY IMPLEMENTATION DETAILS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyImplementation.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg border border-white/[0.04] bg-white/[0.01] text-xs text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet if present */}
          {caseStudy.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                  {caseStudy.codeSnippet.title}
                </span>
                <span className="font-mono text-[10px] text-slate-500 uppercase">
                  {caseStudy.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-[#08090D] border border-white/[0.08] font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* 07: Challenges */}
          <div>
            <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
              07 — TECHNICAL CHALLENGES
            </span>
            <div className="space-y-2">
              {caseStudy.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-amber-500/[0.03] border border-amber-500/10 p-3 rounded-lg"
                >
                  <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 08 & 09: Outcome & What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04]">
              <span className="font-mono text-[11px] text-emerald-400 block mb-2 font-semibold">
                08 — OUTCOME & RESULTS
              </span>
              <p className="text-slate-300 text-xs sm:text-sm">
                {caseStudy.outcome}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-violet-500/20 bg-violet-500/[0.04]">
              <span className="font-mono text-[11px] text-violet-400 block mb-2 font-semibold">
                09 — WHAT I LEARNED
              </span>
              <p className="text-slate-300 text-xs sm:text-sm">
                {caseStudy.whatILearned}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Close */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono font-medium text-white transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
