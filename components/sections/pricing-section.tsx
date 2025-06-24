"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  delay: number;
}

export function PricingSection() {
  const packages: PricingPackage[] = [
    {
      name: "Essential",
      price: "£15,000+",
      description: "Perfect for single-room extensions and basic loft conversions",
      features: [
        "Initial consultation",
        "Basic architectural plans",
        "Building regulations compliance",
        "Standard fixtures and fittings",
        "10-year structural warranty"
      ],
      delay: 0.1
    },
    {
      name: "Premium",
      price: "£25,000+",
      description: "Ideal for complete loft conversions and larger extensions",
      features: [
        "Everything in Essential",
        "3D visualization",
        "Premium materials",
        "Project manager assigned",
        "Interior design consultation",
        "Smart home integration"
      ],
      isHighlighted: true,
      delay: 0.2
    },
    {
      name: "Luxury",
      price: "£35,000+",
      description: "Full-service solution for luxury home transformations",
      features: [
        "Everything in Premium",
        "Architectural design service",
        "Premium fixtures and fittings",
        "Dedicated project team",
        "Interior design service",
        "Landscaping options"
      ],
      delay: 0.3
    }
  ];

  return (
    <section className="bg-[#3A6AB0] py-20">
      <div className="container px-4 md:px-6">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Investment in Your Home
            </h2>
            <p className="max-w-[600px] text-gray-200">
              Choose the perfect package for your home transformation project
            </p>
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <BlurFade key={pkg.name} delay={pkg.delay}>
              <Card 
                className={`relative overflow-hidden transition-all duration-300 ${
                  pkg.isHighlighted 
                    ? 'bg-[#F59E0B] scale-105 shadow-xl' 
                    : 'bg-[#97B1D6]'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <CardDescription className={`mt-2 text-${pkg.isHighlighted ? 'white/90' : 'white/80'}`}>
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className={`h-5 w-5 ${pkg.isHighlighted ? 'text-white' : 'text-white/90'}`} />
                        <span className={`text-${pkg.isHighlighted ? 'white' : 'white/90'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`mt-8 w-full ${
                      pkg.isHighlighted 
                        ? 'bg-white text-[#F59E0B] hover:bg-white/90' 
                        : 'bg-[#F59E0B] text-white hover:bg-[#F59E0B]/90'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
