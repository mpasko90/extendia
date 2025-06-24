"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ShineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShineButton = ({
  children,
  className,
  ...props
}: ShineButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-10 overflow-hidden rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-[60%] before:translate-y-[60%] before:rotate-45 before:bg-gradient-to-r before:from-green-600 before:to-green-800 before:opacity-0 before:transition-all",
        "hover:before:-translate-x-[60%] hover:before:-translate-y-[60%] hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
