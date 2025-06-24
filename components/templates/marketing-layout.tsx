'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import SkipToContent from '@/components/skip-to-content';
import { TrustBanner } from '@/components/trust-banner';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface MarketingLayoutProps {
  children: ReactNode;
  className?: string;
  showTrustBanner?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * Marketing layout template optimized for landing pages
 * Includes trust signals and conversion-focused components
 */
export function MarketingLayout({
  children,
  className,
  showTrustBanner = true,
  showHeader = true,
  showFooter = true,
}: MarketingLayoutProps) {
  return (
    <>
      <SkipToContent />
      
      {showHeader && <Header />}
      
      <main
        id="main-content"
        className={cn(
          'mx-auto w-full px-4 pb-12 pt-4 sm:px-6 lg:px-8',
          'max-w-7xl',
          className
        )}
      >
        {children}
      </main>

      {showTrustBanner && <TrustBanner />}
      {showFooter && <Footer />}
    </>
  );
}
