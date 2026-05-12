"use client";

import React, { useState } from "react";
import {
  MapPin,
  TrendingUp,
  Sparkles,
  Check,
  ArrowRight,
  X,
  ShieldCheck,
} from "lucide-react";

interface Property {
  id: string;
  name: string;
  locationType: string;
  startingInvestment: string;
  expectedYield: string;
  appreciation: string;
  availableUnits: number;
  image: string;
}

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [interestSubmitted, setInterestSubmitted] = useState(false);

  const properties: Property[] = [
    {
      id: "prop-1",
      name: "The Aurora Residences",
      locationType: "Sector 62, Noida – Premium Residential",
      startingInvestment: "₹25,000",
      expectedYield: "8.5%",
      appreciation: "High",
      availableUnits: 42,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.06.jpeg",
    },
    {
      id: "prop-2",
      name: "Orion Commercial Tower",
      locationType: "Cyber City, Gurugram – Grade-A Office",
      startingInvestment: "₹50,000",
      expectedYield: "9.2%",
      appreciation: "High",
      availableUnits: 18,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.36.jpeg",
    },
    {
      id: "prop-3",
      name: "Luxe Boulevard Plaza",
      locationType: "Golf Course Ext. Road – High-Street Retail",
      startingInvestment: "₹30,000",
      expectedYield: "10.1%",
      appreciation: "High",
      availableUnits: 25,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.53.jpeg",
    },
    {
      id: "prop-4",
      name: "Elysian Sunset Villa",
      locationType: "Goa Coastal Belt – Luxury Resort Villa",
      startingInvestment: "₹40,000",
      expectedYield: "8.8%",
      appreciation: "High",
      availableUnits: 12,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.54%20(1).jpeg",
    },
    {
      id: "prop-5",
      name: "Ascent Skyline Tower",
      locationType: "Downtown Boulevard – Mixed-Use High Rise",
      startingInvestment: "₹35,000",
      expectedYield: "9.5%",
      appreciation: "High",
      availableUnits: 34,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.55.jpeg",
    },
  ];

  const handleOpenDetails = (prop: Property) => {
    setSelectedProperty(prop);
    setInterestSubmitted(false);
  };

  const handleExpressInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInterestSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSelectedProperty(null);
        setInterestSubmitted(false);
      }, 1500);
    }, 500);
  };

  return (
    <section id="properties" className="py-24 sm:py-28 bg-stone-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4 font-mono shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Explore Investment Opportunities
            </h2>
            <p className="text-slate-600 text-lg mt-3 leading-relaxed max-w-xl">
              Discover premium properties curated for strong rental returns and
              long-term growth potential.
            </p>
          </div>

          <div className="shrink-0 hidden md:block">
            <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left pr-2">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Asset Security
                </div>
                <div className="text-xs font-bold text-slate-800">
                  Fractional Ownership Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breathtaking Luxury Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              id={`property-card-${property.id}`}
              className="flex flex-col rounded-[28px] bg-white border border-slate-200/70 overflow-hidden hover:border-emerald-600/60 transition-all duration-400 group hover:-translate-y-1.5 shadow-xs hover:shadow-2xl relative"
            >
              {/* Image Frame with Inner Padding to feel ultra-premium */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-slate-100">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />

                  {/* High-Contrast Floating Unit Counter */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold text-white font-mono tracking-wider shadow-xs">
                    {property.availableUnits} UNITS LEFT
                  </div>

                  {/* Absolute subtle location directly on bottom of image frame */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-semibold text-white/95 drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{property.locationType}</span>
                  </div>
                </div>
              </div>

              {/* Specs & Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Property Name */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors duration-200 mb-4 px-1">
                    {property.name}
                  </h3>

                  {/* Inset Ledger Box for Financial Specs to deliver incredible layout finish */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50/90 border border-slate-100 mb-2">
                    {/* Spec 1 */}
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Starting Invest.
                      </div>
                      <div className="text-base font-black text-slate-900 tracking-tight mt-0.5">
                        {property.startingInvestment}
                      </div>
                    </div>

                    {/* Spec 2 */}
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Expected Yield
                      </div>
                      <div className="text-base font-black text-emerald-600 tracking-tight mt-0.5 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {property.expectedYield}
                      </div>
                    </div>

                    {/* Spec 3 */}
                    <div className="pt-2 border-t border-slate-200/60">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Appreciation
                      </div>
                      <div className="text-xs font-bold text-slate-700 mt-1">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 font-semibold">
                          {property.appreciation} Potential
                        </span>
                      </div>
                    </div>

                    {/* Spec 4 */}
                    <div className="pt-2 border-t border-slate-200/60">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                        Availability
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-1">
                        {property.availableUnits} Units
                      </div>
                    </div>
                  </div>
                </div>

                {/* Irresistible Direct Premium CTA Trigger Button */}
                <div className="pt-4">
                  <button
                    id={`btn-express-interest-${property.id}`}
                    onClick={() => handleOpenDetails(property)}
                    className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-xl bg-white hover:bg-emerald-600 text-slate-800 hover:text-white border border-slate-200/80 transition-all duration-300 group-hover:border-emerald-600 shadow-2xs font-bold text-xs uppercase tracking-wider"
                  >
                    <span>View Details / Express Interest</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details & Express Interest Overlay Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            id={`modal-details-${selectedProperty.id}`}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Close trigger */}
            <button
              id={`modal-close-btn-${selectedProperty.id}`}
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors border border-slate-100"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-6 pr-8">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-xs">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-emerald-700 tracking-wider font-mono">
                  Asset Opportunity
                </div>
                <h4 className="text-xl font-black text-slate-900 leading-tight">
                  {selectedProperty.name}
                </h4>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-600 mb-6 flex items-center gap-1.5 p-2.5 rounded-xl bg-stone-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{selectedProperty.locationType}</span>
            </p>

            {/* Structured Specs Grid inside Modal */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-stone-50 border border-slate-200/80 mb-6 text-sm">
              <div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Starting Investment
                </div>
                <div className="font-extrabold text-slate-900 font-mono text-base">
                  {selectedProperty.startingInvestment}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Expected Rental Yield
                </div>
                <div className="font-extrabold text-emerald-700 font-mono text-base">
                  {selectedProperty.expectedYield}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Appreciation Potential
                </div>
                <div className="font-bold text-emerald-600 text-xs mt-0.5">
                  {selectedProperty.appreciation}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Available Units
                </div>
                <div className="font-bold text-slate-700 font-mono text-xs mt-0.5">
                  {selectedProperty.availableUnits} Units Left
                </div>
              </div>
            </div>

            {/* Express Interest Client Form */}
            {interestSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Check className="w-6 h-6 font-bold" />
                </div>
                <div className="text-base font-bold text-emerald-900">
                  Interest Expressed Successfully!
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Our private client advisory will reach out shortly to reserve
                  your requested units.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleExpressInterestSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="modal-interest-email"
                    className="block text-xs font-bold text-slate-700 mb-1.5"
                  >
                    Confirm your contact details for immediate reservation
                  </label>
                  <input
                    type="email"
                    id="modal-interest-email"
                    required
                    placeholder="Enter your professional email address"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 shadow-2xs font-medium"
                  />
                </div>
                <button
                  type="submit"
                  id={`confirm-interest-btn-${selectedProperty.id}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Confirm Expression of Interest
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <a
                href="#lead-capture"
                onClick={() => setSelectedProperty(null)}
                className="text-xs text-slate-500 hover:text-emerald-700 transition-colors underline font-medium"
              >
                Or scroll below to submit full onboarding criteria
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
