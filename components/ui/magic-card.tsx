"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientFrom = "#f97316",
  gradientTo = "#fb923c",
}: MagicCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo}, ${gradientFrom})`,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-[1px] rounded-xl bg-white z-[1]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
