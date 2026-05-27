"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

interface LeadModalProps {
  // Global modal triggered via CustomEvent
}

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formType, setFormType] = useState("Get Started");
  const [propertyName, setPropertyName] = useState("");
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    investmentBudget: "",
    queryMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setFormType(customEvent.detail?.formType || "Get Started");
      setPropertyName(customEvent.detail?.propertyName || "");
      
      // Reset form state
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        investmentBudget: "",
        queryMessage: "",
      });
      setSubmitted(false);
      setIsOpen(true);
      
      // Stop Lenis/page scroll
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("lenis-stop"));
    };

    window.addEventListener("open-lead-modal", handleOpen);
    return () => {
      window.removeEventListener("open-lead-modal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    window.dispatchEvent(new CustomEvent("lenis-start"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fetch public access key dynamically from server config
      const configRes = await fetch("/api/contact");
      const { key } = await configRes.json();

      if (key) {
        // Submit directly from user's browser to Web3Forms to bypass Cloudflare bot detection
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: key,
            subject: `New Lead from Ownix - ${formType}`,
            from_name: "Ownix Realty Portal",
            "Notification Message": `Hello, a new form submission has been captured on your website. Details are listed below:`,
            "Form Type / Source": formType,
            "Full Name": formData.fullName,
            "Email Address": formData.emailAddress,
            "Phone Number": formData.phoneNumber,
            "Investment Budget": formData.investmentBudget,
            "User Message": formData.queryMessage || "Interested in co-ownership.",
            ...(propertyName ? { "Target Property": propertyName } : {}),
            "System Info": "This is an automated lead notification sent from the Ownix Realty Portal."
          })
        });

        const data = await response.json();
        if (response.ok && data.success) {
          setSubmitted(true);
        } else {
          alert(data.message || "Submission failed. Please check details.");
        }
      } else {
        // Fallback: POST to local /api/contact which sends to FormSubmit
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "Form Source": formType,
            ...(propertyName ? { "Target Property": propertyName } : {}),
            "Full Name": formData.fullName,
            "Phone Number": formData.phoneNumber,
            "Email Address": formData.emailAddress,
            "Investment Budget": formData.investmentBudget,
            "User Message": formData.queryMessage || "Interested in co-ownership.",
          })
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("Something went wrong. Please try again or contact us directly.");
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const budgets = [
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,000,000",
    "₹1,000,000+",
  ];

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg mx-4 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-50 border border-slate-100"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-100 flex items-center justify-center text-gold-600 mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>

            <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
              Request Received
            </h4>

            <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed">
              Thank you! Your information has been sent to our asset managers. We will review your request and get in touch with you shortly.
            </p>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-gold-600 hover:bg-gold-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="text-left">
            {/* Form Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest text-gold-600 uppercase block mb-1">
                {formType === "Express Interest" ? "Express Interest" : "Co-Ownership Portal"}
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {formType}
              </h3>
              {propertyName && (
                <p className="text-xs text-slate-500 mt-1">
                  Selected Property: <strong className="text-gold-700">{propertyName}</strong>
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="modal-fullname"
                  className="text-xs text-slate-500 font-medium mb-1 block"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="modal-fullname"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/60 focus:border-gold-600 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder-slate-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="modal-phone"
                  className="text-xs text-slate-500 font-medium mb-1 block"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/60 focus:border-gold-600 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder-slate-400"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="modal-email"
                  className="text-xs text-slate-500 font-medium mb-1 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="emailAddress"
                  required
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="jane@domain.com"
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/60 focus:border-gold-600 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder-slate-400"
                />
              </div>

              {/* Investment Budget */}
              <div>
                <label
                  htmlFor="modal-budget"
                  className="text-xs text-slate-500 font-medium mb-1 block"
                >
                  Investment Budget
                </label>
                <div className="relative">
                  <select
                    id="modal-budget"
                    name="investmentBudget"
                    required
                    value={formData.investmentBudget}
                    onChange={handleChange}
                    className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/60 focus:border-gold-600 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">
                      Select...
                    </option>
                    {budgets.map((budget, i) => (
                      <option key={i} value={budget} className="text-slate-900">
                        {budget}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <span className="text-[9px]">▼</span>
                  </div>
                </div>
              </div>

              {/* Optional Message Field */}
              <div>
                <label
                  htmlFor="modal-message"
                  className="text-xs text-slate-500 font-medium mb-1 block"
                >
                  Message / Query (Optional)
                </label>
                <textarea
                  id="modal-message"
                  name="queryMessage"
                  rows={2}
                  value={formData.queryMessage}
                  onChange={handleChange}
                  placeholder="Tell us about your interests..."
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/60 focus:border-gold-600 rounded-xl px-4 py-2 text-sm text-slate-900 outline-none transition-all placeholder-slate-400 resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-wait"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
