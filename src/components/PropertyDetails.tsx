"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, ArrowRight, Home } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PropertyStep {
  title: string;
  subtitle: string;
  assetValue: string;
  unitValue: string;
  yield: string;
  allocation: string;
  appreciation: string;
  availableUnits: string;
  desc: string;
  images: string[];
}

function PropertyImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset index when images change (new property selected)
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        />
      ))}
      <div className="absolute bottom-6 right-6 flex gap-1.5 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-yellow-400" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PropertyDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Mapped directly to curated properties with their comprehensive institutional investment info
  const steps: PropertyStep[] = [
    {
      title: "Elan Presidential",
      subtitle: "Sector 106, Gurugram – Ultra-Luxury Residences",
      assetValue: "₹5.5 Crores",
      unitValue: "₹55 Lacs",
      yield: "12-16% IRR",
      allocation: "Limited Allocation",
      appreciation: "High",
      availableUnits: "15",
      desc: "Absolute pre-leased sovereign living covenant featuring premium architectural fitouts, private elite clubhouse privileges, and verified fractional capital syndication.",
      images: [
        "/images/properties/properti_1.webp",
        "/images/properties/wa_5.jpeg",
        "/images/properties/wa_4.jpeg",
        "/images/properties/wa_3.jpeg",
      ],
    },
    {
      title: "Elan Emperor",
      subtitle: "Sector 82, Gurugram – High-Street Retail Hub",
      assetValue: "₹10 Crores",
      unitValue: "₹1 Crore",
      yield: "12-16% IRR",
      allocation: "Restricted Units",
      appreciation: "High",
      availableUnits: "12",
      desc: "Prime flagship retail spaces pre-leased to top-tier anchor tenants with strong contractual escalation structures, deep pedestrian catchment, and guaranteed asset transparency.",
      images: [
        "/images/properties/the_emperor/3.jpeg",
        "/images/properties/the_emperor/1.jpeg",
        "/images/properties/the_emperor/2.jpeg",
        "/images/properties/the_emperor/4.jpeg",
        "/images/properties/the_emperor/5.jpeg",
        "/images/properties/the_emperor/6.jpeg",
      ],
    },
    {
      title: "DLF Privana",
      subtitle: "Sectors 76 & 77, Gurugram – Premium Integrated Ecosystem",
      assetValue: "₹7 Crores",
      unitValue: "₹70 Lacs",
      yield: "15-17% IRR",
      allocation: "Exclusive Units",
      appreciation: "High",
      availableUnits: "24",
      desc: "Magnificent sky mansions set against pristine natural backdrops. Authoritative low-density planning integrated into an elite institutional management and escrow safety pool.",
      images: [
        "/images/properties/dlf_privana-sector_77-gurgaon-dlf.avif",
        "/images/properties/1775740333863.png",
        "/images/properties/wa_2.jpeg",
        "/images/properties/wa_5.jpeg",
      ],
    },
    {
      title: "Sobha Crescent",
      subtitle: "International City – Signature Diplomatic Suites",
      assetValue: "₹6 Crores",
      unitValue: "₹60 Lacs",
      yield: "14-17% IRR",
      allocation: "Priority Syndicate",
      appreciation: "High",
      availableUnits: "18",
      desc: "Exclusive signature living structures catering elastically to corporate and diplomatic leadership. Assured long-term rental appreciation backed by transparent multi-tenant demand.",
      images: [
        "/images/properties/17_08_2026_02_17_04_oberoi-three-sixty-north.jpg",
        "/images/properties/wa_5.jpeg",
        "/images/properties/wa_3.jpeg",
        "/images/properties/wa_2.jpeg",
      ],
    },
    {
      title: "Sobha Aranya",
      subtitle: "Sector 80, Gurugram – Forest-Themed Sky Villas",
      assetValue: "₹8.5 Crores",
      unitValue: "₹85 Lacs",
      yield: "14-17% IRR",
      allocation: "Premium Access",
      appreciation: "High",
      availableUnits: "10",
      desc: "LEED Platinum equivalent master-planned ecological marvel. Features immersive smart home automation, absolute sovereign title rights, and premium dedicated ingress syndication.",
      images: [
        "/images/properties/download.jpeg",
        "/images/properties/wa_1.jpeg",
        "/images/properties/wa_4.jpeg",
        "/images/properties/wa_3.jpeg",
      ],
    },
  ];

  // Header entrance animation remains pure GSAP
  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".gsap-hiw-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  // Native IntersectionObserver guarantees trigger accuracy based on actual physical pixels rendered
  // Immune to lazy loading layout shifts or ScrollTrigger early evaluations
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = entry.target.id.match(/step-text-block-(\d+)/);
          if (match) {
            setActiveStep(Number(match[1]));
          }
        }
      });
    };

    // Construct a highly precise trigger line centered exactly at the sticky image's focal plane
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      // Target detection line roughly 40% from top of viewport where the image center rests
      rootMargin: "-38% 0px -58% 0px",
      threshold: 0,
    });

    steps.forEach((_, idx) => {
      const el = document.getElementById(`step-text-block-${idx}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="properties"
      ref={containerRef}
      className="py-24 sm:py-32 bg-white border-b border-slate-100 relative opacity-99 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Supreme Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-hiw-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 mb-4 shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Section 5 – Featured Properties
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Explore Investment Opportunities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover premium properties curated for strong rental returns and
            long-term growth potential.
          </p>
        </div>

        {/* Pure Split Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          {/* LEFT SIDE: Scrolling Step Blocks mapped precisely to viewport bounds */}
          <div className="lg:col-span-6 relative z-10 order-2 lg:order-1">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  id={`step-text-block-${idx}`}
                  /* Adjusted container height perfectly mapped to the increased sticky image viewport for effortless centering */
                  className="h-[440px] items-center sm:h-[560px] flex flex-col justify-center text-left relative cursor-pointer group py-4"
                  onClick={() => setActiveStep(idx)}
                >
                  <div
                    className={`transition-all duration-500 flex flex-col gap-4 sm:gap-6 items-start ${
                      isActive
                        ? "opacity-100 translate-x-1 sm:translate-x-2"
                        : "opacity-30 group-hover:opacity-60 translate-x-0"
                    }`}
                  >
                    {/* Step Index Indicator matching reference layout exactly */}
                    <div className="shrink-0 pt-1">
                      <div
                        className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-base sm:text-xl transition-all duration-500 ${
                          isActive
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Copy Content & Embedded Property Info Grid */}
                    <div className="space-y-2.5 max-w-lg flex-1">
                      <div className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-600 uppercase line-clamp-1">
                        {step.subtitle}
                      </div>
                      <h3
                        className={`text-2xl sm:text-4xl font-black tracking-tight transition-colors duration-500 leading-tight ${
                          isActive ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal pt-0.5 line-clamp-3">
                        {step.desc}
                      </p>

                      {/* Integrated Typography Metrics Flow (No Cards / No Box Enclosures) */}
                      <div
                        className={`pt-2.5 transition-all duration-500 space-y-2 ${
                          isActive
                            ? "opacity-100 max-h-48 translate-y-0"
                            : "opacity-0 max-h-0 overflow-hidden -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                          <li>
                            <span className="font-semibold text-slate-500">
                              Unit Value:{" "}
                            </span>
                            <strong className="text-slate-900 font-bold">
                              {step.unitValue}
                            </strong>
                          </li>
                          <li>
                            <span className="font-semibold text-slate-500">
                              Targeted IRR:{" "}
                            </span>
                            <strong className="text-slate-900 font-bold">
                              {step.yield}
                            </strong>
                          </li>
                          <li>
                            <span className="font-semibold text-slate-500">
                              Appreciation Potential:{" "}
                            </span>
                            <strong className="text-slate-900 font-bold">
                              {step.appreciation}
                            </strong>
                          </li>
                          <li>
                            <span className="font-semibold text-slate-500">
                              Available Units:{" "}
                            </span>
                            <strong className="text-slate-900 font-bold">
                              {step.availableUnits}
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Expanded High-Fidelity Split Card Viewport mapped to superior dimensions */}
          <div className="lg:col-span-6 lg:sticky lg:top-36 h-[440px] sm:h-[480px] w-full flex items-center justify-center order-1 lg:order-2">
            {/* Expanded Photo Frame mirroring FeaturedProperties style ending in an authentic angled chevron point on the left side */}
            <div
              className="relative h-[400px] sm:h-[500px] w-full max-w-[682px] bg-slate-100 overflow-hidden shadow-2xl transition-all duration-500 group rounded-r-3xl"
              style={{
                clipPath: "polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)",
              }}
            >
              {/* Background Property Image container restricted to the visible area to prevent subject truncation */}
              <div className="absolute inset-0 left-[42%] sm:left-[40%]">
                <PropertyImageCarousel
                  images={steps[activeStep]?.images || []}
                  title={steps[activeStep]?.title || ""}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/10 to-slate-950/40 pointer-events-none" />

              {/* Absolute Dark Emerald Wedge Panel scaled perfectly for expanded view */}
              <div className="absolute top-0 left-0 bottom-0 w-[42%] sm:w-[40%] bg-emerald-950 p-6 sm:p-8 flex flex-col justify-center text-left z-10 border-r border-white/5">
                {/* Yellow House Icon scaled cleanly */}
                <div className="w-11 h-11 ml-8 sm:w-12 sm:h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4 shadow-xs shrink-0">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Index string */}
                <div className="text-[10px] ml-8 sm:text-xs font-bold text-slate-400 uppercase tracking-widest line-clamp-1">
                  Real Estate 0{activeStep + 1}
                </div>

                {/* Property Name string in sharp white stacked block */}
                <h4 className="text-lg sm:text-2xl lg:text-3xl ml-8 font-black text-white leading-tight mt-1 drop-shadow-xs line-clamp-3">
                  {steps[activeStep]?.title}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA Action Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#lead-capture"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-stone-50 border border-slate-200/80 text-sm font-bold text-emerald-800 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm group"
          >
            <span>View Details / Express Interest</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
