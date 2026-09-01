"use client";

import React from "react";
import { Project } from "@/data/projectsData";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureVisualizer } from "./ArchitectureVisualizer";
import {
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <GlowCard
      glowColor={project.category === "AI / ML" ? "cyan" : "violet"}
      className="flex flex-col justify-between h-full group"
    >
      <div>
        {/* Card Header: Number + Category + Status Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-cyan-400">
              SYS //{project.number}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              {project.categoryLabel}
            </span>
          </div>

          {project.statusTag && (
            <Badge
              variant={
                project.statusTag.includes("Winning")
                  ? "amber"
                  : project.statusTag.includes("Exploration")
                  ? "muted"
                  : "cyan"
              }
              size="sm"
            >
              {project.statusTag}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs text-slate-400"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Architecture Preview if available */}
        {project.architectureSteps && (
          <div className="mb-6">
            <ArchitectureVisualizer steps={project.architectureSteps} interactive={false} />
          </div>
        )}
      </div>

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 py-4 border-t border-white/[0.06] mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-slate-300 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2.5 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
          >
            <Layers className="h-3.5 w-3.5" />
            View Case Study
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
              title="View Repository on GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="h-4 w-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
              title="Live Demo"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
