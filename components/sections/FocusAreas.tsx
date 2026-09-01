"use client";

import React from "react";
import { ENGINEERING_FOCUS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import {
  Brain,
  Cpu,
  Layers,
  Binary,
  Server,
  Workflow,
  Sparkles,
} from "lucide-react";

export function FocusAreas() {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="h-6 w-6 text-cyan-400" />,
    Cpu: <Cpu className="h-6 w-6 text-emerald-400" />,
    Layers: <Layers className="h-6 w-6 text-violet-400" />,
    Binary: <Binary className="h-6 w-6 text-blue-400" />,
    Server: <Server className="h-6 w-6 text-amber-400" />,
    Workflow: <Workflow className="h-6 w-6 text-rose-400" />,
  };

  const glowColors: Array<"cyan" | "emerald" | "violet" | "amber"> = [
    "cyan",
    "emerald",
    "violet",
    "cyan",
    "amber",
    "violet",
  ];

  return (
    <section id="focus" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Domains"
          title="Current Engineering Focus"
          subtitle="Key technical areas where I actively build software and solve computational problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_FOCUS.map((focus, idx) => (
            <GlowCard
              key={focus.id}
              glowColor={glowColors[idx % glowColors.length]}
              className="flex flex-col justify-between h-full group"
            >
              <div>
                {/* Card Top: Number + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-semibold text-slate-500 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                    FOCUS //{focus.id}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-transform group-hover:scale-110">
                    {iconMap[focus.icon] || <Sparkles className="h-6 w-6 text-cyan-400" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {focus.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {focus.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {focus.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-slate-300 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
