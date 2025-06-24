"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  PenTool, 
  Hammer, 
  Key,
  CheckCircle
} from "lucide-react";

/**
 * Your Journey section component
 * 4-step process with HowTo schema markup
 */
export function JourneySection() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Free Consultation",
      description: "We discuss your vision, assess your property, and provide expert advice on the best approach for your project.",
      details: [
        "Site visit and assessment",
        "Discussion of requirements",
        "Initial design concepts",
        "Budget estimation"
      ]
    },
    {
      number: "2", 
      icon: PenTool,
      title: "Design & Planning",
      description: "Our team creates detailed plans and handles all planning permissions, ensuring your project meets regulations.",
      details: [
        "Architectural drawings",
        "Planning permission",
        "Building regulations",
        "Material specifications"
      ]
    },
    {
      number: "3",
      icon: Hammer,
      title: "Expert Construction",
      description: "Skilled craftsmen bring your vision to life with quality materials and attention to detail at every stage.",
      details: [
        "Professional project management",
        "Quality materials only",
        "Regular progress updates",
        "Minimal disruption to your life"
      ]
    },
    {
      number: "4",
      icon: Key,
      title: "Perfect Handover",
      description: "We complete all finishing touches and hand over your transformed space, ready for you to enjoy.",
      details: [
        "Final quality inspection",
        "Professional cleaning",
        "Warranty documentation", 
        "Aftercare support"
      ]
    }
  ];

  // HowTo Schema for SEO
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Our Construction Process Works",
    "description": "Step-by-step guide to Extendia's house extension and renovation process",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <>
      {/* HowTo Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <section 
        className="py-16 bg-neutral-100"
        aria-labelledby="journey-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <BlurFade delay={0.1} inView>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 
                  id="journey-heading"                  className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
                >
                  How Does Our <span className="text-brand-600">Process</span> Work?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From initial consultation to final handover, we guide you through 
                  every step of your construction journey with transparency and expertise.
                </p>
              </motion.div>
            </BlurFade>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <BlurFade key={step.title} delay={0.2 + index * 0.1} inView>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2, type: "spring", stiffness: 400 }
                  }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-brand-600 text-white font-bold text-lg rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                    
                    <CardHeader className="pb-4 pt-6">
                      <div className="flex items-center mb-4">                        <div className="w-16 h-16 rounded-2xl bg-brand-600/10 flex items-center justify-center group-hover:bg-brand-600/20 transition-colors duration-300">
                          <step.icon className="h-8 w-8 text-brand-600" />
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-neutral-800 group-hover:text-brand-600 transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <CardDescription className="text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </CardDescription>
                      
                      {/* Step Details */}
                      <div className="space-y-2">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-success-DEFAULT flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </Card>
                </motion.div>
              </BlurFade>
            ))}
          </div>          {/* Process Timeline Connector - Desktop Only */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent transform -translate-y-1/2" />
              {/* Timeline Dots */}
            <div className="flex justify-between px-[12.5%]">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 bg-brand-600 rounded-full shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
