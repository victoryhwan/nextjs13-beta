/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      // {
      //   source: '/next/api/:path*',
      //   destination: process.env.MAIN_URL+'/api/:path*',
      // },
    ]
  },
}

module.exports = nextConfig
