"use client";

import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./shimmer-button.module.css";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      button.style.setProperty("--shimmer-color", shimmerColor);
      button.style.setProperty("--cut", shimmerSize);
      button.style.setProperty("--speed", shimmerDuration);
      button.style.setProperty("--radius", borderRadius);
      button.style.setProperty("--bg", background);
    }, [shimmerColor, shimmerSize, shimmerDuration, borderRadius, background]);

    return (
      <button
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
          buttonRef.current = node;
        }}
        className={cn(styles.shimmerButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
