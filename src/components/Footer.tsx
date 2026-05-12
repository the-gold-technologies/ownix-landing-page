import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-50 border-t-4 border-emerald-600 relative">
      
      {/* Primary Light & Emerald Contact Bar */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Phone */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase font-mono">Phone</div>
              <a
                href="tel:+919958512711"
                id="footer-phone-link"
                className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors font-mono block mt-0.5"
              >
                +91-9958512711
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase font-mono">Email</div>
              <a
                href="mailto:info@thegoldtechnologies.com"
                id="footer-email-link"
                className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors block mt-0.5 truncate max-w-xs"
              >
                info@thegoldtechnologies.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-700 tracking-wider uppercase font-mono">Address</div>
              <div className="text-sm font-medium text-slate-700 mt-0.5 leading-snug">
                Sector 63, Noida, UP – 201309
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer / Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-700 font-mono tracking-tight">TGT</span>
          <span>© {new Date().getFullYear()} The Gold Technologies. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#hero" id="footer-top-link" className="hover:text-emerald-700 transition-colors">
            Back to Top
          </a>
          <a href="#properties" id="footer-prop-link" className="hover:text-emerald-700 transition-colors">
            Listed Units
          </a>
          <a href="#faqs" id="footer-faq-link" className="hover:text-emerald-700 transition-colors">
            Support FAQs
          </a>
        </div>
      </div>

    </footer>
  );
}
