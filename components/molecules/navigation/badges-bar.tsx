"use client";

import { Shield, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/atoms/magicui";
import { AnimatedShinyText } from "@/components/atoms/magicui";

export function BadgesBar() {
  const badges = [
    {
      icon: Shield,
      text: "Fully Insured & Licensed",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      textColor: "text-white",
      glowColor: "shadow-emerald-500/25",
      ariaLabel: "We are fully insured and licensed for your protection"
    },
    {
      icon: Award,
      text: "Award-Winning Quality",
      bgColor: "bg-amber-600",
      hoverColor: "hover:bg-amber-700", 
      textColor: "text-white",
      glowColor: "shadow-amber-500/25",
      ariaLabel: "Recognized for award-winning construction quality"
    },
    {
      icon: Clock,
      text: "24/7 Emergency Service",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      textColor: "text-white", 
      glowColor: "shadow-red-500/25",
      ariaLabel: "Available 24/7 for emergency construction services"
    },
    {
      icon: Users,
      text: "Local South West London Experts",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      textColor: "text-white",
      glowColor: "shadow-blue-500/25",
      ariaLabel: "Local experts serving South West London"
    }
  ];

  return (
    <div 
      className="w-full bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-gray-200/80 py-3"
      role="banner"
      aria-label="Extendia trust and certification badges"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <BlurFade delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, type: "spring", stiffness: 300 }
                }}
                className="relative group"
              >
                <div 
                  className={`
                    flex items-center space-x-3 px-4 py-2 rounded-full
                    ${badge.bgColor} ${badge.hoverColor} ${badge.textColor}
                    shadow-lg ${badge.glowColor} hover:shadow-xl
                    transition-all duration-300 cursor-pointer
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                    min-h-[44px] min-w-[44px]
                  `}
                  tabIndex={0}
                  role="button"
                  aria-label={badge.ariaLabel}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Could trigger badge interaction if needed
                    }
                  }}
                >
                  <badge.icon 
                    className="h-5 w-5 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <AnimatedShinyText className={`font-medium text-sm lg:text-base ${badge.textColor} whitespace-nowrap`}>
                    {badge.text}
                  </AnimatedShinyText>
                </div>

                {/* Glow effect on hover */}
                <div 
                  className={`
                    absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 -z-10 blur-md
                    ${badge.bgColor.replace('bg-', 'bg-opacity-30 bg-')}
                  `}
                />

                {/* Pulse animation for emphasis */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-full
                    ${badge.bgColor.replace('bg-', 'bg-opacity-20 bg-')}
                  `}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
