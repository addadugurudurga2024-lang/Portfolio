"use client";

import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Award, CheckCircle2 } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Recognition"
          title="Achievements & Certifications"
          subtitle="Verifiable honors earned through competitive hackathons and rigorous academic evaluations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <GlowCard
              key={achievement.id}
              glowColor={idx === 0 ? "amber" : "cyan"}
              className="flex flex-col justify-between h-full"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    {idx === 0 ? (
                      <Trophy className="h-6 w-6 text-amber-400" />
                    ) : (
                      <Award className="h-6 w-6 text-cyan-400" />
                    )}
                  </div>
                  <Badge variant={idx === 0 ? "amber" : "cyan"} size="md">
                    {achievement.badge}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {achievement.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 font-semibold mb-4">
                  {achievement.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {achievement.description}
                </p>
              </div>

              {/* Verified Tag */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  VERIFIED RECORD
                </span>
                <span className="text-slate-500">{achievement.organization}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
