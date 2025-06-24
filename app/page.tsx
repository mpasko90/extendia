"use client";

import * as React from "react";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { YourJourneySection } from "@/components/your-journey-section";

export default function HomePage() {
  return (
    <main className="space-y-32">
      <HeroSection />
      <ServicesSection />
      <YourJourneySection />
    </main>
  );
}
