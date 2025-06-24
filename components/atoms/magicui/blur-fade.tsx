"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagicUIConfig } from "@/lib/magicui.config";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * BlurFade - Atomic animation component for smooth fade-in with blur effect
 */
export function BlurFade({ children, className, delay = 0 }: BlurFadeProps) {
  const config = useMagicUIConfig();

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: config.animations.default.duration,
        delay,
        ease: config.animations.default.ease,
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
