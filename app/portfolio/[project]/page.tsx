import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon } from "lucide-react";

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

type Params = { project: string };

function getProjectData(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({
  params 
}: {
  params: Params
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.project);
   
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    };
  }
   
  return {
    title: `${project.title} | Extendia Construction Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  };
}

export default function ProjectPage({
  params
}: {
  params: Params
}) {
  const projectData = getProjectData(params.project);

  if (!projectData) {
    notFound();
  }

  const project = projectData;

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
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {project.description}
        </p>
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

        <div className="space-y-8">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {project.gallery?.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1} for ${project.title}`}
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
              {project.details.map((detail, index) => (
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
