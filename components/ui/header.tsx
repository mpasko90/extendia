"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/molecules/trust";
import { Navigation } from "@/components/ui/navigation";
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { BorderBeam } from "@/components/atoms/magicui/effects/border-beam";

export function Header() {
  return (
    <header className="sticky top-0 z-50" role="banner">
      {/* Trust badges bar */}
      <TrustBadges />

      {/* Main header */}
      <div className={cn(
        "bg-white/95 backdrop-blur-md shadow-lg",
        "border-b border-neutral-200"
      )}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-8">
            {/* Logo Section */}
            <BlurFade delay={0.1}>
              <Link href="/" className="flex items-center gap-4 group" aria-label="Extendia Home">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Icons.wrench className="h-7 w-7 text-white" />
                  </div>
                  <BorderBeam size={48} duration={8} delay={0} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
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
            <div className="flex items-center gap-4">
              <BlurFade delay={0.3}>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="hidden md:flex items-center gap-2 border-brand-200 text-brand-700 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Link 
                    href="tel:+442012345678" 
                    aria-label="Call us now at 020 1234 5678"
                  >
                    <Icons.phone className="h-4 w-4" />
                    <span className="font-medium">(020) 1234 5678</span>
                  </Link>
                </Button>
              </BlurFade>

              {/* Mobile Menu Button - This is now handled by the Navigation component */}
              <div className="lg:hidden">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
