"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/atoms/magicui/effects/border-beam";

interface PremiumTrustBadgeProps {
  icon: LucideIcon;
  number: number;
  suffix?: string;
  label: string;
  delay?: number;
  gradient?: boolean;
  border?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PremiumTrustBadge({
  icon: Icon,
  number,
  suffix = "",
  label,
  delay = 0,
  gradient = false,
  border = false,
  size = "md",
  className,
}: PremiumTrustBadgeProps) {
  const sizeClasses = {
    sm: "p-3 gap-2",
    md: "p-4 gap-3",
    lg: "p-6 gap-4",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const numberSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const labelSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "relative group flex flex-col items-center rounded-xl transition-all duration-300",
        "hover:shadow-lg hover:shadow-orange-500/10",
        gradient
          ? "bg-gradient-to-br from-orange-50 via-white to-orange-50 border border-orange-100"
          : "bg-white/80 backdrop-blur-sm border border-gray-200/50",
        sizeClasses[size],
        className
      )}
    >
      {/* Border Animation */}
      {border && (
        <BorderBeam 
          size={80} 
          duration={8} 
          delay={delay * 2}
          colorFrom="#f97316"
          colorTo="#fb923c"
        />
      )}

      {/* Icon with background glow */}
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-full",
          "bg-gradient-to-br from-orange-500 to-orange-600 text-white",
          "shadow-lg group-hover:shadow-xl transition-all duration-300",
          size === "sm" ? "p-2" : size === "md" ? "p-2.5" : "p-3"
        )}
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className={iconSizes[size]} />
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
      </motion.div>

      {/* Number with ticker animation */}
      <div className={cn(
        "font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300",
        numberSizes[size]
      )}>
        <NumberTicker value={number} />
        {suffix}
      </div>

      {/* Label */}
      <div className={cn(
        "text-gray-600 font-medium text-center leading-tight group-hover:text-gray-800 transition-colors duration-300",
        labelSizes[size]
      )}>
        {label}
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{
          x: "100%",
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      />
    </motion.div>
  );
}
