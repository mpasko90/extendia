"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Youtube, Twitter } from 'lucide-react';

import { Label } from "@/components/ui/label";
import { List, ListItem } from "@/components/ui/list";
import { HydrationSafeInput } from "@/components/ui/hydration-safe-input";
import { RippleButton } from "@/components/ui/magic/ripple-button";
import { ShineIcon } from "@/components/ui/magic/shine-icon";
import styles from "./footer.module.css";

// Email subscription form component with enhanced hydration handling
const EmailSubscriptionForm = () => {
  const [email, setEmail] = React.useState('');
  const [isMounted, setIsMounted] = React.useState(false);
  const inputId = React.useId();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscription:', email);
  };

  if (!isMounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="grid gap-1.5 w-full">
          <Label htmlFor="newsletter-placeholder">Subscribe to our newsletter</Label>
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
          <HydrationSafeInput
            id={inputId}
            type="email"
            placeholder="Your email"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <RippleButton type="submit" duration={1500}>Subscribe</RippleButton>
        </div>
      </div>
    </form>
  );
};

// Social media component
const SocialLinks = () => (
  <div className="flex space-x-4">
    <ShineIcon href="https://facebook.com" ariaLabel="Follow us on Facebook">
      <Facebook className="h-5 w-5" />
    </ShineIcon>
    <ShineIcon href="https://instagram.com" ariaLabel="Follow us on Instagram">
      <Instagram className="h-5 w-5" />
    </ShineIcon>
    <ShineIcon href="https://twitter.com" ariaLabel="Follow us on Twitter">
      <Twitter className="h-5 w-5" />
    </ShineIcon>
    <ShineIcon href="https://youtube.com" ariaLabel="Subscribe to our YouTube channel">
      <Youtube className="h-5 w-5" />
    </ShineIcon>
  </div>
);

// Main footer component
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.section}>
            <h3 className={styles.title}>Extendia</h3>
            <p className={styles.text}>
              Your trusted partner for bespoke house extensions, loft conversions, and renovations in South West London.
            </p>
            <List className={styles.text}>
              <ListItem className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" /> 020 1234 5678
              </ListItem>
              <ListItem className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" /> info@extendia.co.uk
              </ListItem>
              <ListItem className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> South West London
              </ListItem>
            </List>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Services</h4>
            <List>
              <ListItem>
                <Link href="/services/house-extensions" className={styles.link}>
                  House Extensions
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/loft-conversions" className={styles.link}>
                  Loft Conversions
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/bathrooms" className={styles.link}>
                  Bathroom Renovations
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/patios-driveways" className={styles.link}>
                  Patios & Driveways
                </Link>
              </ListItem>
            </List>
          </div>

          {/* Areas Served */}
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Areas Served</h4>
            <List>
              <ListItem>
                <Link href="/areas/richmond" className={styles.link}>
                  Richmond
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/areas/twickenham" className={styles.link}>
                  Twickenham
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/areas/kingston-upon-thames" className={styles.link}>
                  Kingston upon Thames
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/areas/putney" className={styles.link}>
                  Putney
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/areas/wimbledon" className={styles.link}>
                  Wimbledon
                </Link>
              </ListItem>
            </List>
          </div>

          {/* Newsletter */}
          <div className={styles.section}>
            <h4 className={styles.subtitle}>Stay Updated</h4>
            <p className={styles.text}>
              Join our newsletter for tips, inspiration, and exclusive offers.
            </p>
            <EmailSubscriptionForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <div className={styles.bottomLinks}>
            <span className={styles.copyright}>&copy; {new Date().getFullYear()} Extendia. All rights reserved.</span>
            <Link href="/privacy-policy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>
              Terms of Service
            </Link>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
