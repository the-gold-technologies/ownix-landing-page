"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  Sparkles,
  CheckCircle,
  Search,
} from "lucide-react";

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
      className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 border-b border-slate-100"
    >
      {/* Decorative clean radial rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-xs">
            <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <DollarSign className="w-3.5 h-3.5 font-bold" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-700 tracking-tight">
              {tickers[tickerIndex]}
            </span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pure High-Impact Minimalist Headlines matching reference UI */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-2xs font-mono">
              <Sparkles
                className="w-3.5 h-3.5 text-emerald-600 animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <span className="text-xs font-bold uppercase tracking-wide text-slate-800">
                Premium Real Estate Access
              </span>
            </div>

            {/* Huge display text exactly matching reference clean typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-2xl">
              Why Let Premium Real Estate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Stay Out of Reach?
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10 max-w-xl">
              Own high-potential properties with Ownix real estate investing.
              Start with smaller investments, earn rental income, and benefit
              from long-term capital appreciation.
            </p>

            {/* CTA Controls side-by-side exactly like reference screen */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#properties"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 group"
              >
                <span>Explore Investment Opportunities</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#lead-capture"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all duration-200 shadow-xs"
              >
                <span>Join the Waitlist</span>
              </a>
            </div>
          </div>

          {/* Right Column: Breathtaking Architectural Showcase Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">
              {/* Background Tilted Overlay card */}
              <div className="absolute w-[80%] aspect-[4/5] right-0 -top-6 rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg rotate-3 opacity-60 transition-transform hover:rotate-6 duration-500 bg-slate-100 hidden sm:block">
                <img
                  src="/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.36.jpeg"
                  alt="Secondary asset showcase"
                  className="w-full h-full object-cover filter blur-[1px]"
                />
              </div>

              {/* Primary Foreground Asset Frame */}
              <div className="relative w-[90%] sm:w-[85%] aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl z-10 group">
                <img
                  src="/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.54%20(1).jpeg"
                  alt="Primary premium feature unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-85" />

                {/* Floating Top Seal */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900 tracking-tight">
                    Grade-A Unit
                  </span>
                </div>

                {/* Floating Lower Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Featured Asset Strategy
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 truncate mb-2">
                    Elysian Sunset Estate
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium">
                      Rental Target
                    </span>
                    <span className="font-bold text-emerald-700 font-mono flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      8.8% Yield
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Trust Seal */}
              <div className="absolute -bottom-5 left-4 z-20 p-3 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-xl flex items-center gap-2.5 max-w-xs">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Regulated Model
                  </div>
                  <div className="text-xs font-bold text-slate-100 leading-tight">
                    Zero Overhead Entry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Bottom Search / Filter Bar exactly mirroring the user's reference screenshots */}
        <div className="mt-14 left-4 right-4 max-w-5xl mx-auto z-30">
          <div className="bg-white rounded-2xl sm:rounded-full shadow-xl border border-slate-200/80 p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            {/* Dropdown 1: Location */}
            <div className="px-3 sm:px-4 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                Location
              </label>
              <select className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
                <option>Delhi NCR, India</option>
                <option>Goa Coastal Belt</option>
                <option>Mumbai Region</option>
              </select>
            </div>

            {/* Dropdown 2: Property Type */}
            <div className="px-3 sm:px-4 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                Property Type
              </label>
              <select className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
                <option>Classic Apartment</option>
                <option>Grade-A Office</option>
                <option>High-Street Retail</option>
              </select>
            </div>

            {/* Dropdown 3: Price Range */}
            <div className="px-3 sm:px-4 border-b sm:border-b-0 sm:border-r border-slate-100 pb-2 sm:pb-0">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                Investment Range
              </label>
              <select className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
                <option>₹25,000 - ₹1,00,000</option>
                <option>₹1,00,000 - ₹5,00,000</option>
                <option>₹5,00,000+</option>
              </select>
            </div>

            {/* Action Search/Explore Button matching circular/capsule layout */}
            <div className="flex justify-end pt-1 sm:pt-0">
              <a
                href="#properties"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full bg-slate-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Explore Listings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
