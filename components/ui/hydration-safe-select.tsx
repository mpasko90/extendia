"use client";

import { forwardRef, useEffect, useRef } from "react";

/**
 * A hydration-safe select component that prevents hydration mismatches
 * by cleaning up browser extension attributes (data-np-intersection-state).
 * 
 * @example
 * ```tsx
 * <HydrationSafeSelect
 *   value={selectedValue}
 *   onChange={(e) => setSelectedValue(e.target.value)}
 * >
 *   <option value="">Select an option</option>
 *   <option value="option1">Option 1</option>
 * </HydrationSafeSelect>
 * ```
 */
export const HydrationSafeSelect = forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  (props, forwardedRef) => {
    const localRef = useRef<HTMLSelectElement>(null);
    const selectRef = (forwardedRef || localRef) as React.RefObject<HTMLSelectElement>;

    useEffect(() => {
      // Clean up browser extension attributes to prevent hydration mismatches
      if (selectRef.current) {
        selectRef.current.removeAttribute('data-np-intersection-state');
        selectRef.current.removeAttribute('data-np-checked');
        // Remove other common browser extension attributes
        selectRef.current.removeAttribute('data-dashlane-rid');
        selectRef.current.removeAttribute('data-form-type');
      }
    }, [selectRef]);

    return <select ref={selectRef} {...props} />;
  }
);

HydrationSafeSelect.displayName = "HydrationSafeSelect";
