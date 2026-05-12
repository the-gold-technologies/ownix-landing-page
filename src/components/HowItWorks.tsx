import React from "react";
import { Search, LayoutGrid, KeyRound, Banknote } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      stepTitle: "Step 1",
      title: "Browse Listed Properties",
      desc: "Explore carefully selected investment-ready properties with detailed information, pricing, and investment opportunities.",
      icon: Search,
    },
    {
      num: "02",
      stepTitle: "Step 2",
      title: "Choose Your Investment Units",
      desc: "Each property is divided into multiple investment units, allowing you to purchase one or more units based on your budget.",
      icon: LayoutGrid,
    },
    {
      num: "03",
      stepTitle: "Step 3",
      title: "Become a Ownix Owner",
      desc: "Invest digitally and become a co-owner of premium real estate assets.",
      icon: KeyRound,
    },
    {
      num: "04",
      stepTitle: "Step 4",
      title: "Earn Returns",
      desc: "Benefit from rental income and/or long-term property appreciation as the value of the property grows over time.",
      icon: Banknote,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 font-mono">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple. Transparent. Accessible.
          </h2>
        </div>

        {/* Timeline / Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting dashed path line for large screens */}
          <div className="hidden lg:block absolute top-[28%] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 -z-1" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                id={`how-it-works-step-${idx + 1}`}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-600/40 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                {/* Top Animated Number Circle */}
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 group-hover:border-emerald-600 flex items-center justify-center relative mb-6 shadow-2xs transition-colors duration-300">
                  <span className="text-xl font-black text-emerald-700 font-mono">
                    {step.num}
                  </span>
                  {/* Small icon badge overlay */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow">
                    <IconComp className="w-3.5 h-3.5 font-bold" />
                  </div>
                </div>

                {/* Sub label */}
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {step.stepTitle}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom actionable indicator */}
        <div className="mt-16 text-center">
          <a
            href="#properties"
            id="how-it-works-start-btn"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
          >
            <span>Ready to explore listed properties? View below</span>
            <span className="group-hover:translate-y-0.5 transition-transform font-mono font-bold">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
