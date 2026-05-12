import React from "react";
import {
  Search,
  LayoutGrid,
  KeyRound,
  Banknote,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      stepTitle: "Step 1",
      title: "Browse Listed Properties",
      desc: "Explore carefully selected investment-ready properties with detailed information, pricing, and investment opportunities.",
      icon: Search,
      tag: "Exploration",
    },
    {
      num: "02",
      stepTitle: "Step 2",
      title: "Choose Your Investment Units",
      desc: "Each property is divided into multiple investment units, allowing you to purchase one or more units based on your budget.",
      icon: LayoutGrid,
      tag: "Allocation",
    },
    {
      num: "03",
      stepTitle: "Step 3",
      title: "Become a Ownix Owner",
      desc: "Invest digitally and become a co-owner of premium real estate assets.",
      icon: KeyRound,
      tag: "Acquisition",
    },
    {
      num: "04",
      stepTitle: "Step 4",
      title: "Earn Returns",
      desc: "Benefit from rental income and/or long-term property appreciation as the value of the property grows over time.",
      icon: Banknote,
      tag: "Yield & Growth",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-stone-50/40 border-b border-slate-100 relative overflow-hidden"
    >
      {/* Delicate background illumination streak */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-60 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Supreme Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Section 4 – How It Works
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Simple. Transparent. Accessible.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A streamlined digital investment pipeline built to guide you
            securely from direct exploration to optimized portfolio yields in
            four intuitive phases.
          </p>
        </div>

        {/* Stepped Process Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative pt-4">
          {/* Exquisite integrated connecting progress line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[13%] right-[13%] h-[2px] bg-gradient-to-r from-emerald-100 via-emerald-500/40 to-emerald-100 z-0" />

          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                id={`how-it-works-step-${idx + 1}`}
                className="relative z-10 p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-600 transition-all duration-300 group hover:-translate-y-1 shadow-2xs hover:shadow-xl flex flex-col justify-between"
              >
                {/* Internal Card Structure */}
                <div>
                  {/* Header Row inside Card: Animated Sequence Pill & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 font-mono tracking-wider border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors duration-300 uppercase">
                      {step.stepTitle}
                    </span>

                    <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Large Stylized Number Accent */}
                  <div className="text-xs font-mono font-bold text-slate-300 group-hover:text-emerald-600 transition-colors mb-2">
                    / Phase {step.num}
                  </div>

                  {/* Exact Verbatim Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Exact Verbatim Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Sub-tag indicator at bottom */}
                <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <span>{step.tag}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Actionable Explorer Hook */}
        <div className="mt-16 text-center">
          <a
            href="#properties"
            id="how-it-works-start-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200/80 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:border-emerald-200 transition-all shadow-2xs group"
          >
            <span>Ready to explore listed properties? View below</span>
            <span className="group-hover:translate-y-0.5 transition-transform font-mono font-bold text-emerald-600">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
