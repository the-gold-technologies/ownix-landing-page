import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ownix | Premium Real Estate Investment Platform",
  description: "Own high-potential premium properties with Ownix real estate investing. Start with smaller investments, earn rental income, and benefit from long-term capital appreciation.",
  keywords: ["real estate investing", "fractional real estate", "Ownix", "premium properties", "property investment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth antialiased`}>
      <body className="font-sans bg-white text-slate-900 min-h-screen flex flex-col selection:bg-gold-100 selection:text-gold-950">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
