"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function PricingBlock() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 relative z-10 overflow-hidden bg-gradient-to-b from-[#184848] via-[#267575] to-[#184848] text-white border-y border-[#2A8282]"
    >
      {/* Subtle Architectural Background Image for the entire section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/premium_hero_architecture.png"
          alt="Premium Architecture"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#35ddb1]/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#35ddb1] mb-6 shadow-sm">
              Pricing / Investment Information
            </div>

            <h3 className="text-4xl sm:text-[52px] font-black text-white tracking-tight mb-6 leading-none">
              Start Small. <span className="text-[#35ddb1]">Grow Big.</span>
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              Scale your exposure starting from optimized unit fractions.
              Amounts map elastically to property tiers, locations, and
              projected yield targets.
            </p>

            <div>
              <a
                href="https://wa.me/919700001421"
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-talk-team-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 group"
              >
                <MessageSquare className="w-4 h-4 text-white transition-colors shrink-0 stroke-[2.5]" />
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 shrink-0 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Visual / Image Block */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md aspect-[3/2] sm:aspect-[16/10] lg:aspect-[3/2] rounded-[2rem] bg-[#0a1a1a] shadow-2xl overflow-hidden group border border-[#2A8282]">
              <img
                src="/images/sustainable_luxury_tower.png"
                alt="Premium Property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041A1A]/90 via-[#041A1A]/20 to-transparent pointer-events-none" />

              {/* Optional subtle overlay text or badge could go here if needed, keeping it clean for now */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-sm font-bold text-white tracking-wide">
                  Premium Asset Access
                </div>
                <div className="text-xs text-[#35ddb1] mt-1">
                  High-yield fractional ownership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
