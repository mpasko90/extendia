'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, HardHat, Bath } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
	{
		icon: <Home className="h-8 w-8" />,
		title: "House Extensions",
		description: "Expand your living space with our bespoke house extensions.",
	},
	{
		icon: <HardHat className="h-8 w-8" />,
		title: "Loft Conversions",
		description: "Transform your loft into a beautiful and functional space.",
	},
	{
		icon: <Bath className="h-8 w-8" />,
		title: "Bathroom Renovations",
		description: "Modernize your bathroom with our expert renovation services.",
	},
];

export function ServicesSection() {
	return (
		<section className="py-12">
			<div className="container mx-auto max-w-7xl">
				<BlurFade delay={0.25}>
					<h2 className="text-3xl font-bold text-center mb-8">
						Our Services
					</h2>
				</BlurFade>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<BlurFade key={index} delay={0.25 + index * 0.25}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="h-full"
							>
								<Card className="h-full">
									<CardHeader className="items-center">
										{service.icon}
										<CardTitle>{service.title}</CardTitle>
									</CardHeader>
									<CardContent className="text-center">
										<p>{service.description}</p>
										<Button className="mt-4">Learn More</Button>
									</CardContent>
								</Card>
							</motion.div>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	);
}
