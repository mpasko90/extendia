"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { 
  Home, 
  ArrowUpCircle, 
  Waves, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

/**
 * Services Overview section component
 * Grid layout with service cards, icons, and Magic UI hover animations
 */
export function ServicesSection() {
  const services = [
    {      icon: Home,
      title: "House Extensions",
      description: "Transform your home with beautiful single and double-storey extensions. Expert planning, design, and construction from start to finish.",
      features: ["Planning Permission", "Structural Design", "Project Management"],
      href: "/services/house-extensions",
      bgGradient: "from-brand-50 to-brand-100",
      iconBg: "bg-brand-600/10"
    },
    {      icon: ArrowUpCircle,
      title: "Loft Conversions",
      description: "Maximize your space with stunning loft conversions. Bedrooms, offices, or playrooms - we bring your vision to life.",
      features: ["Dormer Extensions", "Roof Windows", "Insulation & Heating"],
      href: "/services/loft-conversions",
      bgGradient: "from-warning-50 to-warning-100",
      iconBg: "bg-warning-DEFAULT/10"
    },
    {      icon: Waves,
      title: "Bathrooms & Kitchens",
      description: "Complete renovations with premium finishes. Modern design, quality fixtures, and expert installation guaranteed.",
      features: ["Design Consultation", "Premium Materials", "Full Installation"],
      href: "/services/bathrooms",
      bgGradient: "from-success-50 to-success-100",
      iconBg: "bg-success-DEFAULT/10"
    }
  ];

  return (
    <section 
      className="py-16 bg-white"
      aria-labelledby="services-heading"
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
            >              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
              >
                Our <span className="text-brand-600">Expert</span> Services
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                From concept to completion, we deliver exceptional construction services 
                that transform your property and enhance your lifestyle.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.2 + index * 0.1} inView>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="h-full"
              >
                <Card className={`
                  h-full bg-gradient-to-br ${service.bgGradient} 
                  border-0 shadow-lg hover:shadow-xl 
                  transition-all duration-300 
                  group cursor-pointer
                  hover:ring-2 hover:ring-brand-600/20
                `}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`
                        w-16 h-16 rounded-2xl ${service.iconBg} 
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <service.icon className="h-8 w-8 text-brand-600" />
                      </div>
                      <motion.div
                        className="text-warning-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: -45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-neutral-800 group-hover:text-brand-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base text-neutral-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Service Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">                          <CheckCircle className="h-4 w-4 text-success-DEFAULT flex-shrink-0" />
                          <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="pt-4">
                      <Button 
                        asChild 
                        className="w-full bg-warning-DEFAULT hover:bg-warning-dark text-white font-semibold group-hover:shadow-lg transition-all duration-300"
                        size="lg"
                      >
                        <Link 
                          href={service.href}
                          aria-label={`Learn more about ${service.title} services`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Call to Action */}
        <BlurFade delay={0.6} inView>
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-neutral-600 mb-6">
              Not sure which service is right for you?
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white font-semibold px-8 py-3"
            >
              <Link 
                href="/contact"
                aria-label="Get free consultation for your project"
              >
                Get Free Consultation
              </Link>
            </Button>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
