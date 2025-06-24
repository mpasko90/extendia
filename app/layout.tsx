import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { Open_Sans as OpenSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { TrustBanner } from '@/components/trust-banner';
import { Footer } from '@/components/footer';
import SkipToContent from '@/components/skip-to-content';
import { HydrationCheck } from '@/components/hydration-check';
import '@/app/styles/globals.css';

const fontDisplay = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
});

const fontBody = OpenSans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://extendia.co.uk'),
  title: {
    default: 'Extendia - House Extensions & Loft Conversions in South West London',
    template: '%s | Extendia',
  },
  description: 'Expert house extensions, loft conversions, and property refurbishments in South West London. Quality construction and renovation services by Extendia.',
  applicationName: 'Extendia Website',
  authors: [{ name: 'Extendia Ltd.' }],
  generator: 'Next.js',
  keywords: [
    'house extensions',
    'loft conversions',
    'property refurbishment',
    'South West London',
    'Kingston upon Thames',
    'Richmond',
    'Wimbledon',
    'Twickenham',
    'Putney',
    'Surbiton',
    'construction',
    'renovation',
    'home improvement',
  ],
  creator: 'Extendia Ltd.',
  publisher: 'Extendia Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://extendia.co.uk',
    title: 'Extendia | House Extensions & Loft Conversions in South West London',
    description: 'Expert house extensions, loft conversions, and property refurbishments in South West London. Quality construction and renovation services by Extendia.',
    siteName: 'Extendia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extendia | House Extensions & Loft Conversions in South West London',
    description: 'Expert house extensions, loft conversions, and property refurbishments in South West London. Quality construction and renovation services by Extendia.',
    creator: '@extendia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },  alternates: {
    canonical: 'https://extendia.co.uk',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Extendia',
    description:
      'Expert house extensions, loft conversions, and bathroom renovations in South West London. Serving Kingston, Twickenham, Wimbledon, Putney, and Surbiton.',
    url: 'https://extendia.co.uk',
    image: 'https://extendia.co.uk/og-image.png', // TODO: Replace with actual image URL
    telephone: '+442081234567', // TODO: Replace with actual phone number
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Example Street', // TODO: Replace with actual address
      addressLocality: 'London',
      postalCode: 'SW1A 0AA', // TODO: Replace with actual postal code
      addressCountry: 'GB',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Kingston upon Thames',
      },
      {
        '@type': 'City',
        name: 'Twickenham',
      },
      {
        '@type': 'City',
        name: 'Wimbledon',
      },
      {
        '@type': 'City',
        name: 'Putney',
      },
      {
        '@type': 'City',
        name: 'Surbiton',
      },
    ],
    priceRange: '£££', // TODO: Confirm price range
    openingHours: 'Mo-Fr 09:00-17:00', // TODO: Confirm opening hours
  };

  return (
    <html
      lang="en"
      className={cn(
        'light',
        fontDisplay.variable,
        fontBody.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontDisplay.variable,
          fontBody.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >          <HydrationCheck />
          <SkipToContent />
          <TrustBanner />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
