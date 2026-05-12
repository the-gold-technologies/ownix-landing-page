import React from "react";
import { Award, Compass, LineChart, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPlatform() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-100"
    >
      {/* Decorative ambient background ring */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Showpiece: Layered Institutional Media Stack */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              {/* Secondary background floating layer */}
              <div className="absolute w-2/3 aspect-[4/5] -bottom-6 -left-6 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hidden sm:block bg-slate-50 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                <img
                  src="/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.53.jpeg"
                  alt="Secondary real estate asset showcase"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
              </div>

              {/* Primary featured image card */}
              <div className="relative w-[90%] sm:w-[80%] ml-auto aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white z-10 group">
                <img
                  src="/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.06.jpeg"
                  alt="Primary architectural expertise view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Top Corner Authenticity Seal */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-widest border border-slate-700">
                  Verified Builder
                </div>

                {/* Floating Metrics Banner at the base */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Market Coverage
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                      North India Early Mover
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Overlay side trust seal */}
              <div className="absolute top-1/3 -left-4 z-20 p-3 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="pr-2">
                  <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Core Focus
                  </div>
                  <div className="text-xs font-bold text-slate-100 leading-tight">
                    Smarter Decisions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content Panel */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 w-max mb-6 shadow-2xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Section 3 – About the Platform
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              Built by Real Estate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Experts
              </span>
            </h2>

            {/* Structured Paragraph Sequence matching exact user text */}
            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              {/* Highlighted primary text anchor */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-slate-200/60 border-l-4 border-l-emerald-600 shadow-2xs">
                <p className="font-semibold text-slate-800 text-base leading-relaxed">
                  Backed by strong real estate construction and market
                  expertise, our platform is designed to help investors make
                  smarter property investment decisions.
                </p>
              </div>

              {/* Seamless paragraph 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  With deep industry knowledge and local market understanding,
                  we focus on identifying properties with strong appreciation
                  potential and sustainable rental returns.
                </p>
              </div>

              {/* Seamless paragraph 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                  <LineChart className="w-4 h-4" />
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  As one of the early movers in North India’s Ownix real estate
                  market, Ownix aims to make quality real estate investment
                  opportunities accessible to a wider audience.
                </p>
              </div>
            </div>

            {/* Modern High-End Stats Ribbon */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6">
              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  Smarter
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  Investment Decisions
                </div>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-emerald-600 tracking-tight">
                  Strong
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  Appreciation Potential
                </div>
              </div>

              <div className="relative pl-4 border-l-2 border-emerald-600">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  Accessible
                </div>
                <div className="text-[11px] text-slate-500 font-semibold tracking-wider font-mono uppercase mt-1">
                  To Retail Audience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
