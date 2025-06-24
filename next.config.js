/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Add any custom module resolutions if needed
    }
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    // Allow production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: false,
  },  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.extendia.co.uk',
        pathname: '/wp-content/uploads/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'extendia.co.uk',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
