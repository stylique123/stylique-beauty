/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stylique/types', '@stylique/ai', '@stylique/beauty-engine', '@stylique/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
};

export default nextConfig;
