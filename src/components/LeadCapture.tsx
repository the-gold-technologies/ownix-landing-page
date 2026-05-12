"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, User, Phone, Mail, DollarSign } from "lucide-react";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    investmentBudget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate robust async API request state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const budgets = [
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,000,000",
    "₹1,000,000+",
  ];

  return (
    <section id="lead-capture" className="py-24 bg-stone-50 relative overflow-hidden">
      
      {/* Background graphic elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Decorative Info Side */}
          <div className="md:col-span-5 bg-slate-50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 relative">
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-6 font-mono shadow-2xs">
                Priority Waitlist
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Be Among the First Investors
              </h3>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  We are currently onboarding early investors interested in premium Ownix real estate opportunities.
                </p>
                <p>
                  Share your details and our team will connect with you with upcoming property listings and investment opportunities.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-6 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Confidentiality Guaranteed</span>
              </div>
            </div>

          </div>


          {/* Right Live Input Form Side */}
          <div className="md:col-span-7 p-8 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-2xs">
                  <CheckCircle2 className="w-8 h-8 font-bold" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Access Requested Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
                  Thank you for registering. Our lead asset managers will review your preferences and get in touch within 24 hours.
                </p>
                <button
                  id="form-reset-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", phoneNumber: "", emailAddress: "", investmentBudget: "" });
                  }}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-bold tracking-wider uppercase underline"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="lead-fullname" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="lead-fullname"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all font-mono shadow-2xs"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="lead-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="lead-email"
                      name="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Investment Budget */}
                <div>
                  <label htmlFor="lead-budget" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Investment Budget <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <select
                      id="lead-budget"
                      name="investmentBudget"
                      required
                      value={formData.investmentBudget}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all appearance-none cursor-pointer font-mono shadow-2xs"
                    >
                      <option value="" disabled className="text-slate-400">Select proposed budget tier</option>
                      {budgets.map((budget, i) => (
                        <option key={i} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    {/* Select chevron */}
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                </div>

                {/* Submit Action CTA Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    id="lead-submit-cta-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-600 disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Logging Entry...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Early Access</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
