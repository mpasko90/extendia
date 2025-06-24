"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/molecules/dock/dock";
import { BlurFade } from "@/components/atoms/animations/blur-fade";

// Define navigation items
const navigationItems = [
	{ name: "Services", href: "/services", icon: "wrench" },
	{ name: "Portfolio", href: "/portfolio", icon: "building" },
	{ name: "Areas", href: "/areas", icon: "mapPin" },
	{ name: "Resources", href: "/resources", icon: "settings" },
	{ name: "About", href: "/about", icon: "users" },
	{ name: "Contact", href: "/contact", icon: "phone" },
] as const;

interface NavigationProps {
	className?: string;
}

export function Navigation({ className }: NavigationProps) {
	const pathname = usePathname();

	return (
		<nav
			className={cn(
				"hidden lg:flex items-center justify-center flex-1",
				className
			)}
		>
			<BlurFade delay={0.2}>
				<Dock
					magnification={60}
					distance={100}
					className="bg-white/90 backdrop-blur-sm border-gray-200/50 shadow-lg"
				>
					{navigationItems.map((item) => {
						const Icon = Icons[item.icon];
						const isActive = pathname === item.href;

						return (
							<DockIcon
								key={item.name}
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
								</Link>
							</DockIcon>
						);
					})}
				</Dock>
			</BlurFade>
		</nav>
	);
}

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="lg:hidden">
					<motion.div
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
					/>

					<motion.nav
						className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 20 }}
					>
						<div className="flex flex-col h-full">
							{/* Close button */}
							<div className="flex justify-end p-4">
								<Button
									variant="ghost"
									size="icon"
									onClick={onClose}
									aria-label="Close menu"
								>
									<Icons.close className="h-6 w-6" />
								</Button>
							</div>

							{/* Navigation items */}
							<div className="flex-1 px-6 py-8 space-y-4">
								{navigationItems.map((item) => {
									const Icon = Icons[item.icon];
									const isActive = pathname === item.href;

									return (
										<Link
											key={item.name}
											href={item.href}
											className={cn(
												"flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors",
												"hover:bg-blue-50 group",
												isActive && "bg-blue-50"
											)}
											onClick={onClose}
										>
											<Icon
												className={cn(
													"h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors",
													isActive && "text-blue-600"
												)}
											/>
											<span
												className={cn(
													"text-base font-medium text-gray-700 group-hover:text-blue-700",
													isActive && "text-blue-700"
												)}
											>
												{item.name}
											</span>
										</Link>
									);
								})}
							</div>

							{/* CTA Button */}
							<div className="p-6 border-t border-gray-200">
								<Button
									asChild
									className="w-full bg-gradient-to-r from-warning-DEFAULT to-warning-dark hover:from-warning-dark hover:to-warning-dark text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
								>
									<Link
										href="/contact"
										className="flex items-center justify-center space-x-2"
									>
										<Icons.zap className="h-4 w-4" />
										<span>Get Free Quote</span>
									</Link>
								</Button>
							</div>
						</div>
					</motion.nav>
				</div>
			)}
		</AnimatePresence>
	);
}
