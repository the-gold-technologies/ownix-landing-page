"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.4 },
      });

      tl.fromTo(".gsap-hero-left", { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
        .fromTo(
          ".gsap-hero-right",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.9",
        )
        .fromTo(
          ".gsap-hero-frame",
          { opacity: 0, scale: 0.94, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.6 },
          "-=0.9",
        );
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 bg-white overflow-hidden select-none"
      >
        {/* Absolute Dark Teal background block covering the upper portion to achieve the exact half-dark half-white layout overlap */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100%-140px)] sm:h-[calc(100%-200px)] bg-gradient-to-b from-[#041A1A] via-[#082828] to-[#041A1A] z-0 pointer-events-none">
          {/* Subtle radial ambient studio highlights */}
          <div className="absolute top-1/4 left-1/4 w-[45rem] h-[45rem] bg-[#35ddb1]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content Layout Grid precisely matching Digiboost layout architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2 mb-8 sm:mb-12 text-left">
            {/* LEFT SIDE: Giant double-line Title with side-stacked prefix and Supporting copy */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 gsap-hero-left">
              {/* Line 1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-white leading-none">
                Why Let <span className="text-[#35ddb1]">Premium</span>
              </h1>

              {/* Line 2 with side label exactly mapped to Digiboost alignment */}
              <div className="flex items-center gap-3 sm:gap-5 pt-1">
                {/* Stacked Real Estate block perfectly left-aligned without side borders */}
                <div className="shrink-0 text-left pt-1">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-none mb-1">
                    Real
                  </div>
                  <div className="text-base sm:text-xl font-bold text-white tracking-tight leading-none">
                    Estate
                  </div>
                </div>

                {/* Line 2 heading string */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-white leading-none">
                  Stay Out of Reach?
                </h1>
              </div>

              {/* Supporting Text explicitly integrated below the core headline strings */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl pt-2">
                Real estate investing is no longer limited to high-net-worth
                individuals. Ownix makes it easier for retail investors to
                access premium properties through Ownix ownership.
              </p>
            </div>

            {/* RIGHT SIDE: Subheadline description & Core CTA triggers separated by a crisp vertical marker line */}
            <div className="lg:col-span-5 relative pl-0 lg:pl-8 pt-6 lg:pt-1 gsap-hero-right">
              {/* Distinct vertical separator line matching reference screenshot exactly */}
              <div className="hidden lg:block absolute left-0 top-2 w-px h-24 bg-slate-700/80" />

              <div className="space-y-6">
                {/* Core Subheadline paragraph mapped verbatim to the reference right column style */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-md text-left">
                  Own high-potential properties with Ownix real estate
                  investing. Start with smaller investments, earn rental income,
                  and benefit from long-term capital appreciation.
                </p>

                {/* Relocated CTA Action Triggers with optimized, geometrically symmetric strings */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-1">
                  <a
                    href="#properties"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] text-center tracking-tight shrink-0"
                  >
                    Explore Properties
                  </a>
                  <a
                    href="#lead-capture"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl border border-white/40 text-white text-xs sm:text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] text-center tracking-tight shrink-0"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Panoramic Showcase Container with Absolute Hover/Stat Overlays */}
          <div className="gsap-hero-frame relative w-full h-[280px] sm:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-950">
            <img
              src="/images/residenzo_style_villa.png"
              alt="Institutional Real Estate Asset Showcase"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-95"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />

            {/* Overlaid Floating Glassmorphic Stat Block 1: Target IRR Yield Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 sm:px-4 py-2 sm:py-3 shadow-2xl flex items-center gap-2.5 sm:gap-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
              {/* Animated Live Dot */}
              <div className="relative flex items-center justify-center w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#35ddb1] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#35ddb1]" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-baseline gap-1">
                  15%+{" "}
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal">
                    IRR Target
                  </span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-none mt-0.5">
                  Verified Premium Asset
                </div>
              </div>
            </div>

            {/* Overlaid Floating Glassmorphic Stat Block 2: Capital Deployment Counter */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl flex items-center gap-2 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-emerald-50 text-emerald-700 font-bold shrink-0">
                ✦
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-none">
                  83K+ Units
                </div>
                <div className="text-[8px] sm:text-[9px] text-slate-500 font-medium mt-1 leading-none">
                  Fully Subscribed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Scrolling Premium Marquee Slide Strip acting as a dynamic visual anchor for the lower section layout */}
      <div className="border-t border-b border-slate-100 bg-slate-50/80 py-3 sm:py-4 overflow-hidden relative w-full flex select-none">
        {/* Subtle left/right fading overlays for seamless edge transition */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Primary marquee flex wrapper */}
        <div className="flex shrink-0 animate-marquee items-center gap-8 min-w-full justify-around">
          {[
            "✦ Fractional Ownership",
            "✦ Premium Verified Titles",
            "✦ Passive Rental Yields",
            "✦ Zero Operational Overhead",
            "✦ Institutional Grade Security",
            "✦ Streamlined Exits",
          ].map((item, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-bold tracking-widest text-emerald-800 uppercase whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Duplicate track ensuring infinite animation loop */}
        <div
          className="flex shrink-0 animate-marquee items-center gap-8 min-w-full justify-around"
          aria-hidden="true"
        >
          {[
            "✦ Fractional Ownership",
            "✦ Premium Verified Titles",
            "✦ Passive Rental Yields",
            "✦ Zero Operational Overhead",
            "✦ Institutional Grade Security",
            "✦ Streamlined Exits",
          ].map((item, idx) => (
            <span
              key={`dup-${idx}`}
              className="text-xs sm:text-sm font-bold tracking-widest text-emerald-800 uppercase whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
