"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface JourneyStep {
  number: number;
  title: string;
  description: string;
  delay: number;
}

export function JourneySection() {
  const steps: JourneyStep[] = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free consultation to discuss your vision, requirements, and budget for your home transformation project",
      delay: 0.1
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Our experts create detailed plans and 3D visualizations while handling all necessary permissions",
      delay: 0.2
    },
    {
      number: 3,
      title: "Construction",
      description: "Professional execution of your project with regular updates and minimal disruption to your daily life",
      delay: 0.3
    },
    {
      number: 4,
      title: "Final Handover",
      description: "Thorough quality inspection and handover of your beautifully transformed living space",
      delay: 0.4
    }
  ];

  return (
    <section className="bg-[#3F577B] py-20">
      <div className="container">
        <BlurFade delay={0.1}>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Your Journey to a Better Home
          </h2>
        </BlurFade>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <BlurFade key={step.number} delay={step.delay}>
              <Card className="border-0 bg-transparent">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-[#B9B9B9]">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
