"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

export function DarkHeroSection() {
  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#3A6AB0] to-[#3F577B]"
    >      {/* Video Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-h-full min-w-full object-cover opacity-20"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <BlurFade delay={0.2}>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Transform Your Home with{" "}
            <span className="text-[#F59E0B]">Expert</span> Renovations
          </h1>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="mt-6 max-w-2xl text-xl text-[#B9B9B9] md:text-2xl">
            Premium house extensions, loft conversions, and complete property transformations in South West London
          </p>
        </BlurFade>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <BlurFade delay={0.6}>
            <ShimmerButton
              className="bg-[#F59E0B] px-8 py-4 text-lg hover:bg-[#E5890A]"
              shimmerColor="#FFFFFF"
            >
              Get Started{" "}
              <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </ShimmerButton>
          </BlurFade>

          <BlurFade delay={0.7}>
            <button
              className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white hover:text-[#3A6AB0]"
            >
              View Portfolio
            </button>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
