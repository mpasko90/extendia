"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import {
  ArrowLeft,
  Building2,
  Star,
  Shield,
  Award,
  Phone,
  Menu,
  X,
  MapPin,
  Settings,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

export const Icons = {
  arrowLeft: ArrowLeft,
  building: Building2,
  star: Star,
  shield: Shield,
  award: Award,
  phone: Phone,
  menu: Menu,
  close: X,
  mapPin: MapPin,
  settings: Settings,
  users: Users,
  wrench: Wrench,
  zap: Zap,
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
