"use client";

import { BorderBeam } from "@/components/ui/magic/border-beam";
import Marquee from "@/components/ui/marquee";
import { Shield, Award, Star, Clock } from "lucide-react";

/**
 * Trust Banner Component
 * Displays scrolling trust signals with marquee effect
 */
export function TrustBanner() {
  const trustSignals = [
    {
      icon: Shield,
      text: "Fully Insured & Licensed"
    },
    {
      icon: Award,
      text: "Award-Winning Construction"
    },
    {
      icon: Star,
      text: "5-Star Customer Reviews"
    },
    {
      icon: Clock,
      text: "On-Time Guarantee"
    }
  ];

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-orange-600/90 to-orange-700/90"></div>
      <BorderBeam size={300} duration={15} delay={0} />
      <div className="relative container mx-auto px-4 py-3">
        <Marquee className="[--duration:25s]" pauseOnHover>
          <div className="flex items-center space-x-12 text-sm font-medium">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <signal.icon className="h-4 w-4" />
                </div>
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
