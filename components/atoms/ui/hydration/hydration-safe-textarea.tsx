"use client";

import { forwardRef, useEffect, useRef } from "react";
import { Textarea } from "../textarea";

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
      // Clean up browser extension attributes to prevent hydration mismatches
      if (textareaRef.current) {
        textareaRef.current.removeAttribute('data-np-intersection-state');
        textareaRef.current.removeAttribute('data-np-checked');
        // Remove other common browser extension attributes
        textareaRef.current.removeAttribute('data-dashlane-rid');
        textareaRef.current.removeAttribute('data-form-type');
        textareaRef.current.removeAttribute('data-lpignore');
        textareaRef.current.removeAttribute('data-1p-ignore');
      }
    }, [textareaRef]);

    return <Textarea ref={textareaRef} {...props} />;
  }
);

HydrationSafeTextarea.displayName = "HydrationSafeTextarea";
