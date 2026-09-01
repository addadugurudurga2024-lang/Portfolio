"use client";

import React, { useState } from "react";
import { SKILLS_MATRIX, SkillCategory } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Brain,
  BarChart3,
  Wrench,
  Sparkles,
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    PROGRAMMING: <Code2 className="h-4 w-4 text-cyan-400" />,
    "CORE CS": <Cpu className="h-4 w-4 text-emerald-400" />,
    FRONTEND: <Layers className="h-4 w-4 text-violet-400" />,
    BACKEND: <Terminal className="h-4 w-4 text-amber-400" />,
    DATABASE: <Database className="h-4 w-4 text-blue-400" />,
    "MACHINE LEARNING": <Brain className="h-4 w-4 text-rose-400" />,
    VISUALIZATION: <BarChart3 className="h-4 w-4 text-cyan-400" />,
    TOOLS: <Wrench className="h-4 w-4 text-emerald-400" />,
  };

  return (
    <section id="skills" className="py-24 relative bg-radial-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Skills"
          title="Technical Arsenal"
          subtitle="Core programming languages, machine learning toolkits, full-stack frameworks, and foundational computer science disciplines."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === null
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"
            }`}
          >
            ALL CATEGORIES
          </button>
          {SKILLS_MATRIX.map((cat) => (
            <button
              key={cat.category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat.category ? null : cat.category
                )
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.category
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"
              }`}
            >
              {categoryIcons[cat.category]}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Matrix of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_MATRIX.filter((cat) =>
            selectedCategory ? cat.category === selectedCategory : true
          ).map((catGroup) => (
            <GlowCard
              key={catGroup.category}
              glowColor="cyan"
              className="flex flex-col justify-between h-full"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    {categoryIcons[catGroup.category]}
                    <span className="font-mono text-xs font-bold text-white tracking-wider">
                      {catGroup.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {catGroup.skills.length} MODULES
                  </span>
                </div>

                {/* Skills in Category */}
                <div className="space-y-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill rounded-lg p-2.5 bg-white/[0.02] border border-white/[0.04] hover:border-cyan-500/30 hover:bg-cyan-500/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-200 group-hover/skill:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
