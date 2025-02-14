import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
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
        // Rewrite requests for /images/* to remove language prefix
        source: "/:lang/images/:path*",
        destination: "/images/:path*",
      },
      {
        // Rewrite requests for /pdf/* to remove language prefix
        source: "/:lang/pdf/:path*",
        destination: "/pdf/:path*",
      },
    ];
  },
};

export default nextConfig;
