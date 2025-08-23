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
      {
        source: '/portfolio/ai-crafted-futures',
        destination: '/portfolio/crafted-futures',
        permanent: true,
      },
      {
        source: '/portfolio/saturated-melanin',
        destination: '/shop/saturated-melanin-digital',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
