"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  MapPin,
  TrendingUp,
  Sparkles,
  Check,
  ArrowRight,
  X,
  ShieldCheck,
  Home,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Property {
  id: string;
  name: string;
  locationType: string;
  startingInvestment: string; // Represents Unit Value
  assetValue: string; // Represents Total Asset Value
  expectedYield: string; // Represents Targeted IRR
  appreciation: string;
  availableUnits: number;
  image: string;
}

export default function FeaturedProperties() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [interestSubmitted, setInterestSubmitted] = useState(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Layout section fade-in
      gsap.fromTo(
        ".gsap-feat-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Stagger right column pill tracks
      gsap.fromTo(
        gsap.utils.toArray(".gsap-track-item"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-track-item",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Left column showpiece entrance
      gsap.fromTo(
        ".gsap-showpiece-left",
        { opacity: 0, scale: 0.96, x: -30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-showpiece-left",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Smooth scrub vertical parallax for the stage showcase image
      gsap.to(".gsap-parallax-img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-showpiece-left",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  const properties: Property[] = [
    {
      id: "prop-3",
      name: "Luxe Boulevard Plaza",
      locationType: "Golf Course Ext. Road – High-Street Retail",
      startingInvestment: "₹68 Lacs",
      assetValue: "₹6.8 Crores",
      expectedYield: "9.8% IRR",
      appreciation: "High",
      availableUnits: 25,
      image: "/images/premium_hero_architecture.png",
    },
    {
      id: "prop-4",
      name: "Elysian Sunset Villa",
      locationType: "Goa Coastal Belt – Luxury Resort Villa",
      startingInvestment: "₹42 Lacs",
      assetValue: "₹4.2 Crores",
      expectedYield: "9.4% IRR",
      appreciation: "High",
      availableUnits: 12,
      image: "/images/residenzo_style_villa.png",
    },
    {
      id: "prop-5",
      name: "Ascent Skyline Tower",
      locationType: "Downtown Boulevard – Mixed-Use High Rise",
      startingInvestment: "₹50 Lacs",
      assetValue: "₹5 Crores",
      expectedYield: "11% IRR",
      appreciation: "High",
      availableUnits: 34,
      image: "/images/sustainable_luxury_tower.png",
    },
    {
      id: "prop-6",
      name: "The Horizon Pavilion",
      locationType: "Sector 62, Noida – Executive Signature Suites",
      startingInvestment: "₹45 Lacs",
      assetValue: "₹4.5 Crores",
      expectedYield: "9.5% IRR",
      appreciation: "High",
      availableUnits: 18,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.54%20(1).jpeg",
    },
    {
      id: "prop-7",
      name: "Aethelgard Estate",
      locationType: "Cyber City – Premium Boutique Corporate Wing",
      startingInvestment: "₹38 Lacs",
      assetValue: "₹3.8 Crores",
      expectedYield: "9.1% IRR",
      appreciation: "High",
      availableUnits: 22,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.54.jpeg",
    },
    {
      id: "prop-8",
      name: "Imperial Crest Penthouse",
      locationType: "Downtown Boulevard – Grand Sky Mansion",
      startingInvestment: "₹72 Lacs",
      assetValue: "₹7.2 Crores",
      expectedYield: "10.5% IRR",
      appreciation: "High",
      availableUnits: 10,
      image:
        "/images/properties/WhatsApp%20Image%202026-05-11%20at%2019.32.55.jpeg",
    },
  ];

  const activeProp = properties[activeIndex] || properties[0];

  const handleRowClick = (idx: number) => {
    setActiveIndex(idx);
    setInterestSubmitted(false);
  };

  const handleOpenDetails = (prop: Property) => {
    setSelectedProperty(prop);
    setInterestSubmitted(false);
  };

  const handleExpressInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInterestSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setInterestSubmitted(false);
        setSelectedProperty(null);
      }, 1500);
    }, 500);
  };

  return (
    <section
      id="properties"
      ref={containerRef}
      className="py-24 sm:py-32 bg-stone-50/40 border-b border-slate-100 relative opacity-99 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 gsap-feat-header">
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

        {/* --- Master layout mimicking reference screenshot verbatim --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
          {/* Left Column: Chevron-Clipped Frame, Absolute Badge & Specialties Block */}
          <div className="lg:col-span-7 gsap-showpiece-left">
            {/* Widescreen Photo Frame ending in an authentic angled chevron point */}
            <div
              className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden shadow-2xl transition-all duration-500 group rounded-l-3xl"
              style={{
                clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
              }}
            >
              <img
                key={activeProp.image}
                src={activeProp.image}
                alt={activeProp.name}
                className="gsap-parallax-img scale-110 w-full h-full object-cover animate-in fade-in duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/10 to-slate-950/40" />

              {/* Absolute Dark Emerald Wedge Panel over the right side matching global core theme */}
              <div className="absolute top-0 right-0 bottom-0 w-[42%] sm:w-[38%] bg-emerald-950 p-5 sm:p-7 flex flex-col justify-center text-left z-10 border-l border-white/5">
                {/* Yellow House Icon */}
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4 shadow-xs">
                  <Home className="w-5 h-5" />
                </div>

                {/* Index string */}
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Real Estate 0{activeIndex + 1}
                </div>

                {/* Property Name string in sharp white stacked block */}
                <h4 className="text-lg sm:text-2xl font-black text-white leading-tight mt-1 drop-shadow-xs">
                  {activeProp.name}
                </h4>
              </div>
            </div>

            {/* Bottom-Left Specialties Info Box directly aligned below the image */}
            <div className="mt-8 text-left max-w-xl pl-2">
              {/* Carriage / Specialties Icon Anchor matching theme palette */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-4 border border-slate-200/60">
                <TrendingUp className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                Specialties Service Point
              </h4>

              {/* Seamless descriptive narrative incorporating all required institutional financial metrics */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Secure syndication allocation in a premium underlying asset
                valued at{" "}
                <strong className="text-slate-900 font-semibold">
                  {activeProp.assetValue}
                </strong>{" "}
                with an accessible individual Unit Value baseline of{" "}
                <strong className="text-slate-900 font-semibold">
                  {activeProp.startingInvestment}
                </strong>
                . Structured programmatically to target a proven{" "}
                <strong className="text-emerald-600 font-bold">
                  {activeProp.expectedYield}
                </strong>{" "}
                alongside consistent{" "}
                <strong className="text-slate-900 font-semibold">
                  {activeProp.appreciation} appreciation potential
                </strong>
                . Currently restricted to precisely{" "}
                <strong className="text-slate-900 font-bold">
                  {activeProp.availableUnits} remaining units
                </strong>{" "}
                authorized for private institutional placement.
              </p>

              {/* Clear action trigger button */}
              <button
                onClick={() => handleOpenDetails(activeProp)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>View Complete Details / Pre-Reserve</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Large Heading & Stacked White Elevated Pill Tracks */}
          <div className="lg:col-span-5">
            {/* Vertically Stacked Track Items matching platform theme indicators */}
            <div className="space-y-4">
              {properties.map((property, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <button
                    key={property.id}
                    onClick={() => handleRowClick(idx)}
                    className={`gsap-track-item w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between group relative bg-white ${
                      isActive
                        ? "shadow-xl border-l-4 border-l-emerald-600 ring-1 ring-slate-200/60 translate-x-1 sm:translate-x-2"
                        : "shadow-sm hover:shadow-md border border-slate-100/80 hover:border-slate-200"
                    }`}
                  >
                    {/* Left text segment */}
                    <div className="pr-4">
                      <div
                        className={`text-base font-bold tracking-tight ${
                          isActive ? "text-emerald-800" : "text-slate-800"
                        }`}
                      >
                        {property.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed truncate max-w-[210px] sm:max-w-[260px]">
                        {property.locationType}
                      </div>
                    </div>

                    {/* Right verified checkmark badge mimicking the icon on each white track */}
                    <div className="shrink-0 flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                        {property.expectedYield}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                          isActive
                            ? "text-emerald-700"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Standalone Details & Express Interest Modal Layer mounted globally via React Portal */}
      {mounted &&
        selectedProperty &&
        createPortal(
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 z-[999999]">
            <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <button
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

              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-stone-50 border border-slate-200/80 mb-6 text-sm">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Underlying Asset Value
                  </div>
                  <div className="font-extrabold text-slate-900 font-mono text-base">
                    {selectedProperty.assetValue}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Syndicated Unit Value
                  </div>
                  <div className="font-extrabold text-slate-900 font-mono text-base">
                    {selectedProperty.startingInvestment}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Targeted Return Rate
                  </div>
                  <div className="font-bold text-emerald-700 font-mono text-base mt-0.5">
                    {selectedProperty.expectedYield}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Remaining Allocation
                  </div>
                  <div className="font-bold text-slate-700 font-mono text-xs mt-1">
                    {selectedProperty.availableUnits} Units Left
                  </div>
                </div>
              </div>

              {interestSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Check className="w-6 h-6 font-bold" />
                  </div>
                  <div className="text-base font-bold text-emerald-900">
                    Interest Expressed Successfully!
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Our private client advisory will reach out shortly to
                    reserve your requested units.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleExpressInterestSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Confirm your contact details for immediate reservation
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your professional email address"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 shadow-2xs font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Confirm Expression of Interest
                  </button>
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
