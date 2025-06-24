import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Define projects array
const projects: Array<{
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  area: string;
  details: Array<{ label: string; value: string }>;
  gallery?: string[];
}> = [
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

export async function generateStaticParams(): Promise<{ project: string }[]> {
  return projects.map((project: { slug: string }) => ({ project: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const { project } = await params;
  const projectData = projects.find((p: { slug: string }) => p.slug === project);

  if (!projectData) {
    return {
      title: 'Project Not Found | Extendia',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${projectData.title} | Extendia Portfolio`,
    description: projectData.description,
    openGraph: {
      title: projectData.title,
      description: projectData.description,
      images: [{ url: projectData.imageUrl }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const projectData = projects.find((p: { slug: string }) => p.slug === project);

  if (!projectData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="mb-8">
        <Link href="/portfolio" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      <header className="text-center mb-12">
        <Badge variant="secondary" className="mb-2">{projectData.category}</Badge>
        <h1 className="text-4xl font-bold mb-4">
          {projectData.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {projectData.description}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-video">
          <Image
            src={projectData.imageUrl}
            alt={`Main image for ${projectData.title}`}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="space-y-8">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {projectData.gallery?.map((image: string, index: number) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1} for ${projectData.title}`}
                  fill
                  className="object-cover rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <dl className="space-y-4">
              {projectData.details.map((detail: { label: string; value: string }, index: number) => (
                <div key={index} className="flex justify-between">
                  <dt className="font-medium text-gray-600 dark:text-gray-400">{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
