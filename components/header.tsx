"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

// Magic UI Components (assuming you have these created in your project)
// I will create simplified versions for this example.
const ShimmerButton = ({ children, ...props }: React.ComponentProps<typeof Button>) => (
  <Button {...props} className={cn(props.className, "animate-shine bg-gradient-to-r from-primary-blue via-white to-primary-blue bg-[length:200%_100%]")}>
    {children}
  </Button>
);

export { ShimmerButton };

const navLinks = [
  { href: "/services", text: "Services" },
  { href: "/how-it-works", text: "How It Works" },
  { href: "/areas", text: "Areas" },
  { href: "/resources", text: "Resources" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/your-journey", text: "Your Journey" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/95 backdrop-blur-sm transition-all",
        { "border-b-slate-200": isScrolled }
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary-blue">
          Extendia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className={navigationMenuTriggerStyle()}>
                      {link.text}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Badge variant="outline" className="text-accent-orange border-accent-orange">
            <Phone className="mr-2 h-4 w-4" />
            020 8123 4567
          </Badge>
          <ShimmerButton>
            Get Free Quote
          </ShimmerButton>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <SheetHeader className="flex justify-between items-center mb-6">
                    <SheetTitle asChild>
                        <Link href="/" className="text-2xl font-bold text-primary-blue">
                            Extendia
                        </Link>
                    </SheetTitle>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X />
                        </Button>
                    </SheetTrigger>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-slate-700 hover:text-primary-blue transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-4">
                    <ShimmerButton className="w-full">Get Free Quote</ShimmerButton>
                    <Button variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" /> Call Us
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
