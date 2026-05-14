"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#why-choose" },
    { name: "Workflow", href: "#how-it-works" },
    { name: "Investments", href: "#properties" },
    { name: "Returns", href: "#pricing" },
    { name: "Support", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled
          ? "top-3 left-4 right-4 max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl rounded-full py-2.5 px-4 sm:px-6"
          : "top-0 left-0 right-0 bg-transparent py-5 px-4 sm:px-6 lg:px-8"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo-link"
          className="flex items-center gap-2 sm:gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-emerald-600/30 shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
            <span className="text-xs font-black tracking-tight text-emerald-700">
              TGT
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xs sm:text-sm font-extrabold tracking-wider transition-colors duration-200 leading-tight ${
                isScrolled
                  ? "text-slate-900 group-hover:text-emerald-700"
                  : "text-white group-hover:text-[#35ddb1]"
              }`}
            >
              THE GOLD
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-400 leading-tight">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-xs lg:text-sm font-bold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-emerald-600 after:bg-emerald-600"
                  : "text-slate-300 hover:text-white after:bg-[#35ddb1]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA mirroring Digiboost top-right action buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {/* Button 1: Persistent Solid filled primary trigger with signature emerald-600 brand token */}
          <a
            href="#lead-capture"
            id="nav-cta-button-primary"
            className="relative inline-flex items-center justify-center px-4 lg:px-5 py-2 text-xs lg:text-sm font-bold rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none tracking-tight"
          >
            <span>Get Started</span>
          </a>

          {/* Button 2: Dynamic outline button adjusting cleanly for visibility */}
          <a
            href="tel:+919958512711"
            id="nav-cta-button-secondary"
            className={`relative inline-flex items-center justify-center px-4 lg:px-5 py-2 text-xs lg:text-sm font-bold rounded-2xl border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none tracking-tight ${
              isScrolled
                ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                : "border-white/40 text-white hover:bg-white/10"
            }`}
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg focus:outline-none transition-colors ${
            isScrolled
              ? "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown tailored beautifully for the active view state */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 border-b px-4 pt-3 pb-6 transition-all animate-in fade-in duration-200 ${
            isScrolled
              ? "bg-white border-slate-100 shadow-xl mt-3 rounded-2xl"
              : "bg-[#041A1A] border-white/5 shadow-2xl backdrop-blur-xl"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-bold px-3 py-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-800 hover:text-emerald-600 hover:bg-slate-50"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div
              className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
                isScrolled ? "border-slate-100" : "border-white/5"
              }`}
            >
              <a
                href="#lead-capture"
                id="mobile-nav-cta-button-primary"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-sm font-bold text-white bg-emerald-600 rounded-2xl shadow-md hover:bg-emerald-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="tel:+919958512711"
                id="mobile-nav-cta-button-secondary"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center w-full py-3 text-sm font-bold border rounded-2xl transition-colors ${
                  isScrolled
                    ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                    : "border-white/40 text-white hover:bg-white/5"
                }`}
              >
                Let&apos;s Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
