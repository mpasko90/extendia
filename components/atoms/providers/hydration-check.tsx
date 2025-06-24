"use client";

import { useEffect } from "react";

/**
 * A global component that removes Next.js development attributes to prevent hydration mismatches.
 * Should be added to the root layout to ensure consistent cleanup across all pages.
 * 
 * @example
 * ```tsx
 * // In app/layout.tsx
 * export default function RootLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <html>
 *       <body>
 *         <HydrationCheck />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function HydrationCheck() {
  useEffect(() => {
    // Clean up Next.js development attributes globally
    const cleanup = () => {
      document.querySelectorAll('[data-np-intersection-state]').forEach(el => {
        el.removeAttribute('data-np-intersection-state');
      });
    };

    // Run cleanup immediately and after any dynamic content updates
    cleanup();
    const observer = new MutationObserver(cleanup);
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-np-intersection-state']
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
