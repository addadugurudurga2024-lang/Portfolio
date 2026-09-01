import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "violet" | "amber" | "muted";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "cyan",
  className,
  size = "md",
}: BadgeProps) {
  const variantStyles = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20 hover:border-violet-500/40",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20 hover:border-amber-500/40",
    muted: "bg-white/5 text-slate-400 border-white/10 hover:border-white/20",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs font-mono font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
