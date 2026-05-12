import React from "react";
import {
  Coins,
  Building2,
  Wallet,
  TrendingUp,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      title: "Start investing with smaller capital",
      description:
        "Break the barrier of massive down payments and enter the market seamlessly.",
      icon: Coins,
      tag: "Fractional Entry",
    },
    {
      title: "Access premium and high-growth properties",
      description:
        "Curated access to Grade-A commercial and luxury residential real estate.",
      icon: Building2,
      tag: "Vetted Assets",
    },
    {
      title: "Earn rental income from constructed properties",
      description:
        "Enjoy monthly or quarterly passive cash flow distributed directly to your account.",
      icon: Wallet,
      tag: "Passive Yield",
    },
    {
      title: "Benefit from long-term capital appreciation",
      description:
        "Participate in property value growth as the underlying asset matures.",
      icon: TrendingUp,
      tag: "Capital Growth",
    },
    {
      title: "Diversify your investment portfolio",
      description:
        "Spread your capital across multiple properties, locations, and asset classes.",
      icon: Layers,
      tag: "Risk Mitigated",
    },
    {
      title: "Hassle-free ownership experience",
      description:
        "Zero tenant management, maintenance headaches, or operational paperwork.",
      icon: CheckCircle2,
      tag: "Zero Overhead",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-24 sm:py-28 bg-stone-50/40 border-b border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Supreme Premium Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Why Choose Ownix Real Estate?
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Real Estate Investing <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Made Accessible
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Experience institutional-grade real estate opportunities engineered
            for collective wealth creation, superior security, and fluid
            portfolio growth.
          </p>
        </div>

        {/* 3 Pillar Narrative Columns exactly preserving user's core descriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                01 / Collective Ownership
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                The Evolution of Real Estate
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Traditionally, investing in real estate required significant
                capital and long-term financial commitment. Ownix changes that
                by allowing multiple investors to collectively own premium
                properties.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                02 / Reduced Thresholds
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Seamless Market Entry
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you are a first-time investor or someone looking to
                diversify your portfolio, Ownix ownership gives you the
                opportunity to enter the real estate market with{" "}
                <strong className="text-emerald-700 font-bold">
                  lower investment amounts
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-2">
                03 / Expert Guidance
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Guided Wealth Creation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By diversifying investments across properties, investors can
                reduce overall investment risk while gaining exposure to premium
                real estate assets. Ownix also provides complete guidance and
                handholding throughout the investment journey, making it easier
                even for investors with no prior real estate investing
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Core Capabilities Section Header */}
        <div className="border-t border-slate-200/80 pt-12 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Key Benefits of Ownix Ownership</span>
            </h3>
          </div>
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono bg-emerald-50 px-3 py-1 rounded-md">
            Institutional Standard
          </div>
        </div>

        {/* 6 Modular High-Conversion Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                id={`benefit-card-${index}`}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-600 transition-all duration-300 group hover:-translate-y-1 shadow-2xs hover:shadow-xl relative flex flex-col justify-between"
              >
                {/* Top indicator tag and icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider group-hover:text-emerald-600 transition-colors">
                      / {benefit.tag}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle dynamic bottom arrow indicator */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <span>Explore Advantage</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
