"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="py-24 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Academics"
          title="Education Timeline"
          subtitle="Formal computer science foundation and rigorous curriculum coursework."
        />

        <div className="max-w-4xl mx-auto">
          <GlowCard glowColor="cyan" className="p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Institution & Standing */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <GraduationCap className="h-4 w-4" />
                  <span>UNDERGRADUATE STUDIES</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white">
                  {education.institution}
                </h3>

                <p className="text-sm font-medium text-slate-300">
                  {education.degree}
                </p>

                <div className="space-y-2 pt-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <div className="text-xs font-mono text-cyan-400 mb-0.5">
                    CUMULATIVE GPA
                  </div>
                  <div className="text-3xl font-black text-white font-mono">
                    {education.cgpa}{" "}
                    <span className="text-sm text-slate-400 font-normal">/ 10</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Coursework & Focus Areas */}
              <div className="md:col-span-7 space-y-4 md:border-l md:border-white/[0.08] md:pl-8">
                <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-semibold">
                  <BookOpen className="h-4 w-4 text-violet-400" />
                  <span>CURRICULAR & TECHNICAL FOCUS</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Coursework and laboratory implementations emphasizing computational efficiency, systems design, and algorithmic problem-solving.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {education.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-slate-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
