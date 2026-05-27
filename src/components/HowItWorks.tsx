"use client";

import React, { useRef } from "react";
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

  // Verbatim content preserved perfectly to ensure strict content integrity
  const steps = [
    {
      title: "Browse Listed Properties",
      subtitle: "Explore",
      desc: "Explore curated, investment-ready real estate opportunities carefully sourced by market experts across premium and high-growth locations worldwide.",
      icon: Search,
    },
    {
      title: "Choose Investment Units",
      subtitle: "Invest",
      desc: "Select fractional ownership units that align perfectly with your investment goals, preferred locations, and long-term financial strategy.",
      icon: LayoutGrid,
    },
    {
      title: "Become an Owner",
      subtitle: "Execute",
      desc: "Complete secure digital co-ownership transactions seamlessly and gain verified ownership access from anywhere in the world instantly.",
      icon: KeyRound,
    },
    {
      title: "Earn Returns",
      subtitle: "Yield",
      desc: "Monitor automated rental income, long-term property appreciation, and portfolio growth through a simplified investor dashboard experience.",
      icon: Banknote,
    },
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Smooth section title entrance
      gsap.fromTo(
        ".gsap-title",
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

      // Staggered reveal for the layout cards
      gsap.fromTo(
        gsap.utils.toArray(".gsap-step-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-step-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Scroll-driven line animation using precise HTML timeline segments to route flawlessly into target cards
      gsap.utils
        .toArray(".gsap-connector-group")
        .forEach((groupWrapper: any) => {
          const lineH = groupWrapper.querySelector(".gsap-line-h");
          const lineV = groupWrapper.querySelector(".gsap-line-v");

          if (!lineH || !lineV) return;

          // Build continuous scrubbed sequence drawing horizontal segment first, then routing straight down to intersect target card
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: groupWrapper,
              start: "top 65%",
              end: "bottom 35%",
              scrub: true,
            },
          });

          tl.fromTo(
            lineH,
            { scaleX: 0 },
            { scaleX: 1, ease: "none", duration: 0.5 },
          ).fromTo(
            lineV,
            { scaleY: 0 },
            { scaleY: 1, ease: "none", duration: 0.5 },
          );
        });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-24 sm:py-32 bg-gradient-to-b from-white via-gold-50/20 to-stone-50 border-b border-slate-100 relative opacity-99 select-none overflow-hidden"
    >
      {/* Background radial highlight matching FinalCTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Supreme Header Section mimicking screenshot layout style exactly */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 gsap-title">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Simplified Workflow
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            See how <span className="text-gold-600">easy</span> it is to use
            Ownix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            A streamlined digital investment pipeline built to guide you
            securely from direct exploration to optimized portfolio yields.
          </p>
        </div>

        {/* Staggered Alternating Flow Layout preserving the original layout block layout perfectly */}
        {/* Compact vertical margin to reduce physical line routing drop height */}
        <div className="space-y-6 sm:space-y-8 relative pt-4">
          {steps.map((step, idx) => {
            const isRightAligned = idx % 2 === 1;
            const IconComp = step.icon;

            return (
              <div
                key={idx}
                className={`gsap-step-card flex ${
                  isRightAligned ? "justify-end" : "justify-start"
                } relative group`}
              >
                {/* Native HTML Solid Connector Lines routing exactly down to join the boundary of the next card below */}
                {idx < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-[60%] ${
                      isRightAligned
                        ? "right-[45%] w-[32.5%]"
                        : "left-[45%] w-[32.5%]"
                    } h-[calc(40%+2rem)] z-0 pointer-events-none gsap-connector-group`}
                  >
                    {/* Faint uncolored static base track providing visual route guide */}
                    <div
                      className={`absolute inset-0 ${
                        isRightAligned
                          ? "border-t-[3px] border-l-[3px] rounded-tl-2xl"
                          : "border-t-[3px] border-r-[3px] rounded-tr-2xl"
                      } border-solid border-slate-200/80`}
                    />

                    {/* Dynamic live scroll-drawing segments placed absolutely over the base track */}
                    {/* Horizontal top segment */}
                    <div
                      className={`absolute top-0 left-0 right-0 border-t-[3px] border-solid border-gold-600 gsap-line-h ${
                        isRightAligned ? "origin-right" : "origin-left"
                      }`}
                    />

                    {/* Vertical drop segment routing directly down to intersect the card layout perfectly */}
                    <div
                      className={`absolute top-0 bottom-0 ${
                        isRightAligned
                          ? "left-0 border-l-[3px]"
                          : "right-0 border-r-[3px]"
                      } border-solid border-gold-600 origin-top gsap-line-v`}
                    />
                  </div>
                )}

                {/* Actual Card Container preserving original aesthetic layout */}
                <div className="w-full md:w-[46%] relative z-10">
                  {/* Nested Translucent Glow Badge dynamically scaling up when card is hovered */}
                  <div
                    className={`absolute -top-10 sm:-top-12 ${
                      isRightAligned
                        ? "-right-10 sm:-right-12"
                        : "-left-10 sm:-left-12"
                    } w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500`}
                  >
                    {/* Outer faint ring */}
                    <div className="absolute inset-0 rounded-full bg-gold-50/80 scale-110 sm:scale-125 animate-pulse duration-1000" />
                    {/* Secondary soft ring */}
                    <div className="absolute inset-1.5 sm:inset-2 rounded-full bg-gold-100/90 shadow-inner" />
                    {/* Crisp solid core */}
                    <div className="absolute inset-3 sm:inset-4 rounded-full bg-white shadow-md border border-gold-50 flex items-center justify-center text-gold-600">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Main Card Body featuring smooth vertical translation and complete border removal on hover */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-slate-100/80 group-hover:border-transparent text-left relative overflow-hidden">
                    {/* Text wrapper elevated to z-30 to ensure absolute typography clarity over soft glowing aura rings */}
                    <div className="relative z-30 pt-1 sm:pt-2">
                      {/* Subtitle baseline marker */}
                      <div className="text-[10px] sm:text-xs font-mono font-bold text-gold-600 uppercase tracking-widest mb-1.5">
                        Step 0{idx + 1} • {step.subtitle}
                      </div>

                      {/* Title string */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-2.5 group-hover:text-gold-950 transition-colors">
                        {step.title}
                      </h3>

                      {/* Description string */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Action Button */}
        <div className="mt-16 sm:mt-24 text-center relative z-20">
          <a
            href="#properties"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gold-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] group"
          >
            <span>Explore live income-generating deals below</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
