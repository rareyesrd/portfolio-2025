import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:lang/images/:path*",
        destination: "/images/:path*",
      },
      {
        source: "/:lang/pdf/:path*",
        destination: "/pdf/:path*",
      },
    ];
  },
};

export default nextConfig;
