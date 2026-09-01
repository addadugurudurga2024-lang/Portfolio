"use client";

import React, { useState } from "react";
import { ProjectArchitectureStep } from "@/data/projectsData";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface ArchitectureVisualizerProps {
  steps?: ProjectArchitectureStep[];
  interactive?: boolean;
}

export function ArchitectureVisualizer({
  steps,
  interactive = true,
}: ArchitectureVisualizerProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  if (!steps || steps.length === 0) return null;

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0A0C12]/90 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
            System Dataflow & Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          END-TO-END PIPELINE
        </span>
      </div>

      {/* Pipeline Steps Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 relative">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => interactive && setActiveStep(isSelected ? null : idx)}
              className={`relative rounded-lg border p-3.5 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-cyan-400 bg-cyan-500/10 shadow-glow-cyan"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {/* Header: Stage Number & Role */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  STAGE 0{idx + 1}
                </span>
                <span
                  className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded font-medium"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  {step.role}
                </span>
              </div>

              {/* Node Title */}
              <div className="text-xs font-bold text-white mb-0.5">
                {step.label}
              </div>

              {/* Technology Subtitle */}
              <div className="text-[11px] font-mono text-slate-400">
                {step.sublabel}
              </div>

              {/* Connector Arrow (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-[#0E1119] border border-white/10 text-slate-500">
                  <ChevronRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
