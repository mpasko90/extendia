import { ProjectDetail } from '@/components/project-detail';
import type { Metadata } from 'next';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface ProjectDetail {
  label: string;
  value: string;
}

interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  area: string;
  details: ProjectDetail[];
  gallery?: string[];
}

// Project data (in a real app, this would come from a CMS or API)
const projects: Project[] = [
    {
        slug: "richmond-house-extension",
        title: "Modern House Extension in Richmond",
        description: "A contemporary house extension showcasing open-plan living with abundant natural light and seamless garden integration.",
        imageUrl: "/property-extension-south-west-london.jpg",
        category: "House Extensions",
        area: "Richmond",
        details: [
            { label: "Service", value: "House Extension" },
            { label: "Location", value: "Richmond, TW9" },
            { label: "Duration", value: "14 Weeks" },
            { label: "Features", value: "Bi-fold doors, skylights, open-plan kitchen and dining" },
        ],
        gallery: [
            "/property-extension-south-west-london.jpg",
            "/extension-house.jpg",
            "/extendia_house_extension.jpg",
        ],
    },
    {
        slug: "wimbledon-loft-conversion",
        title: "Luxury Loft Conversion in Wimbledon",
        description: "A stunning loft conversion creating a master suite with modern amenities and excellent natural light.",
        imageUrl: "/loft-conversion-design-ideas.jpg",
        category: "Loft Conversions",
        area: "Wimbledon",
        details: [
            { label: "Service", value: "Loft Conversion" },
            { label: "Location", value: "Wimbledon, SW19" },
            { label: "Duration", value: "10 Weeks" },
            { label: "Features", value: "En-suite bathroom, Velux windows, bespoke storage" },
        ],
        gallery: [
            "/loft-conversion-design-ideas.jpg",
            "/modern-loft-design.jpg",
            "/loft-conversion-london.jpg",
        ],
    },
    {
        slug: "kingston-house-renovation",
        title: "Complete House Renovation in Kingston",
        description: "A comprehensive renovation transforming a period property into a modern family home while preserving its character.",
        imageUrl: "/house-renovation-south-west-london.jpg",
        category: "Full Renovation",
        area: "Kingston",
        details: [
            { label: "Service", value: "Full House Renovation" },
            { label: "Location", value: "Kingston, KT2" },
            { label: "Duration", value: "16 Weeks" },
            { label: "Features", value: "Period restoration, modern amenities, energy efficiency upgrades" },
        ],
        gallery: [
            "/house-renovation-south-west-london.jpg",
            "/expert-loft-conversion-contractors.jpg",
            "/affordable-loft-renovation-services.jpg",
        ],
    },
];

type ProjectPageParams = {
  project: string;
};

type ProjectPageProps = {
  params: Promise<ProjectPageParams>;
  searchParams?: Record<string, string | string[]>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const currentProject = projects.find((p) => p.slug === resolvedParams.project);

  if (!currentProject) {
    return {
      title: 'Project Not Found | Extendia',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${currentProject.title} | Extendia Portfolio`,
    description: currentProject.description,
    openGraph: {
      title: currentProject.title,
      description: currentProject.description,
      images: [{ url: currentProject.imageUrl }],
    },
  };
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.project);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="mb-8">
        <Link href="/portfolio" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      <header className="text-center mb-12">
        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-video">
          <Image 
            src={project.imageUrl}
            alt={`Main image for ${project.title}`}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>{project.description}</p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {project.details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {project.gallery && (
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={image} className="relative aspect-video">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1} for ${project.title}`}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
