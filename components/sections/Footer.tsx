"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Code2, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070A] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black text-xs">
                A
              </div>
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {PERSONAL_INFO.role}
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href={PERSONAL_INFO.socials.github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socials.leetcode.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <Code2 className="h-3.5 w-3.5" />
              LeetCode
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
            Top
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-xs font-mono text-slate-500">
          © 2026 {PERSONAL_INFO.name}. Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
