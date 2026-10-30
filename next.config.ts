import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /experience and /skills were merged into /resume — keep old links alive.
  async redirects() {
    return [
      { source: "/experience", destination: "/resume#experience", permanent: true },
      { source: "/skills", destination: "/resume#skills", permanent: true },
    ];
  },
};

export default nextConfig;
