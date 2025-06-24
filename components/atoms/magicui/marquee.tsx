"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import styles from "./marquee.module.css";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'normal' | 'reverse'; // Updated type to include 'normal' and 'reverse'
  pauseOnHover?: boolean;
  speed?: number;
  className?: string;
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  direction = "normal", // Default value remains valid
  speed = 1,
  ...props
}: MarqueeProps) {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--marquee-duration', `${20 / speed}s`);
  }, [speed]);

  return (
    <div
      className={cn(
        styles.marquee,
        {
          [styles.withPause ?? '']: pauseOnHover,
          [styles.reverse ?? '']: direction === "reverse",
          [styles.normal ?? '']: direction === "normal",
        },
        className
      )}
      {...props}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
