import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "e7p5otmxhkgxkbgu.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
