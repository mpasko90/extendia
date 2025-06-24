"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function ImageFallback({ 
  src, 
  alt, 
  fallbackSrc = "/extendia_house_extension.jpg",
  className,
  ...props 
}: ImageFallbackProps) {
  const [error, setError] = React.useState(false);

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : src}
      alt={alt}
      className={cn("transition-all duration-300", className)}
      onError={() => setError(true)}
    />
  );
}
