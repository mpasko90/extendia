"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import styles from "./shimmer-button.module.css";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative inline-flex h-9 items-center justify-center rounded-md border border-transparent bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
          "overflow-hidden",
          className
        )}
        asChild={asChild}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className={styles.shimmerEffect} />
      </Button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
