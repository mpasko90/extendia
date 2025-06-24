"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Phone, Menu, Building2, Star, ShieldCheck, Users, MapPin, Wrench } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const navigation = [
  { name: "Services", href: "/services", icon: Wrench },
  { name: "Your Journey", href: "/your-journey", icon: MapPin },
  { name: "Areas", href: "/areas", icon: Building2 },
  { name: "Projects", href: "/portfolio", icon: Star },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">      {/* Trust Badges Bar */}
      <div className="hidden md:block bg-white/80 backdrop-blur-sm border-b border-gray-100/50">
        <div className="container flex items-center justify-center gap-6 py-2">
          <Badge variant="outline" className="gap-2 text-xs py-1 px-3 transition-all hover:bg-gray-50">
            <Building2 className="h-3 w-3 text-brand-600" />
            <span className="text-gray-700">Family Business Since 2010</span>
          </Badge>
          <Badge variant="outline" className="gap-2 text-xs py-1 px-3 transition-all hover:bg-gray-50">
            <Star className="h-3 w-3 text-yellow-500" />
            <span className="text-gray-700">4.8★ on Houzz</span>
          </Badge>
          <Badge variant="outline" className="gap-2 text-xs py-1 px-3 transition-all hover:bg-gray-50">
            <ShieldCheck className="h-3 w-3 text-green-600" />
            <span className="text-gray-700">£2M Public Liability</span>
          </Badge>
        </div>
      </div>

      {/* Main Header */}      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "border-b border-gray-200/50 shadow-sm" : ""
      }`}>
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-brand-600 flex items-center justify-center transform transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-600/25">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-lg leading-none text-gray-900">Extendia</p>
              <p className="text-xs text-gray-500 font-medium">Construction Excellence</p>
            </div>
          </Link>{/* Navigation and Actions */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center divide-x divide-gray-200">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-5 first:pl-0 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all hover:scale-105"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                <Link href="tel:+442012345678" className="gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(020) 1234 5678</span>
                </Link>
              </Button>

              <Link href="/contact">
                <ShimmerButton className="px-6 py-2.5 font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20">
                  Get Free Quote
                </ShimmerButton>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <nav className="flex flex-col h-full">                  <div className="p-5 border-b border-gray-100">
                    <Button asChild variant="ghost" className="w-full text-gray-700 hover:text-gray-900">
                      <Link href="tel:+442012345678" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span className="font-medium">(020) 1234 5678</span>
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-1 py-6 px-4">
                    <div className="space-y-1">
                      {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Icon className="h-5 w-5 text-gray-500" />
                            <span className="font-medium text-gray-800">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-8 px-4">
                      <Link href="/contact">
                        <ShimmerButton className="w-full py-2.5 font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/20">
                          Get Free Quote
                        </ShimmerButton>
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
