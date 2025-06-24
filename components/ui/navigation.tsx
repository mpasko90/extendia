"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dock, DockIcon } from "@/components/molecules/dock/dock";
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { useIsClient } from "@/hooks/use-is-client";

interface NavigationItemType {
	name: string;
	href: string;
	icon: keyof typeof Icons;
}

const navigationItems: NavigationItemType[] = [
	{ name: "Services", href: "/services", icon: "wrench" },
	{ name: "Your Journey", href: "/your-journey", icon: "mapPin" },
	{ name: "Areas", href: "/areas", icon: "building" },
	{ name: "Projects", href: "/portfolio", icon: "star" },
	{ name: "About", href: "/about", icon: "users" },
	{ name: "Contact", href: "/contact", icon: "phone" },
];

function NavigationItem({
	item,
	isActive,
	isMounted,
}: {
	item: NavigationItemType;
	isActive: boolean;
	isMounted: boolean;
}) {
	const Icon = Icons[item.icon];
	const linkContent = (
		<>
			<Icon
				className={cn(
					"h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors mb-1",
					isActive && "text-blue-600"
				)}
			/>
			<span
				className={cn(
					"text-xs font-medium text-gray-700 group-hover:text-blue-700 transition-colors",
					isActive && "text-blue-700"
				)}
			>
				{item.name}
			</span>
		</>
	);

	if (!isMounted) {
		return (
			<div className="bg-white/80 border border-gray-200/50 rounded-lg p-2">
				{linkContent}
			</div>
		);
	}

	return (
		<DockIcon
			className={cn(
				"bg-white/80 hover:bg-blue-50 border border-gray-200/50 transition-all duration-300",
				isActive && "bg-blue-50 border-blue-200"
			)}
		>
			<Link
				href={item.href}
				className="flex flex-col items-center justify-center w-full h-full text-center group p-2"
				aria-current={isActive ? "page" : undefined}
				aria-label={`Navigate to ${item.name}`}
			>
				{linkContent}
			</Link>
		</DockIcon>
	);
}

function MobileNavigationItem({
	item,
	isActive,
	onClick,
}: {
	item: NavigationItemType;
	isActive: boolean;
	onClick?: () => void;
}) {
	const Icon = Icons[item.icon];

	return (
		<Link
			href={item.href}
			onClick={onClick}
			className={cn(
				"flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
				"hover:bg-blue-50 focus-visible:bg-blue-50 outline-none",
				isActive && "bg-blue-50 text-blue-700"
			)}
		>
			<Icon
				className={cn(
					"h-5 w-5",
					isActive ? "text-blue-600" : "text-gray-600"
				)}
			/>
			<span
				className={cn(
					"font-medium",
					isActive ? "text-blue-700" : "text-gray-700"
				)}
			>
				{item.name}
			</span>
		</Link>
	);
}

export function Navigation() {
	const pathname = usePathname();
	const prefersReducedMotion = useReducedMotion();
	const [isOpen, setIsOpen] = React.useState(false);
	const isMounted = useIsClient();

	// Server-side and initial client render
	const navigationContent = (
		<div className={cn("bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-lg rounded-full px-4")}>
			{navigationItems.map((item) => (
				<NavigationItem
					key={item.name}
					item={item}
					isActive={pathname === item.href}
					isMounted={isMounted}
				/>
			))}
		</div>
	);

	return (
		<>
			<nav
				className="hidden lg:flex items-center justify-center flex-1"
				aria-label="Main navigation"
			>
				{isMounted ? (
					<BlurFade delay={0.2}>
						<Dock
							magnification={prefersReducedMotion ? 1 : 1.2}
							distance={80}
							className="bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-lg rounded-full px-4"
						>
							{navigationItems.map((item) => (
								<NavigationItem
									key={item.name}
									item={item}
									isActive={pathname === item.href}
									isMounted={isMounted}
								/>
							))}
						</Dock>
					</BlurFade>
				) : (
					navigationContent
				)}
			</nav>

			{/* Mobile Navigation */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden"
						aria-label="Open menu"
						data-np-intersection-state={undefined}
					>
						<Icons.menu className="h-6 w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[300px] p-0">
					<div className="flex flex-col h-full">
						<div className="p-4 border-b">
							<Button
								asChild
								className="w-full bg-brand-600 hover:bg-brand-700 text-white"
								data-np-intersection-state={undefined}
							>
								<Link
									href="tel:+442012345678"
									className="flex items-center justify-center gap-2"
								>
									<Icons.phone className="h-4 w-4" />
									<span>(020) 1234 5678</span>
								</Link>
							</Button>
						</div>
						<div className="flex-1 py-8 px-4">
							<nav className="space-y-2">
								{navigationItems.map((item) => (
									<MobileNavigationItem
										key={item.name}
										item={item}
										isActive={pathname === item.href}
										onClick={() => setIsOpen(false)}
									/>
								))}
							</nav>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}
