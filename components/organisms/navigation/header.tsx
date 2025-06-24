"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  MapPin, 
  Users, 
  Hammer, 
  Settings, 
  PhoneCall, 
  Building2, 
  Wrench,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade, BorderBeam } from "@/components/atoms/magicui";
import { Dock, DockIcon } from "@/components/molecules/dock/dock";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Portfolio", href: "/portfolio", icon: Building2 },
    { name: "Areas", href: "/areas", icon: MapPin },
    { name: "Resources", href: "/resources", icon: Settings },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: PhoneCall },
  ];  

  return (
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
            
            {/* Logo Section */}            <BlurFade delay={0.1}>
              <Link href="/" className="flex items-center space-x-4 group" aria-label="Extendia Home">
                <div className="relative">                  
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
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
            <div className="hidden lg:flex items-center justify-center flex-1">              <BlurFade delay={0.2}>
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

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Menu Dialog */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="lg:hidden"
                >
                  <div className="fixed inset-0 z-50" />
                  <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Extendia</span>
                        <div className="h-8 w-auto text-brand-600">
                          <Hammer className="h-8 w-8" />
                        </div>
                      </Link>
                      <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
}
