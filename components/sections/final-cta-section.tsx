"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-b from-[#3F577B] to-[#3A6AB0] py-20">
      <div className="container px-4 md:px-6">
        <BlurFade delay={0.1}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to Transform Your Home?
            </h2>
            <p className="mb-12 text-xl text-[#B9B9B9]">
              Take the first step towards your dream home. Book a free consultation or explore our portfolio to see how we can help bring your vision to life.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerButton
                className="group relative w-full rounded-lg bg-[#F59E0B] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#E5890A] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Book Free Consultation
                </span>
              </ShimmerButton>
              
              <Button
                variant="outline"
                className="w-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#3A6AB0] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto"
              >
                View Our Portfolio
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-[#B9B9B9]">
              Trusted by homeowners across South West London for over a decade
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
