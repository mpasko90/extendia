"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin, Users, Hammer, Settings, PhoneCall, Building2, Wrench, Zap } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/magic/border-beam";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { NumberTicker } from "@/components/ui/number-ticker";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Portfolio", href: "/portfolio", icon: Building2 },
    { name: "Areas", href: "/areas", icon: MapPin },
    { name: "Resources", href: "/resources", icon: Settings },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];

  const trustStats = [
    { number: 500, label: "Projects Completed", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 98, label: "Customer Satisfaction", suffix: "%" },
  ];  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Section */}
            <BlurFade delay={0.1} inView>
              <Link href="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Hammer className="h-7 w-7 text-white" />
                  </div>
                  <BorderBeam size={50} duration={8} delay={0} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                    Extendia
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    Construction Excellence
                  </span>
                </div>
              </Link>
            </BlurFade>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <BlurFade delay={0.2} inView>
                <nav className="flex items-center space-x-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative group px-4 py-2 rounded-xl transition-all duration-300 hover:bg-orange-50"
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4 text-gray-600 group-hover:text-orange-600 transition-colors" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  ))}
                </nav>
              </BlurFade>
            </div>

            {/* Right Section - Stats & CTAs */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Trust Statistics */}
              <BlurFade delay={0.3} inView>
                <div className="flex items-center space-x-6">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold text-orange-600">
                        <NumberTicker value={stat.number} />
                        {stat.suffix}
                      </div>
                      <div className="text-xs text-gray-500 font-medium whitespace-nowrap">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </BlurFade>

              {/* Action Buttons */}
              <BlurFade delay={0.4} inView>
                <div className="flex items-center space-x-3">
                  <Button asChild variant="outline" size="sm" className="border-gray-300 hover:border-orange-300 hover:bg-orange-50">
                    <Link href="tel:+442012345678" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </Link>
                  </Button>
                  
                  <div className="relative">
                    <Button asChild size="sm" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href="/contact" className="flex items-center space-x-2">
                        <Zap className="h-4 w-4" />
                        <AnimatedShinyText className="text-white font-medium">
                          Free Quote
                        </AnimatedShinyText>
                      </Link>
                    </Button>
                    <BorderBeam size={120} duration={8} delay={2} />
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2 hover:bg-orange-50"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-[320px] bg-white">
                <div className="flex flex-col space-y-8 mt-8">
                  
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Hammer className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-xl">Extendia</span>
                  </Link>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors group"
                      >
                        <item.icon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />
                        <span className="font-medium text-gray-700 group-hover:text-orange-600">{item.name}</span>
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Trust Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                    {trustStats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl font-bold text-orange-600">
                          <NumberTicker value={stat.number} />
                          {stat.suffix}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col space-y-3">
                    <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 h-12">
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <Zap className="h-5 w-5" />
                        <span className="font-medium">Get Free Quote</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 border-gray-300">
                      <Link href="tel:+442012345678" className="flex items-center justify-center space-x-2">
                        <Phone className="h-5 w-5" />
                        <span>(020) 1234 5678</span>
                      </Link>
                    </Button>
                  </div>
                </div>              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  );
}
