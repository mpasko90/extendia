"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "framer-motion";
import { Star, Award, Calendar } from "lucide-react";

/**
 * Hero section component for the Extendia homepage
 * Full-width, height-screen with video/image background, overlay, and CTAs
 */
export function HeroSection() {  const trustBadges = [
    {
      icon: Star,
      text: "4.8★ on Houzz",
      bgColor: "bg-brand-600",
      textColor: "text-white",
      ariaLabel: "4.8 star rating on Houzz"
    },
    {
      icon: Award,
      text: "Family Business Since 2010", 
      bgColor: "bg-brand-600",
      textColor: "text-white",
      ariaLabel: "Family business established in 2010"
    }
  ];

  return (
    <section 
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Extendia hero section - Transforming homes in South West London"
    >
      {/* Background Video/Image with Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/extendia_house_extension.jpg"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        <Image
          src="/extendia_house_extension.jpg"
          alt="Beautiful house extension project by Extendia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Headline */}
          <BlurFade delay={0.2} inView>
            <motion.h1 
              className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transforming Homes in{" "}
              <span className="bg-gradient-to-r from-warning-400 to-warning-600 bg-clip-text text-transparent">
                South West London
              </span>
            </motion.h1>
          </BlurFade>

          {/* Subheading */}
          <BlurFade delay={0.4} inView>
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Expert house extensions, loft conversions, and complete renovations. 
              Award-winning quality, family business values, and exceptional customer service since 2010.
            </motion.p>
          </BlurFade>

          {/* Call-to-Action Buttons */}
          <BlurFade delay={0.6} inView>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >              {/* Primary CTA */}
              <Link 
                href="/contact"
                aria-label="Get your free construction quote today"
              >                <ShimmerButton
                  className="bg-warning-DEFAULT hover:bg-warning-dark text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] min-w-[200px]"
                  shimmerColor="#fbbf24"
                  shimmerSize="0.1em"
                  borderRadius="0.5rem"
                  shimmerDuration="2s"
                  background="#f59e0b"
                >
                  <AnimatedShinyText className="text-white font-semibold">
                    Get Free Quote Today
                  </AnimatedShinyText>
                </ShimmerButton>
              </Link>

              {/* Secondary CTA */}              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-brand-600 text-brand-600 bg-white/90 hover:bg-white hover:text-brand-700 backdrop-blur-sm px-8 py-4 text-lg font-semibold min-h-[56px] min-w-[200px] transition-all duration-300"
              >
                <Link 
                  href="/portfolio"
                  aria-label="View our portfolio of completed projects"
                >
                  View Our Projects
                </Link>
              </Button>
            </motion.div>
          </BlurFade>

          {/* Trust Badges */}
          <BlurFade delay={0.8} inView>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.text}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    className={`${badge.bgColor} ${badge.textColor} px-4 py-2 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    aria-label={badge.ariaLabel}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <badge.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                    <AnimatedShinyText className={badge.textColor}>
                      {badge.text}
                    </AnimatedShinyText>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </motion.div>
    </section>
  );
}
