'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import SkipToContent from '@/components/skip-to-content';
import { TrustSignals } from '@/components/trust-signals';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PortfolioLayoutProps {
  children: ReactNode;
  className?: string;
  showTrustSignals?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  projectCategory?: string;
}

/**
 * Portfolio layout template for project showcase pages
 * Optimized for visual content and project information
 */
export function PortfolioLayout({
  children,
  className,
  showTrustSignals = true,
  showHeader = true,
  showFooter = true,
  projectCategory,
}: PortfolioLayoutProps) {
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
        {projectCategory && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {projectCategory}
            </h1>
          </div>
        )}
        
        {children}

        {showTrustSignals && <TrustSignals />}
      </main>

      {showFooter && <Footer />}
    </>
  );
}
