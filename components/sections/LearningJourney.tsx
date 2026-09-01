"use client";

import React from "react";
import { LEARNING_JOURNEY } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Compass, ArrowUpRight } from "lucide-react";

export function LearningJourney() {
  const statusColors: Record<string, "cyan" | "violet" | "emerald" | "amber"> = {
    "Current Focus": "cyan",
    Learning: "violet",
    Exploring: "amber",
  };

  return (
    <section className="py-20 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Roadmap"
          title="Currently Learning / Growing"
          subtitle="Actively advancing into modern AI engineering paradigms, deep neural architectures, and retrieval systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_JOURNEY.map((item, idx) => (
            <GlowCard
              key={item.topic}
              glowColor={statusColors[item.status] || "cyan"}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={statusColors[item.status] || "cyan"} size="sm">
                    {item.status.toUpperCase()}
                  </Badge>
                  <span className="font-mono text-[10px] text-slate-500">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>ACTIVE PROGRESSION</span>
                <span className="text-cyan-400">●</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
