"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";

export function Activity() {
  const { socials } = PERSONAL_INFO;

  const activityCards = [
    {
      title: "GitHub",
      handle: `@${socials.github.username}`,
      tagline: "Explore my code and projects.",
      url: socials.github.url,
      icon: <Github className="h-6 w-6 text-cyan-400" />,
      glowColor: "cyan" as const,
      role: "REPOSITORIES & COMMITS",
    },
    {
      title: "LeetCode",
      handle: `@${socials.leetcode.username}`,
      tagline: "Follow my problem-solving journey.",
      url: socials.leetcode.url,
      icon: <Code2 className="h-6 w-6 text-amber-400" />,
      glowColor: "amber" as const,
      role: "ALGORITHMIC PRACTICE",
    },
    {
      title: "LinkedIn",
      handle: `@${socials.linkedin.handle}`,
      tagline: "Connect professionally and collaborate.",
      url: socials.linkedin.url,
      icon: <Linkedin className="h-6 w-6 text-violet-400" />,
      glowColor: "violet" as const,
      role: "PROFESSIONAL NETWORK",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Ecosystem"
          title="Beyond the Portfolio"
          subtitle="Direct links to my active development repositories, problem-solving progress, and professional network."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activityCards.map((card) => (
            <a
              key={card.title}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus:outline-none"
            >
              <GlowCard
                glowColor={card.glowColor}
                className="flex flex-col justify-between h-full group-hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]">
                      {card.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3 truncate">
                    {card.handle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {card.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300">
                  <span>Visit Profile</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </GlowCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
