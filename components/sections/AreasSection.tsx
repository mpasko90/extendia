"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";

/**
 * Areas We Serve section component
 * Grid layout with area cards and sample project photos
 */
export function AreasSection() {
  const areas = [
    {
      name: "Kingston upon Thames",
      description: "Beautiful Victorian and Edwardian homes with modern extensions",
      href: "/areas/kingston-upon-thames",
      image: "/property-extension-south-west-london.jpg",
      projects: "45+ projects",
      highlight: "Most Popular"
    },
    {
      name: "Richmond",
      description: "Heritage properties requiring specialist conservation skills", 
      href: "/areas/richmond",
      image: "/house-renovation-south-west-london.jpg",
      projects: "32+ projects",
      highlight: null
    },
    {
      name: "Wimbledon",
      description: "Family homes with contemporary design solutions",
      href: "/areas/wimbledon", 
      image: "/extendia_house_extension.jpg",
      projects: "28+ projects",
      highlight: null
    },
    {
      name: "Putney",
      description: "Riverside properties with stunning extension potential",
      href: "/areas/putney",
      image: "/loft-conversion-london.jpg", 
      projects: "35+ projects",
      highlight: null
    },
    {
      name: "Twickenham",
      description: "Period homes enhanced with modern living spaces",
      href: "/areas/twickenham",
      image: "/modern-loft-design.jpg",
      projects: "22+ projects", 
      highlight: null
    }
  ];

  return (
    <section 
      className="py-16 bg-white"
      aria-labelledby="areas-heading"
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
                id="areas-heading"                className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
              >
                Areas We <span className="text-brand-600">Proudly</span> Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specializing in South West London, we understand the unique character 
                and requirements of each area we serve.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area, index) => (
            <BlurFade key={area.name} delay={0.2 + index * 0.1} inView>
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
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                  
                  {/* Area Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={`Property extension project in ${area.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Highlight Badge */}
                    {area.highlight && (
                      <div className="absolute top-3 left-3 bg-warning-DEFAULT text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {area.highlight}
                      </div>
                    )}

                    {/* Projects Count */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-brand-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {area.projects}
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">                        <MapPin className="h-5 w-5 text-brand-600" />
                        <CardTitle className="text-lg font-bold text-neutral-800 group-hover:text-brand-600 transition-colors duration-300">
                          {area.name}
                        </CardTitle>
                      </div>
                      
                      <motion.div
                        className="text-warning-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ rotate: -45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6">
                    <CardDescription className="text-sm text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </CardDescription>
                    
                    <Button 
                      asChild 
                      variant="outline"
                      size="sm"
                      className="w-full border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300"
                    >
                      <Link 
                        href={area.href}
                        aria-label={`View projects and services in ${area.name}`}
                      >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Service Area CTA */}
        <BlurFade delay={0.8} inView>
          <motion.div 
            className="text-center mt-16 p-8 bg-gradient-to-r from-brand-600/5 to-warning-DEFAULT/5 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Don&apos;t see your area listed?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We work throughout South West London and surrounding areas. 
              Contact us to discuss your project - we&apos;d love to help.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3"
            >
              <Link 
                href="/contact"
                aria-label="Contact us to discuss your project in other areas"
              >
                Contact Us Today
              </Link>
            </Button>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
