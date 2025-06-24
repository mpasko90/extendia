"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => button.removeEventListener("mousemove", handleMouseMove);
  }, []);  const buttonStyle = {
    "--mouse-x": `${position.x}px`,
    "--mouse-y": `${position.y}px`,
  } as React.CSSProperties;

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(styles.shineIcon, className)}
      aria-label={ariaLabel}
      style={buttonStyle}
    >
      {children}
      <div className={styles.shineOverlay}>
        <div className={cn(styles.shineGradient, styles.shineMask)} />
      </div>
    </a>
  );
}
