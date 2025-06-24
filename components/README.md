# Atomic Design Structure

This components directory follows atomic design principles:

## Directory Structure

```
components/
├── atoms/           # Basic building blocks
│   ├── ui/         # Shadcn UI base components
│   └── magicui/    # Magic UI base components
├── molecules/      # Composite components
├── organisms/      # Complex UI sections
├── templates/      # Page layouts
└── README.md
```

## Component Types

### Atoms
Basic, indivisible UI components:
- Buttons, inputs, text elements
- Magic UI animations and effects
- Base Shadcn components

### Molecules
Simple combinations of atoms:
- Form groups
- Search bars
- Service cards
- Feature cards

### Organisms
Complex UI sections:
- Navigation bars
- Hero sections
- Service sections
- Footer

### Templates
Page-level layouts:
- Default page template
- Blog post layout
- Service page layout
- Portfolio page layout

## Usage Guidelines

1. Keep components as focused and reusable as possible
2. Use TypeScript for all components
3. Follow the component hierarchy:
   - Pages use templates
   - Templates use organisms
   - Organisms use molecules
   - Molecules use atoms

4. Magic UI Integration:
   - Use the centralized config from `/lib/magicui.config.ts`
   - Place Magic UI components in appropriate atomic level
   - Combine with Shadcn UI base components

## Best Practices

1. Maintain single responsibility principle
2. Document components with JSDoc comments
3. Include prop type definitions
4. Write unit tests for components
5. Follow accessibility guidelines

## Recent Updates

### Heroicons Compatibility
- Installed Heroicons v1 to resolve version mismatch.

### Component Fixes
- Updated `marquee.tsx` to support additional `direction` types.
- Improved error handling in `schema-validator.ts`.
