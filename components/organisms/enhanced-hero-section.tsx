"use client";

import { VideoHero } from "@/components/molecules";
import { ShimmerButton, BlurFade } from "@/components/atoms/magicui";
import { Badge, Button } from "@/components/atoms/ui";
import { Star, Award, Clock } from "lucide-react";
import Link from "next/link";

/**
 * EnhancedHeroSection - Organism component for the main landing page hero
 */
export function EnhancedHeroSection() {
  return (
    <VideoHero
      videoSrc="/hero-video.mp4"
      fallbackImage="/property-extension-south-west-london.jpg"
      title="Transform Your Home with London's Premier Extension Specialists"
      description="Expert house extensions, loft conversions, and complete renovations in South West London. Quality craftsmanship backed by 15+ years of experience."
    >
      <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ShimmerButton>
          <Link href="/contact" className="flex items-center space-x-2">
            <span>Get Free Consultation</span>
          </Link>
        </ShimmerButton>
        
        <Button variant="outline" className="border-2">
          <Link href="/portfolio" className="flex items-center space-x-2">
            <span>View Our Projects</span>
          </Link>
        </Button>
      </div>

      <BlurFade className="mt-8" delay={0.5}>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" className="flex items-center space-x-1">
            <Star className="h-3.5 w-3.5" />
            <span>4.9/5 Client Rating</span>
          </Badge>
          <Badge variant="outline" className="flex items-center space-x-1">
            <Award className="h-3.5 w-3.5" />
            <span>FMB Certified</span>
          </Badge>
          <Badge variant="outline" className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>15+ Years Experience</span>
          </Badge>
        </div>
      </BlurFade>
    </VideoHero>
  );
}
