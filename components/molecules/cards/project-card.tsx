"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ImageFallback } from "@/components/atoms/display/image-fallback";
import { Badge } from "@/components/atoms/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/ui/card";

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  area: string;
  completionDate?: string;
  value?: string;
}

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const schemaData = {
    "@type": "Project",
    "@context": "https://schema.org",
    name: project.title,
    description: project.description,
    image: project.imageUrl,
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: project.area,
        addressRegion: "London",
        addressCountry: "UK"
      }
    },
    category: project.category,
    ...(project.completionDate && { dateCompleted: project.completionDate }),
    ...(project.value && { value: project.value }),
    provider: {
      "@type": "Organization",
      name: "Extendia",
      url: "https://www.extendia.co.uk"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <Link href={`/portfolio/${project.slug}`}>
          <div className="relative aspect-[16/9]">            
            <ImageFallback
              src={project.imageUrl}
              alt={`${project.category} in ${project.area} - ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              fallbackSrc="/property-extension-south-west-london.jpg"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge 
                variant="secondary" 
                className="text-xs font-medium"
                aria-label={`Project category: ${project.category}`}
              >
                {project.category}
              </Badge>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" aria-hidden="true" />
                <span className="text-xs">{project.area}</span>
              </div>
            </div>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
