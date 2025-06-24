"use client";

import { forwardRef, useEffect, useRef } from "react";
import { Input } from "./input";

/**
 * A wrapper component for Input that prevents hydration mismatches
 * by cleaning up Next.js development attributes (data-np-intersection-state).
 * 
 * @example
 * ```tsx
 * <HydrationSafeInput
 *   type="text"
 *   placeholder="Enter your name"
 *   onChange={(e) => setName(e.target.value)}
 * />
 * ```
 */
export const HydrationSafeInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (props, forwardedRef) => {
    const localRef = useRef<HTMLInputElement>(null);
    const inputRef = (forwardedRef || localRef) as React.RefObject<HTMLInputElement>;

    useEffect(() => {
      // Clean up Next.js development attributes to prevent hydration mismatches
      if (inputRef.current) {
        inputRef.current.removeAttribute('data-np-intersection-state');
      }
    }, [inputRef]); // Include inputRef in dependencies

    return <Input ref={inputRef} {...props} />;
  }
);

HydrationSafeInput.displayName = "HydrationSafeInput";
