"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ShineEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
}

export function ShineEffect({
  children,
  className,
  color = "#f97316",
  duration = 2,
  delay = 0,
}: ShineEffectProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "-100%" }}
        animate={isVisible ? { x: "100%" } : { x: "-100%" }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
        }}
      />
    </div>
  );
}
