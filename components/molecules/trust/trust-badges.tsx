"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

type IconName = keyof typeof Icons;

interface TrustBadge {
  icon: IconName;
  text: string;
  bgClass: string;
  textClass: string;
  ariaLabel: string;
  shineEffect?: boolean;
}

interface TrustBadgeItemProps extends TrustBadge {}

function TrustBadgeItem({ icon, text, bgClass, textClass, ariaLabel, shineEffect }: TrustBadgeItemProps) {
  const Icon = Icons[icon];
  const prefersReducedMotion = useReducedMotion();
  
  if (shineEffect && !prefersReducedMotion) {
    return (
      <ShimmerButton
        aria-label={ariaLabel}
        className={cn(
          "flex items-center gap-2.5 px-4 py-2 rounded-full font-semibold text-base transition-all duration-300 min-h-[44px]",
          bgClass,
          textClass
        )}
      >
        <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">{text}</span>
      </ShimmerButton>
    );
  }

  return (
    <Badge
      variant="secondary"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center gap-2.5 px-4 py-2 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-md min-h-[44px]",
        bgClass,
        textClass
      )}
    >
      <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">{text}</span>
    </Badge>
  );
}

export function TrustBadges() {
  const badges: TrustBadge[] = [
    {
      icon: "building",
      text: "Family Business Since 2010",
      bgClass: "bg-warning-DEFAULT",
      textClass: "text-white",
      ariaLabel: "Family-owned business since 2010",
      shineEffect: true
    },
    {
      icon: "star",
      text: "4.8★ on Houzz",
      bgClass: "bg-white",
      textClass: "text-brand-600",
      ariaLabel: "Rated 4.8 stars on Houzz"
    },
    {
      icon: "shield",
      text: "£2M Public Liability",
      bgClass: "bg-neutral-800",
      textClass: "text-white",
      ariaLabel: "Insured with £2M public liability"
    },
    {
      icon: "award",
      text: "10+ Years Experience",
      bgClass: "bg-warning-DEFAULT",
      textClass: "text-white",
      ariaLabel: "Over 10 years of industry experience",
      shineEffect: true
    }
  ];

  return (
    <div 
      className="w-full bg-brand-600 py-2 text-white"
      role="complementary"
      aria-label="Trust badges and certifications"
    >      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8 px-4">
          {badges.map((badge, index) => (
            <BlurFade key={badge.text} delay={0.1 * index}>
              <TrustBadgeItem {...badge} />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
