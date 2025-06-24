/**
 * Atomic Design - Molecules
 * 
 * This directory contains combinations of atoms that form more complex UI components.
 * These components are still relatively simple but serve a more specific purpose than atoms.
 * 
 * Subdirectories:
 * - /cards: Card-based components that combine multiple atoms
 * - /navigation: Navigation-related components and menus
 * - /carousel: Carousel and slide components
 * - /accordion: Accordion components
 * - /dock: Dock navigation components
 */

// Heroes
export * from "./video-hero";

// Cards and Lists
export * from "./cards/project-card";

// Navigation
export * from "./navigation/navigation-menu";
export * from "./dock/dock";

// Interactive Components
export * from "./carousel/carousel";
export * from "./accordion/accordion";
