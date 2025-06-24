'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import SkipToContent from '@/components/skip-to-content';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  metadata?: {
    title: string;
    date: string;
    author: string;
    readingTime?: string;
  };
}

/**
 * Blog layout template optimized for article content
 * Includes article metadata and typography optimizations
 */
export function BlogLayout({
  children,
  className,
  showHeader = true,
  showFooter = true,
  metadata,
}: BlogLayoutProps) {
  return (
    <>
      <SkipToContent />
      
      {showHeader && <Header />}
      
      <main
        id="main-content"
        className={cn(
          'mx-auto w-full px-4 pb-12 pt-4 sm:px-6 lg:px-8',
          'max-w-3xl',
          'prose prose-lg dark:prose-invert',
          className
        )}
      >
        {metadata && (
          <div className="mb-8 not-prose">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {metadata.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{metadata.author}</span>
              <span>•</span>
              <time dateTime={metadata.date}>
                {new Date(metadata.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              {metadata.readingTime && (
                <>
                  <span>•</span>
                  <span>{metadata.readingTime} read</span>
                </>
              )}
            </div>
          </div>
        )}
        
        {children}
      </main>

      {showFooter && <Footer />}
    </>
  );
}
