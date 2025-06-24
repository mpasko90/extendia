"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { shimmer } from "@/lib/utils";

/**
 * Hero section component for the home page
 * Features a parallax background, animated text, and CTA buttons
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen">
      {/* Background with fallback and loading animation */}
      <div className="absolute inset-0">
        <Image
          src="/extension-house.jpg"
          alt="Luxury house extension in South West London"
          fill
          priority
          className="object-cover brightness-[0.7]"
          placeholder="blur"
          blurDataURL={shimmer(1920, 1080)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block mb-2"
              >
                Transform Your Home
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-accent-orange block"
              >
                South West London
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Expert house extensions, loft conversions, and renovations
              by South West London&apos;s trusted construction specialists.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#contact">
                <Button
                  size="xl"
                  className="bg-accent-orange hover:bg-accent-orange/90 px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 text-white border-white hover:bg-white/20 px-8 py-6 text-lg w-full sm:w-auto"
                >
                  View Our Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
          <span className="text-sm mt-2">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
}
