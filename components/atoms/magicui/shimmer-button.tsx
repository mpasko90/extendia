"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagicUIConfig } from "@/lib/magicui.config";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * ShimmerButton - Atomic interaction component with shimmer effect
 */
export function ShimmerButton({ children, className, onClick }: ShimmerButtonProps) {
  const config = useMagicUIConfig();

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-8 py-3",
        "text-white font-semibold shadow-lg",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      onClick={onClick}
      style={{
        "--shimmer-color": config.styles.defaults.shimmer.color,
        "--shimmer-duration": config.styles.defaults.shimmer.duration,
      } as React.CSSProperties & {
        "--shimmer-color": string;
        "--shimmer-duration": string;
      }}
    >
      {children}
    </motion.button>
  );
}
