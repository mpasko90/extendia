interface ProjectDetail {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  area: string;
  details: ProjectDetail[];
  gallery?: string[];
}

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
      { label: "Duration", value: "12 Weeks" },
      { label: "Features", value: "En-suite bathroom, Juliet balcony, built-in storage" },
    ],
    gallery: [
      "/loft-conversion-design-ideas.jpg",
      "/loft-conversion-london.jpg",
      "/modern-loft-design.jpg",
    ],
  },
];

export function getProjectData(slug: string): Project {
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    throw new Error(`Project with slug ${slug} not found`);
  }
  return project;
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
