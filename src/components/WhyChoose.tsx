"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Coins,
  Building2,
  Wallet,
  TrendingUp,
  Layers,
  CheckCircle2,
  Sparkles,
  Star,
  Users,
  Lightbulb,
  TrendingUp as GraphIcon,
  Wrench,
  Handshake,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChoose() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedOrbitIndex, setSelectedOrbitIndex] = useState<number>(0);
  const [activePillarTab, setActivePillarTab] = useState<number>(0);

  // Auto-advance interval timer: smoothly transitions the selected orbit index every 4 seconds exactly as requested
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedOrbitIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Tie the active Core Pillar tab to the orbit progression to make the whole section animate together beautifully
  useEffect(() => {
    setActivePillarTab(Math.floor(selectedOrbitIndex / 2));
  }, [selectedOrbitIndex]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".gsap-why-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".gsap-orbit-wrapper",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-orbit-wrapper",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Exact verbatim 6 key benefit strings provided by the user
  const benefits = [
    {
      title: "Start investing with smaller capital",
      desc: "Break massive entry barriers to join institutional property ledgers.",
      icon: Coins,
      refIcon: Star,
    },
    {
      title: "Access premium and high-growth properties",
      desc: "Curated access to Grade-A commercial and luxury residential real estate.",
      icon: Building2,
      refIcon: Users,
    },
    {
      title: "Earn rental income from constructed properties",
      desc: "Enjoy monthly or quarterly passive cash flow distributed directly to your account.",
      icon: Wallet,
      refIcon: Lightbulb,
    },
    {
      title: "Benefit from long-term capital appreciation",
      desc: "Participate in property value growth as the underlying asset matures.",
      icon: TrendingUp,
      refIcon: GraphIcon,
    },
    {
      title: "Diversify your investment portfolio",
      desc: "Spread your capital across multiple capital locations and high asset classes.",
      icon: Layers,
      refIcon: Wrench,
    },
    {
      title: "Hassle-free ownership experience",
      desc: "Zero tenant management, maintenance headaches, or operational paperwork.",
      icon: CheckCircle2,
      refIcon: Handshake,
    },
  ];

  // Extremely concise, high-impact Core Pillar statements inspired by getstake.com
  const paragraphs = [
    {
      label: "Collective Ownership",
      text: "Co-own prime real estate with verified fractional shares, removing traditional high-capital entry thresholds.",
    },
    {
      label: "Reduced Thresholds",
      text: "Access institutional-grade property portfolios starting from optimized lower investment tiers.",
    },
    {
      label: "Expert Guidance",
      text: "Mitigate market risk through asset diversification alongside complete end-to-end investment handholding.",
    },
  ];

  return (
    <section
      id="why-choose"
      ref={containerRef}
      className="py-24 sm:py-32 bg-white border-b border-slate-100 relative opacity-99 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* TOP HEADER BLOCK seamlessly matched with native site emerald/teal brand tokens */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 gsap-why-header">
          {/* Native top layout separator markers */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <span className="w-2 h-0.5 bg-emerald-600 rounded-full" />
            <span className="w-6 h-0.5 bg-emerald-600 rounded-full" />
            <span className="w-2 h-0.5 bg-emerald-600 rounded-full" />
          </div>

          <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 mb-3 inline-block">
            Why Choose Ownix Real Estate?
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Real Estate Investing <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Made Accessible
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Experience institutional-grade real estate opportunities engineered
            for collective wealth creation, superior security, and fluid
            portfolio growth.
          </p>
        </div>

        {/* MAIN MASTERPIECE LAYOUT GRID: Drastically reduced gap (gap-6 lg:gap-10) and perfectly balanced columns (6 & 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center text-left max-w-6xl mx-auto">
          {/* LEFT PANE (6 Columns): The Significantly Enlarged Circular Orbit Track */}
          <div className="lg:col-span-6 gsap-orbit-wrapper flex justify-center">
            {/* Drastically increased circle scale from w-[460px] up to w-[520px] sm:w-[540px] to make the circle gorgeous and prominent */}
            <div className="relative w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] flex items-center justify-center shrink-0">
              {/* Outer Dashed Orbit Track Line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 pointer-events-none" />

              {/* Secondary delicate background visual rings */}
              <div className="absolute inset-8 rounded-full border border-slate-100 pointer-events-none" />

              {/* Small floating reference space brand particles */}
              <div className="absolute top-12 -left-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <div className="absolute bottom-16 -right-1 w-2 h-2 rounded-full bg-teal-500" />
              <div className="absolute top-1/3 right-10 w-1 h-1 rounded-full bg-emerald-400" />

              {/* 6 ORBIT SATELLITE NODES spaced symmetrically along the enlarged ring perimeter */}
              {benefits.map((benefit, idx) => {
                const isActive = selectedOrbitIndex === idx;
                const RefVectorIcon = benefit.refIcon;

                // Explicit mapped radial locations corresponding precisely to reference preview angles
                let positionClasses = "";
                if (idx === 0) positionClasses = "top-[6%] right-[15%]";
                else if (idx === 1) positionClasses = "top-[43%] -right-[4%]";
                else if (idx === 2) positionClasses = "bottom-[6%] right-[15%]";
                else if (idx === 3) positionClasses = "bottom-[6%] left-[15%]";
                else if (idx === 4) positionClasses = "top-[43%] -left-[4%]";
                else if (idx === 5) positionClasses = "top-[6%] left-[15%]";

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedOrbitIndex(idx)}
                    className={`absolute z-30 transition-all duration-700 group flex items-center justify-center ${positionClasses} ${
                      isActive
                        ? "scale-110"
                        : "opacity-80 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 text-white shadow-xl ring-4 ring-emerald-50 scale-105"
                          : "bg-white text-slate-600 border border-slate-200/80 shadow-xs group-hover:border-slate-400 group-hover:text-slate-900"
                      }`}
                    >
                      <RefVectorIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 ${isActive ? "fill-current scale-110" : "stroke-[1.5]"}`}
                      />
                    </div>

                    {/* Small preview sequence flag tooltips visible on hover */}
                    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[9px] font-mono px-2 py-0.5 rounded whitespace-nowrap shadow-xs pointer-events-none hidden sm:block">
                      Benefit 0{idx + 1}
                    </span>
                  </button>
                );
              })}

              {/* DEAD CENTER OF ORBIT: Significantly Enlarged Inner Frame to fill center space natively */}
              <div className="relative z-20 w-[240px] sm:w-[320px] p-2 text-center select-none transition-all duration-700 ease-in-out">
                {/* Active node index marker indicator */}
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-3 uppercase tracking-wider transition-all duration-500">
                  Benefit 0{selectedOrbitIndex + 1} Active
                </span>

                {/* Maintained prominent title size */}
                <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-tight mb-2 transition-all duration-500">
                  {benefits[selectedOrbitIndex].title}
                </h3>

                {/* Maintained supportive medium copy sizing */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-4 transition-all duration-500">
                  {benefits[selectedOrbitIndex].desc}
                </p>

                {/* Interactive telemetry instruction line */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-emerald-600/80">
                  ● Auto-transitioning every 4s
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANE (6 Columns): Beautiful Interactive Accordion Cards Stack for Core Structural Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Core Structural Pillars</span>
              </span>
              <span className="text-xs font-medium text-slate-400">
                Select to expand
              </span>
            </div>

            {/* Vertical Stack of Beautifully Spaced Interactive Pillar Cards */}
            <div className="space-y-4">
              {paragraphs.map((p, idx) => {
                const isActive = activePillarTab === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActivePillarTab(idx);
                      setSelectedOrbitIndex(idx * 2);
                    }}
                    className={`p-5 rounded-2xl transition-all duration-400 cursor-pointer text-left border ${
                      isActive
                        ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-l-4 border-l-emerald-600 border-y-slate-100 border-r-slate-100 scale-[1.01]"
                        : "bg-stone-50/50 hover:bg-stone-50 border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                            isActive
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <h4
                          className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                            isActive
                              ? "text-slate-900 font-extrabold"
                              : "text-slate-700"
                          }`}
                        >
                          {p.label}
                        </h4>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-600 rotate-180"
                            : "text-slate-400"
                        }`}
                      >
                        <span className="text-xs font-bold">▼</span>
                      </div>
                    </div>

                    {/* Exquisite full descriptive text reveal directly in place */}
                    {isActive && (
                      <div className="mt-3.5 pt-3 border-t border-slate-50 text-sm sm:text-base text-slate-600 leading-relaxed font-normal animate-in fade-in slide-in-from-top-1 duration-300">
                        {p.text}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Embedded watermark visual preview link demonstrating premium integration with Concept A */}
            <div className="rounded-xl overflow-hidden bg-slate-950 p-3 relative flex items-center justify-between border border-slate-200 shadow-xs">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="/images/concept_penthouse.png"
                  alt="Background Watermark"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono font-bold text-white tracking-tight">
                  Infinity Penthouse Asset Verified
                </span>
              </div>

              <span className="relative z-10 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                Concept A
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
