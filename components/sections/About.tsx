"use client";

import React, { useState } from "react";
import { PERSONAL_INFO, ENGINEERING_PRINCIPLES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { CheckCircle2, Terminal, Lightbulb, Compass, Code2 } from "lucide-react";

export function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About"
          title="Who I Am"
          subtitle="Engineering philosophy, academic context, and problem-solving principles."
        />

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Big typography & positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1119]/80 p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-400 font-mono text-8xl font-black select-none pointer-events-none">
                01
              </div>

              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block mb-3">
                {"// CORE MOTTO"}
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                &quot;I build to understand.&quot;
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                True engineering depth comes from decomposing complex architectures, writing code from first principles, and testing edge cases in realistic environments.
              </p>

              <div className="pt-6 border-t border-white/[0.08] space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.education.institution}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree:</span>
                  <span className="text-slate-200">{PERSONAL_INFO.education.degree}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Timeline:</span>
                  <span className="text-slate-200">{PERSONAL_INFO.education.period}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Academic Standing:</span>
                  <span className="text-emerald-400 font-bold">{PERSONAL_INFO.education.cgpa} / 10 CGPA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary & Focus Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1119]/80 p-8 backdrop-blur-md">
              <span className="text-xs font-mono text-violet-400 tracking-wider uppercase block mb-3">
                {"// PROFESSIONAL SUMMARY"}
              </span>

              <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6 font-light">
                {PERSONAL_INFO.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-cyan-400 text-xs font-mono mb-1 font-semibold">
                    AI/ML FOUNDATION
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Practical experience in predictive modeling, exploratory analysis, and data preprocessing with Scikit-learn, Pandas, and NumPy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-emerald-400 text-xs font-mono mb-1 font-semibold">
                    SYSTEMS & FULL STACK
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Clean REST API construction, schema modeling with MongoDB, and reactive interfaces using React and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Mindset Principles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                {"// EXECUTION PHILOSOPHY"}
              </span>
              <h3 className="text-2xl font-bold text-white">
                Engineering Mindset Principles
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:block">
              05 STEP SYSTEMATIC CYCLE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ENGINEERING_PRINCIPLES.map((principle, idx) => (
              <GlowCard
                key={principle.number}
                glowColor={idx % 2 === 0 ? "cyan" : "violet"}
                className={`cursor-pointer transition-all ${
                  activePrinciple === idx
                    ? "border-cyan-500/50 bg-[#131722]"
                    : "hover:border-white/20"
                }`}
                onClick={() => setActivePrinciple(idx)}
              >
                <div className="font-mono text-2xl font-black text-cyan-400 mb-2">
                  {principle.number}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {principle.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
