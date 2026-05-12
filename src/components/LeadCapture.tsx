"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadCapture() {
  const containerRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    investmentBudget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Fade-in left column side block
    gsap.fromTo(
      ".gsap-lead-left",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Zoom/slide right form block
    gsap.fromTo(
      ".gsap-lead-form",
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean premium asynchronous response state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const budgets = [
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,000,000",
    "₹1,000,000+",
  ];

  return (
    <section
      id="lead-capture"
      ref={containerRef}
      className="py-20 sm:py-28 bg-slate-50/80 relative overflow-hidden border-t border-slate-100 opacity-99"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seamless Grid inspired by the reference reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Premium Minimalist Typography & Contact Elements */}
          <div className="lg:col-span-6 gsap-lead-left">
            {/* Top helper text */}
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 font-mono">
              INVESTMENT ASSISTANCE
            </div>

            {/* Verbatim Section Headline */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Be Among the First Investors
            </h3>

            {/* Verbatim Section Content */}
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mb-10 font-normal">
              <p>
                We are currently onboarding early investors interested in
                premium Ownix real estate opportunities.
              </p>
              <p>
                Share your details and our team will connect with you with
                upcoming property listings and investment opportunities.
              </p>
            </div>

            {/* Support items mapping verbatim to the left-hand column design layout */}
            <div className="space-y-6 pt-2">
              {/* E-mail Support Block */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    E-mail
                  </div>
                  <div className="text-sm font-semibold text-slate-900 font-mono">
                    support@ownix.com
                  </div>
                </div>
              </div>

              {/* Phone Support Block */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    Phone number
                  </div>
                  <div className="text-sm font-semibold text-slate-900 font-mono">
                    +91 80000 00000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reference-Grade Floating Form Canvas */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 w-full">
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 font-bold stroke-[2.5]" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    Request Received
                  </h4>

                  <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
                    Thank you. Our lead asset managers will review your
                    preferences and get in touch shortly.
                  </p>

                  <button
                    id="form-reset-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        investmentBudget: "",
                      });
                    }}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 tracking-wider uppercase underline"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="lead-fullname"
                      className="text-[13px] text-slate-500 font-medium mb-1.5 block"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="lead-fullname"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-[#f4f6f8] hover:bg-[#edf0f3] focus:bg-white border border-transparent focus:border-emerald-600 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder-slate-400"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="text-[13px] text-slate-500 font-medium mb-1.5 block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#f4f6f8] hover:bg-[#edf0f3] focus:bg-white border border-transparent focus:border-emerald-600 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder-slate-400 font-mono"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="text-[13px] text-slate-500 font-medium mb-1.5 block"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      name="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="jane@domain.com"
                      className="w-full bg-[#f4f6f8] hover:bg-[#edf0f3] focus:bg-white border border-transparent focus:border-emerald-600 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder-slate-400"
                    />
                  </div>

                  {/* Investment Budget */}
                  <div>
                    <label
                      htmlFor="lead-budget"
                      className="text-[13px] text-slate-500 font-medium mb-1.5 block"
                    >
                      Investment Budget
                    </label>
                    <div className="relative">
                      <select
                        id="lead-budget"
                        name="investmentBudget"
                        required
                        value={formData.investmentBudget}
                        onChange={handleChange}
                        className="w-full bg-[#f4f6f8] hover:bg-[#edf0f3] focus:bg-white border border-transparent focus:border-emerald-600 rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">
                          Select...
                        </option>
                        {budgets.map((budget, i) => (
                          <option
                            key={i}
                            value={budget}
                            className="text-slate-900"
                          >
                            {budget}
                          </option>
                        ))}
                      </select>
                      {/* Integrated minimal chevron indicator */}
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 font-bold">
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA Button replicating verbatim the round-left pill layout */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      id="lead-submit-cta-btn"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 pl-1.5 pr-6 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none disabled:opacity-70 disabled:cursor-wait group"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0">
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
                          </span>
                          <span className="font-bold">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105">
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </span>
                          <span className="font-bold tracking-wide">
                            Get Early Access
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
