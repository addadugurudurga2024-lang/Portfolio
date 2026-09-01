"use client";

import React, { useEffect, useState } from "react";
import { Terminal, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

const BOOT_LINES = [
  { text: "> system.init()", time: 300, color: "text-slate-400" },
  { text: "> loading_profile: A_D_S_ABHISHEK", time: 700, color: "text-cyan-400 font-semibold" },
  { text: "> institution: VIT_CHENNAI [B.Tech CSE '24-'28]", time: 1100, color: "text-slate-300" },
  { text: "> cgpa_metric: 8.30 / 10", time: 1500, color: "text-emerald-400 font-bold" },
  { text: "> stack: [JAVA, PYTHON, REACT, NODE, MONGODB, ML]", time: 1900, color: "text-violet-400" },
  { text: "> status: ACTIVE_BUILDING", time: 2300, color: "text-cyan-300 font-bold" },
];

export function TerminalSnippet() {
  const [bootStep, setBootStep] = useState(0);

  useEffect(() => {
    const intervals = BOOT_LINES.map((_, idx) =>
      setTimeout(() => {
        setBootStep(idx + 1);
      }, BOOT_LINES[idx].time)
    );

    return () => intervals.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="w-full rounded-xl border border-white/[0.1] bg-[#0A0C12]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1119] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 flex items-center gap-1.5">
            <Terminal className="h-3 w-3 text-cyan-400" />
            ads-engine::command-center
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ONLINE
        </div>
      </div>

      {/* Terminal Content Lines */}
      <div className="p-4 space-y-2 text-slate-300 min-h-[160px]">
        {BOOT_LINES.slice(0, bootStep).map((line, idx) => (
          <div key={idx} className={`leading-relaxed ${line.color} flex items-start gap-2`}>
            <span>{line.text}</span>
          </div>
        ))}

        {bootStep >= BOOT_LINES.length && (
          <div className="flex items-center gap-2 pt-2 text-cyan-400 border-t border-white/[0.05]">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            <span className="text-[11px]">Ready for queries. Run command or explore sections below.</span>
          </div>
        )}
      </div>
    </div>
  );
}
