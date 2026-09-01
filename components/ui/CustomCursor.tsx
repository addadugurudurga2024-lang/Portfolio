"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setDotPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[role='button']") ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Smooth lag for ring
  useEffect(() => {
    let animationFrameId: number;
    const followMouse = () => {
      setPosition((prev) => ({
        x: prev.x + (dotPos.x - prev.x) * 0.2,
        y: prev.y + (dotPos.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };
    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dotPos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="pointer-events-none fixed z-50 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
        style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }}
      />
      {/* Outer subtle tracker ring */}
      <div
        className={`pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 transition-transform duration-100 ease-out ${
          isPointer ? "h-10 w-10 scale-125 border-cyan-400 bg-cyan-400/10" : "h-7 w-7 scale-100"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
