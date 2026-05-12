"use client";

import React, { useRef } from "react";
import { Award, Sparkles, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPlatform() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Timeline reveal for media stack on left
      gsap.fromTo(
        ".gsap-about-media",
        { opacity: 0, scale: 0.94, x: -30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Stagger text sequence on right
      gsap.fromTo(
        gsap.utils.toArray(".gsap-about-text"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 sm:py-28 bg-white relative overflow-hidden border-b border-slate-100 opacity-99"
    >
      {/* Decorative ambient background ring */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Showpiece: Single Elite Featured Image Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative gsap-about-media flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
              <img
                src="/images/sustainable_luxury_tower.png"
                alt="Primary architectural expertise view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              {/* Top Corner Authenticity Seal */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-widest border border-slate-700">
                Verified Builder
              </div>

              {/* Overlay side trust seal overlaid perfectly on top-left edge */}
              <div className="absolute top-1/3 left-4 z-20 p-3 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white border border-slate-800 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="pr-2">
                  <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Core Focus
                  </div>
                  <div className="text-xs font-bold text-slate-100 leading-tight">
                    Smarter Decisions
                  </div>
                </div>
              </div>

              {/* Floating Metrics Banner at the base */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg flex items-center justify-between z-20">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    Market Coverage
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                    North India Early Mover
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content Panel */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-left">
            <div className="gsap-about-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 w-max mb-6 shadow-2xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Section 3 – About the Platform
              </span>
            </div>

            <h2 className="gsap-about-text text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              Built by Real Estate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Experts
              </span>
            </h2>

            {/* Structured Paragraph Sequence matching exact user text with premium typographic spacing */}
            <div className="space-y-5 text-slate-600 leading-relaxed font-normal">
              <p className="gsap-about-text text-lg font-semibold text-slate-900 leading-relaxed">
                Backed by strong real estate construction and market expertise,
                our platform is designed to help investors make smarter property
                investment decisions.
              </p>

              <p className="gsap-about-text text-base text-slate-600 leading-relaxed">
                With deep industry knowledge and local market understanding, we
                focus on identifying properties with strong appreciation
                potential and sustainable rental returns.
              </p>

              <p className="gsap-about-text text-base text-slate-600 leading-relaxed">
                As one of the early movers in North India’s Ownix real estate
                market, Ownix aims to make quality real estate investment
                opportunities accessible to a wider audience.
              </p>
            </div>

            {/* Modern High-End Stats Ribbon */}
            <div className="gsap-about-text mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6">
              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  Smarter
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  Investment Decisions
                </div>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-emerald-600 tracking-tight">
                  Strong
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  Appreciation Potential
                </div>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  Accessible
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  To Retail Audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
