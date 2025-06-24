"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

type IconName = keyof typeof Icons;

export function TrustBadges() {
  const badges = [
    {
      icon: "building" as IconName,
      text: "Family Business Since 2010",
      bgClass: "bg-warning-DEFAULT",
      textClass: "text-white",
      ariaLabel: "Family-owned business since 2010"
    },
    {
      icon: "star" as IconName,
      text: "4.8★ on Houzz",
      bgClass: "bg-white",
      textClass: "text-brand-600",
      ariaLabel: "Rated 4.8 stars on Houzz"
    },
    {
      icon: "shield" as IconName,
      text: "£2M Public Liability",
      bgClass: "bg-neutral-800",
      textClass: "text-white",
      ariaLabel: "Insured with £2M public liability"
    },
    {
      icon: "award" as IconName,
      text: "10+ Years Experience",
      bgClass: "bg-warning-DEFAULT",
      textClass: "text-white",
      ariaLabel: "Over 10 years of industry experience"
    }
  ] as const;

  return (
    <div 
      className="w-full bg-brand-600 py-2 text-white"
      role="complementary"
      aria-label="Trust badges and certifications"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <BlurFade delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => {
              const Icon = Icons[badge.icon];
              
              return (
                <Badge
                  key={badge.text}
                  variant="secondary"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                    badge.bgClass,
                    badge.textClass
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <AnimatedShinyText>
                    {badge.text}
                  </AnimatedShinyText>
                </Badge>
              );
            })}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
