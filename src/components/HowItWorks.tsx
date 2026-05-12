"use client";

import React, { useRef } from "react";
import {
  Search,
  LayoutGrid,
  KeyRound,
  Banknote,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Header entrance animation
      gsap.fromTo(
        ".gsap-hiw-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Central drawing line scroll scrub animation
      gsap.fromTo(
        ".gsap-drawing-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 85%",
            scrub: true,
          },
        },
      );

      // Animate each timeline row natively on scroll crossing
      gsap.utils.toArray(".gsap-timeline-row").forEach((row: any, index: number) => {
        const isEven = index % 2 === 0; // Even row index means text is on the Right
        const textCol = row.querySelector(".gsap-timeline-text");
        const iconCol = row.querySelector(".gsap-timeline-icon");

        if (!textCol || !iconCol) return;

        // Animate Text Column sweeping in from its side
        gsap.fromTo(
          textCol,
          { opacity: 0, x: isEven ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );

        // Animate Line-Art Icon Column scaling and locking into layout
        gsap.fromTo(
          iconCol,
          { opacity: 0, scale: 0.75, x: isEven ? -30 : 30 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.85,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const steps = [
    {
      title: "Browse Listed Properties",
      desc: "Explore carefully selected investment-ready properties with detailed information, pricing, and investment opportunities.",
      icon: Search,
    },
    {
      title: "Choose Your Investment Units",
      desc: "Each property is divided into multiple investment units, allowing you to purchase one or more units based on your budget.",
      icon: LayoutGrid,
    },
    {
      title: "Become a Ownix Owner",
      desc: "Invest digitally and become a co-owner of premium real estate assets.",
      icon: KeyRound,
    },
    {
      title: "Earn Returns",
      desc: "Benefit from rental income and/or long-term property appreciation as the value of the property grows over time.",
      icon: Banknote,
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 sm:py-32 bg-white border-b border-slate-100 relative overflow-hidden opacity-99"
    >
      {/* Subtle ambient light glow for institutional depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70%] h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Supreme Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 gsap-hiw-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Section 4 – How It Works
            </span>
          </div>
          
          {/* Preserved Verbatim User Heading */}
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Simple. Transparent. Accessible.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A streamlined digital investment pipeline built to guide you securely from direct exploration to optimized portfolio yields.
          </p>
        </div>

        {/* Precise Vertical Alternating Split Timeline Container */}
        <div className="relative pt-4 pb-8">
          
          {/* Continuous Central Axis Base Track Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 transform -translate-x-1/2 z-0" />

          {/* Animated Scrubbed Foreground Progress Line */}
          <div className="gsap-drawing-line hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 to-teal-600 transform -translate-x-1/2 z-10 origin-top scale-y-0" />

          {/* Stepped Process Core Rows Sequence */}
          <div className="space-y-16 sm:space-y-24 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0; // true for Step 1 and Step 3

              return (
                <div
                  key={idx}
                  id={`how-it-works-step-${idx + 1}`}
                  className="gsap-timeline-row grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative"
                >
                  
                  {/* --- Column 1: Line-Art Nested Ring Icon side --- */}
                  {/* On Even rows (Step 1, 3), icon sits on the Left. On Odd rows (Step 2, 4), icon sits on the Right on desktop. */}
                  <div
                    className={`gsap-timeline-icon flex ${
                      isEven
                        ? "order-1 md:order-1 justify-start md:justify-end md:pr-12"
                        : "order-1 md:order-2 justify-start md:pl-12"
                    }`}
                  >
                    {/* Breathtaking double concentric icon ring modeling the user reference graphic */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-emerald-600/30 bg-white shadow-sm flex items-center justify-center relative group hover:scale-105 transition-transform duration-400 shrink-0">
                      {/* Inner dashed circle rendering the line-art styling */}
                      <div className="absolute inset-2 sm:inset-2.5 rounded-full border border-dashed border-emerald-600/40 flex items-center justify-center bg-emerald-50/20">
                        <IconComp className="w-10 h-10 sm:w-11 sm:h-11 text-emerald-600 stroke-[1.5]" />
                      </div>
                    </div>
                  </div>

                  {/* --- Column 2: Text Pillar side --- */}
                  {/* On Even rows (Step 1, 3), text sits on the Right. On Odd rows (Step 2, 4), text sits on the Left on desktop. */}
                  <div
                    className={`gsap-timeline-text flex flex-col ${
                      isEven
                        ? "order-2 md:order-2 md:pl-12 text-left"
                        : "order-2 md:order-1 md:pr-12 text-left md:text-right md:items-end"
                    }`}
                  >
                    {/* Solid numeric index dot exactly mirroring the reference upload layout */}
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-sm mb-4 select-none">
                      {idx + 1}
                    </div>

                    {/* Exact Verbatim Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Exact Verbatim Description */}
                    <p className="text-base text-slate-600 leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Actionable Explorer Hook CTA */}
        <div className="mt-16 text-center">
          <a
            href="#properties"
            id="how-it-works-start-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200/80 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:border-emerald-200 transition-all shadow-2xs group"
          >
            <span>Ready to explore listed properties? View below</span>
            <span className="group-hover:translate-y-0.5 transition-transform font-mono font-bold text-emerald-600">
              ↓
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
