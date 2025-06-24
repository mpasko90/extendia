"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function AnimatedShinyText({ children, className, ...props }: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-current via-current to-current",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent",
        "after:animate-[shine_2s_ease-in-out_infinite] after:-translate-x-full",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
