"use client";

import * as React from "react";
import { DarkHeroSection } from "@/components/sections/dark-hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PricingSection } from "@/components/sections/pricing-section";
import { FAQAccordionSection } from "@/components/sections/faq-accordion-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { JourneySection } from "@/components/sections/journey-section";
import { AreasSection } from "@/components/sections/AreasSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProjectsGallerySection } from "@/components/sections/ProjectsGallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import TestimonialsSection from "@/components/sections/testimonials-section";

/**
 * Extendia Homepage - Professional AI-First Implementation
 * Complete homepage with all sections, SEO optimization, and accessibility
 */
export default function HomePage() {
  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extendia.co.uk",
    "name": "Extendia",
    "description": "Expert house extensions, loft conversions, and property refurbishments in South West London. Quality construction and renovation services.",
    "url": "https://extendia.co.uk",
    "telephone": "+442012345678",
    "email": "info@extendia.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Construction Street",
      "addressLocality": "Kingston upon Thames", 
      "addressRegion": "South West London",
      "postalCode": "KT1 1AA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4095",
      "longitude": "-0.3018"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "££-£££",
    "areaServed": [
      "Kingston upon Thames",
      "Richmond",
      "Wimbledon", 
      "Putney",
      "Twickenham",
      "Surbiton",
      "South West London"
    ],
    "serviceType": [
      "House Extensions",
      "Loft Conversions", 
      "Bathroom Renovations",
      "Kitchen Extensions",
      "Property Refurbishments"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Federation of Master Builders"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.houzz.co.uk/professionals/general-contractors/extendia",
      "https://www.facebook.com/ExtendiaLondon", 
      "https://www.instagram.com/extendia_london"
    ]
  };

  return (
    <>
      {/* LocalBusiness Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen">          {/* Hero Section - Dark Theme */}
        <DarkHeroSection />
        {/* Trust Bar */}
        <TrustBar />
        {/* Main Content Sections */}
        <div className="space-y-0">          {/* Services Grid - Dark Theme */}
          <ServicesGrid />
            {/* Pricing Packages */}
          <PricingSection />
          
          {/* FAQ Section */}
          <FAQAccordionSection />
          
          {/* Your Journey Process */}
          <JourneySection />
          
          {/* Areas We Serve */}
          <AreasSection />
            {/* Why Choose Extendia */}
          <WhyChooseSection />
          
          {/* Client Testimonials */}
          <TestimonialsSection />
          
          {/* Recent Projects Gallery */}
          <ProjectsGallerySection />
          
          {/* FAQ Preview */}
          <FAQSection />
            {/* Contact CTA */}
          <ContactCTASection />
          
          {/* Final Call to Action */}
          <FinalCTASection />
          
        </div>
      </main>
    </>
  );
}
