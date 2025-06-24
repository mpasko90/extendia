"use client";

import { forwardRef, useEffect, useRef } from "react";
import { Textarea } from "./textarea";

/**
 * A wrapper component for Textarea that prevents hydration mismatches
 * by cleaning up Next.js development attributes (data-np-intersection-state).
 * 
 * @example
 * ```tsx
 * <HydrationSafeTextarea
 *   placeholder="Enter your message"
 *   onChange={(e) => setMessage(e.target.value)}
 * />
 * ```
 */
export const HydrationSafeTextarea = forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  (props, forwardedRef) => {
    const localRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (forwardedRef || localRef) as React.RefObject<HTMLTextAreaElement>;

    useEffect(() => {
      // Clean up Next.js development attributes to prevent hydration mismatches
      if (textareaRef.current) {
        textareaRef.current.removeAttribute('data-np-intersection-state');
      }
    }, [textareaRef]); // Include textareaRef in dependencies

    return <Textarea ref={textareaRef} {...props} />;
  }
);

HydrationSafeTextarea.displayName = "HydrationSafeTextarea";
