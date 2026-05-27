"use client";

import React, { useRef } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".gsap-footer-col",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
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
    <footer
      id="footer"
      ref={containerRef}
      className="bg-gradient-to-b from-[#184848] via-[#267575] to-[#184848] border-t border-[#2A8282] relative overflow-hidden text-slate-100 opacity-99"
    >
      {/* Primary Multi-Column Canvas Inspired directly by the uploaded mockup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
          {/* Column 1: Brand Identity & Social Icons */}
          <div className="lg:col-span-5 flex flex-col justify-between gsap-footer-col">
            <div>
              {/* Brand Header side-by-side */}
              <div className="flex items-center mb-5 h-16 -mt-5 aspect-[1600/915]">
                <a
                  href="/"
                  className="h-full w-full focus:outline-none flex items-center"
                >
                  <img
                    src="/images/whatsappLogo.png"
                    alt="Ownix Realty Logo"
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>

              {/* Parallel paragraph mapping reference layout pacing exactly */}
              <p className="text-sm text-slate-100 leading-relaxed max-w-xs mb-8">
                Transforming premium real estate accessibility with verified
                fractional solutions. We help investors scale their portfolios
                securely and sustainably.
              </p>
            </div>

            {/* Flat Social Icons row mimicking reference screen output perfectly */}
            <div className="flex items-center gap-4 text-white pt-2">
              {/* Facebook */}
              <div
                className="hover:text-[#35ddb1] transition-colors cursor-default"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              {/* Twitter */}
              <div
                className="hover:text-[#35ddb1] transition-colors cursor-default"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              {/* LinkedIn */}
              <div
                className="hover:text-[#35ddb1] transition-colors cursor-default"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.048c.477-.9 1.637-1.85 3.365-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                </svg>
              </div>
              {/* Instagram */}
              <div
                className="hover:text-[#35ddb1] transition-colors cursor-default"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 gsap-footer-col">
            <h4 className="font-bold text-white text-sm mb-5">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/#about"
                  className="text-slate-100 hover:text-[#35ddb1] transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#properties"
                  className="text-slate-100 hover:text-[#35ddb1] transition-colors block"
                >
                  Our Product
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-slate-100 hover:text-[#35ddb1] transition-colors block"
                >
                  Workflow
                </a>
              </li>
              <li>
                <a
                  href="/#faqs"
                  className="text-slate-100 hover:text-[#35ddb1] transition-colors block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#lead-capture"
                  className="text-slate-100 hover:text-[#35ddb1] transition-colors block"
                >
                  Investor Access
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us replicating precise icon-row spacing */}
          <div className="lg:col-span-4 gsap-footer-col">
            <h4 className="font-bold text-white text-sm mb-5">Contact Us</h4>

            <div className="space-y-4 text-sm text-slate-100">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#35ddb1] mt-1 shrink-0 stroke-[2]" />
                <span className="leading-relaxed block">
                  A-328 Defence Colony,
                  <br />
                  New Delhi 110024
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#35ddb1] shrink-0 stroke-[2]" />
                <a
                  href="mailto:ownixrealty@gmail.com"
                  className="hover:text-[#35ddb1] transition-colors truncate block"
                >
                  ownixrealty@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#35ddb1] shrink-0 stroke-[2]" />
                <a
                  href="tel:+919700001421"
                  className="hover:text-[#35ddb1] transition-colors block font-mono"
                >
                  +91 97000 01421
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Border Bar mapping identically to the screenshot baseline */}
        <div className="mt-16 pt-8 border-t border-[#2A8282] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span>© {currentYear} Ownix Realty. All rights reserved.</span>
          </div>

          {/* Spaced standard policy matrix */}
          <div className="flex items-center gap-6">
            <a
              href="/legal#terms"
              className="hover:text-[#35ddb1] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/legal#privacy"
              className="hover:text-[#35ddb1] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/legal#cookies"
              className="hover:text-[#35ddb1] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        <div className=" text-end mt-4 -mb-8">
          <span className="text-[8px] text-slate-300">
            Developed by{" "}
            <a
              href="https://thegoldtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TGT
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
