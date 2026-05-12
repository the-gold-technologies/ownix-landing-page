"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Timeline staggered load animation for hero text elements
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(".hero-headline", { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ".hero-image-frame",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=0.6",
        )
        .fromTo(
          ".hero-filter-bar",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 bg-white overflow-hidden border-b border-slate-100 opacity-99"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Section perfectly mapped to standard laptop fold geometry */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pt-2">
          {/* Left Side: Scaled Ultra-Impact Headline */}
          <div className="max-w-2xl text-left hero-headline">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08]">
              Why Let Premium Real <br className="hidden lg:inline" />
              Estate Stay Out of Reach?
            </h1>
          </div>

          {/* Right Side: Tightly Paced Offset Stack */}
          <div className="max-w-md text-left lg:pb-1 w-full hero-desc">
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed mb-3 sm:mb-4">
              Own high-potential properties with Ownix real estate investing.
              Start with smaller investments, earn rental income, and benefit
              from long-term capital appreciation.
            </p>

            {/* Compact action capsule */}
            <a
              href="#properties"
              className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm font-bold text-slate-800 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 shadow-2xs group w-fit"
            >
              <span>Explore Listings</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Height-Constrained Panoramic Architectural Viewport Frame guaranteeing above-the-fold render */}
        <div className="mt-6 sm:mt-8 relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 group h-[200px] sm:h-[260px] lg:h-[420px] bg-slate-50 hero-image-frame">
          <img
            src="/images/residenzo_style_villa.png"
            alt="Premium architectural feature canvas"
            className="w-full h-full object-cover object-[center_40%] group-hover:scale-102 transition-transform duration-1000 ease-out"
          />

          {/* Atmospheric ambient lighting block */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        {/* Overlapping Multi-Select Filter Module mapped tightly above the scroll line */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 -mt-8 sm:-mt-12 lg:-mt-14 relative z-30 hero-filter-bar">
          <div className="bg-white rounded-xl sm:rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:shadow-[0_12px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 p-3.5 sm:p-5 text-left">
            {/* Input Grid Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 items-end">
              {/* Field 1: Building Type */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-slate-800 mb-1">
                  Building Type
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-slate-600 focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer">
                    <option>Apartment</option>
                    <option>Commercial Suite</option>
                    <option>Boutique Villa</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 2: Category */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-slate-800 mb-1">
                  Category
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-slate-600 focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer">
                    <option>Fractional Buy</option>
                    <option>Yield Token</option>
                    <option>Secondary Exit</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 3: Location */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-slate-800 mb-1">
                  Location
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-slate-600 focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer">
                    <option>Delhi NCR, India</option>
                    <option>Goa Coastal Belt</option>
                    <option>Mumbai Region</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 4: Style */}
              <div>
                <label className="block text-[10px] sm:text-[11px] font-bold text-slate-800 mb-1">
                  Style
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-slate-600 focus:outline-none focus:border-emerald-600 appearance-none cursor-pointer">
                    <option>Modern Architecture</option>
                    <option>Premium High-Rise</option>
                    <option>Boutique Estate</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action Trigger Block integrated into compact horizontal line */}
              <div className="pt-1 sm:pt-0">
                <a
                  href="#properties"
                  className="w-full h-8 sm:h-[36px] inline-flex items-center justify-center gap-1.5 px-4 rounded-lg sm:rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors duration-300 shadow-md group shrink-0"
                >
                  <span>Search Now</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
