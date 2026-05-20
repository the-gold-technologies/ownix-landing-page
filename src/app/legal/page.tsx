"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ShieldAlert, Cookie, ArrowLeft } from "lucide-react";

export default function LegalPage() {
  // Smooth scroll handler if navigated via hashes on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 flex flex-col font-sans">
      {/* Cohesive Navbar styling */}
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Legal & <span className="text-emerald-600">Compliance</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-sm sm:text-base">
            Please read these documents carefully to understand the terms, privacy guidelines, and cookie policies of the Ownix Realty platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Navigation Sidebar Menu */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-4">
              Documents
            </h3>
            
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("terms")?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", "#terms");
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 hover:bg-stone-50 hover:text-emerald-700 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-slate-400 shrink-0" />
              Terms of Service
            </a>

            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", "#privacy");
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 hover:bg-stone-50 hover:text-emerald-700 transition-all duration-200"
            >
              <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
              Privacy Policy
            </a>

            <a
              href="#cookies"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("cookies")?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", "#cookies");
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 hover:bg-stone-50 hover:text-emerald-700 transition-all duration-200"
            >
              <Cookie className="w-4 h-4 text-slate-400 shrink-0" />
              Cookie Policy
            </a>
          </aside>

          {/* Document Content Stack */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section: Terms of Service */}
            <section
              id="terms"
              className="scroll-mt-32 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xs space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Terms of Service
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Last updated: May 2026</p>
                </div>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>
                  By accessing and using Ownix, you agree to comply with our terms and conditions. Ownix is a real estate platform designed to help users explore property-related information and services. While we strive to provide accurate and updated content, property details, pricing, availability, and related information may change without prior notice. Users are advised to independently verify all property information before making any decisions or transactions.
                </p>
                <p>
                  Users are responsible for using the platform lawfully and ethically. Any misuse, fraudulent activity, unauthorized access, or harmful actions may result in suspension or termination of access to the platform.
                </p>
                <p>
                  All website content including branding, design, text, graphics, and platform features are the intellectual property of Ownix and may not be copied, reproduced, or misused without prior written permission.
                </p>
                <p>
                  Ownix is not liable for any direct, indirect, incidental, or consequential losses arising from the use of the platform, property transactions, technical interruptions, or reliance on third-party information.
                </p>
                <p>
                  We reserve the right to update or modify these terms at any time without prior notice. Continued use of the platform after updates constitutes acceptance of the revised terms.
                </p>
              </div>
            </section>

            {/* Section: Privacy Policy */}
            <section
              id="privacy"
              className="scroll-mt-32 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xs space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Last updated: May 2026</p>
                </div>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>
                  Ownix respects your privacy and is committed to protecting your personal information. We may collect details such as name, email address, phone number, inquiry information, and other data voluntarily submitted through forms or interactions on the website.
                </p>
                <p>
                  Additionally, technical information including IP address, browser type, device information, and website usage data may be collected to improve platform performance, security, communication, and user experience.
                </p>
                <p>
                  We do not sell personal information to third parties. However, information may be shared with trusted service providers, analytics platforms, or legal authorities when required for operational or legal purposes.
                </p>
                <p>
                  We implement reasonable security measures to protect user data, although no online platform can guarantee complete security.
                </p>
                <p>
                  By using the website, you consent to the collection and use of information as outlined in this policy.
                </p>
              </div>
            </section>

            {/* Section: Cookie Policy */}
            <section
              id="cookies"
              className="scroll-mt-32 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xs space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Cookie Policy
                  </h2>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Last updated: May 2026</p>
                </div>
              </div>

              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p>
                  Ownix uses cookies and similar technologies to enhance website functionality, analyze user behavior, remember preferences, and improve marketing performance.
                </p>
                <p>
                  Cookies help us understand how users interact with the website, improve navigation, and deliver a better browsing experience. Some third-party services integrated into the platform may also use cookies for analytics or performance tracking.
                </p>
                <p>
                  Users may choose to disable or manage cookies through their browser settings. However, disabling cookies may affect certain website features and functionality.
                </p>
                <p>
                  By continuing to use the website, you agree to the use of cookies in accordance with this policy.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
