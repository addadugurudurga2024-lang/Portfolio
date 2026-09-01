"use client";

import React, { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO, SKILLS_MATRIX, ACHIEVEMENTS } from "@/data/portfolioData";
import { PROJECTS_DATA } from "@/data/projectsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Antigravity OS [Version 2.4.0-release] — Interactive Terminal
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300">help</span> to view available commands, or click any command chip below.
          </p>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    "help",
    "about",
    "skills",
    "projects",
    "education",
    "achievements",
    "contact",
    "clear",
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    setCommandHistory((prev) => [...prev, cleanCmd]);
    setHistoryIndex(-1);

    let resultNode: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        resultNode = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-slate-400">Available commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              <div><span className="text-cyan-300">about</span> — Bio summary</div>
              <div><span className="text-cyan-300">skills</span> — Tech matrix</div>
              <div><span className="text-cyan-300">projects</span> — Key software</div>
              <div><span className="text-cyan-300">education</span> — VIT Chennai</div>
              <div><span className="text-cyan-300">achievements</span> — Honors</div>
              <div><span className="text-cyan-300">contact</span> — Reach out</div>
              <div><span className="text-cyan-300">clear</span> — Wipe screen</div>
            </div>
          </div>
        );
        break;

      case "about":
        resultNode = (
          <div className="space-y-1.5 py-1 text-xs text-slate-300">
            <p className="font-bold text-white">{PERSONAL_INFO.name}</p>
            <p className="text-cyan-300">{PERSONAL_INFO.role}</p>
            <p className="text-slate-400">{PERSONAL_INFO.summary}</p>
          </div>
        );
        break;

      case "skills":
        resultNode = (
          <div className="space-y-2 py-1 text-xs">
            {SKILLS_MATRIX.map((cat) => (
              <div key={cat.category}>
                <span className="text-cyan-400 font-bold font-mono">[{cat.category}]: </span>
                <span className="text-slate-300 font-mono">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        resultNode = (
          <div className="space-y-2 py-1 text-xs">
            {PROJECTS_DATA.slice(0, 4).map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/40 pl-2">
                <div className="text-white font-bold">{p.title} <span className="text-slate-500 font-mono">({p.category})</span></div>
                <div className="text-slate-400">{p.description}</div>
                <div className="text-cyan-400 font-mono text-[11px] mt-0.5">Stack: {p.technologies.join(" • ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        resultNode = (
          <div className="space-y-1 py-1 text-xs text-slate-300">
            <p className="font-bold text-white">{PERSONAL_INFO.education.institution}</p>
            <p>{PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.period})</p>
            <p className="text-emerald-400 font-mono font-bold">CGPA: {PERSONAL_INFO.education.cgpa} / 10</p>
            <p className="text-slate-400 font-mono text-[11px]">Focus: {PERSONAL_INFO.education.focusAreas.join(", ")}</p>
          </div>
        );
        break;

      case "achievements":
        resultNode = (
          <div className="space-y-2 py-1 text-xs">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.id} className="text-slate-300">
                <span className="text-amber-400 font-bold">{a.title}</span> — {a.subtitle} ({a.organization})
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        resultNode = (
          <div className="space-y-1 py-1 text-xs font-mono text-slate-300">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href="tel:6303731166" className="text-cyan-300">{PERSONAL_INFO.phone}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.socials.github.url} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.socials.github.url}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.socials.linkedin.url} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.socials.linkedin.url}</a></p>
            <p>LeetCode: <a href={PERSONAL_INFO.socials.leetcode.url} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.socials.leetcode.url}</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "sudo":
        resultNode = <span className="text-rose-400 text-xs font-mono">{"User 'visitor' is not in the sudoers file. This incident will be reported."}</span>;
        break;

      default:
        resultNode = (
          <span className="text-rose-400 text-xs font-mono">
            zsh: command not found: {cleanCmd}. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see available commands.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: resultNode }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CLI Console"
          title="Interactive Terminal"
          subtitle="Explore portfolio data via a developer terminal shell. Keyboard and clickable commands fully enabled."
        />

        {/* Command Quick Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500">QUICK COMMANDS:</span>
          {availableCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-[#0E1119] border border-white/[0.08] text-xs font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl border border-white/[0.12] bg-[#0A0C12] shadow-2xl overflow-hidden cursor-text"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1119] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                ADS@portfolio:~ (bash)
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              UTF-8 • 64-bit
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-5 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-slate-500">ADS@portfolio:~$</span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 text-cyan-400 pt-1">
              <span className="text-slate-500 shrink-0">ADS@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. skills, projects, contact)..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="p-1 text-slate-500 hover:text-cyan-400 transition-colors"
                aria-label="Submit command"
              >
                <CornerDownLeft className="h-3.5 w-3.5" />
              </button>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
