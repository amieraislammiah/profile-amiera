import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to https://username.github.io/repo-name, uncomment and set the repo name here:
  // basePath: "/repo-name",
};

export default nextConfig;
