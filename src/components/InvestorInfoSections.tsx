"use client";

import React, { useRef } from "react";
import {
  CheckCircle,
  MessageSquare,
  TrendingUp,
  Sparkles,
  Layers,
  Unlock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InvestorInfoSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reveal left heading elements
      gsap.fromTo(
        ".gsap-invest-header",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Stagger checklist items on right
      gsap.fromTo(
        gsap.utils.toArray(".gsap-driver-card"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-driver-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Fade reveal lower pricing container
      gsap.fromTo(
        ".gsap-pricing-block",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-pricing-block",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Verbatim user bullet points paired with elegant semantic icons
  const growthDrivers = [
    { label: "Lower entry barriers", icon: Unlock },
    { label: "Better diversification", icon: Layers },
    { label: "Passive income opportunities", icon: TrendingUp },
    { label: "Long-term wealth creation", icon: Sparkles },
    { label: "Access to premium assets", icon: ShieldCheck },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-white border-b border-slate-100 relative overflow-hidden opacity-99"
    >
      {/* SECTION 6: Why Investors Are Interested */}
      <section
        id="why-investors"
        className="py-24 sm:py-28 bg-stone-50/40 relative z-10 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Text Column */}
            <div className="lg:col-span-5 gsap-invest-header text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-6 font-mono shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Section 6 – Market Drivers</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Why Ownix Ownership is Growing
              </h2>

              {/* Extremely concise, high-impact overview */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Access premium real estate fractionally without full independent capital burdens, engineered directly for modern investors seeking:
              </p>
            </div>

            {/* Right Premium Matrix Checklist Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {growthDrivers.map((driver, index) => {
                  const IconComp = driver.icon;
                  // Gracefully allow the 5th item to span horizontally to ensure clean geometric alignment
                  const isLast = index === 4;

                  return (
                    <div
                      key={index}
                      id={`growth-driver-card-${index}`}
                      className={`gsap-driver-card p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-600 transition-all duration-300 group shadow-2xs hover:shadow-xl flex items-center gap-5 text-left ${
                        isLast
                          ? "sm:col-span-2 justify-center sm:justify-start"
                          : ""
                      }`}
                    >
                      {/* Premium Soft Icon Enclosure */}
                      <div className="w-12 h-12 rounded-xl bg-stone-50 group-hover:bg-emerald-600 text-slate-600 group-hover:text-white border border-slate-100 flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                        <IconComp className="w-5 h-5 font-bold" />
                      </div>

                      {/* Explicit Label Content */}
                      <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {driver.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Pricing / Investment Information */}
      <section
        id="pricing"
        className="py-20 sm:py-28 relative z-10 overflow-hidden gsap-pricing-block"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Exquisite Centerpiece Floating Icon Crest to eliminate empty space */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-2xs">
              <Layers className="w-5 h-5 shrink-0" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg relative -top-2 border border-slate-800">
              <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-2xs">
              <ShieldCheck className="w-5 h-5 shrink-0" />
            </div>
          </div>

          {/* Subtle open badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-6 font-mono">
            Pricing / Investment Information
          </div>

          {/* Majestic Cinematic Heading */}
          <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            Start Small. Grow Big.
          </h3>

          {/* Unboxed Open Copy Flow */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
            Scale your exposure starting from optimized unit fractions. Amounts map elastically to property tiers, locations, and projected yield targets.
          </p>

          {/* Unboxed Premium Standalone Trigger */}
          <div>
            <a
              href="#lead-capture"
              id="pricing-talk-team-btn"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors shrink-0" />
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
