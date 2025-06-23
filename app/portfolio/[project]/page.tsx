import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

// Types are inferred by Next.js

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

function getProjectData(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({
  params
}: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const { project: projectParam } = await params;
  const project = projects.find((p) => p.slug === projectParam);
   
   if (!project) {
     return {
       title: "Project Not Found",
       description: "The requested project could not be found."
     };
   }
   
   return {
     title: project.title,
     description: project.description,
     openGraph: {
       title: project.title,
       description: project.description,
       images: [{ url: project.imageUrl }],
     },
   };
 }

// The page component must be async for Next.js 15 dynamic routes
export default async function ProjectPage({
  params
}: {
  params: Promise<{ project: string }>
}) {
  const { project: projectParam } = await params;
  const project = getProjectData(projectParam);

   if (!project) {
     return null; // Or your 404 component
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
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </header>

      <div className="relative h-96 w-full overflow-hidden rounded-lg mb-12 md:h-[500px]">
          <Image 
            src={project.imageUrl} 
            alt={`Main image for ${project.title}`} 
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            priority
          />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
                {project.gallery?.map((image, index) => (
                    <div key={index} className="relative h-64 w-full overflow-hidden rounded-lg">
                        <Image 
                            src={image} 
                            alt={`Gallery image ${index + 1} for ${project.title}`} 
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <div className="space-y-4">
                {project.details.map((detail, index) => (
                    <div key={index}>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{detail.label}</p>
                        <p className="text-gray-600 dark:text-gray-400">{detail.value}</p>
                        <Separator className="my-4"/>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
