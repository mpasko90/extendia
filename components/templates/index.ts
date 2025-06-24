/**
 * Atomic Design - Templates
 * 
 * This directory contains layout templates that compose organisms into full page layouts.
 * These components define the structure of different page types.
 * 
 * Types:
 * - DefaultLayout: Standard page layout with header, footer, and main content
 * - MarketingLayout: Layout optimized for landing and marketing pages
 * - PortfolioLayout: Layout for project portfolio pages
 * - BlogLayout: Layout for blog posts and articles
 * 
 * Usage guidelines:
 * 1. Components should define page-level structure and layout
 * 2. They should be highly reusable across similar page types
 * 3. They handle layout-specific state and context
 * 4. They can include layout-specific animations and transitions
 * 5. They should be responsive and accessible by default
 */

export * from './default-layout';
export * from './marketing-layout';
export * from './portfolio-layout';
export * from './blog-layout';
