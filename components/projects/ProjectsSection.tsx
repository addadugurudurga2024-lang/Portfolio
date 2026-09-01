"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/projectsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/lib/utils";

type FilterType = "ALL" | "AI / ML" | "FULL STACK" | "BACKEND" | "DATA";

const FILTERS: FilterType[] = ["ALL", "AI / ML", "FULL STACK", "BACKEND", "DATA"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            tag="Engineering Portfolio"
            title="Selected Projects"
            subtitle="Systems I've built to turn ideas into working software. Emphasizing clean architecture, end-to-end dataflow, and verifiable code."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0E1119] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all",
                  activeFilter === f
                    ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
