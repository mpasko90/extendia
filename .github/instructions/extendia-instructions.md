# Extendia Project Instructions

## Overview

This document provides the core implementation standards for the Extendia Next.js project.
**Always follow these guidelines and reference the latest docs in `/docs` for all coding, styling, SEO, and content decisions.**

---

## 1. Project Structure

- Use **atomic design principles** for organizing components:
  - `/components/atoms/` – basic UI (Shadcn UI, Magic UI)
  - `/components/molecules/` – composite UI (cards, badges, forms)
  - `/components/organisms/` – feature sections (hero, services, gallery)
  - `/components/templates/` – layout wrappers
  - `/components/sections/` – page-specific blocks
- Place all pages under `/app/` using Next.js 15 App Router conventions.
- Keep assets in `/public/images/`, `/public/videos/`, and reference them via `/docs/extendia-asset-references.md`.

---

## 2. Coding Standards

- Use **TypeScript** in strict mode.
- All components must be typed; define interfaces for props.
- Use **async/await** for dynamic route params (see Next.js 15 docs).
- Avoid deprecated Next.js Image props; use the new `<Image />` API.
- Follow **clean code**: meaningful names, single responsibility, no magic numbers.

---

## 3. Styling & Brand

- Use **Tailwind CSS** with Extendia brand colors (see `/docs/extendia-tailwind-config.md`):
  - Primary: `brand-600` (#2563eb)
  - Accent: `warning-DEFAULT` (#f59e0b)
  - Dark: `neutral-800` (#1f2937)
- Typography:  
  - Headings: Montserrat (`font-display`)
  - Body: Open Sans (`font-body`)
- Use only brand-compliant classes for backgrounds, text, borders, buttons, and icons.
- All components must meet **WCAG 2.1** contrast and accessibility standards.

---

## 4. UI Components

- Use **Shadcn UI** for all foundational UI (Button, Card, Input, Badge, Sheet, NavigationMenu, Accordion, etc.).
- Use **Magic UI** for micro-interactions and animations (Dock, ShimmerButton, BorderBeam, FadeOnScroll, etc.).
- Reference `/docs/extendia-component-examples.md` for implementation patterns.
- Use hydration-safe input wrappers for all forms (`/components/ui/hydration-safe-input.tsx`).

---

## 5. SEO & AI Optimization

- Implement **schema markup** for LocalBusiness, HowTo, FAQ, and Review in all relevant pages.
- Use **AI-first content strategy**:
  - Question-based headings
  - Direct, concise answers
  - Conversational tone for voice search
  - Local context for South West London
- Optimize all images and videos for SEO (descriptive alt text, file naming, Next.js `<Image />`).

---

## 6. Accessibility

- All interactive elements must have keyboard focus, `aria-label`s, and minimum 44px touch targets.
- Use semantic HTML5 structure (section, nav, main, article, etc.).
- Provide alt text for all images and icons.
- Use focus-visible and ring classes for all focusable elements.

---

## 7. Performance

- Use Next.js `<Image />` with `priority` for hero/above-the-fold, `loading="lazy"` elsewhere.
- Optimize and compress all assets in `/public/images/` and `/public/videos/`.
- Integrate **Vercel Speed Insights** for real user monitoring.
- Lazy load animation-heavy components and below-the-fold sections.

---

## 8. Development Workflow

- Use MCP tools: `filesystem`, `sequentialthinking`, `context7`, `memory`, `magicui`.
- Always follow the provided prompts for each section/component.
- Commit changes with clear, descriptive messages and use Git for version control.
- Run `npm run lint` and `npm run type-check` before every build.
- Ensure all builds pass with no errors or warnings.

---

## 9. Deployment

- Only deploy when Lighthouse scores are >90 for performance, accessibility, and SEO.
- Monitor post-deployment metrics and user feedback.
- Regularly audit for brand, accessibility, and performance compliance.

---

## 10. Reference Documentation

- `/docs/extendia-brand-guide.md` – Brand, color, and typography standards
- `/docs/extendia-tailwind-config.md` – Tailwind and color configuration
- `/docs/extendia-component-examples.md` – UI and layout patterns
- `/docs/extendia-asset-references.md` – Image/video/icon usage and naming
- `/docs/hydration-mismatch-resolution.md` – Hydration-safe form patterns
- `/docs/agency-workflow-examples.md` – Workflow and process templates
- `/docs/additional-mcp-setup.md` – MCP server and tool configuration

---

## 11. Audit of Icon Dependencies

This section outlines the recent audit of Heroicons usage and the proposed migration to Shadcn UI and Magic UI for a streamlined icon strategy.

1. **Review of Dependencies**
   - The project currently imports icons from Heroicons alongside Shadcn UI and Magic UI, creating redundancy and inconsistent styling.

2. **Identified Issues with Heroicons**
   - **Redundancy**: Heroicons contains many icons that are duplicated in Shadcn UI’s icon set.
   - **Styling Inconsistency**: Heroicons do not automatically inherit Magic UI animations or Shadcn theming, requiring additional wrappers.
   - **Bundle Impact**: Unused Heroicons exports can remain in the bundle, affecting performance metrics such as LCP and FID.

3. **Recommendations**
   1. **Remove Heroicons Dependency**
      - Uninstall `@heroicons/react` if no unique icons remain.
      - Use Shadcn UI’s `Icons` library or Magic UI utilities for all icon requirements.
   2. **Update Icon Imports**
      - Refactor all Heroicons imports to use Shadcn UI components.
      - Apply Magic UI hover/shimmer effects directly on Shadcn UI icons for interactive consistency.
   3. **Verify Visual Consistency**
      - Conduct a review of icon sizes, colors, and animations across light and dark modes without custom CSS overrides.

4. **Action Plan**

| Step | Task                                                      | Owner | ETA   |
|------|-----------------------------------------------------------|-------|-------|
| 1    | Audit codebase for Heroicons imports                      | Dev   | 0.5d  |
| 2    | Remove `@heroicons/react` and unused icon files           | Dev   | 0.5d  |
| 3    | Refactor imports to Shadcn UI `Icons`                     | Dev   | 1d    |
| 4    | Apply Magic UI animations to replaced icons               | Dev   | 0.5d  |
| 5    | QA test for visual consistency and performance benchmarks | QA    | 1d    |

---

**All contributors must adhere to these instructions.  
For any new feature or section, always check and update the relevant documentation in `/docs`.**

---

This ensures the project remains maintainable, scalable, accessible, and fully aligned with Extendia’s brand and AI-first SEO strategy.
