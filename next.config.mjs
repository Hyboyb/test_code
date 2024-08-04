/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.tgdd.vn'],
    remotePatterns: [
      {
        hostname: 'localhost',
      },
    ],
  },
}

export default nextConfig
