/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  serverExternalPackages: [],
  // Vercel configuration
  trailingSlash: false,
  poweredByHeader: false,
}

export default nextConfig
