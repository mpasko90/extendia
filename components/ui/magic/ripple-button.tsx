"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./ripple-button.module.css";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function RippleButton({
  children,
  className = "",
  variant = "default",
  duration = 1000,
  ...props
}: RippleButtonProps) {
  const rippleStyle = {
    "--ripple-duration": `${duration}ms`,
  } as React.CSSProperties;

  return (
    <Button
      variant={variant}
      className={cn(styles.rippleButton, className)}
      style={rippleStyle}
      {...props}
    >
      {children}
    </Button>
  );
}
