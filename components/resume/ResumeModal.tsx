"use client";

import React, { useEffect } from "react";
import { PERSONAL_INFO, SKILLS_MATRIX, ACHIEVEMENTS } from "@/data/portfolioData";
import { PROJECTS_DATA } from "@/data/projectsData";
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Globe } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const markdownResume = `
# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.role}**
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.socials.github.url} | LinkedIn: ${PERSONAL_INFO.socials.linkedin.url} | LeetCode: ${PERSONAL_INFO.socials.leetcode.url}

## Summary
${PERSONAL_INFO.summary}

## Education
- **${PERSONAL_INFO.education.institution}** — ${PERSONAL_INFO.education.degree} (${PERSONAL_INFO.education.period})
  - CGPA: ${PERSONAL_INFO.education.cgpa} / 10
  - Focus Areas: ${PERSONAL_INFO.education.focusAreas.join(", ")}

## Key Projects
${PROJECTS_DATA.slice(0, 3).map(p => `### ${p.title} (${p.categoryLabel})\n${p.description}\n- Technologies: ${p.technologies.join(", ")}\n- Highlights: ${p.highlights.join("; ")}`).join("\n\n")}

## Achievements & Certifications
${ACHIEVEMENTS.map(a => `- **${a.title}** (${a.subtitle}): ${a.description}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(markdownResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-white/[0.12] bg-[#0A0C12] shadow-2xl overflow-hidden text-left">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1119] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-white tracking-wider">
              CURRICULUM VITAE PREVIEW
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              title="Copy markdown resume"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy MD"}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors ml-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-cv" className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-200 space-y-8 bg-[#090A0F]">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-cyan-400 font-semibold mb-4">
              {PERSONAL_INFO.role}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-cyan-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-3">
              <a href={PERSONAL_INFO.socials.github.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                GitHub: {PERSONAL_INFO.socials.github.username}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.linkedin.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                LinkedIn: {PERSONAL_INFO.socials.linkedin.handle}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.leetcode.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                LeetCode: {PERSONAL_INFO.socials.leetcode.username}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold mb-2">
              01 // Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
              02 // Education
            </h2>
            <div className="p-4 rounded-xl bg-[#0E1119] border border-white/[0.06] space-y-1.5">
              <div className="flex flex-wrap items-center justify-between font-bold text-white text-sm">
                <span>{PERSONAL_INFO.education.institution}</span>
                <span className="font-mono text-xs text-cyan-400">{PERSONAL_INFO.education.period}</span>
              </div>
              <div className="text-xs text-slate-300">
                {PERSONAL_INFO.education.degree} — <span className="text-emerald-400 font-mono font-bold">CGPA: {PERSONAL_INFO.education.cgpa} / 10</span>
              </div>
              <div className="text-xs text-slate-400 font-mono pt-1">
                Coursework: {PERSONAL_INFO.education.focusAreas.join(", ")}
              </div>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
              03 // Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_MATRIX.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-[#0E1119] border border-white/[0.04]">
                  <span className="font-mono text-cyan-300 font-bold block mb-1">
                    {cat.category}:
                  </span>
                  <span className="text-slate-300">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
              04 // Selected Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#0E1119] border border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between font-bold text-white text-sm">
                    <span>{p.title}</span>
                    <span className="text-xs font-mono text-cyan-400">{p.categoryLabel}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
              05 // Achievements & Honors
            </h2>
            <div className="space-y-2.5">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.id} className="p-3.5 rounded-lg bg-[#0E1119] border border-white/[0.06] text-xs">
                  <div className="flex items-center justify-between font-bold text-white mb-0.5">
                    <span>{a.title} ({a.subtitle})</span>
                    <span className="text-amber-400 font-mono">{a.badge}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
