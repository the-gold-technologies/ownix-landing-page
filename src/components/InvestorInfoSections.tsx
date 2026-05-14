"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Layers,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InvestorInfoSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reveal title section
      gsap.fromTo(
        ".gsap-cat-header",
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

      // Stagger column cards reveal
      gsap.fromTo(
        gsap.utils.toArray(".gsap-cat-card"),
        { opacity: 0, scale: 0.96, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        id="why-investors-interested"
        ref={containerRef}
        className="py-20 sm:py-28 bg-gradient-to-b from-[#184848] via-[#267575] to-[#184848] border-b border-[#2A8282] relative select-none overflow-hidden text-white"
      >
        {/* Luminous radial ambient studio highlights providing an accessible, highly luxurious lighter dark dimension */}
        <div className="absolute top-1/4 right-1/4 w-[45rem] h-[45rem] bg-[#35ddb1]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[40rem] h-[40rem] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Expanded 3-Column Asymmetrical Grid housing all 5 local property images perfectly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* COLUMN 1: Widescreen Title Array, Verbatim Website Content & Base Matrix Card */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
              {/* Title segment & verbatim intro flow */}
              <div className="gsap-cat-header text-left pt-2">
                <div className="relative inline-block mb-3">
                  {/* Sleek mint/teal accent tabs behind initial character */}
                  <span className="absolute -top-2 -left-2 w-11 h-11 rounded-xl bg-[#35ddb1]/10 border border-[#35ddb1]/20 -z-10" />
                  <span className="absolute top-2 left-2 w-10 h-10 rounded-lg bg-teal-500/10 -z-10" />

                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight relative z-10">
                    <span className="text-[#35ddb1]">W</span>hy Ownix
                    Ownership is Growing
                  </h2>
                </div>

                {/* Signature horizontal mint line matching site-wide aesthetic */}
                <div className="w-16 h-1 bg-[#35ddb1] rounded-full mt-4 mb-4 shadow-sm shadow-[#35ddb1]/20" />

                {/* Verbatim intro content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-3">
                  ownix real estate ownership allows investors to participate in
                  premium property investment without the burden of purchasing
                  an entire property independently.
                </p>
              </div>

              {/* Property Showcase 1: Elan Presidential */}
              <a
                href="#properties"
                className="gsap-cat-card relative h-[300px] sm:h-[340px] w-full rounded-3xl overflow-hidden shadow-xl group block shrink-0 bg-slate-900/40 ring-1 ring-white/5"
              >
                <img
                  src="/images/properties/properti_1.webp"
                  alt="Elan Presidential"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Reduced black gradient overlay to let underlying architectural files shine clearly */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/10 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-left z-10 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                    Lower entry barriers
                  </h3>
                  <p className="text-xs text-[#35ddb1] mt-1 drop-shadow-xs">
                    Elan Presidential
                  </p>
                </div>
              </a>
            </div>

            {/* COLUMN 2: Stacked Widescreen Property Frames housing distinct properties */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-between h-full">
              {/* Property Showcase 2: Elan Emperor */}
              <a
                href="#properties"
                className="gsap-cat-card relative h-[390px] w-full rounded-3xl overflow-hidden shadow-xl group block bg-slate-900/40 ring-1 ring-white/5"
              >
                <img
                  src="/images/properties/elan_the_emperor-sector_106_gurgaon-gurgaon-elan_group_builders.avif"
                  alt="Elan Emperor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/10 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-left z-10 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                    Better diversification
                  </h3>
                  <p className="text-xs text-[#35ddb1] mt-1 drop-shadow-xs">
                    Elan Emperor
                  </p>
                </div>
              </a>

              {/* Property Showcase 3: DLF Privana */}
              <a
                href="#properties"
                className="gsap-cat-card relative h-[250px] sm:h-[280px] w-full rounded-3xl overflow-hidden shadow-xl group block bg-slate-900/40 ring-1 ring-white/5"
              >
                <img
                  src="/images/properties/dlf_privana-sector_77-gurgaon-dlf.avif"
                  alt="DLF Privana"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/10 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-left z-10 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                    Passive income opportunities
                  </h3>
                  <p className="text-xs text-[#35ddb1] mt-1 drop-shadow-xs">
                    DLF Privana
                  </p>
                </div>
              </a>
            </div>

            {/* COLUMN 3: Stacked Showcase Panels housing the remaining distinct properties files perfectly */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-between h-full">
              {/* Property Showcase 4: Sobha Crescent Asset */}
              <a
                href="#properties"
                className="gsap-cat-card relative h-[250px] sm:h-[280px] w-full rounded-3xl overflow-hidden shadow-xl group block bg-slate-900/40 ring-1 ring-white/5"
              >
                <img
                  src="/images/properties/1775740333863.png"
                  alt="Sobha Crescent"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/10 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-left z-10 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                    Long-term wealth creation
                  </h3>
                  <p className="text-xs text-[#35ddb1] mt-1 drop-shadow-xs">
                    Sobha Crescent Suite
                  </p>
                </div>
              </a>

              {/* Property Showcase 5: Sobha Aranya Asset */}
              <a
                href="#properties"
                className="gsap-cat-card relative h-[390px] w-full rounded-3xl overflow-hidden shadow-xl group block bg-slate-900/40 ring-1 ring-white/5"
              >
                <img
                  src="/images/properties/download.jpeg"
                  alt="Sobha Aranya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/10 transition-all duration-500" />

                <div className="absolute top-6 left-6 text-left z-10 pr-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs">
                    Access to premium assets
                  </h3>
                  <p className="text-xs text-[#35ddb1] mt-1 drop-shadow-xs">
                    Sobha Aranya Sovereign
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
