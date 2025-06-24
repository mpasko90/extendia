'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import SkipToContent from '@/components/skip-to-content';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  maxWidth?: 'default' | 'wide' | 'full';
}

/**
 * Default layout template with header, footer, and main content area
 * Handles basic page structure and accessibility features
 */
export function DefaultLayout({
  children,
  className,
  showHeader = true,
  showFooter = true,
  maxWidth = 'default',
}: DefaultLayoutProps) {
  const containerClasses = {
    default: 'max-w-7xl',
    wide: 'max-w-8xl',
    full: 'max-w-full',
  };

  return (
    <>
      <SkipToContent />
      
      {showHeader && <Header />}
      
      <main
        id="main-content"
        className={cn(
          'mx-auto w-full px-4 pb-12 pt-4 sm:px-6 lg:px-8',
          containerClasses[maxWidth],
          className
        )}
      >
        {children}
      </main>

      {showFooter && <Footer />}
    </>
  );
}
