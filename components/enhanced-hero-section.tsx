"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/magic/border-beam";
import { Star, Award, Clock, Play, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Enhanced Hero Section for Extendia 2025
 * Features modern design with video background, shimmer effects, and trust badges
 */
export function EnhancedHeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play video when component mounts
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Transformacja domu w południowym Londynie",
            "description": "Proces rozbudowy i renowacji domu przez ekspertów Extendia",
            "totalTime": "PT8W",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "GBP",
              "value": "15000"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Konsultacja i wycena",
                "text": "Bezpłatna konsultacja z architektem i szczegółowa wycena projektu"
              },
              {
                "@type": "HowToStep", 
                "name": "Projektowanie",
                "text": "Opracowanie planów architektonicznych i uzyskanie pozwoleń"
              },
              {
                "@type": "HowToStep",
                "name": "Budowa",
                "text": "Profesjonalne wykonanie rozbudowy przez doświadczony zespół"
              }
            ]
          })
        }}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 z-0">
          {/* Fallback Image */}
          <Image
            src="/property-extension-south-west-london.jpg"
            alt="Transformacja domu w południowym Londynie - rozbudowa Extendia"
            fill
            priority
            className={cn(
              "object-cover transition-opacity duration-1000",
              isVideoLoaded ? "opacity-0" : "opacity-100"
            )}
            sizes="100vw"
          />
          
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "w-full h-full object-cover transition-opacity duration-1000",
              isVideoLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoadedData={() => setIsVideoLoaded(true)}
            poster="/property-extension-south-west-london.jpg"
            aria-label="Timelapse budowy domu - Extendia Construction"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
          </video>

          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 z-20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-4 max-w-7xl mx-auto">
          {/* Main Heading */}
          <BlurFade delay={0.2} inView>
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Transformacja Domów
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                w Południowym Londynie
              </span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.4} inView>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Realizujemy marzenia o idealnym domu przez profesjonalne rozbudowy, adaptacje poddaszy i kompleksowe renowacje. 
              Ponad 15 lat doświadczenia, setki zadowolonych klientów w południowym Londynie.
              Gwarancja jakości i terminowości w każdym projekcie.
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.6} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              {/* Primary CTA - ShimmerButton */}
              <div className="relative group">
                <ShimmerButton 
                  className="shadow-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 min-h-[44px]"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #dd7100 100%)"
                  }}
                  aria-label="Otrzymaj bezpłatną wycenę rozbudowy domu"
                >
                  <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Bezpłatna Wycena
                  </span>
                </ShimmerButton>
              </div>

              {/* Secondary CTA with BorderBeam */}
              <div className="relative group">
                <Link href="/portfolio" aria-label="Zobacz nasze zrealizowane projekty rozbudów">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-2 border-blue-500 hover:bg-blue-500/20 hover:border-blue-400 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-500 hover:scale-105 group min-h-[44px]"
                    style={{ borderColor: "#2563eb" }}
                  >
                    Zobacz Projekty
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <BorderBeam 
                  size={200} 
                  duration={8} 
                  delay={1}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </BlurFade>

          {/* Trust Badges */}
          <BlurFade delay={0.8} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Houzz Rating Badge */}
              <Badge 
                variant="outline" 
                className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                aria-label="Ocena 4.8 na 5 gwiazdek w serwisie Houzz"
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">4.8★</span>
                  <span>w Houzz</span>
                </div>
              </Badge>

              {/* Experience Badge */}
              <Badge 
                variant="outline" 
                className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                aria-label="Ponad 15 lat doświadczenia w budownictwie"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-orange-400" />
                  <span className="font-bold">15+</span>
                  <span>lat doświadczenia</span>
                </div>
              </Badge>

              {/* On-Time Guarantee Badge */}
              <Badge 
                variant="outline" 
                className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                aria-label="Gwarancja terminowej realizacji projektów"
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="font-bold">Gwarancja</span>
                  <span>terminowości</span>
                </div>
              </Badge>
            </div>
          </BlurFade>

          {/* Play Button for Video (if video exists) */}
          {isVideoLoaded && (
            <BlurFade delay={1.0} inView>
              <div className="mt-8">
                <button
                  className="group relative bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Zatrzymaj wideo" : "Odtwórz wideo"}
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                  <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-500" />
                </button>
                <p className="text-sm text-gray-300 mt-2">Zobacz jak tworzymy wymarzone domy</p>
              </div>
            </BlurFade>
          )}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>
    </>
  );
}
