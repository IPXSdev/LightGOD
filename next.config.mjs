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
  },
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/work/:slug',
        destination: '/portfolio/:slug',
        permanent: true,
      },
      // The redirect was pointing to /shop/saturated-melanin-digital which doesn't exist
      // and was breaking the portfolio page functionality
    ]
  },
}

export default nextConfig
