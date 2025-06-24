# Magic UI Components

This directory contains our custom implementation of Magic UI components, organized following atomic design principles. These components are built in-house and configured through our centralized configuration system.

## Implementation

Magic UI components are custom-built React components that provide advanced animations and interactions. They are:
- Fully typed with TypeScript
- Configured through `/lib/magicui.config.ts`
- Organized following atomic design principles
- Optimized for performance and bundle size

## Component Categories

### Animations (`/animations`)
- TextAnimate: Character-by-character text animation
- BlurFade: Smooth fade-in animation with blur effect
- AnimatedShinyText: Text with shimmering animation effect

### Effects (`/effects`)
- BorderBeam: Animated border beam effect
- ShineIcon: Interactive shine effect for icons

### Interactions (`/interactions`)
- RippleButton: Button with ripple effect on click
- ShimmerButton: Button with shimmering animation

## Configuration

All Magic UI components use the centralized configuration from `/lib/magicui.config.ts`, which provides:

```typescript
interface MagicUIConfig {
  animations: {
    default: { duration: number; ease: number[] };
    hover: { duration: number; ease: number[] };
    spring: { type: "spring"; stiffness: number; damping: number };
  };
  styles: {
    colors: { brand: Record<string | number, string> };
    defaults: {
      shimmer: { color: string; duration: string; size: string };
      ripple: { color: string; duration: number };
      glow: { color: string; spread: string };
      border: {
        beam: { color: string; size: string; duration: number };
        shine: { color: string; size: string };
      };
    };
  };
  responsive: {
    breakpoints: Record<"sm" | "md" | "lg" | "xl", string>;
  };
}
```

## Usage

Import components from their respective categories:

```tsx
// Animation components
import { BlurFade } from "@/components/atoms/animations/blur-fade";
import { AnimatedShinyText } from "@/components/atoms/animations/animated-shiny-text";

// Effect components
import { BorderBeam } from "@/components/atoms/magicui/effects/border-beam";
import { ShineIcon } from "@/components/atoms/magicui/effects/shine-icon";

// Interaction components
import { RippleButton } from "@/components/atoms/magicui/interactions/ripple-button";
import { ShimmerButton } from "@/components/atoms/interactions/shimmer-button/shimmer-button";
```

## Integration with Atomic Design

Magic UI components are organized following atomic design principles:

1. Atoms (Current Directory):
   - Basic animations (TextAnimate, BlurFade)
   - Simple effects (BorderBeam, ShineIcon)
   - Interactive elements (RippleButton, ShimmerButton)

2. Molecules:
   - Combined animations
   - Complex interactive patterns
   - Multi-effect components

3. Organisms:
   - Full featured sections using Magic UI components
   - Hero sections with combined effects
   - Interactive feature showcases

## Performance Considerations

- All components are client-side rendered with "use client"
- Animations are handled through CSS when possible
- Heavy animations are properly throttled
- SSR-safe with proper hydration handling
- Bundle-split for optimal loading

## Customization

Components can be customized through:
1. Props for component-specific options
2. Global configuration in magicui.config.ts
3. CSS/Tailwind classes for styling
4. CSS variables for dynamic values
