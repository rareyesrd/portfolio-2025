import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*).pdf",
        headers: [{ key: "Content-Type", value: "application/pdf" }],
      },
    ];
  },
  basePath: "",
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["localhost"],
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
