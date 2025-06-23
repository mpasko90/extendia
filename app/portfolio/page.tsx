import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
	{
		slug: "wimbledon-house-extension",
		title: "Modern House Extension in Wimbledon",
		description:
			"A stunning rear extension creating a spacious, light-filled kitchen and dining area.",
		imageUrl: "/images/projects/wimbledon-extension.jpg",
		category: "House Extensions",
		area: "Wimbledon",
	},
	{
		slug: "richmond-loft-conversion",
		title: "Chic Loft Conversion in Richmond",
		description:
			"Transforming an unused attic into a luxurious master suite with an en-suite bathroom.",
		imageUrl: "/images/projects/richmond-loft.jpg",
		category: "Loft Conversions",
		area: "Richmond",
	},
	{
		slug: "kingston-kitchen-renovation",
		title: "Sleek Kitchen Renovation in Kingston",
		description:
			"A complete kitchen overhaul featuring bespoke cabinetry and state-of-the-art appliances.",
		imageUrl: "/images/projects/kingston-kitchen.jpg",
		category: "Kitchens",
		area: "Kingston",
	},
	{
		slug: "putney-bathroom-remodel",
		title: "Contemporary Bathroom Remodel in Putney",
		description: "A small bathroom transformed into a modern, spa-like retreat.",
		imageUrl: "/images/projects/putney-bathroom.jpg",
		category: "Bathrooms",
		area: "Putney",
	},
	{
		slug: "surbiton-full-refurbishment",
		title: "Complete Home Refurbishment in Surbiton",
		description:
			"A top-to-bottom renovation of a Victorian terrace, blending classic features with modern design.",
		imageUrl: "/images/projects/surbiton-refurb.jpg",
		category: "Full Refurbishments",
		area: "Surbiton",
	},
	{
		slug: "twickenham-patio-landscaping",
		title: "Garden Patio & Landscaping in Twickenham",
		description:
			"Creating a beautiful and functional outdoor living space with a new patio and garden design.",
		imageUrl: "/images/projects/twickenham-patio.jpg",
		category: "Patios & Driveways",
		area: "Twickenham",
	},
];

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
	<Card className="overflow-hidden hover:shadow-lg transition-all">
		<Link href={`/portfolio/${project.slug}`}>
			<div className="relative h-48 w-full">
				<Image
					src={project.imageUrl}
					alt={project.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<CardHeader>
				<div className="flex items-center justify-between mb-2">
					<Badge variant="secondary">{project.category}</Badge>
					<span className="text-sm text-muted-foreground">
						{project.area}
					</span>
				</div>
				<CardTitle className="line-clamp-2">{project.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground line-clamp-2">
					{project.description}
				</p>
			</CardContent>
		</Link>
	</Card>
);

export default function PortfolioPage() {
	return (
		<div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
					Our Project Gallery
				</h1>
				<p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
					Explore a selection of our finest work across South West London. See
					the quality and craftsmanship that goes into every Extendia project.
				</p>
			</div>

			<Separator className="my-12" />

			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</div>
	);
}
