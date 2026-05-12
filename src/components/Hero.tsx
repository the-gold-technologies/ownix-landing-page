"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Users, DollarSign, Sparkles } from "lucide-react";

export default function Hero() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const tickers = [
    "You’ve been paid ₹18,550 in rent today",
    "Boulevard Point funded at +10.4% projected yield",
    "Thousands globally earning passive real estate income",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [tickers.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50"
    >
      {/* Absolute decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Background soft dots pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Stake-inspired live notifications banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-md animate-bounce-subtle">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <DollarSign className="w-3.5 h-3.5 font-bold" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300">
              {tickers[tickerIndex]}
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                Ownix Real Estate Investment Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Why Let Premium Real Estate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Stay Out of Reach?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Own high-potential properties with Ownix real estate investing. Start with smaller investments, earn rental income, and benefit from long-term capital appreciation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#properties"
                id="hero-explore-btn"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Explore Investment Opportunities</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#lead-capture"
                id="hero-waitlist-btn"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-xs"
              >
                <span>Join the Waitlist</span>
              </a>
            </div>

            {/* Supporting Text Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-xs border-l-4 border-l-emerald-600 max-w-2xl">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;Real estate investing is no longer limited to high-net-worth individuals. Ownix makes it easier for retail investors to access premium properties through Ownix ownership.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Visual Demonstration with generated premium asset */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-emerald-600/5 rounded-3xl rotate-2 scale-[1.02] blur-lg" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl group">
                <img
                  src="/images/properties/property-1.png"
                  alt="Premium real estate asset illustration"
                  className="w-full h-auto object-cover aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient overlay at bottom for tag readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

                {/* Internal floating glassmorphic stats badge 1 */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md animate-float">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Expected Yield</div>
                      <div className="text-sm font-bold text-slate-900 font-mono">8.5% - 12.0%</div>
                    </div>
                  </div>
                </div>

                {/* Internal floating glassmorphic stats badge 2 */}
                <div className="absolute bottom-14 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Asset Verification</div>
                      <div className="text-sm font-bold text-slate-900">100% Secure</div>
                    </div>
                  </div>
                </div>

                {/* Live investors pill */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-100 shadow-xs">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-700">Fractional Model</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
