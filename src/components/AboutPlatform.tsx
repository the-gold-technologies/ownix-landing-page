import React from "react";
import { Award, Compass, LineChart } from "lucide-react";

export default function AboutPlatform() {
  return (
    <section id="about" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Asset Panel */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
              <img
                src="/images/properties/property-2.png"
                alt="Real estate market expertise graphic"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/10] lg:aspect-square group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay metric tag */}
              <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Market Coverage</div>
                  <div className="text-base font-bold text-slate-900">North India Early Mover</div>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content Panel */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 w-max mb-4 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                About the Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Built by Real Estate Experts
            </h2>

            <div className="space-y-6 text-slate-600 text-base leading-relaxed">
              <p className="p-4 rounded-xl bg-white border border-slate-200/80 border-l-4 border-l-emerald-600 shadow-2xs">
                Backed by strong real estate construction and market expertise, our platform is designed to help investors make smarter property investment decisions.
              </p>

              <p className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span>
                  With deep industry knowledge and local market understanding, we focus on identifying properties with strong appreciation potential and sustainable rental returns.
                </span>
              </p>

              <p className="flex items-start gap-3">
                <LineChart className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <span>
                  As one of the early movers in North India&apos;s Ownix real estate market, Ownix aims to make quality real estate investment opportunities accessible to a wider audience.
                </span>
              </p>
            </div>

            {/* Quick stats grid below paragraphs */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 text-center sm:text-left">
              <div>
                <div className="text-2xl font-black text-slate-900">Smarter</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Investment Decisions</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-600">Strong</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Appreciation Potential</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">Accessible</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">To Retail Audience</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
