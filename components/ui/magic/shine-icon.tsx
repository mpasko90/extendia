"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import styles from "./shine-icon.module.css";

interface ShineIconProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel: string;
}

export function ShineIcon({
  children,
  href,
  className = "",
  ariaLabel,
}: ShineIconProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--mouse-x", x.toString());
      button.style.setProperty("--mouse-y", y.toString());
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => button.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles.shineIcon, className)}
      aria-label={ariaLabel}
    >
      {children}
      <div className={styles.shineOverlay}>
        <div className={cn(styles.shineGradient, styles.shineMask)} />
      </div>
    </a>
  );
}
