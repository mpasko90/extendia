"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Home } from 'lucide-react';

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { List, ListItem } from "@/components/ui/list";

// Email subscription form component with enhanced hydration handling
const EmailSubscriptionForm = () => {
  const [email, setEmail] = React.useState('');
  const [isMounted, setIsMounted] = React.useState(false);
  const inputId = React.useId();

  // Only enable client-side features after hydration
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email subscription:', email);
  };

  // Show a simpler UI during server-side rendering to avoid hydration mismatches
  if (!isMounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="grid gap-1.5 w-full">
          <Label>Subscribe to our newsletter</Label>
          <div className="flex space-x-2">
            <div className="flex-1 h-9 bg-muted rounded-md" />
            <div className="w-20 h-9 bg-muted rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <div className="grid gap-1.5 w-full">
        <Label htmlFor={inputId}>Subscribe to our newsletter</Label>
        <div className="flex space-x-2">
          <Input
            id={inputId}
            type="email"
            placeholder="Your email"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            suppressHydrationWarning
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </form>
  );
};

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-12">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Extendia</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your trusted partner for bespoke house extensions, loft conversions, and renovations in South West London.
          </p>
          <List className="space-y-1 text-sm text-muted-foreground">
            <ListItem>Family-owned & Operated</ListItem>
            <ListItem>Fully Insured & Certified</ListItem>
            <ListItem>5-Star Customer Reviews</ListItem>
          </List>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <List className="space-y-2 text-sm">
            <ListItem>
              <Link href="/services/house-extensions" className="text-muted-foreground hover:text-primary transition-colors">
                House Extensions
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/services/loft-conversions" className="text-muted-foreground hover:text-primary transition-colors">
                Loft Conversions
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/services/bathroom-renovations" className="text-muted-foreground hover:text-primary transition-colors">
                Bathroom Renovations
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Project Gallery
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/your-journey" className="text-muted-foreground hover:text-primary transition-colors">
                Your Journey
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </ListItem>
          </List>
        </div>

        {/* Areas Covered */}
        <div>
          <h4 className="text-md font-semibold mb-4">Areas We Serve</h4>
          <List className="space-y-2 text-sm">
            <ListItem>
              <Link href="/areas/kingston-upon-thames" className="text-muted-foreground hover:text-primary transition-colors">
                Kingston upon Thames
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/areas/twickenham" className="text-muted-foreground hover:text-primary transition-colors">
                Twickenham
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/areas/wimbledon" className="text-muted-foreground hover:text-primary transition-colors">
                Wimbledon
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/areas/putney" className="text-muted-foreground hover:text-primary transition-colors">
                Putney
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/areas/surbiton" className="text-muted-foreground hover:text-primary transition-colors">
                Surbiton
              </Link>
            </ListItem>
          </List>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-md font-semibold mb-4">Stay Updated</h4>
          <EmailSubscriptionForm />
          <div className="mt-6 flex space-x-4">
            <Link href="https://facebook.com/extendia" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com/extendia.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://houzz.com/pro/extendia" className="text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
