/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "185.226.119.44",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
