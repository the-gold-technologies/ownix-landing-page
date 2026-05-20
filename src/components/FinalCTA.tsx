"use client";

import React, { useRef } from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Timeline zoom reveal for the core CTA interface
      gsap.fromTo(
        ".gsap-cta-content",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="final-cta"
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white via-emerald-50/20 to-stone-50 relative overflow-hidden text-center border-t border-slate-100 opacity-99"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gsap-cta-content">
        <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-6 shadow-2xs">
          Take the next step
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Your Gateway to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Smarter Real Estate Investing
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Start building your real estate portfolio without needing massive
          capital. Invest in premium properties, earn passive income, and
          participate in long-term property growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("open-lead-modal", {
                  detail: { formType: "Join the Waitlist" },
                }),
              );
            }}
            id="final-cta-waitlist-btn"
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <span>Join the Waitlist</span>
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </button>

          <a
            href="tel:+919700001421"
            id="final-cta-advisor-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold text-slate-800 bg-white border border-slate-200 hover:border-emerald-600/40 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" />
            <span>Speak to an Advisor</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span>✓ Instant verification</span>
          <span>✓ Zero platform overheads</span>
          <span>✓ Regulated fractional units</span>
        </div>
      </div>
    </section>
  );
}
