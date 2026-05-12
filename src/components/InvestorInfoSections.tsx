import React from "react";
import { CheckCircle, MessageSquare, TrendingUp, ShieldAlert, Sparkles, Layers, DollarSign } from "lucide-react";

export default function InvestorInfoSections() {
  const growthDrivers = [
    { label: "Lower entry barriers", desc: "No massive capital lock-up required" },
    { label: "Better diversification", desc: "Mitigate asset concentration risks" },
    { label: "Passive income opportunities", desc: "Predictable periodic rental returns" },
    { label: "Long-term wealth creation", desc: "Benefit from continuous organic appreciation" },
    { label: "Access to premium assets", desc: "Institutional-grade real estate within reach" },
  ];

  return (
    <div className="bg-white border-b border-slate-100 relative overflow-hidden">
      
      {/* SECTION 6: Why Investors Are Interested */}
      <section id="why-investors" className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header Panel */}
            <div className="lg:col-span-5">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 font-mono">
                Market Trends
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why Ownix Ownership is Growing
              </h2>
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 border-l-4 border-l-emerald-600 space-y-4 shadow-2xs">
                <p className="text-base text-slate-700 leading-relaxed">
                  Ownix real estate ownership allows investors to participate in premium property investments without the burden of purchasing an entire property independently.
                </p>
                <p className="text-sm text-slate-500">
                  This investment model is gaining popularity among modern investors who seek strategic capital deployment.
                </p>
              </div>
            </div>

            {/* Right Growth Drivers Checklist */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {growthDrivers.map((driver, index) => (
                  <div
                    key={index}
                    id={`growth-driver-${index}`}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-600/30 transition-all flex items-start gap-3 group shadow-2xs"
                  >
                    <div className="p-1 rounded bg-emerald-50 text-emerald-600 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 font-bold" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {driver.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {driver.desc}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Extra absolute visual promo badge */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col justify-center items-center text-center shadow-2xs">
                  <Sparkles className="w-6 h-6 text-emerald-600 mb-1 animate-pulse" />
                  <div className="text-xs font-bold text-slate-900">Modern Wealth Standard</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">High efficiency model</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 7: Pricing / Investment Information */}
      <section id="pricing" className="pb-24 pt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            
            {/* Absolute radial green blob */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="md:col-span-7">
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 font-mono">
                  Pricing / Investment Information
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Start Small. Grow Big.
                </h3>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Our platform allows you to invest based on units available in each property. Investment amounts may vary depending on the property type, location, and growth potential.
                  </p>
                  <p>
                    You can start with smaller investments and gradually build your real estate portfolio over time.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col items-stretch sm:items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                <div className="text-center mb-4">
                  <div className="text-xs text-slate-500 font-medium">Customized Entry</div>
                  <div className="text-lg font-bold text-emerald-700 font-mono">Unit-Based Allocation</div>
                </div>

                <a
                  href="#lead-capture"
                  id="pricing-talk-team-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-xs transition-all hover:scale-105 active:scale-95 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to Our Team</span>
                </a>

                <div className="text-[11px] text-slate-400 text-center mt-3 font-medium">
                  Direct consultation with portfolio managers
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
