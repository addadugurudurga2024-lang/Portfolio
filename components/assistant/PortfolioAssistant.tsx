"use client";

import React, { useState, useRef, useEffect } from "react";
import { queryAssistant, PRESET_QUESTIONS } from "@/lib/assistantEngine";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Sparkles, X, Send, Bot, User, CornerDownLeft, RefreshCw } from "lucide-react";

interface Message {
  sender: "user" | "assistant";
  text: string;
  category?: string;
  suggestedQuestions?: string[];
  timestamp: string;
}

interface PortfolioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function PortfolioAssistant({
  isOpen,
  onClose,
  onOpen,
}: PortfolioAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: `Hello! I am Abhishek's Portfolio Assistant. I can answer questions regarding his **AI/ML background**, **projects (SmartGap AI, SmartParking)**, **skills**, **academics at VIT Chennai (8.30 CGPA)**, and **contact channels**.`,
      category: "General",
      suggestedQuestions: [
        "Tell me about Abhishek.",
        "What projects has he built?",
        "What is his ML & AI experience?",
        "Where does he study & what is his CGPA?",
      ],
      timestamp: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    const cleanText = textToSend.trim();
    if (!cleanText) return;

    const userMsg: Message = {
      sender: "user",
      text: cleanText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const response = queryAssistant(cleanText);
      const botMsg: Message = {
        sender: "assistant",
        text: response.answer,
        category: response.category,
        suggestedQuestions: response.suggestedQuestions,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputVal);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 p-3.5 sm:px-5 sm:py-3.5 text-white shadow-glow-violet transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-violet-400"
          aria-label="Open AI Recruiter Assistant"
        >
          <div className="relative">
            <Sparkles className="h-5 w-5 animate-pulse text-white" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <span className="hidden sm:inline-block font-mono text-xs font-semibold tracking-wider">
            AI ASSISTANT
          </span>
        </button>
      )}

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[440px] sm:h-[620px] z-50 flex flex-col rounded-none sm:rounded-2xl border border-white/[0.12] bg-[#0A0C12] shadow-2xl overflow-hidden backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0E1119] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white shadow-glow-violet">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  RECRUITER AI ASSISTANT
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Deterministic Portfolio QA
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: "assistant",
                      text: `Conversation reset. Feel free to ask anything about Abhishek's background or projects!`,
                      category: "General",
                      suggestedQuestions: PRESET_QUESTIONS.slice(0, 3),
                      timestamp: "Just now",
                    },
                  ])
                }
                title="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={onClose}
                aria-label="Close Assistant"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "assistant" && (
                  <div className="h-6 w-6 rounded-md bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-2">
                  <div
                    className={`rounded-xl p-3 leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-cyan-500/20 text-cyan-100 border border-cyan-500/30 rounded-tr-none"
                        : "bg-[#121622] text-slate-200 border border-white/[0.08] rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestedQuestions.map((q, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSendMessage(q)}
                          className="text-[11px] font-mono text-cyan-300 bg-cyan-500/[0.08] hover:bg-cyan-500/20 border border-cyan-500/20 rounded-md px-2 py-1 text-left transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="h-6 w-6 rounded-md bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs font-mono">
                <div className="h-6 w-6 rounded-md bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center gap-1 bg-[#121622] px-3 py-2 rounded-xl border border-white/[0.08]">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick preset questions below messages */}
          <div className="px-4 py-2 border-t border-white/[0.04] bg-[#0E1119]/50 overflow-x-auto whitespace-nowrap flex gap-1.5">
            {PRESET_QUESTIONS.slice(0, 4).map((preset) => (
              <button
                key={preset}
                onClick={() => handleSendMessage(preset)}
                className="text-[10px] font-mono text-slate-400 hover:text-cyan-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] rounded px-2 py-0.5 transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t border-white/[0.08] bg-[#0E1119]">
            <div className="flex items-center gap-2 rounded-xl bg-[#08090D] border border-white/[0.1] px-3 py-2 focus-within:border-cyan-500/50">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, ML stack, or academics..."
                className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                onClick={() => handleSendMessage(inputVal)}
                disabled={!inputVal.trim()}
                className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Send query"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
