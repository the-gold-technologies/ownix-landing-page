"use client";

import React from "react";
import {
  Coins,
  Building2,
  Wallet,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      title: "Smaller capital entry",
      desc: "Start investing in premium assets with significantly lower entry points.",
      icon: Coins,
    },
    {
      title: "Premium access",
      desc: "Access high-growth properties previously reserved for institutional investors.",
      icon: Building2,
    },
    {
      title: "Rental income",
      desc: "Earn consistent rental distributions from fully constructed properties.",
      icon: Wallet,
    },
    {
      title: "Capital appreciation",
      desc: "Benefit from long-term asset value growth and secure wealth creation.",
      icon: TrendingUp,
    },
    {
      title: "Portfolio diversity",
      desc: "Spread your capital across multiple prime real estate locations easily.",
      icon: Layers,
    },
    {
      title: "Hassle-free ownership",
      desc: "Zero management burden with complete guidance throughout your journey.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-24 sm:py-32 bg-white border-b border-slate-100 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0">
          {/* 1. Left Content Area */}
          <div className="lg:w-[45%] pr-10 lg:pr-14 flex flex-col justify-center py-6">
            <div className="mb-8">
              <div className="inline-block">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 font-sans block">
                  Why Choose Ownix Real Estate?
                </span>
                <div className="w-10 h-[2px] bg-emerald-600 mt-1" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-8">
              Real Estate Investing{" "}
              <span className="text-emerald-600">Made Accessible</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-sm mb-10">
              <p>
                Traditionally, investing in real estate required significant
                capital and long-term financial commitment. Ownix changes that
                by allowing multiple investors to collectively own premium
                properties.
              </p>
              <p>
                Whether you are a first-time investor or someone looking to
                diversify your portfolio, Ownix ownership gives you the
                opportunity to enter the real estate market with lower
                investment amounts.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#properties"
                className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:scale-105 active:scale-95 group"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 2. Features Container */}
          <div className="lg:w-[55%] flex flex-col sm:flex-row h-full">
            {/* Feature Column 1 */}
            <div className="flex-1 lg:border-l border-slate-100 lg:pl-8">
              <div className="flex flex-col h-full">
                {benefits.slice(0, 3).map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className={`py-8 px-6 flex items-start gap-5 ${
                        idx !== 2 ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1 shadow-sm shadow-emerald-600/5">
                        <IconComponent className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feature Column 2 */}
            <div className="flex-1 lg:border-l border-slate-100 lg:pl-8">
              <div className="flex flex-col h-full">
                {benefits.slice(3, 6).map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className={`py-8 px-6 flex items-start gap-5 ${
                        idx !== 2 ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1 shadow-sm shadow-emerald-600/5">
                        <IconComponent className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
