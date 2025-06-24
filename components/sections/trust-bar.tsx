"use client";

import { Badge } from "@/components/ui/badge";
import { Award, Building2, Shield, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  text: string;
  className: string;
}

export function TrustBar() {
  const trustItems: TrustItem[] = [
    {
      icon: Building2,
      text: "Family Business Since 2010",
      className: "bg-[#F59E0B] text-white hover:bg-[#F59E0B]/90"
    },
    {
      icon: Star,
      text: "4.8★ on Houzz",
      className: "bg-white text-[#3A6AB0] hover:bg-white/90"
    },
    {
      icon: Shield,
      text: "£2M Public Liability",
      className: "bg-[#97B1D6] text-white hover:bg-[#97B1D6]/90"
    },
    {
      icon: Award,
      text: "250+ Projects",
      className: "bg-[#F59E0B] text-white hover:bg-[#F59E0B]/90"
    }
  ];

  return (
    <div className="bg-[#3F577B] py-6">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (              <Badge
                key={index}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${item.className}`}
              >
                <Icon className="h-4 w-4" />
                {item.text}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
