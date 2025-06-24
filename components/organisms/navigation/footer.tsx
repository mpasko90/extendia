"use client";

import * as React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, Youtube, Twitter } from 'lucide-react';

import { Label } from "@/components/atoms/ui";
import { List, ListItem } from "@/components/atoms/ui";
import { RippleButton } from "@/components/atoms/magicui";
import { ShineIcon } from "@/components/atoms/magicui";
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
          <input
            id={inputId}
            type="email"
            placeholder="Your email"
            className="flex-1 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
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
            <List>
              <ListItem className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" /> 020 1234 5678
              </ListItem>
              <ListItem className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" /> info@extendia.co.uk
              </ListItem>
              <ListItem className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 shrink-0" /> South West London, UK
              </ListItem>
            </List>
            <SocialLinks />
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.title}>Services</h3>
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
                <Link href="/services/renovations" className={styles.link}>
                  Home Renovations
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/bathroom-renovations" className={styles.link}>
                  Bathroom Renovations
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/kitchen-renovations" className={styles.link}>
                  Kitchen Renovations
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/services/architectural-design" className={styles.link}>
                  Architectural Design
                </Link>
              </ListItem>
            </List>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.title}>Quick Links</h3>
            <List>
              <ListItem>
                <Link href="/about" className={styles.link}>About Us</Link>
              </ListItem>
              <ListItem>
                <Link href="/resources" className={styles.link}>Resources</Link>
              </ListItem>
              <ListItem>
                <Link href="/blog" className={styles.link}>Blog</Link>
              </ListItem>
              <ListItem>
                <Link href="/contact" className={styles.link}>Contact</Link>
              </ListItem>
              <ListItem>
                <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
              </ListItem>
              <ListItem>
                <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
              </ListItem>
            </List>
          </div>

          {/* Newsletter */}
          <div className={styles.section}>
            <h3 className={styles.title}>Stay Updated</h3>
            <p className={styles.text}>
              Subscribe to our newsletter for the latest design trends, tips, and construction insights.
            </p>
            <EmailSubscriptionForm />
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Extendia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
