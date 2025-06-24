/**
 * Atomic Design - Atoms
 * 
 * This directory contains the smallest building blocks of the application.
 * These are fundamental UI elements that can't be broken down any further without losing their meaning.
 * 
 * Subdirectories:
 * - /ui: Basic Shadcn UI components (buttons, inputs, badges, etc.)
 * - /magicui: Animation and effect components from Magic UI
 * - /animations: Atomic animation components
 * - /display: Display and media components
 * - /interactions: Interactive components
 */

// UI Components
export * from "./ui/button";
export * from "./ui/badge";
export * from "./ui/card";
export * from "./ui/input";
export * from "./ui/textarea";
export * from "./ui/separator";
export * from "./ui/label";

// Hydration-Safe Components
export * from "./ui/hydration";

// Animations
export * from "./animations/animated-shiny-text";
export * from "./animations/blur-fade";
export * from "./animations/marquee";
export * from "./animations/number-ticker";

// Magic UI Components
export * from "./magicui/effects/border-beam";
export * from "./magicui/effects/shine-icon";
export * from "./magicui/interactions/ripple-button";

// Display Components
export * from "./display/image-fallback";

// Interactive Components
export * from "./interactions/shimmer-button/shimmer-button";
