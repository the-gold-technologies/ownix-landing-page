"use client";

import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented or rejected
    const consent = localStorage.getItem("ownix_cookie_consent");
    if (!consent) {
      // Delay slightly for natural entry flow after initial page render
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ownix_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("ownix_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-10 duration-500 ease-out">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-2xl shadow-slate-900/10 relative">
        
        {/* Close Button top-right */}
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors focus:outline-none"
          aria-label="Close panel"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4">
          {/* Circular Icon with Emerald glow */}
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 animate-pulse" />
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                We value your privacy
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1.5">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
                <a
                  href="/legal#cookies"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                >
                  Cookie Policy
                </a>{" "}
                to learn more.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={handleAccept}
                className="cursor-pointer flex-1 inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm focus:outline-none"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
