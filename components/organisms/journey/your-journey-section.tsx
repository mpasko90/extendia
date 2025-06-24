'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/ui";
import { BlurFade } from "@/components/atoms/magicui";

const journeySteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We start with a detailed discussion to understand your vision, requirements, and budget.",
  },
  {
    step: 2,
    title: "Design & Planning",
    description: "Our team creates detailed plans and 3D models for your approval.",
  },
  {
    step: 3,
    title: "Construction",
    description:
      "Our expert builders bring the design to life with precision and quality craftsmanship.",
  },
  {
    step: 4,
    title: "Handover & Support",
    description: "We ensure you are completely satisfied and provide ongoing support.",
  },
];

export function YourJourneySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl">
        <BlurFade delay={0.25}>
          <h2 className="text-3xl font-bold text-center mb-8">
            Your Journey With Us
          </h2>
        </BlurFade>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
          {journeySteps.map((step, index) => (
            <BlurFade
              key={index}
              delay={0.25 + index * 0.25}
            >
              <div className="mb-8 flex justify-between items-center w-full">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12">
                      <Card>
                        <CardHeader className="text-right">
                          <CardTitle>
                            Step {step.step}: {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-right">
                          <p>{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full">
                      {step.step}
                    </div>
                    <div className="w-5/12" />
                  </>
                ) : (
                  <>
                    <div className="w-5/12" />
                    <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full">
                      {step.step}
                    </div>
                    <div className="w-5/12">
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            Step {step.step}: {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
