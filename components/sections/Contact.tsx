"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Inquiry",
          message: formData.message,
          from_name: "Portfolio Visitor",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // If access key is placeholder or invalid, provide helpful instruction + mailto fallback
        if (accessKey === "YOUR_ACCESS_KEY_HERE" || result.message?.includes("Invalid access key")) {
          // Open mailto fallback automatically if Web3Forms key is not configured
          const fallbackMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
            formData.subject || "Portfolio Contact Inquiry"
          )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          )}`;
          window.location.href = fallbackMailto;
          setStatus("success");
        } else {
          setStatus("error");
          setErrorMessage(result.message || "Submission failed. Please try again or email directly.");
        }
      }
    } catch (err: unknown) {
      // Network error fallback
      const fallbackMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = fallbackMailto;
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-radial-fade">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Get in Touch"
          title="Let's Build Something Useful."
          subtitle="Have an interesting problem, internship opportunity, or engineering idea? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <GlowCard glowColor="cyan" className="p-8">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                DIRECT COMMUNICATION
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Engineering Inquiries
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Open to AI/ML engineering internships, software development opportunities, and technical collaborations.
              </p>

              <div className="space-y-3 font-mono text-xs">
                {/* Email Box */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3 overflow-hidden mr-2">
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-white/[0.04] text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-200">{PERSONAL_INFO.phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded bg-white/[0.04] text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-all"
                >
                  <Linkedin className="h-3.5 w-3.5 text-cyan-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.socials.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-all"
                >
                  <Github className="h-3.5 w-3.5 text-cyan-400" />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.socials.leetcode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-all"
                >
                  <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                  LeetCode
                </a>
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <GlowCard glowColor="violet" className="p-8">
              <span className="text-xs font-mono text-violet-400 block mb-2 font-semibold">
                {"// TRANSMIT MESSAGE"}
              </span>

              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Message dispatched successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 flex items-center gap-2.5">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      disabled={status === "loading"}
                      className="w-full rounded-xl bg-[#08090D] border border-white/[0.1] px-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      disabled={status === "loading"}
                      className="w-full rounded-xl bg-[#08090D] border border-white/[0.1] px-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI/ML Internship / Project Discussion"
                    disabled={status === "loading"}
                    className="w-full rounded-xl bg-[#08090D] border border-white/[0.1] px-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role requirements, or question..."
                    disabled={status === "loading"}
                    className="w-full rounded-xl bg-[#08090D] border border-white/[0.1] px-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-xs font-mono font-bold text-black shadow-glow-cyan hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Dispatching via Web3Forms...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Dispatch Message
                    </>
                  )}
                </button>
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
