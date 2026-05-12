"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Search,
  LayoutGrid,
  KeyRound,
  Banknote,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Browse Listed Properties",
      subtitle: "Explore",
      desc: "Explore curated, investment-ready real estate opportunities carefully sourced by market experts across premium and high-growth locations worldwide.",
      icon: Search,
      bgImage: "/images/sustainable_luxury_tower.png",
    },
    {
      title: "Choose Investment Units",
      subtitle: "Invest",
      desc: "Select fractional ownership units that align perfectly with your investment goals, preferred locations, and long-term financial strategy.",
      icon: LayoutGrid,
      bgImage: "/images/concept_pavilion.png",
    },
    {
      title: "Become an Owner",
      subtitle: "Execute",
      desc: "Complete secure digital co-ownership transactions seamlessly and gain verified ownership access from anywhere in the world instantly.",
      icon: KeyRound,
      bgImage: "/images/concept_penthouse.png",
    },
    {
      title: "Earn Returns",
      subtitle: "Yield",
      desc: "Monitor automated rental income, long-term property appreciation, and portfolio growth through a simplified investor dashboard experience.",
      icon: Banknote,
      bgImage: "/images/concept_atrium.png",
    },
  ];
  // Header entrance animation remains pure GSAP
  useGSAP(
    () => {
      if (!containerRef.current) return;

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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Native IntersectionObserver guarantees trigger accuracy based on actual physical pixels rendered
  // Immune to lazy loading layout shifts or ScrollTrigger early evaluations
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = entry.target.id.match(/step-text-block-(\d+)/);
          if (match) {
            setActiveStep(Number(match[1]));
          }
        }
      });
    };

    // Construct a highly precise trigger line centered exactly at the sticky image's focal plane
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      // Target detection line roughly 40% from top of viewport where the image center rests
      rootMargin: "-38% 0px -58% 0px",
      threshold: 0,
    });

    steps.forEach((_, idx) => {
      const el = document.getElementById(`step-text-block-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 sm:py-32 bg-white border-b border-slate-100 relative opacity-99 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Supreme Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-hiw-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Section 4 – Workflow Architecture
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Simple. Transparent. Accessible.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A streamlined digital investment pipeline built to guide you
            securely from direct exploration to optimized portfolio yields.
          </p>
        </div>

        {/* Pure Split Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* LEFT SIDE: Scrolling Step Blocks mapped precisely to viewport bounds */}
          <div className="lg:col-span-6 relative z-10 order-2 lg:order-1">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  id={`step-text-block-${idx}`}
                  /* Each wrapper takes exactly the height of the sticky frame to guarantee pixel-perfect vertical centering */
                  className="h-[380px] sm:h-[480px] flex flex-col justify-center text-left relative cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  <div
                    className={`transition-all duration-500 flex gap-6 sm:gap-8 items-center ${
                      isActive
                        ? "opacity-100 translate-x-2"
                        : "opacity-30 group-hover:opacity-60 translate-x-0"
                    }`}
                  >
                    {/* Step Index Indicator */}
                    <div className="shrink-0">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition-all duration-500 ${
                          isActive
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Copy Content */}
                    <div className="space-y-1.5 max-w-md">
                      <div className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase">
                        {step.subtitle}
                      </div>
                      <h3
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-500 ${
                          isActive ? "text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Compact, Sticky Pure Image Viewport with increased height */}
          <div className="lg:col-span-6 lg:sticky lg:top-36 h-[380px] sm:h-[480px] w-full flex items-center justify-center order-1 lg:order-2">
            {/* Elegant compact encasing frame focusing fully on the unadorned high-fidelity photo */}
            <div className="relative w-full max-w-md h-full rounded-3xl p-2 bg-white border border-slate-200/80 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden bg-slate-100">
                <img
                  src={steps[activeStep].bgImage}
                  alt={steps[activeStep].title}
                  key={activeStep}
                  className="w-full h-full object-cover animate-fade-in duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA Action Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#properties"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-50 border border-slate-200/80 text-sm font-bold text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-2xs group"
          >
            <span>Explore live income-generating deals below</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
