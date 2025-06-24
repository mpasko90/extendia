/**
 * Atomic Design - Organisms
 * 
 * This directory contains larger, more complex components composed of molecules and/or atoms.
 * These components represent distinct sections of the interface.
 * 
 * Subdirectories:
 * - /headers: Header components and variations
 * - /footers: Footer components and variations
 * - /sections: Complex page sections
 * - /hero: Hero section variations
 * 
 * Usage guidelines:
 * 1. Components should represent complete, complex UI sections
 * 2. They can contain significant business logic
 * 3. They can be specific to certain features or pages
 * 4. They can handle data fetching and complex state
 * 5. They should still be somewhat reusable across similar contexts
 */

export * from './navigation';
export * from './trust';
export * from './services';
export * from './journey';
