"use client";

import React, { useState } from "react";
import { MapPin, TrendingUp, Sparkles, Check, ArrowUpRight, X } from "lucide-react";

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
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
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
      image: "/images/properties/property-1.png",
    },
    {
      id: "prop-2",
      name: "Orion Commercial Tower",
      locationType: "Cyber City, Gurugram – Grade-A Office",
      startingInvestment: "₹50,000",
      expectedYield: "9.2%",
      appreciation: "High",
      availableUnits: 18,
      image: "/images/properties/property-2.png",
    },
    {
      id: "prop-3",
      name: "Luxe Boulevard Plaza",
      locationType: "Golf Course Ext. Road – High-Street Retail",
      startingInvestment: "₹30,000",
      expectedYield: "10.1%",
      appreciation: "High",
      availableUnits: 25,
      image: "/images/properties/property-3.png",
    },
    {
      id: "prop-4",
      name: "Elysian Sunset Villa",
      locationType: "Goa Coastal Belt – Luxury Resort Villa",
      startingInvestment: "₹40,000",
      expectedYield: "8.8%",
      appreciation: "High",
      availableUnits: 12,
      image: "/images/properties/property-4.png",
    },
    {
      id: "prop-5",
      name: "Ascent Skyline Tower",
      locationType: "Downtown Boulevard – Mixed-Use High Rise",
      startingInvestment: "₹35,000",
      expectedYield: "9.5%",
      appreciation: "High",
      availableUnits: 34,
      image: "/images/properties/property-5.png",
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
      // Automatically reset modal after short preview
      setTimeout(() => {
        setSelectedProperty(null);
        setInterestSubmitted(false);
      }, 1500);
    }, 500);
  };

  return (
    <section id="properties" className="py-24 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 font-mono">
              Featured Listing Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Investment Opportunities
            </h2>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              Discover premium properties curated for strong rental returns and long-term growth potential.
            </p>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="font-semibold">Fractional Ownership Verified Units</span>
            </div>
          </div>
        </div>

        {/* Featured Properties Custom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <div
              key={property.id}
              id={`property-card-${property.id}`}
              className="flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-emerald-600/40 transition-all duration-300 group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              {/* Premium Media frame using generated demo images */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-90" />
                
                {/* Available units inline label */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 text-[11px] font-bold text-emerald-800 font-mono tracking-wide shadow-xs">
                  {property.availableUnits} UNITS LEFT
                </div>

                {/* Subtag mirroring Stake's high performance model */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-emerald-600 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-xs">
                  Verified Income
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs font-medium text-white drop-shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{property.locationType}</span>
                </div>
              </div>

              {/* Property Specs Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200 mb-4">
                    {property.name}
                  </h3>

                  {/* Bullet Spec Grid */}
                  <div className="space-y-3 pt-2 pb-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Starting Investment:</span>
                      <span className="font-bold text-slate-900 font-mono">{property.startingInvestment}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Expected Rental Yield:</span>
                      <span className="font-bold text-emerald-700 font-mono flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {property.expectedYield}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Appreciation Potential:</span>
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 text-xs">
                        {property.appreciation}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Available Units:</span>
                      <span className="font-semibold text-slate-700 font-mono">{property.availableUnits}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Trigger */}
                <div className="pt-2">
                  <button
                    id={`btn-express-interest-${property.id}`}
                    onClick={() => handleOpenDetails(property)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-emerald-600 border border-slate-200 text-sm font-bold text-slate-800 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 group-hover:border-emerald-600"
                  >
                    <span>View Details / Express Interest</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dynamic Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            id={`modal-details-${selectedProperty.id}`}
            className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Header close trigger */}
            <button
              id={`modal-close-btn-${selectedProperty.id}`}
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors border border-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-emerald-700 tracking-wider">Premium Opportunity</div>
                <h4 className="text-lg font-extrabold text-slate-900 leading-tight">{selectedProperty.name}</h4>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>{selectedProperty.locationType}</span>
            </p>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-sm">
              <div>
                <div className="text-xs text-slate-500 font-medium">Entry Price</div>
                <div className="font-bold text-slate-900 font-mono">{selectedProperty.startingInvestment}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Rental Yield</div>
                <div className="font-bold text-emerald-700 font-mono">{selectedProperty.expectedYield}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Appreciation</div>
                <div className="font-bold text-emerald-600">{selectedProperty.appreciation}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Availability</div>
                <div className="font-bold text-slate-700 font-mono">{selectedProperty.availableUnits} Units</div>
              </div>
            </div>

            {/* Interactive Express Interest form inside Modal */}
            {interestSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Check className="w-6 h-6 font-bold" />
                </div>
                <div className="text-sm font-bold text-emerald-800">Interest Logged Successfully!</div>
                <p className="text-xs text-slate-600 mt-1">Our advisor will prioritize your portfolio entry.</p>
              </div>
            ) : (
              <form onSubmit={handleExpressInterestSubmit} className="space-y-3">
                <div>
                  <label htmlFor="modal-interest-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Confirm your contact info for direct advisory
                  </label>
                  <input
                    type="email"
                    id="modal-interest-email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  id={`confirm-interest-btn-${selectedProperty.id}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-xs transition-colors"
                >
                  Confirm Early Interest
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <a
                href="#lead-capture"
                onClick={() => setSelectedProperty(null)}
                className="text-xs text-slate-500 hover:text-emerald-700 underline font-medium"
              >
                Or fill the full Early Access form below
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
