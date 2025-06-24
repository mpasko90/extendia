"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Home, ArrowUp, ChefHat, Droplets } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function ServicesGrid() {
  const services: ServiceCard[] = [
    {
      icon: Home,
      title: "House Extensions",
      description: "Transform your living space with bespoke home extensions tailored to your lifestyle",
      delay: 0.1
    },
    {
      icon: ArrowUp,
      title: "Loft Conversions",
      description: "Unlock the potential of your attic with our expert loft conversion services",
      delay: 0.2
    },
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      description: "Create your dream kitchen with our modern design and renovation expertise",
      delay: 0.3
    },
    {
      icon: Droplets,
      title: "Bathroom Upgrades",
      description: "Elevate your bathroom into a luxurious spa-like retreat",
      delay: 0.4
    }
  ];

  return (
    <section className="bg-[#3A6AB0] py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade key={index} delay={service.delay}>
                <Card className="border-0 bg-[#97B1D6] transition-colors duration-300 hover:bg-[#8BABD0]">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#B9B9B9]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
