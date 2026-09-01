"use client";

import React from "react";
import { TICKER_ITEMS } from "@/data/portfolioData";

export function Ticker() {
  return (
    <div className="w-full overflow-hidden border-y border-white/[0.08] bg-[#0A0C12]/80 py-3.5 backdrop-blur-md">
      <div className="flex select-none whitespace-nowrap animate-ticker">
        {/* First Loop */}
        <div className="flex items-center gap-8 px-4 text-xs font-mono text-slate-400">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
                {item}
              </span>
              <span className="text-slate-700">/</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicated Loop for seamless marquee */}
        <div className="flex items-center gap-8 px-4 text-xs font-mono text-slate-400" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
                {item}
              </span>
              <span className="text-slate-700">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
