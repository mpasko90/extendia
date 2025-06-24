'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon } from 'lucide-react';
import type { Project } from '@/lib/project-utils';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="container mx-auto px-4 py-8">
      <Link
        href="/portfolio"
        className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
          <p className="mb-6 text-lg text-gray-600">{project.description}</p>
          
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>{project.category}</Badge>
            <Badge variant="outline">{project.area}</Badge>
          </div>          <dl className="space-y-4">
            {project.details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-medium text-gray-900">{detail.label}</dt>
                <dd className="text-gray-600">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg object-cover"
            priority
          />
          
          {project.gallery && (
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} - Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
