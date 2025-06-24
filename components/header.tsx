"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Clock, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

// Magic UI Components
import { TextAnimate } from "@/components/ui/magic/text-animate";
import { ShineButton } from "@/components/ui/magic/shine-button";
import { BorderBeam } from "@/components/ui/magic/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

const navigationItems = [
  { href: "/services", label: "Services", description: "House Extensions & Loft Conversions" },
  { href: "/how-it-works", label: "How It Works", description: "Our Construction Process" },
  { href: "/areas", label: "Areas", description: "South West London Coverage" },
  { href: "/resources", label: "Resources", description: "Guides & Calculators" },
  { href: "/about", label: "About", description: "10+ Years Experience" },
  { href: "/contact", label: "Contact", description: "Get in Touch" },
  { href: "/your-journey", label: "Your Journey", description: "Step by Step Process" },
];

const serviceAreas = ["Kingston", "Twickenham", "Wimbledon", "Putney", "Surbiton", "Richmond"];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const sheetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle touch gestures
  const handleTouchStart = React.useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const diff = touch.clientX - startX;
      
      if (diff < -50) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('touchmove', handleTouchMove, { once: true });
  }, []);

  React.useEffect(() => {
    const sheet = sheetRef.current;
    if (sheet) {
      sheet.addEventListener('touchstart', handleTouchStart);
      return () => sheet.removeEventListener('touchstart', handleTouchStart);
    }
  }, [handleTouchStart]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/95 backdrop-blur-sm transition-all",
        { "border-b-slate-200": isScrolled }
      )}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Extendia",
            "image": "/logo.svg",
            "telephone": "+442081234567",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "South West London",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.4816,
                "longitude": -0.2812
              },
              "geoRadius": "10000"
            },
            "url": "https://extendia.co.uk",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          })
        }}
      />
      <BorderBeam className="opacity-20" />
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 relative">
        <BlurFade delay={0.25}>
          <Link href="/" className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-primary-blue group">
              <TextAnimate words="Extendia" delay={0.2} className="hover:text-green-600 transition-colors" />
            </h1>
            <span className="text-sm text-muted-foreground">South West London</span>
          </Link>
        </BlurFade>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList 
              className="flex items-center justify-center gap-8"
              role="menubar"
            >
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href} role="none">
                    <BlurFade delay={0.25 + (index * 0.1)}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          role="menuitem"
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "relative transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                            isActive && "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transform after:origin-left after:transition-transform after:duration-300",
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </BlurFade>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <BlurFade delay={0.25 + (navigationItems.length * 0.1)}>
            <Link
              href="tel:+442081234567"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md",
                "text-accent-orange hover:text-accent-orange/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                "transition-colors"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">020 8123 4567</span>
            </Link>
          </BlurFade>
          <BlurFade delay={0.25 + ((navigationItems.length + 1) * 0.1)}>
            <ShineButton className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
              Free Quote in 24h
              <ChevronRight className="ml-2 h-4 w-4" />
            </ShineButton>
          </BlurFade>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Open main navigation menu"
                className="h-11 w-11"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              ref={sheetRef}
              side="left" 
              className="w-80 p-0"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <TextAnimate words="Extendia" delay={0.2} />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-9 w-9"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      <Clock className="mr-1 h-3 w-3" />
                      10+ Years Experience
                    </Badge>
                    <Badge variant="destructive" className="w-fit">
                      <Phone className="mr-1 h-3 w-3" />
                      24/7 Emergency
                    </Badge>
                  </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-4" aria-label="Main navigation menu">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex flex-col py-3 px-4 rounded-md transition-colors",
                          "min-h-[44px] touch-manipulation",
                          "hover:bg-accent focus-visible:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          pathname === item.href && "bg-accent"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <span className="text-sm text-muted-foreground">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="p-4 border-t">
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Service Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <Badge key={area} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ShineButton className="w-full justify-center">
                    Free Quote in 24h
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </ShineButton>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
