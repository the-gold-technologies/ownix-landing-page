import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import AboutPlatform from "@/components/AboutPlatform";
import HowItWorks from "@/components/HowItWorks";
import PropertyDetails from "@/components/PropertyDetails";
import InvestorInfoSections from "@/components/InvestorInfoSections";
import LeadCapture from "@/components/LeadCapture";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PricingBlock from "@/components/PricingBlock";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <WhyChoose />
        <AboutPlatform />
        <HowItWorks />
        <PricingBlock />
        <PropertyDetails />
        <InvestorInfoSections />
        <FinalCTA />
        <FAQAccordion />
        <LeadCapture />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
