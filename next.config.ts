import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frog.aisii.net',
        port: '',
        pathname: '/**' as const,
        search: '',
      }
    ],
  },
  /* config options here */
};

export default nextConfig;
