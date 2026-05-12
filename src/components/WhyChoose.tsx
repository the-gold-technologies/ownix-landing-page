import React from "react";
import { Coins, Building2, Wallet, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      title: "Start investing with smaller capital",
      description: "Break the barrier of massive down payments and enter the market seamlessly.",
      icon: Coins,
    },
    {
      title: "Access premium and high-growth properties",
      description: "Curated access to Grade-A commercial and luxury residential real estate.",
      icon: Building2,
    },
    {
      title: "Earn rental income from constructed properties",
      description: "Enjoy monthly or quarterly passive cash flow distributed directly to your account.",
      icon: Wallet,
    },
    {
      title: "Benefit from long-term capital appreciation",
      description: "Participate in property value growth as the underlying asset matures.",
      icon: TrendingUp,
    },
    {
      title: "Diversify your investment portfolio",
      description: "Spread your capital across multiple properties, locations, and asset classes.",
      icon: Layers,
    },
    {
      title: "Hassle-free ownership experience",
      description: "Zero tenant management, maintenance headaches, or operational paperwork.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3 font-mono">
            Why Choose Ownix Real Estate?
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Estate Investing Made Accessible
          </p>
        </div>

        {/* Content Paragraphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-300 shadow-2xs">
            <p className="text-base text-slate-600 leading-relaxed">
              Traditionally, investing in real estate required significant capital and long-term financial commitment. Ownix changes that by allowing multiple investors to collectively own premium properties.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-300 relative overflow-hidden shadow-2xs">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600" />
            <p className="text-base text-slate-600 leading-relaxed">
              Whether you are a first-time investor or someone looking to diversify your portfolio, Ownix ownership gives you the opportunity to enter the real estate market with <strong className="text-emerald-700 font-bold">lower investment amounts</strong>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors duration-300 shadow-2xs">
            <p className="text-base text-slate-600 leading-relaxed">
              By diversifying investments across properties, investors can reduce overall investment risk while gaining exposure to premium real estate assets. Ownix also provides complete guidance and handholding throughout the investment journey, making it easier even for investors with no prior real estate investing experience.
            </p>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center sm:text-left flex items-center gap-3 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Key Benefits of Ownix Ownership</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  id={`benefit-card-${index}`}
                  className="p-6 rounded-xl bg-white border border-slate-200 hover:border-emerald-600/40 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-200">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
