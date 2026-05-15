"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  videoUrl?: string;
  title: string;
}

export default function PropertyModal({
  isOpen,
  onClose,
  images,
  videoUrl,
  title,
}: PropertyModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const totalItems = images.length + (videoUrl ? 1 : 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset index when modal opens for a new property and handle scroll lock
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      // Dispatch event to stop Lenis smooth scroll
      window.dispatchEvent(new CustomEvent("lenis-stop"));
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // Dispatch event to restart Lenis smooth scroll
      window.dispatchEvent(new CustomEvent("lenis-start"));
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("lenis-start"));
    };
  }, [isOpen, images]);

  if (!isOpen || !mounted) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const isVideoSlide = videoUrl && currentIndex === images.length;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-xl transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-all hover:scale-110 z-[110] bg-white/5 p-2 rounded-full border border-white/10"
      >
        <X size={28} />
      </button>

      <div 
        data-lenis-prevent
        className="relative w-full max-w-7xl h-[80vh] mx-4 bg-black/40 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center group"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isVideoSlide ? (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-transform duration-700"
            />
          )}
        </div>

        {/* Title Overlay */}
        <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
          <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight drop-shadow-lg">
            {title} {isVideoSlide ? "(Property Video)" : `(Image ${currentIndex + 1})`}
          </h3>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 hover:scale-105"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 hover:scale-105"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/5">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? "w-8 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-8 right-8 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-xs font-bold font-mono tracking-widest">
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
        </div>
      </div>
    </div>,
    document.body
  );
}
