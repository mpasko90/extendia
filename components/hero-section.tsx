"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

/**
 * Hero section component for the home page
 * Features a parallax background, animated text, and CTA buttons
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center">
      {/* Background with fallback and loading animation */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.6]"
          poster="/extendia_house_extension.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <BlurFade delay={0.25} inView>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Transform Your Home in
            <br />
            <span className="text-accent-orange">South West London</span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Expert house extensions, loft conversions, and renovations
            by South West London&apos;s trusted construction specialists.
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get a Free Quote
              </span>
            </ShimmerButton>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20 px-8 py-6 text-lg w-full sm:w-auto"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
