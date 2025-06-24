"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/molecules/trust";
import { Navigation, MobileMenu } from "@/components/ui/navigation";
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { BorderBeam } from "@/components/atoms/magicui/effects/border-beam";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" role="banner">
      {/* Top trust badges bar */}
      <TrustBadges />

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <BlurFade delay={0.1}>
              <Link href="/" className="flex items-center space-x-4 group" aria-label="Extendia Home">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Icons.wrench className="h-7 w-7 text-white" />
                  </div>
                  <BorderBeam size={50} duration={8} delay={0} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                    Extendia
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    Construction Excellence
                  </span>
                </div>
              </Link>
            </BlurFade>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Right Section - Phone Badge & CTA */}
            <div className="flex items-center space-x-4">
              {/* Phone Badge - Always Visible */}
              <BlurFade delay={0.3}>
                <div className="relative group">
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-brand-200 text-brand-700 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Link 
                      href="tel:+442012345678" 
                      className="flex items-center space-x-2"
                      aria-label="Call us now at 020 1234 5678"
                    >
                      <Icons.phone className="h-4 w-4" />
                      <span className="font-medium">(020) 1234 5678</span>
                    </Link>
                  </Button>
                  
                  {/* Phone badge glow effect */}
                  <div className="absolute inset-0 rounded-md bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                </div>
              </BlurFade>

              {/* Primary CTA Button - Desktop */}
              <div className="hidden lg:block">
                <BlurFade delay={0.4}>
                  <div className="relative">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-gradient-to-r from-warning-DEFAULT to-warning-dark hover:from-warning-dark hover:to-warning-dark text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    >
                      <Link 
                        href="/contact" 
                        className="flex items-center space-x-2" 
                        aria-label="Get your free construction quote"
                      >
                        <Icons.zap className="h-4 w-4" />
                        <span>Get Free Quote</span>
                      </Link>
                    </Button>
                    <BorderBeam size={120} duration={8} delay={2} />
                  </div>
                </BlurFade>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <BlurFade delay={0.4}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  >
                    {isMobileMenuOpen ? (
                      <Icons.close className="h-6 w-6" />
                    ) : (
                      <Icons.menu className="h-6 w-6" />
                    )}
                  </Button>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}
