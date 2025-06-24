"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagicUIConfig } from "@/lib/magicui.config";
import { useEffect, useState } from "react";
import Image from "next/image";

interface VideoHeroProps {
  videoSrc: string;
  fallbackImage: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * VideoHero - Molecule component combining video background with content overlay
 */
export function VideoHero({
  videoSrc,
  fallbackImage,
  title,
  description,
  className,
  children
}: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const config = useMagicUIConfig();

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative min-h-[600px] w-full overflow-hidden", className)}>
      {/* Video Background */}
      <div className="absolute inset-0">
        {isVideoLoaded ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={fallbackImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: config.animations.default.duration,
            ease: config.animations.default.ease,
          }}
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            {description}
          </p>
          <div className="mt-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
