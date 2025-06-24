"use client";
import { FC } from "react";

const SkipToContent: FC = () => {
  const handleSkip = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:top-4 focus:left-4 focus:bg-background focus:text-foreground focus:rounded-md focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
