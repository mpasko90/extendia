"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import {
  ArrowLeft,
  type LucideIcon,
} from "lucide-react"

export const Icons = {
  arrowLeft: ArrowLeft,
  // Add more icons as needed
}

export type IconProps = React.ComponentPropsWithoutRef<typeof ArrowLeft>;

interface IconWrapperProps extends IconProps {
  icon: LucideIcon;
}

export function IconWrapper({
  icon: Icon,
  className,
  size = 16,
  ...props
}: IconWrapperProps) {
  return (
    <Icon 
      size={size}
      className={cn("", className)}
      {...props}
    />
  )
}
