"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { 
  Phone, 
  MapPin, 
  Users, 
  Hammer, 
  Settings, 
  PhoneCall, 
  Building2, 
  Wrench, 
  Zap,
  Menu,
  X,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/magic/border-beam";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Dock, DockIcon } from "@/components/ui/dock";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Portfolio", href: "/portfolio", icon: Building2 },
    { name: "Areas", href: "/areas", icon: MapPin },
    { name: "Resources", href: "/resources", icon: Settings },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 backdrop-blur-md bg-white/95 shadow-sm z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Section */}
            <BlurFade delay={0.1} inView>
              <Link href="/" className="flex items-center space-x-4 group" aria-label="Extendia Home">
                <div className="relative">                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Hammer className="h-7 w-7 text-white" />
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

            {/* Centered Navigation with Magic UI Dock - Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <BlurFade delay={0.2} inView>
                <Dock magnification={60} distance={100} className="bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-lg">
                  {navigation.map((item) => (
                    <DockIcon key={item.name} className="bg-white/80 hover:bg-blue-50 border border-gray-200/50 transition-all duration-300">
                      <Link
                        href={item.href}
                        className="flex flex-col items-center justify-center w-full h-full text-center group p-2"
                        aria-current={item.href === "/" ? "page" : undefined}
                        aria-label={`Navigate to ${item.name}`}
                      >
                        <item.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors mb-1" />
                        <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </DockIcon>
                  ))}
                </Dock>
              </BlurFade>
            </div>

            {/* Right Section - Phone Badge & CTA */}
            <div className="flex items-center space-x-4">
              
              {/* Phone Badge - Always Visible */}
              <BlurFade delay={0.3} inView>
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
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">(020) 1234 5678</span>
                    </Link>
                  </Button>
                  
                  {/* Phone badge glow effect */}
                  <div className="absolute inset-0 rounded-md bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                </div>
              </BlurFade>

              {/* Primary CTA Button - Desktop */}
              <div className="hidden lg:block">
                <BlurFade delay={0.4} inView>
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
                        <Zap className="h-4 w-4" />
                        <span>Get Free Quote</span>
                      </Link>
                    </Button>
                    <BorderBeam size={120} duration={8} delay={2} />
                  </div>
                </BlurFade>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <BlurFade delay={0.4} inView>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  >
                    <motion.div
                      animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.div>
                  </Button>
                </BlurFade>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-sm"
              >
                <div className="py-4">
                  <nav 
                    className="flex flex-col space-y-2"
                    role="navigation"
                    aria-label="Mobile navigation"
                  >
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 min-h-[44px]"
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-current={item.href === "/" ? "page" : undefined}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile CTA */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                      className="pt-4 px-4"
                    >
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-warning-DEFAULT to-warning-dark hover:from-warning-dark hover:to-warning-dark text-white font-semibold"
                      >
                        <Link 
                          href="/contact" 
                          className="flex items-center justify-center space-x-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Zap className="h-4 w-4" />
                          <span>Get Free Quote</span>
                        </Link>
                      </Button>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
