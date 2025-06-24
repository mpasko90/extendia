"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

/**
 * Recent Projects Gallery section component
 * Grid layout with before/after images and project details
 */
export function ProjectsGallerySection() {
  const projects = [
    {
      name: "Victorian Kitchen Extension",
      location: "Kingston upon Thames",
      completedDate: "March 2024",
      type: "Kitchen Extension",
      beforeImage: "/extension-house.jpg",
      afterImage: "/extendia_house_extension.jpg",
      href: "/portfolio/victorian-kitchen-extension",
      tags: ["Kitchen", "Extension", "Victorian"]
    },
    {
      name: "Modern Loft Conversion",
      location: "Richmond",
      completedDate: "February 2024",
      type: "Loft Conversion",
      beforeImage: "/loft-conversion-cost-estimates.jpg",
      afterImage: "/modern-loft-design.jpg",
      href: "/portfolio/modern-loft-conversion",
      tags: ["Loft", "Bedroom", "Modern"]
    },
    {
      name: "Two-Storey House Extension",
      location: "Wimbledon",
      completedDate: "January 2024",
      type: "House Extension", 
      beforeImage: "/house-renovation-south-west-london.jpg",
      afterImage: "/property-extension-south-west-london.jpg",
      href: "/portfolio/two-storey-extension",
      tags: ["Extension", "Two-Storey", "Family"]
    },
    {
      name: "Contemporary Loft Space",
      location: "Putney",
      completedDate: "December 2023",
      type: "Loft Conversion",
      beforeImage: "/loft-conversion-builders-in-south-west-London.jpg",
      afterImage: "/loft-conversion-design-ideas.jpg",
      href: "/portfolio/contemporary-loft",
      tags: ["Loft", "Office", "Contemporary"]
    },
    {
      name: "Heritage Home Extension",
      location: "Twickenham", 
      completedDate: "November 2023",
      type: "House Extension",
      beforeImage: "/affordable-loft-renovation-services.jpg",
      afterImage: "/expert-loft-conversion-contractors.jpg",
      href: "/portfolio/heritage-extension",
      tags: ["Heritage", "Extension", "Conservation"]
    },
    {
      name: "Garden Room Addition",
      location: "Surbiton",
      completedDate: "October 2023",
      type: "Garden Room",
      beforeImage: "/patios-and-driveways-south-west-london.jpg",
      afterImage: "/patio-construction-south-west-london-materials.jpg",
      href: "/portfolio/garden-room",
      tags: ["Garden", "Room", "Patio"]
    }
  ];

  return (
    <section 
      className="py-16 bg-white"
      aria-labelledby="projects-heading"
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
                id="projects-heading"                className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
              >
                Recent <span className="text-brand-600">Project</span> Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our latest completed projects showcasing the quality and craftsmanship 
                that sets Extendia apart.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <BlurFade key={project.name} delay={0.2 + index * 0.1} inView>
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
                  
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.afterImage}
                      alt={`Completed ${project.name} project in ${project.location}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-3 left-3 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.type}
                    </div>

                    {/* View Project Button - Appears on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        asChild 
                        className="bg-white text-brand-600 hover:bg-gray-100 font-semibold shadow-lg"
                      >
                        <Link 
                          href={project.href}
                          aria-label={`View details of ${project.name} project`}
                        >
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-neutral-100 text-brand-600 hover:bg-brand-600 hover:text-white transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-brand-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Location and Date */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-brand-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-brand-600" />
                        Completed {project.completedDate}
                      </div>
                    </div>
                    
                    {/* View Project Link */}
                    <Link 
                      href={project.href}
                      className="inline-flex items-center text-warning-DEFAULT hover:text-warning-dark font-semibold text-sm group-hover:underline transition-all duration-200"
                      aria-label={`View full details of ${project.name}`}
                    >
                      View Full Project
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* View All Projects CTA */}
        <BlurFade delay={0.8} inView>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >            <div className="p-8 bg-gradient-to-r from-brand-600/5 to-warning-DEFAULT/5 rounded-2xl">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Ready to See More?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Explore our complete portfolio of house extensions, loft conversions, 
                and renovation projects across South West London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3"
                >
                  <Link 
                    href="/portfolio"
                    aria-label="View complete portfolio of projects"
                  >
                    View Full Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-warning-DEFAULT text-warning-DEFAULT hover:bg-warning-DEFAULT hover:text-white font-semibold px-8 py-3"
                >
                  <Link 
                    href="/contact"
                    aria-label="Start your project with a free consultation"
                  >
                    Start Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
