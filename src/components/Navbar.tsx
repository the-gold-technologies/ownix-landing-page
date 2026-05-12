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
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Properties", href: "#properties" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-white/80 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-emerald-600/30 shadow-xs group-hover:scale-105 transition-transform duration-300">
            <span className="text-xs font-black tracking-tight text-emerald-700 font-mono">
              TGT
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-wider text-slate-900 group-hover:text-emerald-700 transition-colors duration-200 leading-tight">
              THE GOLD
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-400 leading-tight">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#lead-capture"
            id="nav-cta-button"
            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-full shadow-xs hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none group"
          >
            <span>Get Early Access</span>
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-50 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 px-4 pt-3 pb-6 shadow-xl transition-all animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <a
                href="#lead-capture"
                id="mobile-nav-cta-button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-sm font-bold text-white bg-emerald-600 rounded-xl shadow-xs hover:bg-emerald-700 transition-colors"
              >
                Get Early Access
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
